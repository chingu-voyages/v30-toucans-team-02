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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media screen and (max-width: 767px) {\\n  section {\\n    grid-template-columns: auto;\\n  }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n  section {\\n    grid-template-columns: auto auto;\\n  }\\n}\\n.flip-card {\\n  background-color: transparent;\\n  width: 150px;\\n  height: 195px;\\n  perspective: 1000px;\\n  padding: 20px;\\n  margin: 50px 20px;\\n}\\n\\n.flip-card-inner {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  text-align: center;\\n  transition: transform 0.6s;\\n  transform-style: preserve-3d;\\n}\\n\\n.flip-card:hover .flip-card-inner {\\n  transform: rotateY(180deg);\\n}\\n\\n.flip-card:hover .line {\\n  border-color: yellow;\\n}\\n\\n.flip-card-front,\\n.flip-card-back {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n}\\n\\n.flip-card-front {\\n  background-color: #bbb;\\n  color: black;\\n}\\n\\n.flip-card-back {\\n  background-color: #c9e9f6;\\n  color: black;\\n  transform: rotateY(180deg);\\n}\\n\\n.back-card-container {\\n  width: 100%;\\n  height: 100%;\\n  border: solid black;\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n}\\n.back-card-container div {\\n  font-family: \\\"Sofia\\\", sans-serif;\\n  height: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.back-card-container .add-to-read-list {\\n  display: flex;\\n  border-top: solid thin black;\\n  flex-direction: column;\\n}\\n.back-card-container .add-to-read-list p {\\n  font-size: 12px;\\n}\\n\\n.fas:hover {\\n  color: #0fabdf;\\n  transform: scale(1.1);\\n}\\n\\n.bookCardContainer {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  align-items: flex-start;\\n  max-width: 150px;\\n  border-radius: 2%;\\n  transition: 0.3s;\\n}\\n.card img {\\n  width: 150px;\\n  height: 195px;\\n  background-size: cover;\\n  background-size: cover;\\n}\\n.card .container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: center;\\n  align-self: center;\\n  padding: 0px;\\n  margin: 0px;\\n}\\n.card p {\\n  font-family: \\\"Sofia\\\", sans-serif;\\n  font-size: 18px;\\n  padding: 8px 0px 0px 0px;\\n  margin: 0px;\\n}\\n.card .subtitle {\\n  text-align: center;\\n  font-size: 13px;\\n  padding: 3px;\\n}\\n.card span {\\n  align-self: center;\\n  border: solid thin black;\\n  width: 70%;\\n  margin: 7px;\\n  opacity: 60%;\\n}\\n\\n.card:hover {\\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\\n}\\n\\n.search-container {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 50px;\\n}\\n\\n#search {\\n  min-width: 500px;\\n}\\n\\n#search,\\n#results {\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#search-input {\\n  height: 30px;\\n  width: 100%;\\n  border-radius: 5px;\\n  border: 1px solid #ddd;\\n  padding: 2px 22px 2px 30px;\\n  outline: 0;\\n  font-size: 1em;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n.search {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 80px;\\n}\\n.search__logo {\\n  width: 100%;\\n  max-width: 280px;\\n  margin: 0 auto;\\n}\\n.search__input {\\n  width: 100%;\\n  max-width: 500px;\\n  padding: 15px;\\n  border-radius: 5px;\\n  margin: 30px auto;\\n  border: 1px solid black;\\n}\\n\\n.btn {\\n  position: fixed;\\n  width: 100%;\\n  max-width: 180px;\\n  padding: 20px;\\n  background-color: #ff8000;\\n  border: none;\\n  border-radius: 5px;\\n  bottom: 10px;\\n  right: 10px;\\n  font-size: 15px;\\n  font-weight: bold;\\n  transition: 0.3s;\\n  cursor: pointer;\\n}\\n.btn:hover {\\n  font-size: 16px;\\n}\\n.btn__icon {\\n  font-size: 15px;\\n}\\n\\nsection {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  padding: 30px;\\n  justify-content: center;\\n  column-gap: 50px;\\n}\\n\\n.card {\\n  text-align: center;\\n  box-shadow: 4px 4px 8px 4px #302d2d;\\n  width: 100%;\\n  width: 200px;\\n  padding: 10px;\\n  border-radius: 4px;\\n  background-color: white;\\n  margin-bottom: 30px;\\n}\\n.card__title {\\n  padding-top: 15px;\\n  text-transform: uppercase;\\n}\\n.card__img {\\n  width: 100%;\\n  margin: 0 auto;\\n  width: 180px;\\n}\\n.card__content {\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 10px;\\n}\\n.card__content p {\\n  padding-right: 10px;\\n}\\n\\n@media screen and (max-width: 767px) {\\n  section {\\n    grid-template-columns: auto;\\n  }\\n\\n  .search__input {\\n    max-width: 300px;\\n  }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n  section {\\n    grid-template-columns: auto auto;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://v30-toucans-team-02/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://v30-toucans-team-02/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_key */ \"./src/api_key.js\");\n/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCard */ \"./src/bookCard.js\");\n\n\n\n// Google Books API\nconst API_KEY = _api_key__WEBPACK_IMPORTED_MODULE_0__.default;\nconst GOOGLE_BOOKS_API_URL = \"https://www.googleapis.com/books/v1/volumes\";\n\nfunction getSearchResults() {\n  const bookCardContainer = document.querySelector(\".bookCardContainer\");\n  bookCardContainer.innerHTML = \"\";\n\n  const searchValue = document.getElementById(\"search-input\").value.split(\" \").join(\"+\");\n  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchValue}&key=${API_KEY}&maxResults=25`;\n\n  fetch(searchQuery)\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      data.items.forEach(item => {\n        const book = item.volumeInfo;\n        const html = (0,_bookCard__WEBPACK_IMPORTED_MODULE_1__.default)(book);\n        bookCardContainer.insertAdjacentHTML(\"beforeend\", html);\n      });\n    })\n    .catch((err) => {\n      console.log(\"error\");\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSearchResults);\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/api.js?");

/***/ }),

