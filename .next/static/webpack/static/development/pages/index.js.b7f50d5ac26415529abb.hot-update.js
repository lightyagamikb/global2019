webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/submitFormComponent.js":
/*!*************************************************!*\
  !*** ./pages/components/submitFormComponent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./pages/components/index.js");


var _jsxFileName = "F:\\prakash\\global\\pages\\components\\submitFormComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var changeInput = function changeInput(initialValue) {
  var _userState = Object(react__WEBPACK_IMPORTED_MODULE_2__["userState"])(initialValue),
      _userState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_userState, 2),
      value = _userState2[0],
      changeValue = _userState2[1];

  return {
    value: value,
    changeValue: changeValue,
    reset: changeValue(''),
    bind: {
      value: value,
      onChange: function onChange(e) {
        return setValue(e.target.value);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _changeInput = changeInput(''),
      nameReset = _changeInput.reset,
      nameBind = _changeInput.bind;

  var _changeInput2 = changeInput(''),
      phoneReset = _changeInput2.reset,
      phoneBind = _changeInput2.bind;

  var _changeInput3 = changeInput(''),
      emailReset = _changeInput3.reset,
      emailBind = _changeInput3.bind;

  var _changeInput4 = changeInput(''),
      locationReset = _changeInput4.reset,
      locationBind = _changeInput4.bind;

  var onsubmit = function onsubmit() {
    nameReset();
    phoneReset();
    emailReset();
    locationReset();
  };

  return __jsx("div", {
    className: "w-full max-w-xs bg-primary text-white py-3 text-center rounded-lg pb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "text-white text-lg font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Book Now"), __jsx("form", {
    className: "px-8 pt-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: "Name"
  }, nameBind, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: "Contact Number +91"
  }, phoneBind, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: "Email Id"
  }, emailBind, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: "Location"
  }, locationBind, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), __jsx("div", {
    className: "flex items-center justify-between -mx-8 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full rounded-b-lg",
    type: "button",
    onSubmit: onsubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "SUBMIT"))));
});

/***/ })

})
//# sourceMappingURL=index.js.b7f50d5ac26415529abb.hot-update.js.map