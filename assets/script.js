(()=>{var e={492:()=>{const e=document.querySelector(".modal-container"),n=document.getElementById("allCartProducts"),r=(document.querySelector(".modal_unit"),document.querySelectorAll(".continuaComprando")),t=document.getElementById("basketProductsEmpty"),o=document.getElementById("storageProduct");document.querySelectorAll(".button_delete"),document.querySelectorAll(".input-up-btn"),document.querySelectorAll(".input-up-btn");!function(){function a(e,n){console.log(e[0]);let r=e[0].children[0].children[2].children[0].children[0];r.children[3].children[0].innerHTML="$"+n.final_line_price,r.children[2].children[1].value=n.quantity,r.children[2].children[1].id="input"+n.variant_id,r.children[0].children[0].src=n.image,r.children[1].children[1].children[1].innerHTML=n.variant_title,r.children[1].children[0].innerHTML=n.product_title,r.children[4].children[0].value=n.variant_id,r.children[2].children[0].addEventListener("click",(e=>{let n=r.children[2].children[0].parentNode.querySelector("input[type=number]"),t=n.value;i(n.id.replace("input",""),t)})),r.children[2].children[2].addEventListener("click",(e=>{let n=r.children[2].children[2].parentNode.querySelector("input[type=number]"),t=n.value;i(n.id.replace("input",""),t)})),r.children[4].children[0].addEventListener("click",(e=>{i(e.target.value,0)}))}async function i(r,i){let c={updates:{[`${r}`]:i}};await fetch("/cart/update.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((e=>e.json())).then((r=>{for(;o.hasChildNodes();)o.removeChild(o.firstChild);let i=r.item_count;if(console.log(i),i&&i>0){let t=r.items;for(let e=0;e<t.length;e++){var c=n.cloneNode(!0);c.classList.remove("none"),c.id="misproductos-"+e;var l=c.childNodes;for(let n=l.length-1;n>=0;n--){let r=l[n].children;if(r)document.querySelector(".button-delete").value=t[e].variant_id,a(r,t[e])}o.appendChild(c),console.log(t[e])}e.classList.remove("none")}else(n||t)&&(n.classList.add("none"),t.classList.remove("none"))})).catch((e=>{console.log("Error:",e)}))}document.querySelectorAll(".addto-card").forEach(((r,t)=>{r.addEventListener("click",(i=>{i.preventDefault(),console.log("verlos",r,i,t),async function(r){let t={items:[{id:r,quantity:1}]};await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((r=>{console.log(r.items[0].quantity);let t={updates:{[`${r.items[0].id}`]:r.items[0].quantity}};fetch("/cart/update.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((r=>{for(;o.hasChildNodes();)o.removeChild(o.firstChild);let t=r.items;for(let e=0;e<t.length;e++){var i=n.cloneNode(!0);i.classList.remove("none"),i.id="misproductos-"+e;var c=i.childNodes;for(let n=c.length-1;n>=0;n--){let r=c[n].children;r&&a(r,t[e])}o.appendChild(i),console.log(t[e])}e.classList.remove("none")})).catch((e=>{console.log("Error:",e)}))})).catch((e=>{console.log("Error:",e)}))}(r.value)}))})),r.forEach((n=>{n.addEventListener("click",(()=>{e.classList.add("none"),t.classList.add("none")}))}))}()},28:(e,n,r)=>{"use strict";r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"/* h1 {\r\n  color: white;\r\n  background-color: black;\r\n} */\r\n.button_delete{\r\n  background:transparent;\r\n  color: red;\r\n    border: none;\r\n}\r\n.textoEmpty{\r\n  text-align: center;\r\n  padding: 5%;\r\n  font-weight: bold;\r\n}\r\n.background-list_productspipe{\r\n   \r\n  display:flex;\r\n  flex-direction:column;\r\nmargin:2% 1% ;\r\n  text-align:center\r\n}\r\n.all-products{\r\n  display:flex;\r\n  justify-content: center;\r\n\r\n  flex-wrap: wrap;\r\n  \r\n}\r\n.button-color{\r\n  background:black;\r\n  color:white\r\n}\r\n.total-variants{\r\n  display:flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-bottom:30px\r\n}\r\n.total-variant-violeta{\r\nbackground:#8F00FF;\r\ncolor:#8F00FF\r\n}\r\n.total-variant-menta{\r\nbackground:#497e76 ;\r\ncolor:#497e76\r\n}\r\n.total-variant-azul{\r\nbackground:blue ;\r\ncolor:blue \r\n}\r\n.total-variant-cafe{\r\nbackground:#6F4E37;\r\ncolor:#6F4E37\r\n}\r\n.total-variant-white{\r\nbackground:#ffff;\r\ncolor:#ffff\r\n}\r\n.total-variant-gris{\r\nbackground:gray ;\r\ncolor:gray \r\n}\r\n.total-variant-rojo{\r\nbackground:red ;\r\ncolor:red \r\n}\r\n.total-variant-negro{\r\nbackground:black ;\r\ncolor:black \r\n}\r\n.total-variant-lila{\r\nbackground:#C8A2C8;\r\ncolor:#C8A2C8\r\n}\r\n.total-variant-verde{\r\nbackground:green;\r\ncolor:green;\r\n\r\n}\r\n.total-variant{\r\n border-radius:30px;\r\n\r\n\r\n}\r\n.aparecerimagen{\r\n  display:block\r\n}\r\n.desaparecerimagen{\r\n  display:none\r\n}\r\n.content-inputCompanies{\r\n  display:flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  margin:auto 5%\r\n}\r\n\r\n.content-inputCompanies input[type=radio] + i{\r\n  height: 30px;\r\n  width: 30px;\r\n  position: absolute;\r\n  border-radius: 100%;\r\n\r\n \r\n}\r\n\r\n\r\n\r\n.content-inputCompanies i,\r\n.content-inputCompanies i:before{\r\n  transition: all 0.25s ease;\r\n  border: solid 1px #000;\r\n\r\n}\r\n\r\n\r\n.content-inputCompanies input[type=radio] + i:before{\r\n  content: '';\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  z-index: 1;\r\n  border: solid 1px #fff;\r\n \r\n  transition: all 0.25s ease;\r\n  transform: scale(0);\r\n  opacity: 0; /* Lo ocultamos*/\r\n}\r\n.content-inputCompanies input[type=radio]:checked+i:before{\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n.modal-container{\r\n  display:flex;\r\n  background-color: rgba(0, 0,0,0.3);\r\n  align-items:center;\r\n  justify-content: center;\r\n  position:fixed;\r\n\r\n  top:0;\r\n  z-index:10;\r\n  left:0;\r\n  height:100vh;\r\n  width:100vw;\r\n\r\n}\r\n.continuaComprando{\r\n  display:flex;\r\n\r\n  align-items:center;\r\n  justify-content: center;\r\n  position:fixed;\r\n  top: 75%;\r\n  z-index: 12;\r\n  width: auto;\r\n  height: auto;\r\n  left: 68.3%;\r\n}\r\n.modal_unit{\r\n  position:relative;\r\n\r\n  background-color:#fff;\r\n  width:800px;\r\n  text-align:center;\r\n  max-width:100%;\r\n  padding:30px 50px;\r\n  border-radius:5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0,0,0.2);\r\n  overflow:auto;height:40rem;\r\n}\r\n.button-cancel-position{\r\n  background-color: white !important;\r\n  border: none;\r\n  color: black !important;\r\n  z-index: 9 !important;\r\n  cursor: pointer;\r\n  font-size: 15px !important;\r\n  font-weight: 700 !important;\r\n  position: absolute;\r\n  top: 6px;\r\n  font-family: 'Montserrat' !important;\r\n  right: 6px;\r\n}\r\n\r\n.sizeButton{\r\n  width:150px\r\n}\r\n\r\n",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=t.base?l[0]+t.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=r(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=o(h,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var r=n.domAPI(n);r.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var l=t(e,o),s=0;s<a.length;s++){var d=r(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:e=>{"use strict";var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{"use strict";e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{"use strict";var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),c=r(565),l=r.n(c),s=r(216),d=r.n(s),u=r(589),p=r.n(u),h=r(28),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d();n()(h.Z,f);h.Z&&h.Z.locals&&h.Z.locals;r(492);var m=JSON.parse(localStorage.getItem("storedProducts"));const v=document.getElementById("avisonoproducts"),g=document.getElementById("totalproducts"),y=document.getElementById("totalcustomers"),b=document.getElementById("deseos"),x=document.querySelectorAll(".button-favorite");b&&b.classList.remove("none"),fetch("https://testeo-theta.vercel.app/allorders",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{g&&(g.innerHTML=e.count+" order")})).catch((e=>{console.log("Error:",e)})),fetch("https://testeo-theta.vercel.app/allcustomers",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{y&&(y.innerHTML=e.count+" customer")})).catch((e=>{console.log("Error:",e)})),null!=m&&0!==m.length||(v&&v.classList.remove("none"),m=[],localStorage.setItem("storedProducts",JSON.stringify([]))),x.forEach((e=>{e.addEventListener("click",(()=>{var n={id:e.value};let r=JSON.parse(localStorage.getItem("storedProducts"));console.log(e),console.log("revisemeeste",e.classList.contains("opacity-low-heart")),e.classList.contains("opacity-low-heart")?(e.classList.remove("opacity-low-heart"),r.push(n),localStorage.setItem("storedProducts",JSON.stringify(r))):console.log("a ver pues")}))}));const E=document.getElementById("gotoFavorite"),S=document.getElementById("goto-List-products");S&&S.addEventListener("click",(()=>{window.location.href="/"})),E&&E.addEventListener("click",(()=>{window.location.href="/pages/FavoritosWish"})),function(){const e=document.querySelectorAll(".favorite-product"),n=document.querySelectorAll(".button-favorite-selected");var r=[];m.forEach((e=>{r.push(e.id)})),n.forEach((e=>{e.addEventListener("click",(()=>{let n=JSON.parse(localStorage.getItem("storedProducts")),r=document.getElementById(`favorite-${e.value}`),t=n.filter((n=>n.id!=e.value));localStorage.setItem("storedProducts",JSON.stringify(t)),r.remove(),0==t.length&&v&&v.classList.remove("none")}))})),e.forEach((e=>{r.includes(e.dataset.id)||e.remove()}))}()})()})();