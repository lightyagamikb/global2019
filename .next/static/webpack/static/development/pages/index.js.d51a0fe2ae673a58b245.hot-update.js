webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/index.js":
/*!***********************************!*\
  !*** ./pages/components/index.js ***!
  \***********************************/
/*! exports provided: HoverCardComponent, SubHeader, Header, OurServicesCard, Images, Mechanism, TestimonialCard, CountCard, BlogCard, SubmitForm, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoverCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoverCards */ "./pages/components/hoverCards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HoverCardComponent", function() { return _hoverCards__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.scss */ "./pages/components/components.scss");
/* harmony import */ var _components_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subHeader */ "./pages/components/subHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubHeader", function() { return _subHeader__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./pages/components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ourServicesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourServicesCard */ "./pages/components/ourServicesCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OurServicesCard", function() { return _ourServicesCard__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images */ "./pages/components/images.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return _images__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _mechanismCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mechanismCard */ "./pages/components/mechanismCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mechanism", function() { return _mechanismCard__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _testimonialCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonialCard */ "./pages/components/testimonialCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestimonialCard", function() { return _testimonialCard__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberCounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberCounts */ "./pages/components/numberCounts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountCard", function() { return _numberCounts__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _blogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blogCard */ "./pages/components/blogCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogCard", function() { return _blogCard__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _submitFormComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submitFormComponent */ "./pages/components/submitFormComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitForm", function() { return _submitFormComponent__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _inputComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inputComponent */ "./pages/components/inputComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _inputComponent__WEBPACK_IMPORTED_MODULE_11__["default"]; });















/***/ }),

/***/ "./pages/components/inputComponent.js":
/*!********************************************!*\
  !*** ./pages/components/inputComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\prakash\\global\\pages\\components\\inputComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var styles = _ref.styles,
      classes = _ref.classes,
      type = _ref.type,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      id = _ref.id,
      error = _ref.error;
  return __jsx("input", {
    style: styles,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(error ? 'text-red-500' : ''),
    id: id,
    type: type || "text",
    placeholder: placeholder || "",
    onChange: function onChange() {
      if (typeof onchange === 'function') _onChange();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  });
});

/***/ }),

/***/ "./pages/components/submitFormComponent.js":
/*!*************************************************!*\
  !*** ./pages/components/submitFormComponent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmitForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./pages/components/index.js");







var _jsxFileName = "F:\\prakash\\global\\pages\\components\\submitFormComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var SubmitForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubmitForm, _React$Component);

  function SubmitForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubmitForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubmitForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "stata", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubmitForm, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "w-full max-w-xs bg-primary text-white py-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "text-white text-lg font-semibold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Book Now"), __jsx("form", {
        className: "shadow-md rounded px-8 pt-6 pb-8 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx("div", {
        className: "mb-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("input", {
        className: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
        id: "password",
        type: "password",
        placeholder: "******************",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), __jsx("div", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("button", {
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "SUBMIT"))));
    }
  }]);

  return SubmitForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d51a0fe2ae673a58b245.hot-update.js.map