/***/ "./src/api_key.js":
/*!************************!*\
  !*** ./src/api_key.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GOOGLE_BOOKS_API_KEY = \"AIzaSyAH8UeJed2tdWtyZFxYV2ke2GmfJ1xgbMc\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GOOGLE_BOOKS_API_KEY);\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/api_key.js?");

/***/ }),

/***/ "./src/bookCard.js":
/*!*************************!*\
  !*** ./src/bookCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCard = (data) => {\n  const html = `\n     \n  \n  <div class=\"flip-card\">\n  <div class=\"flip-card-inner\">\n    <div class=\"flip-card-front\">\n      <div class=\"card\">\n        <img src=\"${data.imageLinks.thumbnail}\" />\n        <div class=\"container\">\n          <p>${data.title}</p>\n          <span class = \"line\"></span>\n\n          <p class=\"subtitle\">${data.authors[0]}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"flip-card-back\">\n      <div class = \"back-card-container\">\n\n        <div class =\"info\">\n          <!-- <p class=\"info\">${data.description}</p> -->\n          <i class=\"fas fa-info-circle fa-3x\"></i>\n        </div>\n        <div class = \"add-to-read-list\">\n        <i class=\"fas fa-book-reader fa-2x\"></i>\n          <p>Add to read list</p>\n\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n      \n    \n    `;\n  return html;\n};\n\n// const renderCard = (data) => {\n//   const html = `\n\n//     <div class=\"card\">\n//       <img\n//         src=\"${data.image}\"\n\n//       />\n//         <div class=\"container\">\n\n//         <p>${data.title}</p>\n//         <span></span>\n\n//         <p class=\"subtitle\">${data.author}</p>\n//       </div>\n\n//     </div>\n\n//     `;\n//   return html;\n// };\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCard);\n\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/bookCard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\nconst searchInput = document.getElementById(\"search-input\");\n\n// Event Listener\nsearchInput.addEventListener(\"keypress\", (e) => {\n  if (e.key === \"Enter\") {\n    return (0,_api__WEBPACK_IMPORTED_MODULE_1__.default)();\n  }\n});\n\n//let cardElement = document.querySelector(\".container\");\nlet cardElement = document.getElementById(\"placeholder-search\");\n//console.log(cardElement);\nfor (let index = 0; index < 9; index++) {\n  cardElement.innerHTML += `<article><div class=\"card\">\n  <img\n    src=\"https://assets.whsmith.co.uk/product-image/extra-large/9781787461482_1.jpg\"\n    alt=\"Avatar\"\n    class=\"card__img\"\n  />\n    <h4 class='card__title'><b>Title</b></h4>\n  <div class='card__content'>\n    <p>Read More</p>\n    <i class=\"fa fa-arrow-right\"></i>\n    <div>\n</div> </article>`;\n}\n\n//# sourceURL=webpack://v30-toucans-team-02/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;