self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./helpers/map.js":
/*!************************!*\
  !*** ./helpers/map.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Map(props) {
  var children = props.children,
      data = props.data;
  if (!Array.isArray(children)) children = [children];
  if (typeof children === "object" && !Array.isArray(data)) data = Object.values(data);
  if (!Array.isArray(data)) data = [data];
  console.log(data);
  children = data.map(function (d, key) {
    return children.map(function (Component, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(Component, _objectSpread(_objectSpread({}, d), {}, {
        key: key
      }));
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false);
}

_c = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c;

$RefreshReg$(_c, "Map");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9tYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJjaGlsZHJlbiIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZCIsImtleSIsIkNvbXBvbmVudCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQSxNQUNiQyxRQURhLEdBQ0tELEtBREwsQ0FDYkMsUUFEYTtBQUFBLE1BQ0hDLElBREcsR0FDS0YsS0FETCxDQUNIRSxJQURHO0FBR2xCLE1BQUcsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILFFBQWQsQ0FBSixFQUNFQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBRCxDQUFYO0FBRUYsTUFBRyxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLElBQ0QsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFOLENBQWNGLElBQWQsQ0FESCxFQUVFQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixJQUFkLENBQVA7QUFFRixNQUFHLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUosRUFDRUEsSUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUVGSyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUVBRCxVQUFRLEdBQUdDLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLFdBQ2xCVixRQUFRLENBQUNRLEdBQVQsQ0FBYSxVQUFDRyxTQUFELEVBQVlELEdBQVosRUFBbUI7QUFDOUIsMEJBQU9FLHlEQUFBLENBQW1CRCxTQUFuQixrQ0FDRkYsQ0FERTtBQUVMQyxXQUFHLEVBQUhBO0FBRkssU0FBUDtBQUlELEtBTEQsQ0FEa0I7QUFBQSxHQUFULENBQVg7QUFTQSxzQkFDRTtBQUFBLGNBQ0dWO0FBREgsbUJBREY7QUFLRDs7S0E3QlFGLEc7QUErQlQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguN2M0MzlmZTNiOTZjYzJhNjg4MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBNYXAocHJvcHMpIHtcclxuICBsZXQge2NoaWxkcmVuLCBkYXRhfSA9IHByb3BzO1xyXG4gIFxyXG4gIGlmKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSlcclxuICAgIGNoaWxkcmVuID0gW2NoaWxkcmVuXTtcclxuXHJcbiAgaWYodHlwZW9mIGNoaWxkcmVuID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAhQXJyYXkuaXNBcnJheShkYXRhKSlcclxuICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG5cclxuICBpZighQXJyYXkuaXNBcnJheShkYXRhKSlcclxuICAgIGRhdGEgPSBbZGF0YV07XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICBjaGlsZHJlbiA9IGRhdGEubWFwKChkLCBrZXkpPT4gXHJcbiAgICBjaGlsZHJlbi5tYXAoKENvbXBvbmVudCwga2V5KT0+IHtcclxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChDb21wb25lbnQsIHtcclxuICAgICAgICAuLi5kLFxyXG4gICAgICAgIGtleVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwic291cmNlUm9vdCI6IiJ9