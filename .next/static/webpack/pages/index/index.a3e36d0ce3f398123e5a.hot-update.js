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

    var _React$useState = _react["default"].useState({
      id: Math.random() * 10000,
      value: (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.props.children
    }),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    if (!Array.isArray(children)) children = [children];
    children = children.map(function (child, key) {
      var defaultActive = false;
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
  }, "8FP8lnme3i4NKzMAsLm96cCky6w=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2QiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlkIiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjaGlsZCIsImtleSIsImRlZmF1bHRBY3RpdmUiLCJjbG9uZUVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFBQTs7QUFDaEMsWUFBTyxVQUFTQyxLQUFULEVBQWdCO0FBQUE7O0FBQUE7O0FBQUEsaUJBQ0pBLEtBREk7QUFBQSxRQUNoQkMsUUFEZ0IsVUFDaEJBLFFBRGdCOztBQUFBLDBCQUdPQyxrQkFBTUMsUUFBTixDQUFlO0FBQ3pDQyxRQUFFLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQURxQjtBQUV6Q0MsV0FBSyxnQkFBRU4sUUFBUSxDQUFDLENBQUQsQ0FBViwrQ0FBRSxXQUFhRCxLQUFiLENBQW1CQztBQUZlLEtBQWYsQ0FIUDtBQUFBO0FBQUEsUUFHaEJPLE9BSGdCO0FBQUEsUUFHUEMsVUFITzs7QUFRckIsUUFBRyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1YsUUFBZCxDQUFKLEVBQ0VBLFFBQVEsR0FBRyxDQUFDQSxRQUFELENBQVg7QUFFRkEsWUFBUSxHQUFHQSxRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZTtBQUNyQyxVQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFFQSxVQUFHUCxPQUFPLENBQUNKLEVBQVIsS0FBZSxJQUFmLElBQXVCVSxHQUFHLEtBQUssQ0FBbEMsRUFDRUMsYUFBYSxHQUFHLElBQWhCO0FBRUYsMEJBQU9iLGtCQUFNYyxZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkMsV0FBRyxFQUFIQSxHQUQrQjtBQUUvQk4sZUFBTyxFQUFQQSxPQUYrQjtBQUcvQkMsa0JBQVUsRUFBVkEsVUFIK0I7QUFJL0JNLHFCQUFhLEVBQWJBO0FBSitCLE9BQTFCLENBQVA7QUFNRCxLQVpVLENBQVg7QUFjQWYsU0FBSyxtQ0FDQUEsS0FEQTtBQUVIQyxjQUFRLEVBQVJBLFFBRkc7QUFHSE8sYUFBTyxFQUFQQTtBQUhHLE1BQUw7O0FBTUEsUUFBSVMsU0FBUyxnQkFBR2Ysa0JBQU1jLFlBQU4sQ0FBbUJqQixNQUFNLENBQUNDLEtBQUQsQ0FBekIsQ0FBaEI7O0FBQ0EsV0FBT2lCLFNBQVA7QUFDRCxHQWpDRDtBQWtDRCxDQW5DRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5hM2UzNmQwY2UzZjM5ODEyM2U1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BzKSB7XHJcbiAgICBsZXQge2NoaWxkcmVufSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpICogMTAwMDAsXHJcbiAgICAgIHZhbHVlOiBjaGlsZHJlblswXT8ucHJvcHMuY2hpbGRyZW4sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSlcclxuICAgICAgY2hpbGRyZW4gPSBbY2hpbGRyZW5dO1xyXG5cclxuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ubWFwKChjaGlsZCwga2V5KT0+IHtcclxuICAgICAgbGV0IGRlZmF1bHRBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKGNoZWNrZWQuaWQgPT09IG51bGwgJiYga2V5ID09PSAwKSBcclxuICAgICAgICBkZWZhdWx0QWN0aXZlID0gdHJ1ZTtcclxuICBcclxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBjaGVja2VkLCBcclxuICAgICAgICBzZXRDaGVja2VkLFxyXG4gICAgICAgIGRlZmF1bHRBY3RpdmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHByb3BzID0ge1xyXG4gICAgICAuLi5wcm9wcyxcclxuICAgICAgY2hpbGRyZW4sXHJcbiAgICAgIGNoZWNrZWRcclxuICAgIH1cclxuXHJcbiAgICBsZXQgQ29tcG9uZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KG1ldGhvZChwcm9wcykpO1xyXG4gICAgcmV0dXJuIENvbXBvbmVudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9