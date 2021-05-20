self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./helpers/checkboxes.js":
/*!*******************************!*\
  !*** ./helpers/checkboxes.js ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

module.exports = function (method) {
  var _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var _props = props,
        children = _props.children;

    var _React$useState = _react["default"].useState({
      id: null,
      value: null
    }),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    if (!Array.isArray(children)) children = [children];
    children = children.map(function (child, key) {
      var defaultActive = false;
      console.log(child.children);
      if (checked.id === null && key === 0) defaultActive = true;
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        key: key,
        checked: checked,
        setChecked: setChecked,
        defaultActive: defaultActive
      });
    });
    props = _objectSpread(_objectSpread({}, props), {}, {
      children: children,
      checked: checked
    });

    var Component = /*#__PURE__*/_react["default"].cloneElement(method(props));

    return Component;
  }, "hAQoxYs6lyq6Q7vXLh4SbfZyY80=");
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2QiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlkIiwidmFsdWUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImNoaWxkIiwia2V5IiwiZGVmYXVsdEFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZUVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFBQTs7QUFDaEMsWUFBTyxVQUFTQyxLQUFULEVBQWdCO0FBQUE7O0FBQUEsaUJBQ0pBLEtBREk7QUFBQSxRQUNoQkMsUUFEZ0IsVUFDaEJBLFFBRGdCOztBQUFBLDBCQUdPQyxrQkFBTUMsUUFBTixDQUFlO0FBQ3pDQyxRQUFFLEVBQUUsSUFEcUM7QUFFekNDLFdBQUssRUFBRTtBQUZrQyxLQUFmLENBSFA7QUFBQTtBQUFBLFFBR2hCQyxPQUhnQjtBQUFBLFFBR1BDLFVBSE87O0FBUXJCLFFBQUcsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNSLFFBQWQsQ0FBSixFQUNFQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBRCxDQUFYO0FBRUZBLFlBQVEsR0FBR0EsUUFBUSxDQUFDUyxHQUFULENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWU7QUFDckMsVUFBSUMsYUFBYSxHQUFHLEtBQXBCO0FBRUFDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNWLFFBQWxCO0FBRUEsVUFBR0ssT0FBTyxDQUFDRixFQUFSLEtBQWUsSUFBZixJQUF1QlEsR0FBRyxLQUFLLENBQWxDLEVBQ0VDLGFBQWEsR0FBRyxJQUFoQjtBQUVGLDBCQUFPWCxrQkFBTWMsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEI7QUFDL0JDLFdBQUcsRUFBSEEsR0FEK0I7QUFFL0JOLGVBQU8sRUFBUEEsT0FGK0I7QUFHL0JDLGtCQUFVLEVBQVZBLFVBSCtCO0FBSS9CTSxxQkFBYSxFQUFiQTtBQUorQixPQUExQixDQUFQO0FBTUQsS0FkVSxDQUFYO0FBZ0JBYixTQUFLLG1DQUNBQSxLQURBO0FBRUhDLGNBQVEsRUFBUkEsUUFGRztBQUdISyxhQUFPLEVBQVBBO0FBSEcsTUFBTDs7QUFNQSxRQUFJVyxTQUFTLGdCQUFHZixrQkFBTWMsWUFBTixDQUFtQmpCLE1BQU0sQ0FBQ0MsS0FBRCxDQUF6QixDQUFoQjs7QUFDQSxXQUFPaUIsU0FBUDtBQUNELEdBbkNEO0FBb0NELENBckNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LmQ3YTE0MzcyNjA0MjRhOTNmNjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIGxldCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgfSlcclxuXHJcbiAgICBpZighQXJyYXkuaXNBcnJheShjaGlsZHJlbikpXHJcbiAgICAgIGNoaWxkcmVuID0gW2NoaWxkcmVuXTtcclxuXHJcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQsIGtleSk9PiB7XHJcbiAgICAgIGxldCBkZWZhdWx0QWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZC5jaGlsZHJlbik7XHJcbiAgXHJcbiAgICAgIGlmKGNoZWNrZWQuaWQgPT09IG51bGwgJiYga2V5ID09PSAwKVxyXG4gICAgICAgIGRlZmF1bHRBY3RpdmUgPSB0cnVlO1xyXG4gIFxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGNoZWNrZWQsIFxyXG4gICAgICAgIHNldENoZWNrZWQsXHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgY2hlY2tlZFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBDb21wb25lbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQobWV0aG9kKHByb3BzKSk7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=