self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./store/reducers/persist.js":
/*!***********************************!*\
  !*** ./store/reducers/persist.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; },
/* harmony export */   "persist": function() { return /* binding */ persist; }
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

var persist = function persist(key, value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcGVyc2lzdC5qcyJdLCJuYW1lcyI6WyJfc3RhdGUiLCJTRVRfUEVSU0lTVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZVN0YXRlIiwibmV3U3RhdGUiLCJ0eXBlIiwia2V5IiwidmFsdWUiLCJwZXJzaXN0IiwiZGlzcGF0aCIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxNQUFNLEdBQUcsRUFBZixDLENBRUE7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFVBQXBCLEMsQ0FFQTs7QUFDZSxTQUFTQyxPQUFULEdBQXVDO0FBQUEsTUFBdEJDLEtBQXNCLHVFQUFoQkgsTUFBZ0I7QUFBQSxNQUFSSSxNQUFROztBQUVwRCxXQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QiwyQ0FDS0gsS0FETCxHQUVLRyxRQUZMO0FBSUQ7O0FBRUQsVUFBT0YsTUFBTSxDQUFDRyxJQUFkO0FBQ0UsU0FBS04sV0FBTDtBQUNFLGFBQU9JLFdBQVcsQ0FBQyxzSkFDaEJELE1BQU0sQ0FBQ0ksR0FEUSxFQUNGSixNQUFNLENBQUNLLEtBREwsRUFBbEI7O0FBSUY7QUFDRSxhQUFPTixLQUFQO0FBUEo7QUFTRCxDLENBRUQ7O0FBQ08sSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0YsR0FBRCxFQUFNQyxLQUFOO0FBQUEsU0FBZSxVQUFDRSxPQUFELEVBQVVDLFFBQVYsRUFBc0I7QUFDMURELFdBQU8sQ0FBQztBQUNOSixVQUFJLEVBQUVOLFdBREE7QUFFTk8sU0FBRyxFQUFFQSxHQUZDO0FBR05DLFdBQUssRUFBRUE7QUFIRCxLQUFELENBQVA7QUFLRCxHQU5zQjtBQUFBLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LmEyZGRjOTU0NjhjNDQyNjg3MjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NldCB2YWx1ZXMgZnJvbSB0aGUgZXh0ZXJpb3JcclxuY29uc3QgX3N0YXRlID0ge31cclxuXHJcbi8vdHlwZXMgY3JlYXRvcnNcclxuY29uc3QgU0VUX1BFUlNJU1QgPSAnU0VUX0xBU1QnO1xyXG5cclxuLy9yZWR1Y2VyXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU9X3N0YXRlLCBhY3Rpb24pIHtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAuLi5uZXdTdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9QRVJTSVNUOlxyXG4gICAgICByZXR1cm4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgIFthY3Rpb24ua2V5XTogYWN0aW9uLnZhbHVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvcnNcclxuZXhwb3J0IGNvbnN0IHBlcnNpc3QgPSAoa2V5LCB2YWx1ZSk9PiAoZGlzcGF0aCwgZ2V0U3RhdGUpPT4ge1xyXG4gIGRpc3BhdGgoe1xyXG4gICAgdHlwZTogU0VUX1BFUlNJU1QsXHJcbiAgICBrZXk6IGtleSxcclxuICAgIHZhbHVlOiB2YWx1ZVxyXG4gIH0pICBcclxufSAiXSwic291cmNlUm9vdCI6IiJ9