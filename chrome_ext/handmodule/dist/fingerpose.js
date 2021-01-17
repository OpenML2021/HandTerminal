!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fp=e():t.fp=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(r),n.d(r,"FistGesture",(function(){return j})),n.d(r,"PointRightGesture",(function(){return k}));var o={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]},getPoints:function(t){return void 0!==i(this.pointsMapping[t])&&this.pointsMapping[t]}},a={NoCurl:0,HalfCurl:1,FullCurl:2,nameMapping:{0:"No Curl",1:"Half Curl",2:"Full Curl"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}},l={VerticalUp:0,VerticalDown:1,HorizontalLeft:2,HorizontalRight:3,DiagonalUpRight:4,DiagonalUpLeft:5,DiagonalDownRight:6,DiagonalDownLeft:7,nameMapping:{0:"Vertical Up",1:"Vertical Down",2:"Horizontal Left",3:"Horizontal Right",4:"Diagonal Up Right",5:"Diagonal Up Left",6:"Diagonal Down Right",7:"Diagonal Down Left"},getName:function(t){return void 0!==i(this.nameMapping[t])&&this.nameMapping[t]}};function u(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=s(s({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6}),e)}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t){var e,n=[],r=[],i=u(o.all);try{for(i.s();!(e=i.n()).done;){var a,l=e.value,c=o.getPoints(l),f=[],s=[],h=u(c);try{for(h.s();!(a=h.n()).done;){var p=a.value,y=t[p[0]],v=t[p[1]],d=this.getSlopes(y,v),g=d[0],m=d[1];f.push(g),s.push(m)}}catch(t){h.e(t)}finally{h.f()}n.push(f),r.push(s)}}catch(t){i.e(t)}finally{i.f()}var b,w=[],O=[],M=u(o.all);try{for(M.s();!(b=M.n()).done;){var S=b.value,D=S==o.Thumb?1:0,T=o.getPoints(S),A=t[T[D][0]],R=t[T[D+1][1]],C=t[T[3][1]],_=this.estimateFingerCurl(A,R,C),j=this.calculateFingerDirection(A,R,C,n[S].slice(D));w[S]=_,O[S]=j}}catch(t){M.e(t)}finally{M.f()}return{curls:w,directions:O}}},{key:"getSlopes",value:function(t,e){var n=this.calculateSlope(t[0],t[1],e[0],e[1]);return 2==t.length?n:[n,this.calculateSlope(t[1],t[2],e[1],e[2])]}},{key:"angleOrientationAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=0,i=0;return t>=75&&t<=105?n=1*e:t>=25&&t<=155?r=1*e:i=1*e,[n,r,i]}},{key:"estimateFingerCurl",value:function(t,e,n){var r=t[0]-e[0],i=t[0]-n[0],o=e[0]-n[0],l=t[1]-e[1],u=t[1]-n[1],c=e[1]-n[1],f=t[2]-e[2],s=t[2]-n[2],h=e[2]-n[2],p=Math.sqrt(r*r+l*l+f*f),y=Math.sqrt(i*i+u*u+s*s),v=Math.sqrt(o*o+c*c+h*h),d=(v*v+p*p-y*y)/(2*v*p);d>1?d=1:d<-1&&(d=-1);var g=Math.acos(d);return(g=57.2958*g%180)>this.options.NO_CURL_START_LIMIT?a.NoCurl:g>this.options.HALF_CURL_START_LIMIT?a.HalfCurl:a.FullCurl}},{key:"estimateHorizontalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t>0?l.HorizontalLeft:l.HorizontalRight:r==Math.abs(e)?e>0?l.HorizontalLeft:l.HorizontalRight:n>0?l.HorizontalLeft:l.HorizontalRight}},{key:"estimateVerticalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t<0?l.VerticalDown:l.VerticalUp:r==Math.abs(e)?e<0?l.VerticalDown:l.VerticalUp:n<0?l.VerticalDown:l.VerticalUp}},{key:"estimateDiagonalDirection",value:function(t,e,n,r,i,o,a,u){var c=this.estimateVerticalDirection(t,e,n,r),f=this.estimateHorizontalDirection(i,o,a,u);return c==l.VerticalUp?f==l.HorizontalLeft?l.DiagonalUpLeft:l.DiagonalUpRight:f==l.HorizontalLeft?l.DiagonalDownLeft:l.DiagonalDownRight}},{key:"calculateFingerDirection",value:function(t,e,n,r){var i=t[0]-e[0],o=t[0]-n[0],a=e[0]-n[0],l=t[1]-e[1],c=t[1]-n[1],f=e[1]-n[1],s=Math.max(Math.abs(i),Math.abs(o),Math.abs(a)),h=Math.max(Math.abs(l),Math.abs(c),Math.abs(f)),p=0,y=0,v=0,d=h/(s+1e-5);d>1.5?p+=this.options.DISTANCE_VOTE_POWER:d>.66?y+=this.options.DISTANCE_VOTE_POWER:v+=this.options.DISTANCE_VOTE_POWER;var g=Math.sqrt(i*i+l*l),m=Math.sqrt(o*o+c*c),b=Math.sqrt(a*a+f*f),w=Math.max(g,m,b),O=t[0],M=t[1],S=n[0],D=n[1];w==g?(S=n[0],D=n[1]):w==b&&(O=e[0],M=e[1]);var T=[O,M],A=[S,D],R=this.getSlopes(T,A),C=this.angleOrientationAt(R,this.options.TOTAL_ANGLE_VOTE_POWER);p+=C[0],y+=C[1],v+=C[2];var _,j=u(r);try{for(j.s();!(_=j.n()).done;){var E=_.value,P=this.angleOrientationAt(E,this.options.SINGLE_ANGLE_VOTE_POWER);p+=P[0],y+=P[1],v+=P[2]}}catch(t){j.e(t)}finally{j.f()}return p==Math.max(p,y,v)?this.estimateVerticalDirection(c,l,f,h):v==Math.max(y,v)?this.estimateHorizontalDirection(o,i,a,s):this.estimateDiagonalDirection(c,l,f,h,o,i,a,s)}},{key:"calculateSlope",value:function(t,e,n,r){var i=(e-r)/(t-n),o=180*Math.atan(i)/Math.PI;return o<=0?o=-o:o>0&&(o=180-o),o}}])&&p(e.prototype,n),r&&p(e,r),t}();function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(this,t),this.estimator=new y(n),this.gestures=e}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t,e){var n,r=[],i=this.estimator.estimate(t),u=[],c=v(o.all);try{for(c.s();!(n=c.n()).done;){var f=n.value;u.push([o.getName(f),a.getName(i.curls[f]),l.getName(i.directions[f])])}}catch(t){c.e(t)}finally{c.f()}var s,h=v(this.gestures);try{for(h.s();!(s=h.n()).done;){var p=s.value,y=p.matchAgainst(i.curls,i.directions);y>=e&&r.push({name:p.name,confidence:y})}}catch(t){h.e(t)}finally{h.f()}return{poseData:u,gestures:r}}}])&&m(e.prototype,n),r&&m(e,r),t}();function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||M(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=M(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function M(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.curls={},this.directions={},this.weights=[1,1,1,1,1],this.weightsRelative=[1,1,1,1,1]}var e,n,r;return e=t,(n=[{key:"addCurl",value:function(t,e,n){void 0===this.curls[t]&&(this.curls[t]=[]),this.curls[t].push([e,n])}},{key:"addDirection",value:function(t,e,n){void 0===this.directions[t]&&(this.directions[t]=[]),this.directions[t].push([e,n])}},{key:"setWeight",value:function(t,e){this.weights[t]=e;var n=this.weights.reduce((function(t,e){return t+e}),0);this.weightsRelative=this.weights.map((function(t){return 5*t/n}))}},{key:"matchAgainst",value:function(t,e){var n=0;for(var r in t){var i=t[r],o=this.curls[r];if(void 0!==o){var a,l=O(o);try{for(l.s();!(a=l.n()).done;){var u=w(a.value,2),c=u[0],f=u[1];if(i==c){n+=f*this.weightsRelative[r];break}}}catch(t){l.e(t)}finally{l.f()}}else n+=this.weightsRelative[r]}for(var s in e){var h=e[s],p=this.directions[s];if(void 0!==p){var y,v=O(p);try{for(v.s();!(y=v.n()).done;){var d=w(y.value,2),g=d[0],m=d[1];if(h==g){n+=m*this.weightsRelative[s];break}}}catch(t){v.e(t)}finally{v.f()}}else n+=this.weightsRelative[s]}return n}}])&&D(e.prototype,n),r&&D(e,r),t}(),A=new T("fist");A.addCurl(o.Thumb,a.FullCurl,1);for(var R=0,C=[o.Index,o.Middle,o.Ring,o.Pinky];R<C.length;R++){var _=C[R];A.addCurl(_,a.FullCurl,1)}var j=A,E=new T("point_right");E.addCurl(o.Index,a.NoCurl,1),E.addCurl(o.Index,l.HorizontalRight,1),E.addCurl(o.Middle,a.NoCurl,1),E.addCurl(o.Middle,l.HorizontalRight,1);for(var P=0,I=[o.Thumb,o.Ring,o.Pinky];P<I.length;P++){var L=I[P];E.addCurl(L,a.FullCurl,1)}var k=E;e.default={GestureEstimator:b,GestureDescription:T,Finger:o,FingerCurl:a,FingerDirection:l,Gestures:r}}]).default}));