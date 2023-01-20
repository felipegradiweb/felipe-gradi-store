/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/addcart.js":
/*!***************************!*\
  !*** ./src/js/addcart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n\nconst responseModal = document.querySelector(\".modal-container\");\nconst continuaComprando = document.querySelectorAll('.continuaComprando');\nconst sectionempty = document.getElementById('basketProductsEmpty');\nconst clasebuttonCart = document.querySelectorAll('.addto-card');\nfunction iniciarcart() {\n  clasebuttonCart.forEach((e, index) => {\n    e.addEventListener('click', ele => {\n      ele.preventDefault();\n      agregarProductoAlCarrito(e.value);\n    });\n  });\n  continuaComprando.forEach(e => {\n    e.addEventListener('click', () => {\n      responseModal.classList.add('none');\n      sectionempty.classList.add('none');\n    });\n  });\n  async function agregarProductoAlCarrito(variant_id) {\n    let data1 = {\n      'items': [{\n        'id': variant_id,\n        'quantity': 1\n      }]\n    };\n    await fetch('/cart/add.js', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data1)\n    }).then(res => res.json()).then(response => {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.other_test)(response, false);\n    }).catch(error => {\n      console.log('Error:', error);\n    });\n  }\n}\niniciarcart();\n\n//# sourceURL=webpack://andres-gradi/./src/js/addcart.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addcart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcart */ \"./src/js/addcart.js\");\n\nvar storedProducts = JSON.parse(localStorage.getItem(\"storedProducts\"));\nconst sectionempty = document.getElementById('avisonoproducts');\nconst totalorders = document.getElementById('totalproducts');\nconst totalcustomers = document.getElementById('totalcustomers');\nconst deseos = document.getElementById('deseos');\nconst heart_favorito = document.querySelectorAll('.button-favorite');\nconst butoon_favorite = document.getElementById('gotoFavorite');\nconst button_products = document.getElementById('goto-List-products');\nbutton_products && button_products.addEventListener('click', () => {\n  window.location.href = '/';\n});\nbutoon_favorite && butoon_favorite.addEventListener('click', () => {\n  window.location.href = '/pages/FavoritosWish';\n});\nfunction probando() {\n  var aver = document.querySelectorAll('.averq');\n  aver.forEach(e => {\n    e.addEventListener('click', ele => {\n      ele.preventDefault();\n    });\n  });\n}\nfunction listadeseos() {\n  deseos && deseos.classList.remove('none');\n  fetch('https://testeo-theta.vercel.app/allorders', {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(res => res.json()).then(response => {\n    if (totalorders) totalorders.innerHTML = response.count + ' order';\n  }).catch(error => {\n    console.log('Error:', error);\n  });\n  fetch('https://testeo-theta.vercel.app/allcustomers', {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(res => res.json()).then(response => {\n    if (totalcustomers) totalcustomers.innerHTML = response.count + ' customer';\n  }).catch(error => {\n    console.log('Error:', error);\n  });\n  if (storedProducts == null || storedProducts.length === 0) {\n    sectionempty && sectionempty.classList.remove('none');\n    storedProducts = [];\n  }\n  heart_favorito.forEach(e => {\n    var array = storedProducts.map(e => e.id);\n    if (array.includes(e.value)) {\n      e.classList.remove('opacity-low-heart');\n    }\n    e.addEventListener('click', ele => {\n      var product = {\n        id: e.value\n      };\n      var newstoreproductos = JSON.parse(localStorage.getItem(\"storedProducts\")) || [];\n      if (e.classList.contains('opacity-low-heart')) {\n        e.classList.remove('opacity-low-heart');\n        if (!array.includes(e.value)) {\n          newstoreproductos.push(product);\n          localStorage.setItem('storedProducts', JSON.stringify(newstoreproductos));\n        }\n      } else {\n        e.classList.add('opacity-low-heart');\n        let removeArray = newstoreproductos.filter(element => element.id != e.value);\n        localStorage.setItem('storedProducts', JSON.stringify(removeArray));\n      }\n    });\n  });\n}\nfunction verfavoritos() {\n  const producto_favorito = document.querySelectorAll('.favorite-product');\n  const heart_favorito_remove = document.querySelectorAll('.button-favorite-selected');\n  var elementosarray = [];\n  storedProducts.forEach(e => {\n    elementosarray.push(e.id);\n  });\n  heart_favorito_remove.forEach(e => {\n    e.addEventListener('click', () => {\n      let newstoreproductos = JSON.parse(localStorage.getItem(\"storedProducts\"));\n      let borrardiv = document.getElementById(`favorite-${e.value}`);\n      let removeArray = newstoreproductos.filter(element => element.id != e.value);\n      localStorage.setItem('storedProducts', JSON.stringify(removeArray));\n      borrardiv.remove();\n      if (removeArray.length == 0) {\n        sectionempty && sectionempty.classList.remove('none');\n      }\n    });\n  });\n  producto_favorito.forEach(e => {\n    if (!elementosarray.includes(e.dataset.id)) {\n      e.remove();\n    }\n  });\n}\nprobando();\nlistadeseos();\nverfavoritos();\n\n//# sourceURL=webpack://andres-gradi/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

