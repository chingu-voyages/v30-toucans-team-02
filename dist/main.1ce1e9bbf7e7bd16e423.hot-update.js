/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatev30_toucans_team_02"]("main",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_key */ \"./src/api_key.js\");\n/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCard */ \"./src/bookCard.js\");\n\n // Google Books API\n\nvar API_KEY = _api_key__WEBPACK_IMPORTED_MODULE_0__.default;\nvar GOOGLE_BOOKS_API_URL = \"https://www.googleapis.com/books/v1/volumes\";\n\nvar searchResults = function searchResults(data) {\n  var books = data;\n  return books;\n};\n\nfunction getSearchResults() {\n  var bookCardContainer = document.querySelector(\".container\");\n  bookCardContainer.innerHTML = \"\";\n  var searchValue = document.getElementById(\"search-input\").value.split(\" \").join(\"+\");\n  var searchQuery = \"\".concat(GOOGLE_BOOKS_API_URL, \"?q=\").concat(searchValue, \"&key=\").concat(API_KEY, \"&maxResults=25\");\n  var searchResults;\n  fetch(searchQuery).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    searchResults = data.items; // console.log(searchResults);\n\n    data.items.forEach(function (item) {\n      var book = item.volumeInfo;\n      var html = (0,_bookCard__WEBPACK_IMPORTED_MODULE_1__.default)(book);\n      bookCardContainer.insertAdjacentHTML(\"beforeend\", html);\n    });\n  })[\"catch\"](function (err) {\n    console.log(\"error h\");\n  });\n}\n\nconsole.log(searchResults());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSearchResults);\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f527c56538b5e9124b00")
/******/ })();
/******/ 
/******/ }
);