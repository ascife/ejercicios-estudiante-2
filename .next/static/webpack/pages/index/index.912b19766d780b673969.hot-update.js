self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./helpers/checkbox.js":
/*!*****************************!*\
  !*** ./helpers/checkbox.js ***!
  \*****************************/
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
        checked = _props.checked,
        setChecked = _props.setChecked,
        defaultActive = _props.defaultActive;

    var _React$useState = _react["default"].useState(),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        checkID = _React$useState2[0],
        setCheckID = _React$useState2[1];

    var active = false;
    if (defaultActive) active = true;
    if (checked.id === checkID) active = true;

    function onClick(ev) {
      var current = ev.currentTarget;
      var id = Math.random() * 10000;
      var value = current.value || current.innerText;
      setCheckID(id);
      setChecked({
        id: id,
        value: value
      });
    }

    props = _objectSpread(_objectSpread({}, props), {}, {
      active: active
    });

    var Component = /*#__PURE__*/_react["default"].cloneElement(method(props), {
      onClick: onClick
    });

    return Component;
  }, "JQK3INvIWnJcyn6y7NVncU0Iy0I=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0aG9kIiwicHJvcHMiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRlZmF1bHRBY3RpdmUiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tJRCIsInNldENoZWNrSUQiLCJhY3RpdmUiLCJpZCIsIm9uQ2xpY2siLCJldiIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiTWF0aCIsInJhbmRvbSIsInZhbHVlIiwiaW5uZXJUZXh0IiwiQ29tcG9uZW50IiwiY2xvbmVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxNQUFULEVBQWlCO0FBQUE7O0FBQ2hDLFlBQU8sVUFBU0MsS0FBVCxFQUFnQjtBQUFBOztBQUFBLGlCQUNzQkEsS0FEdEI7QUFBQSxRQUNoQkMsT0FEZ0IsVUFDaEJBLE9BRGdCO0FBQUEsUUFDUEMsVUFETyxVQUNQQSxVQURPO0FBQUEsUUFDS0MsYUFETCxVQUNLQSxhQURMOztBQUFBLDBCQUVPQyxrQkFBTUMsUUFBTixFQUZQO0FBQUE7QUFBQSxRQUVoQkMsT0FGZ0I7QUFBQSxRQUVQQyxVQUZPOztBQUdyQixRQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUVBLFFBQUdMLGFBQUgsRUFDRUssTUFBTSxHQUFHLElBQVQ7QUFFRixRQUFHUCxPQUFPLENBQUNRLEVBQVIsS0FBZUgsT0FBbEIsRUFDRUUsTUFBTSxHQUFHLElBQVQ7O0FBRUYsYUFBU0UsT0FBVCxDQUFpQkMsRUFBakIsRUFBcUI7QUFDbkIsVUFBTUMsT0FBTyxHQUFHRCxFQUFFLENBQUNFLGFBQW5CO0FBRUEsVUFBSUosRUFBRSxHQUFHSyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsS0FBekI7QUFDQSxVQUFJQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ksS0FBUixJQUFpQkosT0FBTyxDQUFDSyxTQUFyQztBQUVBVixnQkFBVSxDQUFDRSxFQUFELENBQVY7QUFDQVAsZ0JBQVUsQ0FBQztBQUFDTyxVQUFFLEVBQUZBLEVBQUQ7QUFBS08sYUFBSyxFQUFMQTtBQUFMLE9BQUQsQ0FBVjtBQUNEOztBQUVEaEIsU0FBSyxtQ0FDQUEsS0FEQTtBQUVIUSxZQUFNLEVBQU5BO0FBRkcsTUFBTDs7QUFLQSxRQUFJVSxTQUFTLGdCQUFHZCxrQkFBTWUsWUFBTixDQUFtQnBCLE1BQU0sQ0FBQ0MsS0FBRCxDQUF6QixFQUFrQztBQUNoRFUsYUFBTyxFQUFQQTtBQURnRCxLQUFsQyxDQUFoQjs7QUFJQSxXQUFPUSxTQUFQO0FBQ0QsR0EvQkQ7QUFnQ0QsQ0FqQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguOTEyYjE5NzY2ZDc4MGI2NzM5NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihwcm9wcykge1xyXG4gICAgbGV0IHtjaGVja2VkLCBzZXRDaGVja2VkLCBkZWZhdWx0QWN0aXZlfSA9IHByb3BzO1xyXG4gICAgbGV0IFtjaGVja0lELCBzZXRDaGVja0lEXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZGVmYXVsdEFjdGl2ZSlcclxuICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICBpZihjaGVja2VkLmlkID09PSBjaGVja0lEKVxyXG4gICAgICBhY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soZXYpIHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IGV2LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDA7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGN1cnJlbnQudmFsdWUgfHwgY3VycmVudC5pbm5lclRleHQ7XHJcbiAgICAgIFxyXG4gICAgICBzZXRDaGVja0lEKGlkKTtcclxuICAgICAgc2V0Q2hlY2tlZCh7aWQsIHZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICBhY3RpdmVcclxuICAgIH1cclxuXHJcbiAgICBsZXQgQ29tcG9uZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KG1ldGhvZChwcm9wcyksIHtcclxuICAgICAgb25DbGlja1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=