eval("const storageProductDiv = document.getElementById('storageProduct');\nconst sectionfull = document.getElementById('allCartProducts');\nconst responseModal = document.querySelector(\".modal-container\");\nconst sectionempty = document.getElementById('basketProductsEmpty');\nfunction changeallproducts(collectionref, item) {\n  let collectionfactory = collectionref[0].children[0].children[2].children[0].children[0];\n  collectionfactory.children[3].children[0].innerHTML = '$' + item.final_line_price;\n  collectionfactory.children[2].children[1].value = item.quantity;\n  collectionfactory.children[2].children[1].id = 'input' + item.variant_id;\n  collectionfactory.children[0].children[0].src = item.image;\n  collectionfactory.children[1].children[1].children[1].innerHTML = item.variant_title;\n  collectionfactory.children[1].children[0].innerHTML = item.product_title;\n  collectionfactory.children[4].children[0].value = item.variant_id;\n  collectionfactory.children[2].children[0].addEventListener('click', e => {\n    let inputselected = collectionfactory.children[2].children[0].parentNode.querySelector('input[type=number]');\n    let cantidad = inputselected.value;\n    let identifi = inputselected.id.replace('input', '');\n    other_test(null, true, identifi, cantidad);\n  });\n  collectionfactory.children[2].children[2].addEventListener('click', e => {\n    let inputselected = collectionfactory.children[2].children[2].parentNode.querySelector('input[type=number]');\n    let cantidad = inputselected.value;\n    let identifi = inputselected.id.replace('input', '');\n    other_test(null, true, identifi, cantidad);\n  });\n  collectionfactory.children[4].children[0].addEventListener('click', e => {\n    other_test(null, true, e.target.value, 0);\n  });\n}\nfunction other_test(response, flag, variant_id, cantidad) {\n  var data;\n  if (flag == true) {\n    data = {\n      'updates': {\n        [`${variant_id}`]: cantidad\n      }\n    };\n  } else {\n    data = {\n      'updates': {\n        [`${response.items[0].id}`]: response.items[0].quantity\n      }\n    };\n  }\n  fetch('/cart/update.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(data)\n  }).then(res => res.json()).then(response => {\n    let item_count = response.item_count;\n    while (storageProductDiv.hasChildNodes()) {\n      storageProductDiv.removeChild(storageProductDiv.firstChild);\n    }\n    if (item_count && item_count > 0) {\n      let items = response.items;\n      for (let i = 0; i < items.length; i++) {\n        var clone = sectionfull.cloneNode(true);\n        clone.classList.remove('none');\n        clone.id = 'misproductos-' + i;\n        var children = clone.childNodes;\n        for (let index = children.length - 1; index >= 0; index--) {\n          let collectionref = children[index].children;\n          if (collectionref) {\n            changeallproducts(collectionref, items[i]);\n            if (flag == true) {\n              var buttonProd = document.querySelector('.button-delete');\n              buttonProd.value = items[i].variant_id;\n            }\n          }\n        }\n        storageProductDiv.appendChild(clone);\n      }\n      responseModal.classList.remove('none');\n    } else {\n      if (sectionfull || sectionempty) {\n        sectionfull.classList.add('none');\n        sectionempty.classList.remove('none');\n      }\n    }\n  }).catch(error => {\n    console.log('Error:', error);\n  });\n}\nmodule.exports = {\n  other_test\n};\n\n//# sourceURL=webpack://andres-gradi/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;