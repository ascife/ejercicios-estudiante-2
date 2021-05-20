self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./helpers/verifier.js":
/*!*****************************!*\
  !*** ./helpers/verifier.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

module.exports = function (method) {
  return function (props) {
    //get the verifier, example: verifier = 'Name'
    var _props = props,
        verifier = _props.verifier,
        onError = _props.onError; //copy the props

    props = _objectSpread({}, props); //add the method verify

    props.verify = function (value) {
      return verify(verifier, value, onError || function () {
        return 1;
      });
    }; //get the component and the pass as parameter the props


    var Component = method(props);
    return Component;
  };
};

function verify(_x, _x2, _x3) {
  return _verify.apply(this, arguments);
} //you can extend these verifiers


function _verify() {
  _verify = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(verifier, value, onError) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            verifiers[verifier](value);
            _context.next = 8;
            break;

          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            onError({
              verifier: verifier,
              message: _context.t0
            });
            throw _context.t0;

          case 8:
            return _context.abrupt("return", true);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _verify.apply(this, arguments);
}

var verifiers = {};

verifiers.Name = function (value) {
  var regex, result;
  if (!value.length) throw 'Tienes que llenar este campo';
  regex = /^[a-zA-Z ]+$/;
  result = regex.test(value);
  if (!result) throw 'Revisa el nombre, es invalido'; //if is valid the value

  return true;
};

verifiers.Age = function (value) {
  var regex, result;
  if (!value.length) throw 'Tienes que llenar este campo';
  regex = /^([2-9][0-9])+$/;
  result = regex.test(value);
  if (!result) throw 'Debes tener minimo 22 años'; //if is valid the value

  return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy92ZXJpZmllci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0aG9kIiwicHJvcHMiLCJ2ZXJpZmllciIsIm9uRXJyb3IiLCJ2ZXJpZnkiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsInZlcmlmaWVycyIsIm1lc3NhZ2UiLCJOYW1lIiwicmVnZXgiLCJyZXN1bHQiLCJsZW5ndGgiLCJ0ZXN0IiwiQWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxNQUFULEVBQWlCO0FBQ2hDLFNBQU8sVUFBU0MsS0FBVCxFQUFnQjtBQUNyQjtBQURxQixpQkFFS0EsS0FGTDtBQUFBLFFBRWhCQyxRQUZnQixVQUVoQkEsUUFGZ0I7QUFBQSxRQUVOQyxPQUZNLFVBRU5BLE9BRk0sRUFJckI7O0FBQ0FGLFNBQUsscUJBQU9BLEtBQVAsQ0FBTCxDQUxxQixDQU9yQjs7QUFDQUEsU0FBSyxDQUFDRyxNQUFOLEdBQWUsVUFBQ0MsS0FBRCxFQUFVO0FBQ3ZCLGFBQU9ELE1BQU0sQ0FBQ0YsUUFBRCxFQUFXRyxLQUFYLEVBQWtCRixPQUFPLElBQUs7QUFBQSxlQUFLLENBQUw7QUFBQSxPQUE5QixDQUFiO0FBQ0QsS0FGRCxDQVJxQixDQVlyQjs7O0FBQ0EsUUFBSUcsU0FBUyxHQUFHTixNQUFNLENBQUNDLEtBQUQsQ0FBdEI7QUFDQSxXQUFPSyxTQUFQO0FBQ0QsR0FmRDtBQWdCRCxDQWpCRDs7U0FtQmVGLE07O0VBZ0JmOzs7O3FFQWhCQSxpQkFBc0JGLFFBQXRCLEVBQWdDRyxLQUFoQyxFQUF1Q0YsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUlJLHFCQUFTLENBQUNMLFFBQUQsQ0FBVCxDQUFvQkcsS0FBcEI7QUFGSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1JRixtQkFBTyxDQUFDO0FBQ05ELHNCQUFRLEVBQUVBLFFBREo7QUFFTk0scUJBQU87QUFGRCxhQUFELENBQVA7QUFOSjs7QUFBQTtBQUFBLDZDQWFTLElBYlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlCQSxJQUFNRCxTQUFTLEdBQUcsRUFBbEI7O0FBRUFBLFNBQVMsQ0FBQ0UsSUFBVixHQUFpQixVQUFTSixLQUFULEVBQWdCO0FBQy9CLE1BQUlLLEtBQUosRUFBV0MsTUFBWDtBQUVBLE1BQUcsQ0FBQ04sS0FBSyxDQUFDTyxNQUFWLEVBQ0UsTUFBTSw4QkFBTjtBQUVGRixPQUFLLEdBQUcsY0FBUjtBQUNBQyxRQUFNLEdBQUdELEtBQUssQ0FBQ0csSUFBTixDQUFXUixLQUFYLENBQVQ7QUFFQSxNQUFHLENBQUNNLE1BQUosRUFDRSxNQUFNLCtCQUFOLENBVjZCLENBWS9COztBQUNBLFNBQU8sSUFBUDtBQUNELENBZEQ7O0FBZ0JBSixTQUFTLENBQUNPLEdBQVYsR0FBZ0IsVUFBU1QsS0FBVCxFQUFnQjtBQUM5QixNQUFJSyxLQUFKLEVBQVdDLE1BQVg7QUFFQSxNQUFHLENBQUNOLEtBQUssQ0FBQ08sTUFBVixFQUNFLE1BQU0sOEJBQU47QUFFRkYsT0FBSyxHQUFHLGlCQUFSO0FBQ0FDLFFBQU0sR0FBR0QsS0FBSyxDQUFDRyxJQUFOLENBQVdSLEtBQVgsQ0FBVDtBQUVBLE1BQUcsQ0FBQ00sTUFBSixFQUNFLE1BQU0sNEJBQU4sQ0FWNEIsQ0FZOUI7O0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FkRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC40ODhiMmNkYTlhZmVmODIyYTMzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIC8vZ2V0IHRoZSB2ZXJpZmllciwgZXhhbXBsZTogdmVyaWZpZXIgPSAnTmFtZSdcclxuICAgIGxldCB7dmVyaWZpZXIsIG9uRXJyb3J9ID0gcHJvcHM7XHJcblxyXG4gICAgLy9jb3B5IHRoZSBwcm9wc1xyXG4gICAgcHJvcHMgPSB7Li4ucHJvcHN9XHJcblxyXG4gICAgLy9hZGQgdGhlIG1ldGhvZCB2ZXJpZnlcclxuICAgIHByb3BzLnZlcmlmeSA9ICh2YWx1ZSk9PiB7XHJcbiAgICAgIHJldHVybiB2ZXJpZnkodmVyaWZpZXIsIHZhbHVlLCBvbkVycm9yIHx8ICgoKT0+IDEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB0aGUgY29tcG9uZW50IGFuZCB0aGUgcGFzcyBhcyBwYXJhbWV0ZXIgdGhlIHByb3BzXHJcbiAgICBsZXQgQ29tcG9uZW50ID0gbWV0aG9kKHByb3BzKTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnkodmVyaWZpZXIsIHZhbHVlLCBvbkVycm9yKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZlcmlmaWVyc1t2ZXJpZmllcl0odmFsdWUpO1xyXG4gICAgXHJcbiAgfWNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgb25FcnJvcih7XHJcbiAgICAgIHZlcmlmaWVyOiB2ZXJpZmllcixcclxuICAgICAgbWVzc2FnZTogZXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vL3lvdSBjYW4gZXh0ZW5kIHRoZXNlIHZlcmlmaWVyc1xyXG5jb25zdCB2ZXJpZmllcnMgPSB7fVxyXG5cclxudmVyaWZpZXJzLk5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGxldCByZWdleCwgcmVzdWx0O1xyXG5cclxuICBpZighdmFsdWUubGVuZ3RoKVxyXG4gICAgdGhyb3cgJ1RpZW5lcyBxdWUgbGxlbmFyIGVzdGUgY2FtcG8nO1xyXG5cclxuICByZWdleCA9IC9eW2EtekEtWiBdKyQvO1xyXG4gIHJlc3VsdCA9IHJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cclxuICBpZighcmVzdWx0KSBcclxuICAgIHRocm93ICdSZXZpc2EgZWwgbm9tYnJlLCBlcyBpbnZhbGlkbyc7XHJcblxyXG4gIC8vaWYgaXMgdmFsaWQgdGhlIHZhbHVlXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbnZlcmlmaWVycy5BZ2UgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gIGxldCByZWdleCwgcmVzdWx0O1xyXG5cclxuICBpZighdmFsdWUubGVuZ3RoKVxyXG4gICAgdGhyb3cgJ1RpZW5lcyBxdWUgbGxlbmFyIGVzdGUgY2FtcG8nO1xyXG5cclxuICByZWdleCA9IC9eKFsyLTldWzAtOV0pKyQvO1xyXG4gIHJlc3VsdCA9IHJlZ2V4LnRlc3QodmFsdWUpO1xyXG5cclxuICBpZighcmVzdWx0KSBcclxuICAgIHRocm93ICdEZWJlcyB0ZW5lciBtaW5pbW8gMjIgYcOxb3MnO1xyXG5cclxuICAvL2lmIGlzIHZhbGlkIHRoZSB2YWx1ZVxyXG4gIHJldHVybiB0cnVlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==