webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/sections/recentWorksSection.js":
/*!**********************************************!*\
  !*** ./pages/sections/recentWorksSection.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components */ "./pages/components/index.js");

var _jsxFileName = "F:\\prakash\\global\\pages\\sections\\recentWorksSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var data = ['All', 'Fresh Wiring', 'Installation', 'Products', 'Repair', 'Ventures'];
var imgData = Array(10).fill(null);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["SubHeader"], {
    subHeader: "Recent Works",
    invertColors: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap content-center items-center text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (c, index) {
    return __jsx("div", {
      className: "text-2xl text-white mx-2 hover:text-secondary",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, c);
  })), __jsx("div", {
    className: "flex flex-wrap -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, imgData.map(function (item, index) {
    return __jsx("div", {
      className: "bg-white m-4 h-48 w-48",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  })), __jsx("div", {
    className: "flex w-full my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "bg-primary w-8 h-8 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: _components__WEBPACK_IMPORTED_MODULE_2__["Images"].arrowRight,
    className: "absolute inset-0 object-contain object-center",
    style: {
      transform: 'scale(0.6)',
      marginTop: -4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "bg-primary w-8 h-8 flex content-center justify-center relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: _components__WEBPACK_IMPORTED_MODULE_2__["Images"].arrowRight,
    className: "absolute inset-0 object-contain object-center",
    style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transform: 'scale(0.6)',
      marginTop: -4
    }, "transform", 'rorate(180deg)'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.e093c4d403462fbfb1e3.hot-update.js.map