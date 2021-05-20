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
var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, persistedState, (0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__.default));
store.subscribe(function () {
  (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveState)({
    'persistReducer': store.getState().persistReducer
  });
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsicGVyc2lzdGVkU3RhdGUiLCJsb2FkU3RhdGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZWRSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwic3Vic2NyaWJlIiwic2F2ZVN0YXRlIiwiZ2V0U3RhdGUiLCJwZXJzaXN0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLHdEQUFTLEVBQWhDO0FBRUEsSUFBTUMsS0FBSyxHQUFHQyxrREFBVyxDQUN2QkMsOENBRHVCLEVBRXZCSixjQUZ1QixFQUd2Qkssc0RBQWUsQ0FBQ0MsZ0RBQUQsQ0FIUSxDQUF6QjtBQU1BSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0IsWUFBSztBQUNuQkMsMERBQVMsQ0FBQztBQUNSLHNCQUFrQk4sS0FBSyxDQUFDTyxRQUFOLEdBQWlCQztBQUQzQixHQUFELENBQVQ7QUFHRCxDQUpEO0FBTUEsK0RBQWVSLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNGU1MTgxYmE1ODdlNTI0Yjk1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0YXRlLCBzYXZlU3RhdGUgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgcGVyc2lzdGVkU3RhdGUgPSBsb2FkU3RhdGUoKTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgY29tYmluZWRSZWR1Y2VycywgXHJcbiAgcGVyc2lzdGVkU3RhdGUsXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxyXG4pXHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoKCk9PiB7XHJcbiAgc2F2ZVN0YXRlKHtcclxuICAgICdwZXJzaXN0UmVkdWNlcic6IHN0b3JlLmdldFN0YXRlKCkucGVyc2lzdFJlZHVjZXJcclxuICB9KVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=