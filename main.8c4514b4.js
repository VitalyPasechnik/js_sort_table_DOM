parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("thead");e.addEventListener("click",function(e){for(var t=document.querySelectorAll("tr"),r=document.querySelector("tbody"),n=e.target.cellIndex,c=[],o=1;o<t.length-1;o++)c.push(t[o]),t[o].remove();c.sort(function(e,t){var r=e.children[n].textContent,c=t.children[n].textContent;return 0===n||1===n?r>=c?1:-1:3===n?+c.toString().replace(/\$|,/g,"")-+r.toString().replace(/\$|,/g,""):+c-+r}),c.forEach(function(e){return r.appendChild(e)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8c4514b4.js.map