webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/sections/recentWorksSection.js":
/*!**********************************************!*\
  !*** ./pages/sections/recentWorksSection.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components */ "./pages/components/index.js");
var _jsxFileName = "F:\\prakash\\global\\pages\\sections\\recentWorksSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var data = ['All', 'Fresh Wiring', 'Installation', 'Products', 'Repair', 'Ventures'];
var imgData = Array(10).fill(null);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["SubHeader"], {
    subHeader: "Recent Works",
    invertColors: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-wrap content-between items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (c, index) {
    return __jsx("div", {
      className: "text-2xl text-white font-semibold",
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.91702a6682c7552038a5.hot-update.js.map