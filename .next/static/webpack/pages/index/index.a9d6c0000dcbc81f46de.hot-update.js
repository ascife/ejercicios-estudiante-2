self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.css */ "./components/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\my-student2\\components\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Button = {};

Button.Icon = function (props) {
  var label = props.label,
      icon = props.icon;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", _objectSpread(_objectSpread({
    className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().b_icon)
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
      className: "material-icons",
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), label]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

Button.Fill = function (props) {
  var children = props.children,
      color = props.color;
  var style = {
    color: color,
    backgroundColor: color + '11'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", _objectSpread(_objectSpread({
    className: (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().b_fill),
    style: style
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiSWNvbiIsInByb3BzIiwibGFiZWwiLCJpY29uIiwic3R5bGVzIiwiYl9pY29uIiwiRmlsbCIsImNoaWxkcmVuIiwiY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLEVBQWY7O0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjLFVBQVNDLEtBQVQsRUFBZ0I7QUFBQSxNQUN2QkMsS0FEdUIsR0FDUkQsS0FEUSxDQUN2QkMsS0FEdUI7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDUkYsS0FEUSxDQUNoQkUsSUFEZ0I7QUFHNUIsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLGtFQUFhQztBQUFoQyxLQUFzQ0osS0FBdEM7QUFBQSw0QkFDRTtBQUFHLGVBQVMsRUFBQyxnQkFBYjtBQUFBLGdCQUErQkU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdELEtBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDQVREOztBQVdBSCxNQUFNLENBQUNPLElBQVAsR0FBYyxVQUFTTCxLQUFULEVBQWdCO0FBQUEsTUFDdkJNLFFBRHVCLEdBQ0pOLEtBREksQ0FDdkJNLFFBRHVCO0FBQUEsTUFDYkMsS0FEYSxHQUNKUCxLQURJLENBQ2JPLEtBRGE7QUFHNUIsTUFBSUMsS0FBSyxHQUFHO0FBQ1ZELFNBQUssRUFBRUEsS0FERztBQUVWRSxtQkFBZSxFQUFFRixLQUFLLEdBQUc7QUFGZixHQUFaO0FBS0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUVKLGtFQUFuQjtBQUFrQyxTQUFLLEVBQUVLO0FBQXpDLEtBQW9EUixLQUFwRDtBQUFBLGNBQ0dNO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQ0FiRDs7QUFlQSwrREFBZVIsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5hOWQ2YzAwMDBkY2JjODFmNDZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHt9O1xyXG5cclxuQnV0dG9uLkljb24gPSBmdW5jdGlvbihwcm9wcykge1xyXG4gIGxldCB7bGFiZWwsIGljb259ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJfaWNvbn0gey4uLnByb3BzfT5cclxuICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+e2ljb259PC9pPlxyXG4gICAgICB7bGFiZWx9ICAgICAgXHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbkJ1dHRvbi5GaWxsID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuICBsZXQge2NoaWxkcmVuLCBjb2xvcn0gPSBwcm9wcztcclxuXHJcbiAgbGV0IHN0eWxlID0ge1xyXG4gICAgY29sb3I6IGNvbG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciArICcxMScsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iX2ZpbGx9IHN0eWxlPXtzdHlsZX0gey4uLnByb3BzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==