!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector('input[name ="delay"]'),c=document.querySelector('input[name ="step"]'),u=document.querySelector('input[name ="amount"]');function a(e,n){var o={position:"".concat(e),delay:"".concat(n)},t=Math.random()>.3;new Promise((function(e,i){setTimeout((function(){t?e(o):i(o)}),n)})).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}document.querySelector('button[type ="submit"]').addEventListener("click",(function(e){e.preventDefault();for(var n=Number(r.value),o=Number(u.value),t=Number(c.value),i=1;i<=o;i++){console.log("i",i),console.log("amount",o);var l=n+t*(i-1);console.log("delay ",l),a(i,l)}}))}();
//# sourceMappingURL=03-promises.f980a94a.js.map
