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
  }, "bd7lumvkUPfn1pfsvJwP8OrIRVw=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2QiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlkIiwidmFsdWUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImNoaWxkIiwia2V5IiwiZGVmYXVsdEFjdGl2ZSIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQjtBQUFBOztBQUNoQyxZQUFPLFVBQVNDLEtBQVQsRUFBZ0I7QUFBQTs7QUFBQSxpQkFDSkEsS0FESTtBQUFBLFFBQ2hCQyxRQURnQixVQUNoQkEsUUFEZ0I7O0FBQUEsMEJBR09DLGtCQUFNQyxRQUFOLENBQWU7QUFDekNDLFFBQUUsRUFBRSxJQURxQztBQUV6Q0MsV0FBSyxFQUFFO0FBRmtDLEtBQWYsQ0FIUDtBQUFBO0FBQUEsUUFHaEJDLE9BSGdCO0FBQUEsUUFHUEMsVUFITzs7QUFRckIsUUFBRyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1IsUUFBZCxDQUFKLEVBQ0VBLFFBQVEsR0FBRyxDQUFDQSxRQUFELENBQVg7QUFFRkEsWUFBUSxHQUFHQSxRQUFRLENBQUNTLEdBQVQsQ0FBYSxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZTtBQUVyQyxVQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFFQSxVQUFHUCxPQUFPLENBQUNGLEVBQVIsS0FBZSxJQUFmLElBQXVCUSxHQUFHLEtBQUssQ0FBbEMsRUFDRUMsYUFBYSxHQUFHLElBQWhCO0FBRUYsMEJBQU9YLGtCQUFNWSxZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkMsV0FBRyxFQUFIQSxHQUQrQjtBQUUvQk4sZUFBTyxFQUFQQSxPQUYrQjtBQUcvQkMsa0JBQVUsRUFBVkEsVUFIK0I7QUFJL0JNLHFCQUFhLEVBQWJBO0FBSitCLE9BQTFCLENBQVA7QUFNRCxLQWJVLENBQVg7QUFlQWIsU0FBSyxtQ0FDQUEsS0FEQTtBQUVIQyxjQUFRLEVBQVJBLFFBRkc7QUFHSEssYUFBTyxFQUFQQTtBQUhHLE1BQUw7O0FBTUEsUUFBSVMsU0FBUyxnQkFBR2Isa0JBQU1ZLFlBQU4sQ0FBbUJmLE1BQU0sQ0FBQ0MsS0FBRCxDQUF6QixDQUFoQjs7QUFDQSxXQUFPZSxTQUFQO0FBQ0QsR0FsQ0Q7QUFtQ0QsQ0FwQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguMGU0ZWFmZjU2M2NkZDkwNzA2N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihwcm9wcykge1xyXG4gICAgbGV0IHtjaGlsZHJlbn0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgbGV0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIHZhbHVlOiBudWxsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSlcclxuICAgICAgY2hpbGRyZW4gPSBbY2hpbGRyZW5dO1xyXG5cclxuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ubWFwKChjaGlsZCwga2V5KT0+IHtcclxuXHJcbiAgICAgIGxldCBkZWZhdWx0QWN0aXZlID0gZmFsc2U7XHJcbiAgXHJcbiAgICAgIGlmKGNoZWNrZWQuaWQgPT09IG51bGwgJiYga2V5ID09PSAwKVxyXG4gICAgICAgIGRlZmF1bHRBY3RpdmUgPSB0cnVlO1xyXG4gIFxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGNoZWNrZWQsIFxyXG4gICAgICAgIHNldENoZWNrZWQsXHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgY2hlY2tlZFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBDb21wb25lbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQobWV0aG9kKHByb3BzKSk7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=