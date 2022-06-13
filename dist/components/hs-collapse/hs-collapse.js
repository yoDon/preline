/*! For license information please see hs-collapse.js.LICENSE.txt */
(()=>{"use strict";var t={765:(t,e,n)=>{function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,{Z:()=>r});var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$collection=[],this.selector=e,this.config=n,this.events={}}var e,n;return e=t,n=[{key:"_fireEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.events.hasOwnProperty(t)&&this.events[t](e)}},{key:"_dispatch",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=new CustomEvent(t,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});e.dispatchEvent(o)}},{key:"on",value:function(t,e){this.events[t]=e}},{key:"afterTransition",value:function(t,e){"all 0s ease 0s"!==window.getComputedStyle(t,null).getPropertyValue("transition")?t.addEventListener("transitionend",(function n(){e(),t.removeEventListener("transitionend",n,!0)}),!0):e()}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(f,t);var n,a,s,l,u=(s=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(s);if(l){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function f(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),u.call(this,"[data-hs-collapse]")}return n=f,(a=[{key:"init",value:function(){var t=this;document.addEventListener("click",(function(e){var n=e.target.closest(t.selector);if(n){var o=document.querySelectorAll(n.getAttribute("data-hs-collapse"));t.toggle(o)}}))}},{key:"toggle",value:function(t){var n,o=this;t.length&&(n=t,function(t){if(Array.isArray(t))return e(t)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){t.classList.contains("hidden")?o.show(t):o.hide(t)}))}},{key:"show",value:function(t){var e=this;t.classList.add("open"),t.classList.remove("hidden"),t.style.height=0,document.querySelectorAll(this.selector).forEach((function(e){t.closest(e.getAttribute("data-hs-collapse"))&&e.classList.add("open")})),t.style.height="".concat(t.scrollHeight,"px"),this.afterTransition(t,(function(){t.classList.contains("open")&&(t.style.height="",e._fireEvent("open",t),e._dispatch("open.hs.collapse",t,t))}))}},{key:"hide",value:function(t){var e=this;t.style.height="".concat(t.scrollHeight,"px"),setTimeout((function(){t.style.height=0})),t.classList.remove("open"),this.afterTransition(t,(function(){t.classList.contains("open")||(t.classList.add("hidden"),t.style.height=null,e._fireEvent("hide",t),e._dispatch("hide.hs.collapse",t,t),t.querySelectorAll(".hs-mega-menu-content.block").forEach((function(t){t.classList.remove("block"),t.classList.add("hidden")})))})),document.querySelectorAll(this.selector).forEach((function(e){t.closest(e.getAttribute("data-hs-collapse"))&&e.classList.remove("open")}))}}])&&o(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),f}(n(765).Z);window.HSCollapse=new a,document.addEventListener("load",window.HSCollapse.init())})()})();