parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o=document.querySelector(".header-body__nav_burger"),a=document.querySelector(".header-body__nav_menu"),c=document.querySelector("body"),i=document.querySelectorAll('a[href*="#"]'),l=document.querySelector(".why-flex .buttons"),u=document.querySelectorAll(".why-flex__section"),s=e(i);try{var f=function(){var e=r.value;e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("href").substring(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})})};for(s.s();!(r=s.n()).done;)f()}catch(d){s.e(d)}finally{s.f()}o.addEventListener("click",function(){o.classList.toggle("_active"),a.classList.toggle("_active"),c.classList.toggle("lock")}),l.addEventListener("mousedown",function(){var t,n=e(u);try{for(n.s();!(t=n.n()).done;){t.value.classList.add("_active")}}catch(d){n.e(d)}finally{n.f()}l.innerHTML="Close"}),l.addEventListener("mouseup",function(){var t,n=e(u);try{for(n.s();!(t=n.n()).done;){t.value.classList.remove("_active")}}catch(d){n.e(d)}finally{n.f()}l.innerHTML="View more"});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=js.465e25ec.js.map