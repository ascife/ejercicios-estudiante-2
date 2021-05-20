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
    var _children$;

    _s();

    var _props = props,
        children = _props.children;
    if (!Array.isArray(children)) children = [children];

    var _React$useState = _react["default"].useState({
      id: 'initial',
      value: (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.props.children
    }),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    if (!Array.isArray(children)) children = [children];
    children = children.map(function (child, key) {
      var defaultActive = false;
      if (checked.id === 'initial' && key === 0) defaultActive = true;
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
  }, "rXOEicKmuxR6tFlkyy8WHRTqsJs=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2QiLCJwcm9wcyIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlkIiwidmFsdWUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIm1hcCIsImNoaWxkIiwia2V5IiwiZGVmYXVsdEFjdGl2ZSIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNoQyxZQUFPLFVBQVNDLEtBQVQsRUFBZ0I7QUFBQTs7QUFBQTs7QUFBQSxpQkFDSkEsS0FESTtBQUFBLFFBQ2hCQyxRQURnQixVQUNoQkEsUUFEZ0I7QUFHckIsUUFBRyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQ0VBLFFBQVEsR0FBRyxDQUFDQSxRQUFELENBQVg7O0FBSm1CLDBCQU1PRyxrQkFBTUMsUUFBTixDQUFlO0FBQ3pDQyxRQUFFLEVBQUUsU0FEcUM7QUFFekNDLFdBQUssZ0JBQUVOLFFBQVEsQ0FBQyxDQUFELENBQVYsK0NBQUUsV0FBYUQsS0FBYixDQUFtQkM7QUFGZSxLQUFmLENBTlA7QUFBQTtBQUFBLFFBTWhCTyxPQU5nQjtBQUFBLFFBTVBDLFVBTk87O0FBV3JCLFFBQUcsQ0FBQ1AsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUNFQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBRCxDQUFYO0FBRUZBLFlBQVEsR0FBR0EsUUFBUSxDQUFDUyxHQUFULENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWU7QUFDckMsVUFBSUMsYUFBYSxHQUFHLEtBQXBCO0FBRUEsVUFBR0wsT0FBTyxDQUFDRixFQUFSLEtBQWUsU0FBZixJQUE0Qk0sR0FBRyxLQUFLLENBQXZDLEVBQ0VDLGFBQWEsR0FBRyxJQUFoQjtBQUVGLDBCQUFPVCxrQkFBTVUsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JDLFdBQUcsRUFBSEEsR0FEK0I7QUFFL0JKLGVBQU8sRUFBUEEsT0FGK0I7QUFHL0JDLGtCQUFVLEVBQVZBLFVBSCtCO0FBSS9CSSxxQkFBYSxFQUFiQTtBQUorQixPQUExQixDQUFQO0FBTUQsS0FaVSxDQUFYO0FBY0FiLFNBQUssbUNBQ0FBLEtBREE7QUFFSEMsY0FBUSxFQUFSQSxRQUZHO0FBR0hPLGFBQU8sRUFBUEE7QUFIRyxNQUFMOztBQU1BLFFBQUlPLFNBQVMsZ0JBQUdYLGtCQUFNVSxZQUFOLENBQW1CZixNQUFNLENBQUNDLEtBQUQsQ0FBekIsQ0FBaEI7O0FBQ0EsV0FBT2UsU0FBUDtBQUNELEdBcENEO0FBcUNELENBdENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LmFmMzUxNTZhMmFmYjU3ZDBkM2Q5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIGxldCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcblxyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKVxyXG4gICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XHJcblxyXG4gICAgbGV0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgaWQ6ICdpbml0aWFsJyxcclxuICAgICAgdmFsdWU6IGNoaWxkcmVuWzBdPy5wcm9wcy5jaGlsZHJlbixcclxuICAgIH0pXHJcblxyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKVxyXG4gICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XHJcblxyXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpPT4ge1xyXG4gICAgICBsZXQgZGVmYXVsdEFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYoY2hlY2tlZC5pZCA9PT0gJ2luaXRpYWwnICYmIGtleSA9PT0gMCkgXHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZSA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgY2hlY2tlZCwgXHJcbiAgICAgICAgc2V0Q2hlY2tlZCxcclxuICAgICAgICBkZWZhdWx0QWN0aXZlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgLi4ucHJvcHMsXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBjaGVja2VkXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IENvbXBvbmVudCA9IFJlYWN0LmNsb25lRWxlbWVudChtZXRob2QocHJvcHMpKTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==