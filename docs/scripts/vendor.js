!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(5)},function(e,t,n){},,,,function(e,t,n){"use strict";function o(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}n.r(t);var r=Array(9),u=document.querySelectorAll(".js-square"),i=document.querySelector(".js-reset"),c=document.querySelector(".js-status"),a=!0,l="x",f={x:"square_cross",y:"square_null",active:"square_active"},s={default:"Tic Tac Toe",win:"You win",lose:"You lose",tie:"Tie"};function d(e){(function(e){u[e].classList.add(f[l]),setTimeout((function(){return u[e].classList.add(f.active)})),r[e]=l})(e),r[0]===l&&r[1]===l&&r[2]===l||r[3]===l&&r[4]===l&&r[5]===l||r[6]===l&&r[7]===l&&r[8]===l||r[0]===l&&r[3]===l&&r[6]===l||r[1]===l&&r[4]===l&&r[7]===l||r[2]===l&&r[5]===l&&r[8]===l||r[0]===l&&r[4]===l&&r[8]===l||r[2]===l&&r[4]===l&&r[6]===l?(v("x"===l?"win":"lose"),a=!1):9===d&&(v("tie"),a=!1),l="x"===l?"y":"x"}function v(e){c.innerText=s[e]}u.forEach((function(e){var t=e.getAttribute("data-number");e.addEventListener("click",(function(){a&&void 0===r[t]&&(d(t),a&&function(){var e=o(0,8),t=0;if(console.log(r),console.log("Random: "+e),void 0!==r[e]){var n=0===o(0,1);console.log("Isleft ",n);do{if(++t>=10)throw new Error("pizdec");n?e--:e++,9===e?e=0:-1===e&&(e=8),console.log(e)}while(void 0!==r[e])}d(e)}())}))})),i.addEventListener("click",(function(){l="x",v("default"),0,r=Array(9),u.forEach((function(e){e.classList.remove(f.x,f.y,f.active)})),a=!0}))}]);