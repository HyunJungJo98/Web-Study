/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/sky.png":
/*!************************!*\
  !*** ./assets/sky.png ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sky.70c87155f31b4d709c74d5b5be5a5896.png\");\n\n//# sourceURL=webpack://week6/./assets/sky.png?");

/***/ }),

/***/ "./style/section.scss":
/*!****************************!*\
  !*** ./style/section.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://week6/./style/section.scss?");

/***/ }),

/***/ "./style/button.css":
/*!**************************!*\
  !*** ./style/button.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://week6/./style/button.css?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _style_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/button.css */ \"./style/button.css\");\n\r\n\r\nfunction Button(text) {\r\n  this.text = text;\r\n  this.render = function () {\r\n    const p = document.createElement('p');\r\n    const button = document.createElement('button');\r\n    button.classList.add('button');\r\n    button.innerHTML = this.text;\r\n    p.appendChild(button);\r\n    document.body.appendChild(p);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://week6/./src/components/Button.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Section)\n/* harmony export */ });\n/* harmony import */ var _style_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/section.scss */ \"./style/section.scss\");\n\r\n\r\nfunction Section(text) {\r\n  this.text = text;\r\n  this.render = function () {\r\n    const section = document.createElement('section');\r\n    section.classList.add('section');\r\n    section.innerHTML = this.text;\r\n    document.body.appendChild(section);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://week6/./src/components/Section.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _assets_sky_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sky.png */ \"./assets/sky.png\");\n/* harmony import */ var _components_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Button.js */ \"./src/components/Button.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Section.js */ \"./src/components/Section.js\");\n\r\n\r\n\r\n\r\n\r\nconst num = 10;\r\nconst printNum = (num) => {\r\n  console.log(num);\r\n};\r\n\r\nconst div = document.createElement('div');\r\ndocument.body.appendChild(div);\r\ndiv.innerHTML = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentTime)();\r\n\r\nconst img = document.createElement('img');\r\nimg.setAttribute('src', _assets_sky_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\ndocument.body.appendChild(img);\r\n\r\nconst button = new _components_Button_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('button');\r\nbutton.render();\r\n\r\nconst section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('section');\r\nsection.render();\r\n\r\nprintNum(num);\r\n\r\nconsole.log('hi');\r\n\n\n//# sourceURL=webpack://week6/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentTime: () => (/* binding */ getCurrentTime)\n/* harmony export */ });\nconst getCurrentTime = () => {\r\n  const date = new Date();\r\n  const hours = date.getHours();\r\n  const min = date.getMinutes();\r\n  const sec = date.getSeconds();\r\n\r\n  return `${hours}:${min}:${sec}`;\r\n};\r\n\n\n//# sourceURL=webpack://week6/./src/utils.js?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;