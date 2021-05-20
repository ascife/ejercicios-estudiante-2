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
  children = data.map(function (data, key) {
    return children.map(function (Component, key) {
      var props = Component.props;
      var events = {};
      Object.keys(props).forEach(function (key) {
        if (key.startsWith('on')) events[key] = function (ev) {
          ev.map = {
            data: data
          };
          props[key](ev);
        };
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(Component, _objectSpread(_objectSpread({}, data), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9tYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJjaGlsZHJlbiIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJrZXkiLCJDb21wb25lbnQiLCJldmVudHMiLCJrZXlzIiwiZm9yRWFjaCIsInN0YXJ0c1dpdGgiLCJldiIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQSxNQUNiQyxRQURhLEdBQ0tELEtBREwsQ0FDYkMsUUFEYTtBQUFBLE1BQ0hDLElBREcsR0FDS0YsS0FETCxDQUNIRSxJQURHO0FBR2xCLE1BQUcsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILFFBQWQsQ0FBSixFQUNFQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBRCxDQUFYO0FBRUYsTUFBRyxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLElBQ0QsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFOLENBQWNGLElBQWQsQ0FESCxFQUVFQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixJQUFkLENBQVA7QUFFRixNQUFHLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUosRUFDRUEsSUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUVGRCxVQUFRLEdBQUdDLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNMLElBQUQsRUFBT00sR0FBUDtBQUFBLFdBQ2xCUCxRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFDRSxTQUFELEVBQVlELEdBQVosRUFBbUI7QUFFOUIsVUFBSVIsS0FBSyxHQUFHUyxTQUFTLENBQUNULEtBQXRCO0FBQ0EsVUFBSVUsTUFBTSxHQUFHLEVBQWI7QUFFQUwsWUFBTSxDQUFDTSxJQUFQLENBQVlYLEtBQVosRUFBbUJZLE9BQW5CLENBQTJCLFVBQUNKLEdBQUQsRUFBUTtBQUVqQyxZQUFHQSxHQUFHLENBQUNLLFVBQUosQ0FBZSxJQUFmLENBQUgsRUFDRUgsTUFBTSxDQUFDRixHQUFELENBQU4sR0FBYyxVQUFDTSxFQUFELEVBQU87QUFFbkJBLFlBQUUsQ0FBQ1AsR0FBSCxHQUFTO0FBQUNMLGdCQUFJLEVBQUpBO0FBQUQsV0FBVDtBQUNBRixlQUFLLENBQUNRLEdBQUQsQ0FBTCxDQUFXTSxFQUFYO0FBQ0QsU0FKRDtBQUtILE9BUkQ7QUFVQSwwQkFBT0MseURBQUEsQ0FBbUJOLFNBQW5CLGtDQUNGUCxJQURFO0FBRUxNLFdBQUcsRUFBSEE7QUFGSyxTQUFQO0FBSUQsS0FuQkQsQ0FEa0I7QUFBQSxHQUFULENBQVg7QUF1QkEsc0JBQ0U7QUFBQSxjQUNHUDtBQURILG1CQURGO0FBS0Q7O0tBekNRRixHO0FBMkNULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LjZmODRiNjQxNjEzMzBiZGI3OTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTWFwKHByb3BzKSB7XHJcbiAgbGV0IHtjaGlsZHJlbiwgZGF0YX0gPSBwcm9wcztcclxuICBcclxuICBpZighQXJyYXkuaXNBcnJheShjaGlsZHJlbikpXHJcbiAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XHJcblxyXG4gIGlmKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgIUFycmF5LmlzQXJyYXkoZGF0YSkpXHJcbiAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuXHJcbiAgaWYoIUFycmF5LmlzQXJyYXkoZGF0YSkpXHJcbiAgICBkYXRhID0gW2RhdGFdO1xyXG5cclxuICBjaGlsZHJlbiA9IGRhdGEubWFwKChkYXRhLCBrZXkpPT4gXHJcbiAgICBjaGlsZHJlbi5tYXAoKENvbXBvbmVudCwga2V5KT0+IHtcclxuXHJcbiAgICAgIGxldCBwcm9wcyA9IENvbXBvbmVudC5wcm9wcztcclxuICAgICAgbGV0IGV2ZW50cyA9IHt9O1xyXG5cclxuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSk9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoa2V5LnN0YXJ0c1dpdGgoJ29uJykpXHJcbiAgICAgICAgICBldmVudHNba2V5XSA9IChldik9PiB7XHJcblxyXG4gICAgICAgICAgICBldi5tYXAgPSB7ZGF0YX1cclxuICAgICAgICAgICAgcHJvcHNba2V5XShldik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KENvbXBvbmVudCwge1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAga2V5XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJzb3VyY2VSb290IjoiIn0=