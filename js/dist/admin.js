module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},,,,,,,function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(8),a=n.n(o),i=n(9),u=n.n(i),c=n(1),s=n(10),l=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.className=function(){return"Modal--small"},n.title=function(){return app.translator.trans("pushedx-chat.admin.settings.title")},n.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("pushedx-chat.admin.settings.charlimit")),m("input",{className:"FormControl",type:"number",max:"1024",bidi:this.setting("pushedx-chat.charlimit")}))]},e}(n.n(s).a);a.a.initializers.add("pushedx-chat",(function(t){t.extensionSettings["xelson-chat"]=function(){return t.modal.show(new l)},Object(r.extend)(u.a.prototype,"startItems",(function(t){t.add("realtimeChat",{icon:"weixin",label:"Realtime Chat",permission:"pushedx-chat.canchat"})}))}))}]);
//# sourceMappingURL=admin.js.map