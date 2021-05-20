self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./components/Block.js":
/*!*****************************!*\
  !*** ./components/Block.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Block.module.css */ "./components/Block.module.css");
/* harmony import */ var _Block_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Block_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\my-student2\\components\\Block.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Block = {};

Block.Participant = function (props) {
  var name = props.name,
      category = props.category;
  var categorys = {
    route: 'Bicicleta de ruta',
    mountain: 'Bicicleta de montaña'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().participant),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/image/cat-".concat(category, ".svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().category),
        children: categorys[category]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

Block.Report = function (props) {
  var label = props.label,
      value = props.value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({
    className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().report)
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().value),
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

Block.Category = function (props) {
  var category = props.category;
  var categorys = {
    route: 'Bicicleta de ruta',
    mountain: 'Bicicleta de montaña'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({
    className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().category)
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().left),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/image/cat-".concat(category, ".svg")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().right),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_Block_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
        children: categorys[category]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
};

/* harmony default export */ __webpack_exports__["default"] = (Block);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9jay5qcyJdLCJuYW1lcyI6WyJCbG9jayIsIlBhcnRpY2lwYW50IiwicHJvcHMiLCJuYW1lIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeXMiLCJyb3V0ZSIsIm1vdW50YWluIiwic3R5bGVzIiwiUmVwb3J0IiwibGFiZWwiLCJ2YWx1ZSIsInJlcG9ydCIsIkNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsRUFBZDs7QUFFQUEsS0FBSyxDQUFDQyxXQUFOLEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFBQSxNQUM3QkMsSUFENkIsR0FDWEQsS0FEVyxDQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsUUFEdUIsR0FDWEYsS0FEVyxDQUN2QkUsUUFEdUI7QUFHbEMsTUFBSUMsU0FBUyxHQUFHO0FBQ2RDLFNBQUssRUFBRSxtQkFETztBQUVkQyxZQUFRLEVBQUU7QUFGSSxHQUFoQjtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxzRUFBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUEsK0RBQWhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLHVCQUFnQkosUUFBaEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVJLGdFQUFoQjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBRUEsK0RBQWQ7QUFBQSxrQkFBNEJMO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUcsaUJBQVMsRUFBRUssbUVBQWQ7QUFBQSxrQkFBZ0NILFNBQVMsQ0FBQ0QsUUFBRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCxDQW5CRDs7QUFxQkFKLEtBQUssQ0FBQ1MsTUFBTixHQUFlLFVBQVNQLEtBQVQsRUFBZ0I7QUFBQSxNQUN4QlEsS0FEd0IsR0FDUlIsS0FEUSxDQUN4QlEsS0FEd0I7QUFBQSxNQUNqQkMsS0FEaUIsR0FDUlQsS0FEUSxDQUNqQlMsS0FEaUI7QUFHN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVILGlFQUFhSTtBQUE3QixLQUFtQ1YsS0FBbkM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRU0sK0RBQWhCO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFQSxnRUFBZDtBQUFBLGtCQUE2Qkc7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFSCxnRUFBaEI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUVBLGdFQUFkO0FBQUEsa0JBQTZCRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQsQ0FiRDs7QUFlQVYsS0FBSyxDQUFDYSxRQUFOLEdBQWlCLFVBQVNYLEtBQVQsRUFBZ0I7QUFBQSxNQUMxQkUsUUFEMEIsR0FDZEYsS0FEYyxDQUMxQkUsUUFEMEI7QUFHL0IsTUFBSUMsU0FBUyxHQUFHO0FBQ2RDLFNBQUssRUFBRSxtQkFETztBQUVkQyxZQUFRLEVBQUU7QUFGSSxHQUFoQjtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxtRUFBZUo7QUFBL0IsS0FBcUNGLEtBQXJDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVNLCtEQUFoQjtBQUFBLDZCQUNFO0FBQUssV0FBRyx1QkFBZ0JKLFFBQWhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFSSxnRUFBaEI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUVBLGdFQUFkO0FBQUEsa0JBQTZCSCxTQUFTLENBQUNELFFBQUQ7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVELENBbEJEOztBQW9CQSwrREFBZUosS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC40MzYwYmUwN2FlZGQyZmE3YjczNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jsb2NrLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQmxvY2sgPSB7fTtcclxuXHJcbkJsb2NrLlBhcnRpY2lwYW50ID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuICBsZXQge25hbWUsIGNhdGVnb3J5fSA9IHByb3BzO1xyXG5cclxuICBsZXQgY2F0ZWdvcnlzID0ge1xyXG4gICAgcm91dGU6ICdCaWNpY2xldGEgZGUgcnV0YScsXHJcbiAgICBtb3VudGFpbjogJ0JpY2ljbGV0YSBkZSBtb250YcOxYSdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcnRpY2lwYW50fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICA8aW1nIHNyYz17YC9pbWFnZS9jYXQtJHtjYXRlZ29yeX0uc3ZnYH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT57Y2F0ZWdvcnlzW2NhdGVnb3J5XX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5CbG9jay5SZXBvcnQgPSBmdW5jdGlvbihwcm9wcykge1xyXG4gIGxldCB7bGFiZWwsIHZhbHVlfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBvcnR9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWV9Pnt2YWx1ZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkJsb2NrLkNhdGVnb3J5ID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuICBsZXQge2NhdGVnb3J5fSA9IHByb3BzO1xyXG5cclxuICBsZXQgY2F0ZWdvcnlzID0ge1xyXG4gICAgcm91dGU6ICdCaWNpY2xldGEgZGUgcnV0YScsXHJcbiAgICBtb3VudGFpbjogJ0JpY2ljbGV0YSBkZSBtb250YcOxYSdcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XHJcbiAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2UvY2F0LSR7Y2F0ZWdvcnl9LnN2Z2B9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT57Y2F0ZWdvcnlzW2NhdGVnb3J5XX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9jazsiXSwic291cmNlUm9vdCI6IiJ9