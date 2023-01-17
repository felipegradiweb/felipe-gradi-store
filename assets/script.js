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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("var storedProducts = JSON.parse(localStorage.getItem(\"storedProducts\"));\nfunction pruebaConsole() {\n  const clasebutton = document.querySelectorAll('.buton_prueba');\n  if (storedProducts === null) storedProducts = [];\n  clasebutton.forEach(e => {\n    e.addEventListener('click', () => {\n      var product = {\n        id: e.name\n      };\n      console.log(e.name);\n      storedProducts.push(product);\n      localStorage.setItem('storedProducts', JSON.stringify(storedProducts));\n    });\n  });\n}\npruebaConsole();\nconst butoon_favorite = document.getElementById('gotoFavorite');\nbutoon_favorite && butoon_favorite.addEventListener('click', () => {\n  location.href = '/';\n});\n\n//# sourceURL=webpack://andres-gradi/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;