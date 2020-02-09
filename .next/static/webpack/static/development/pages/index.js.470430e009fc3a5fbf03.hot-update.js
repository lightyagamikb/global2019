webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/submitFormComponent.js":
/*!*************************************************!*\
  !*** ./pages/components/submitFormComponent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./pages/components/index.js");
var _jsxFileName = "F:\\prakash\\global\\pages\\components\\submitFormComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var changeInput = function changeInput(initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      changeValue = _useState[1];

  return {
    value: value,
    changeValue: changeValue,
    reset: function reset() {
      return changeValue('');
    },
    bind: {
      value: value,
      onChange: function onChange(e) {
        return changeValue(e.target.value);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState2[0],
      changeName = _useState2[1];

  var _changeInput = changeInput(''),
      phoneReset = _changeInput.reset,
      phoneBind = _changeInput.bind;

  var _changeInput2 = changeInput(''),
      emailReset = _changeInput2.reset,
      emailBind = _changeInput2.bind;

  var _changeInput3 = changeInput(''),
      locationReset = _changeInput3.reset,
      locationBind = _changeInput3.bind;

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
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Name" // value={name}
    // onChange={changeName}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Contact Number +91" // {...phoneBind}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Email Id" // {...emailBind}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Location" // {...locationBind}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    className: "flex items-center justify-between -mx-8 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full rounded-b-lg",
    type: "button",
    onClick: function onClick() {
      return onsubmit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "SUBMIT"))));
});

/***/ })

})
//# sourceMappingURL=index.js.470430e009fc3a5fbf03.hot-update.js.map