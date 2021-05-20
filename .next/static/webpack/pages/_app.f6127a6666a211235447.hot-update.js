self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/persist.js":
/*!***********************************!*\
  !*** ./store/reducers/persist.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; },
/* harmony export */   "persisted": function() { return /* binding */ persisted; }
/* harmony export */ });
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//set values from the exterior
var _state = {}; //types creators

var SET_PERSIST = 'SET_LAST'; //reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  function updateState(newState) {
    return _objectSpread(_objectSpread({}, state), newState);
  }

  switch (action.type) {
    case SET_PERSIST:
      return updateState((0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, action.key, action.value));

    default:
      return state;
  }
} //action creators

var persisted = function persisted(key, value) {
  return function (dispath, getState) {
    dispath({
      type: SET_PERSIST,
      key: key,
      value: value
    });
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcGVyc2lzdC5qcyJdLCJuYW1lcyI6WyJfc3RhdGUiLCJTRVRfUEVSU0lTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJ0eXBlIiwia2V5IiwidmFsdWUiLCJwZXJzaXN0ZWQiLCJkaXNwYXRoIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxFQUFmLEMsQ0FFQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsVUFBcEIsQyxDQUVBOztBQUNlLFNBQVNDLE9BQVQsR0FBdUM7QUFBQSxNQUF0QkMsS0FBc0IsdUVBQWhCSCxNQUFnQjtBQUFBLE1BQVJJLE1BQVE7O0FBRXBELFdBQVNDLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCLDJDQUNLSCxLQURMLEdBRUtHLFFBRkw7QUFJRDs7QUFFRCxVQUFPRixNQUFNLENBQUNHLElBQWQ7QUFDRSxTQUFLTixXQUFMO0FBQ0UsYUFBT0ksV0FBVyxDQUFDLHNKQUNoQkQsTUFBTSxDQUFDSSxHQURRLEVBQ0ZKLE1BQU0sQ0FBQ0ssS0FETCxFQUFsQjs7QUFJRjtBQUNFLGFBQU9OLEtBQVA7QUFQSjtBQVNELEMsQ0FFRDs7QUFDTyxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDRixHQUFELEVBQU1DLEtBQU47QUFBQSxTQUFlLFVBQUNFLE9BQUQsRUFBVUMsUUFBVixFQUFzQjtBQUM1REQsV0FBTyxDQUFDO0FBQ05KLFVBQUksRUFBRU4sV0FEQTtBQUVOTyxTQUFHLEVBQUVBLEdBRkM7QUFHTkMsV0FBSyxFQUFFQTtBQUhELEtBQUQsQ0FBUDtBQUtELEdBTndCO0FBQUEsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNjEyN2E2NjY2YTIxMTIzNTQ0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9zZXQgdmFsdWVzIGZyb20gdGhlIGV4dGVyaW9yXHJcbmNvbnN0IF9zdGF0ZSA9IHt9XHJcblxyXG4vL3R5cGVzIGNyZWF0b3JzXHJcbmNvbnN0IFNFVF9QRVJTSVNUID0gJ1NFVF9MQVNUJztcclxuXHJcbi8vcmVkdWNlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlPV9zdGF0ZSwgYWN0aW9uKSB7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgLi4ubmV3U3RhdGVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfUEVSU0lTVDpcclxuICAgICAgcmV0dXJuIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICBbYWN0aW9uLmtleV06IGFjdGlvbi52YWx1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JzXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0ZWQgPSAoa2V5LCB2YWx1ZSk9PiAoZGlzcGF0aCwgZ2V0U3RhdGUpPT4ge1xyXG4gIGRpc3BhdGgoe1xyXG4gICAgdHlwZTogU0VUX1BFUlNJU1QsXHJcbiAgICBrZXk6IGtleSxcclxuICAgIHZhbHVlOiB2YWx1ZVxyXG4gIH0pICBcclxufSAiXSwic291cmNlUm9vdCI6IiJ9