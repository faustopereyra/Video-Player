parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,c)}return n}function t(t){for(var c=1;c<arguments.length;c++){var r=null!=arguments[c]?arguments[c]:{};c%2?e(Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=document.querySelector(".player"),r=document.querySelector("video"),l=document.querySelector(".progress-range"),o=document.querySelector(".progress-bar"),u=document.getElementById("play-btn"),s=document.getElementById("volume-icon"),a=document.querySelector(".volume-range"),i=document.querySelector(".volume-bar"),d=document.querySelector(".time-elapsed"),m=document.querySelector(".time-duration"),f=document.querySelector(".player-speed"),y=document.querySelector(".fullscreen"),p=null,v={},b=new WebSocket("ws://localhost:3000/"),g=function(){var e=!!r.paused,n={method:"togglePlay",state:t(t({},v),{},{play:e})};b.send(JSON.stringify(n))};b.onmessage=function(e){var t=JSON.parse(e.data);"connect"===t.method&&(p=t.clientId,console.log("Client id Set successfully "+p)),"update"===t.method&&(v.play=t.state.play,O())};var O=function(){v.play?(r.play(),u.classList.replace("fa-play","fa-pause"),u.setAttribute("title","Pause")):(r.pause(),u.classList.replace("fa-pause","fa-play"),u.setAttribute("title","play"))},S=function(e){var t=Math.floor(e/60),n=Math.floor(e%60);return n=n>9?n:"0".concat(n),"".concat(t,":").concat(n)},w=function(){o.style.width="".concat(r.currentTime/r.duration*100,"%"),d.textContent="".concat(S(r.currentTime),"/"),m.textContent="".concat(S(r.duration))},h=function(e){var t=e.offsetX/l.offsetWidth;o.style.width="".concat(100*t,"%"),r.currentTime=t*r.duration},q=1,L=function(e){var t=e.offsetX/a.offsetWidth;t<.1&&(t=0),t>.9&&(t=1),i.style.width="".concat(100*t,"%"),r.volume=t,s.className="",t>.7?s.classList.add("fas","fa-volume-up"):t<.7&&t>0?s.classList.add("fas","fa-volume-down"):s.classList.add("fas","fa-volume-off"),q=t},E=function(){s.className="",r.volume?(q=r.volume,r.volume=0,i.style.width=0,s.classList.add("fas","fa-volume-mute"),s.setAttribute("title","Unmute")):(r.volume=q,i.style.width="".concat(100*q,"%"),s.classList.add("fas","fa-volume-up"),s.setAttribute("title","Mute"))},F=function(){r.playbackRate=f.value};function k(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),r.classList.add("video-fullscreen")}function j(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),r.classList.remove("video-fullscreen")}var P=!1,x=function(){P?j():k(c),P=!P};u.addEventListener("click",g),r.addEventListener("click",g),r.addEventListener("timeupdate",w),r.addEventListener("canplay",w),l.addEventListener("click",h),a.addEventListener("click",L),s.addEventListener("click",E),f.addEventListener("change",F),y.addEventListener("click",x);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.479f0e98.js.map