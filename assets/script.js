(()=>{var e={624:e=>{const t=document.getElementById("storageProduct"),n=document.getElementById("allCartProducts"),r=document.querySelector(".modal-container"),o=document.getElementById("basketProductsEmpty");function l(e,t){let n=e[0].children[0].children[2].children[0].children[0];n.children[3].children[0].innerHTML="$"+t.final_line_price,n.children[2].children[1].value=t.quantity,n.children[2].children[1].id="input"+t.variant_id,n.children[0].children[0].src=t.image,n.children[1].children[1].children[1].innerHTML=t.variant_title,n.children[1].children[0].innerHTML=t.product_title,n.children[4].children[0].value=t.variant_id,n.children[2].children[0].addEventListener("click",(e=>{let t=n.children[2].children[0].parentNode.querySelector("input[type=number]"),r=t.value;c(null,!0,t.id.replace("input",""),r)})),n.children[2].children[2].addEventListener("click",(e=>{let t=n.children[2].children[2].parentNode.querySelector("input[type=number]"),r=t.value;c(null,!0,t.id.replace("input",""),r)})),n.children[4].children[0].addEventListener("click",(e=>{c(null,!0,e.target.value,0)}))}function c(e,c,d,i){var a;a=1==c?{updates:{[`${d}`]:i}}:{updates:{[`${e.items[0].id}`]:e.items[0].quantity}},fetch("/cart/update.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.json())).then((e=>{let d=e.item_count;for(;t.hasChildNodes();)t.removeChild(t.firstChild);if(d&&d>0){let o=e.items;for(let e=0;e<o.length;e++){var i=n.cloneNode(!0);i.classList.remove("none"),i.id="misproductos-"+e;var a=i.childNodes;for(let t=a.length-1;t>=0;t--){let n=a[t].children;if(n)if(l(n,o[e]),1==c)document.querySelector(".button-delete").value=o[e].variant_id}t.appendChild(i)}r.classList.remove("none")}else(n||o)&&(n.classList.add("none"),o.classList.remove("none"))})).catch((e=>{console.log("Error:",e)}))}e.exports={other_test:c}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}(()=>{"use strict";var e=n(624);const t=document.querySelector(".modal-container"),r=document.querySelectorAll(".continuaComprando"),o=document.getElementById("basketProductsEmpty");document.querySelectorAll(".addto-card").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),async function(t){let n={items:[{id:t,quantity:1}]};await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((t=>{(0,e.other_test)(t,!1)})).catch((e=>{console.log("Error:",e)}))}(t.value)}))})),r.forEach((e=>{e.addEventListener("click",(()=>{t.classList.add("none"),o.classList.add("none")}))}));var l=JSON.parse(localStorage.getItem("storedProducts"));const c=document.getElementById("avisonoproducts"),d=document.getElementById("totalproducts"),i=document.getElementById("totalcustomers"),a=document.getElementById("deseos"),s=document.querySelectorAll(".button-favorite"),u=document.getElementById("gotoFavorite"),h=document.getElementById("goto-List-products");h&&h.addEventListener("click",(()=>{window.location.href="/"})),u&&u.addEventListener("click",(()=>{window.location.href="/pages/FavoritosWish"})),document.querySelectorAll(".averq").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()}))})),a&&a.classList.remove("none"),fetch("https://testeo-theta.vercel.app/allorders",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{d&&(d.innerHTML=e.count+" order")})).catch((e=>{console.log("Error:",e)})),fetch("https://testeo-theta.vercel.app/allcustomers",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{i&&(i.innerHTML=e.count+" customer")})).catch((e=>{console.log("Error:",e)})),null!=l&&0!==l.length||(c&&c.classList.remove("none"),l=[]),s.forEach((e=>{var t=l.map((e=>e.id));t.includes(e.value)&&e.classList.remove("opacity-low-heart"),e.addEventListener("click",(n=>{var r={id:e.value},o=JSON.parse(localStorage.getItem("storedProducts"))||[];if(e.classList.contains("opacity-low-heart"))e.classList.remove("opacity-low-heart"),t.includes(e.value)||(o.push(r),localStorage.setItem("storedProducts",JSON.stringify(o)));else{e.classList.add("opacity-low-heart");let t=o.filter((t=>t.id!=e.value));localStorage.setItem("storedProducts",JSON.stringify(t))}}))})),function(){const e=document.querySelectorAll(".favorite-product"),t=document.querySelectorAll(".button-favorite-selected");var n=[];l.forEach((e=>{n.push(e.id)})),t.forEach((e=>{e.addEventListener("click",(()=>{let t=JSON.parse(localStorage.getItem("storedProducts")),n=document.getElementById(`favorite-${e.value}`),r=t.filter((t=>t.id!=e.value));localStorage.setItem("storedProducts",JSON.stringify(r)),n.remove(),0==r.length&&c&&c.classList.remove("none")}))})),e.forEach((e=>{n.includes(e.dataset.id)||e.remove()}))}()})()})();