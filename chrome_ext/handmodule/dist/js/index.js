/* Acknowledgement: git+https://github.com/andypotato/fingerpose.git */
chrome.runtime.onInstalled.addListener(function(details) {
  // console.log(details.reason); -- debug
  if(details.reason === "install"){

    chrome.tabs.create({ url: "handmodule/dist/index.html" });
    
  }
  
});

const config = {
  video: { width: 640, height: 480, fps: 30 },
};




// For better performance
console.log("Enable CPU forwarding");
tf.ENV.set("WEBGL_CPU_FORWARD", true);

const landmarkColors = {
  thumb: "red",
  indexFinger: "blue",
  middleFinger: "yellow",
  ringFinger: "green",
  pinky: "pink",
  palmBase: "white",
};

const gestureStrings = {
  fist: "fist",
  point_right: "Next",
};

function start() {
  initCamera(config.video.width, config.video.height, config.video.fps).then(
    (video) => {
      video.play();
      video.addEventListener("loadeddata", (event) => {
        console.log("Rolling Camera");
        main();
      });
    }
  );

  const canvas = document.querySelector("#hand-canvas");
  canvas.width = config.video.width;
  canvas.height = config.video.height;
  console.log("Canvas has been initialized");
}

async function main() {
  var fists = 0;

  const video = document.querySelector("#hand-video");
  const canvas = document.querySelector("#hand-canvas");
  const ctx = canvas.getContext("2d");

  const resultLayer = document.querySelector("#hand-result");

  // configure gesture estimator
  const knownGestures = [
    fp.Gestures.FistGesture,
    fp.Gestures.PointRightGesture,
  ];
  const GE = new fp.GestureEstimator(knownGestures);

  // load handpose model
  const model = await handpose.load();
  console.log("Handpose model loaded");

  // main estimation loop
  const estimateHands = async () => {
    // clear canvas overlay
    ctx.clearRect(0, 0, config.video.width, config.video.height);
    resultLayer.innerText = "";

    // get hand landmarks from video
    // Note: Handpose currently only detects one hand at a time

    const predictions = await model.estimateHands(video, true);
    let index_begin = 0;
    let index_end = 0;
    let count = 0;

    for (let i = 0; i < predictions.length; i++) {
      // Draw colored dots at each predicted joint position
      for (let part in predictions[i].annotations) {
        for (let point of predictions[i].annotations[part]) {
          // console.log(predictions[0]);
          if (predictions[i].handInViewConfidence > 0.995) {
            drawPoint(ctx, point[0], point[1], 3, landmarkColors[part]);
            if (part === "indexFinger") {
              if (count === 0) {
                index_begin = point[0];
              }
              count++;
              if (count === 3) {
                index_end = point[0];
                count = 0;
              }
            }
          }
        }
      }

      // now estimate gestures based on landmarks
      // using a minimum confidence of 7.5 (out of 10)
      if (predictions[i].handInViewConfidence > 0.995) {
        const est = GE.estimate(predictions[i].landmarks, 7.5);
        var youtube = document.querySelector(".video-stream");

        if (est.gestures.length > 0) {
          // find gesture with highest confidence
          let result = est.gestures.reduce((p, c) => {
            return p.confidence > c.confidence ? p : c;
          });

          if (gestureStrings[result.name] === "Next") {
            // Pointing state

            if (index_end - index_begin < -17) {
              // Point to next
              resultLayer.innerText = gestureStrings[result.name];
              chrome.tabs.executeScript({
                code: 'document.querySelector("video").currentTime+=5;',
              });
              await new Promise((r) => setTimeout(r, 1000));
              index_begin = 0;
              index_end = 0;
            } else if (index_end - index_begin > 17) {
              // Point to previous
              resultLayer.innerText = "Prev";
              chrome.tabs.executeScript({
                code: 'document.querySelector("video").currentTime-=5;',
              });
              await new Promise((r) => setTimeout(r, 1000));
              index_begin = 0;
              index_end = 0;
            }
          } else {
            if (!(chrome.extension.getBackgroundPage() === window)) {
              // you are in a popup
              resultLayer.innerText = "Play";
            } else {
              resultLayer.innerText = "PLAY";

              fists++;
              const milliseconds = Date.now() - start;
              if (milliseconds / 1000 > 2) {
                fists = 0;
              }
              if (fists == 1) {
                var start = Date.now();
              }
              if (fists >= 5) {
                chrome.tabs.executeScript({
                  code:
                    'var youtube = document.querySelector("video");\nif (youtube.paused){youtube.play();}\nelse {youtube.pause();}',
                });
                fists = 0;

                await new Promise((r) => setTimeout(r, 250));
              }
            }
          }
        }
      }
    }

    // ...and so on
    setTimeout(() => {
      estimateHands();
    }, 1000 / config.video.fps);
  };

  estimateHands();
  console.log("Initiate predictions");
}

async function initCamera(width, height, fps) {
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height,
      frameRate: { max: fps },
    },
  };

  const video = document.querySelector("#hand-video");
  video.width = width;
  video.height = height;

  // get video stream
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

window.addEventListener("DOMContentLoaded", () => {

  
  chrome.storage.local.get(['isStreaming'], function(data) {
    try {
      console.log(data.isStreaming);
      if(data.isStreaming){
        console.log("keep stream");
        $("#start").hide();
        start();
      }
      
    } catch (error) {
      console.log("No data");
    }

    
 
   });

  $("#start").on("click", () => {
        

    chrome.storage.local.set({ isStreaming: true });
    chrome.extension.getBackgroundPage().start();
    start();
    $("#start").hide();


  });

  $("#stop").on("click", () => {
    chrome.storage.local.set({ isStreaming: false });
    chrome.runtime.reload();

  });
});
