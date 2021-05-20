self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persist */ "./store/reducers/persist.js");
/* module decorator */ module = __webpack_require__.hmd(module);


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  persistReducer: _persist__WEBPACK_IMPORTED_MODULE_0__.default
}));

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


/***/ }),

/***/ "./store/reducers/persist.js":
/*!***********************************!*\
  !*** ./store/reducers/persist.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; },
/* harmony export */   "setPersist": function() { return /* binding */ setPersist; }
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

var setPersist = function setPersist(key, value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL3BlcnNpc3QuanMiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdFJlZHVjZXIiLCJfc3RhdGUiLCJTRVRfUEVSU0lTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJ0eXBlIiwia2V5IiwidmFsdWUiLCJzZXRQZXJzaXN0IiwiZGlzcGF0aCIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxzREFBZSxDQUFDO0FBQzdCQyxnQkFBYyxFQUFkQSw2Q0FBY0E7QUFEZSxDQUFELENBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWYsQyxDQUVBOztBQUNBLElBQU1DLFdBQVcsR0FBRyxVQUFwQixDLENBRUE7O0FBQ2UsU0FBU0MsT0FBVCxHQUF1QztBQUFBLE1BQXRCQyxLQUFzQix1RUFBaEJILE1BQWdCO0FBQUEsTUFBUkksTUFBUTs7QUFFcEQsV0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0IsMkNBQ0tILEtBREwsR0FFS0csUUFGTDtBQUlEOztBQUVELFVBQU9GLE1BQU0sQ0FBQ0csSUFBZDtBQUNFLFNBQUtOLFdBQUw7QUFDRSxhQUFPSSxXQUFXLENBQUMsc0pBQ2hCRCxNQUFNLENBQUNJLEdBRFEsRUFDRkosTUFBTSxDQUFDSyxLQURMLEVBQWxCOztBQUlGO0FBQ0UsYUFBT04sS0FBUDtBQVBKO0FBU0QsQyxDQUVEOztBQUNPLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFNBQWUsVUFBQ0UsT0FBRCxFQUFVQyxRQUFWLEVBQXNCO0FBQzdERCxXQUFPLENBQUM7QUFDTkosVUFBSSxFQUFFTixXQURBO0FBRU5PLFNBQUcsRUFBRUEsR0FGQztBQUdOQyxXQUFLLEVBQUVBO0FBSEQsS0FBRCxDQUFQO0FBS0QsR0FOeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiZTQ3Y2JkYjc1MzZjZmUzOWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBwZXJzaXN0UmVkdWNlciBmcm9tICcuL3BlcnNpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICBwZXJzaXN0UmVkdWNlclxyXG59KSIsIi8vc2V0IHZhbHVlcyBmcm9tIHRoZSBleHRlcmlvclxyXG5jb25zdCBfc3RhdGUgPSB7fVxyXG5cclxuLy90eXBlcyBjcmVhdG9yc1xyXG5jb25zdCBTRVRfUEVSU0lTVCA9ICdTRVRfTEFTVCc7XHJcblxyXG4vL3JlZHVjZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZT1fc3RhdGUsIGFjdGlvbikge1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC4uLm5ld1N0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX1BFUlNJU1Q6XHJcbiAgICAgIHJldHVybiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgW2FjdGlvbi5rZXldOiBhY3Rpb24udmFsdWVcclxuICAgICAgfSlcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yc1xyXG5leHBvcnQgY29uc3Qgc2V0UGVyc2lzdCA9IChrZXksIHZhbHVlKT0+IChkaXNwYXRoLCBnZXRTdGF0ZSk9PiB7XHJcbiAgZGlzcGF0aCh7XHJcbiAgICB0eXBlOiBTRVRfUEVSU0lTVCxcclxuICAgIGtleToga2V5LFxyXG4gICAgdmFsdWU6IHZhbHVlXHJcbiAgfSkgIFxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=