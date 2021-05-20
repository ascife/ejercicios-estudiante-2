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

    var _React$useState = _react["default"].useState(0),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    if (!Array.isArray(children)) children = [children];
    children = children.map(function (child, key) {
      var defaultActive = false;
      if (checked === 0 && key === 0) defaultActive = true;
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        key: key,
        checked: checked,
        setChecked: setChecked,
        defaultActive: defaultActive
      });
    });
    props = _objectSpread(_objectSpread({}, props), {}, {
      children: children
    });

    var Component = /*#__PURE__*/_react["default"].cloneElement(method(props));

    return Component;
  }, "H4M2DJUt63YoxFmFpLu0y9mnSgk=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRob2QiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJrZXkiLCJkZWZhdWx0QWN0aXZlIiwiY2xvbmVFbGVtZW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxNQUFULEVBQWlCO0FBQUE7O0FBQ2hDLFlBQU8sVUFBU0MsS0FBVCxFQUFnQjtBQUFBOztBQUFBLGlCQUNKQSxLQURJO0FBQUEsUUFDaEJDLFFBRGdCLFVBQ2hCQSxRQURnQjs7QUFBQSwwQkFFT0Msa0JBQU1DLFFBQU4sQ0FBZSxDQUFmLENBRlA7QUFBQTtBQUFBLFFBRWhCQyxPQUZnQjtBQUFBLFFBRVBDLFVBRk87O0FBSXJCLFFBQUcsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNOLFFBQWQsQ0FBSixFQUNFQSxRQUFRLEdBQUcsQ0FBQ0EsUUFBRCxDQUFYO0FBRUZBLFlBQVEsR0FBR0EsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWU7QUFFckMsVUFBSUMsYUFBYSxHQUFHLEtBQXBCO0FBRUEsVUFBR1AsT0FBTyxLQUFLLENBQVosSUFBaUJNLEdBQUcsS0FBSyxDQUE1QixFQUNFQyxhQUFhLEdBQUcsSUFBaEI7QUFFRiwwQkFBT1Qsa0JBQU1VLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CQyxXQUFHLEVBQUhBLEdBRCtCO0FBRS9CTixlQUFPLEVBQVBBLE9BRitCO0FBRy9CQyxrQkFBVSxFQUFWQSxVQUgrQjtBQUkvQk0scUJBQWEsRUFBYkE7QUFKK0IsT0FBMUIsQ0FBUDtBQU1ELEtBYlUsQ0FBWDtBQWVBWCxTQUFLLG1DQUNBQSxLQURBO0FBRUhDLGNBQVEsRUFBUkE7QUFGRyxNQUFMOztBQUtBLFFBQUlZLFNBQVMsZ0JBQUdYLGtCQUFNVSxZQUFOLENBQW1CYixNQUFNLENBQUNDLEtBQUQsQ0FBekIsQ0FBaEI7O0FBQ0EsV0FBT2EsU0FBUDtBQUNELEdBN0JEO0FBOEJELENBL0JEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LmU4NDMzNzQxYWQ1NDFlYTBhYmU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIGxldCB7Y2hpbGRyZW59ID0gcHJvcHM7XHJcbiAgICBsZXQgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKVxyXG4gICAgICBjaGlsZHJlbiA9IFtjaGlsZHJlbl07XHJcblxyXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoKGNoaWxkLCBrZXkpPT4ge1xyXG5cclxuICAgICAgbGV0IGRlZmF1bHRBY3RpdmUgPSBmYWxzZTtcclxuICBcclxuICAgICAgaWYoY2hlY2tlZCA9PT0gMCAmJiBrZXkgPT09IDApXHJcbiAgICAgICAgZGVmYXVsdEFjdGl2ZSA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgY2hlY2tlZCwgXHJcbiAgICAgICAgc2V0Q2hlY2tlZCxcclxuICAgICAgICBkZWZhdWx0QWN0aXZlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgLi4ucHJvcHMsXHJcbiAgICAgIGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IENvbXBvbmVudCA9IFJlYWN0LmNsb25lRWxlbWVudChtZXRob2QocHJvcHMpKTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==