self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./store/localstorage.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var persistedState = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.loadState)();
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default));
store.subscribe(function () {
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveState)({});
});
/* harmony default export */ __webpack_exports__["default"] = (store);

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

/***/ "./store/localstorage.js":
/*!*******************************!*\
  !*** ./store/localstorage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadState": function() { return /* binding */ loadState; },
/* harmony export */   "saveState": function() { return /* binding */ saveState; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {//ignore write errors
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2xvY2Fsc3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJwZXJzaXN0ZWRTdGF0ZSIsImxvYWRTdGF0ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lZFJlZHVjZXJzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJzdWJzY3JpYmUiLCJzYXZlU3RhdGUiLCJzZXJpYWxpemVkU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwic3RhdGUiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0Msd0RBQVMsRUFBaEM7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLGtEQUFXLENBQUNDLDhDQUFELEVBQW1CQyxzREFBZSxDQUFDQyxnREFBRCxDQUFsQyxDQUF6QjtBQUVBSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0IsWUFBSztBQUNuQkMsMERBQVMsQ0FBQyxFQUFELENBQVQ7QUFHRCxDQUpEO0FBTUEsK0RBQWVOLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTyxJQUFNRCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBQzVCLE1BQUk7QUFDRixRQUFNUSxlQUFlLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUF4QjtBQUNBLFFBQUdGLGVBQWUsS0FBSyxJQUF2QixFQUNFLE9BQU9HLFNBQVA7QUFDRixXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsZUFBWCxDQUFQO0FBRUQsR0FORCxDQU1DLE9BQU1NLEdBQU4sRUFBVztBQUNWLFdBQU9ILFNBQVA7QUFDRDtBQUNGLENBVk07QUFZQSxJQUFNSixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUSxLQUFELEVBQVU7QUFDakMsTUFBSTtBQUNGLFFBQU1QLGVBQWUsR0FBR0ksSUFBSSxDQUFDSSxTQUFMLENBQWVELEtBQWYsQ0FBeEI7QUFDQU4sZ0JBQVksQ0FBQ1EsT0FBYixDQUFxQixPQUFyQixFQUE4QlQsZUFBOUI7QUFDRCxHQUhELENBR0MsT0FBTU0sR0FBTixFQUFXLENBQ1Y7QUFDRDtBQUNGLENBUE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMjMzZmQ3YmE4YTM5ZGE2MWM5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0YXRlLCBzYXZlU3RhdGUgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgcGVyc2lzdGVkU3RhdGUgPSBsb2FkU3RhdGUoKTtcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lZFJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKT0+IHtcclxuICBzYXZlU3RhdGUoe1xyXG4gICAgXHJcbiAgfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgY29uc3QgbG9hZFN0YXRlID0gKCk9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RhdGVcIik7XHJcbiAgICBpZihzZXJpYWxpemVkU3RhdGUgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RhdGUpO1xyXG4gICAgXHJcbiAgfWNhdGNoKGVycikge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9ICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVTdGF0ZSA9IChzdGF0ZSk9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRTdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIHNlcmlhbGl6ZWRTdGF0ZSk7XHJcbiAgfWNhdGNoKGVycikge1xyXG4gICAgLy9pZ25vcmUgd3JpdGUgZXJyb3JzXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==