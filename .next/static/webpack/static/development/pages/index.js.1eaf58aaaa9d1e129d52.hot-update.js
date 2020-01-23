webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/sections/blogSection.js":
/*!***************************************!*\
  !*** ./pages/sections/blogSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components */ "./pages/components/index.js");

var _jsxFileName = "F:\\prakash\\global\\pages\\sections\\blogSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var data = Array(3).fill(null).map(function (d, i) {
  return {
    imgSrc: _components__WEBPACK_IMPORTED_MODULE_2__["Images"]["blog".concat(i + 1)],
    header: 'What Our Customer',
    content: '',
    goTo: '',
    imgAlt: 'blog-img'
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx("div", {
    className: "flex flex-col lg:flex-row justify-center items-cener",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.map(function (i) {
    return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["BlogCard"], {
      imgSrc: i.imgSrc,
      header: i.header,
      content: i.content,
      goTo: i.goTo,
      imgAlt: i.imgAlt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.1eaf58aaaa9d1e129d52.hot-update.js.map