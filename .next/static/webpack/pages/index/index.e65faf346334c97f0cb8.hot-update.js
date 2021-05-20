self["webpackHotUpdate_N_E"]("pages/index/index",{

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/map */ "./helpers/map.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Form */ "./components/Form.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./components/Container.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\my-student2\\pages\\index\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null,
    participants: [{
      name: "Andres",
      category: "route"
    }, {
      name: "Cristian",
      category: "mountain"
    }, {
      name: "Luis patiño",
      category: "route"
    }],
    report: {
      'total participantes': {
        label: 'total parcipantes',
        value: '200'
      },
      'total mujeres': {
        label: 'Mujeres',
        value: '90'
      },
      'total hombres': {
        label: 'Hombres',
        value: '110'
      },
      'redimiento alto': {
        label: 'Rendimiento alto',
        value: '80'
      },
      'redimiento medio': {
        label: 'Rendimiento medio',
        value: '120'
      },
      'promedio edades': {
        label: 'Promedio edades',
        value: '22'
      }
    }
  }),
      _React$useState2 = (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  function updateState(nstate) {
    setState(_objectSpread(_objectSpread({}, state), nstate));
  }

  var errors = [];
  var report = {
    total: {
      participants: 0,
      womans: 0,
      mens: 0,
      ages: 0
    },
    average: {
      ages: 0
    },
    performance: {
      high: 0,
      medium: 0
    }
  };
  state.participants.forEach(function (participant) {
    var p = participant;
    report.total.participants += 1;
    report.total.ages += p.age;
    var total = report.total;
    report.average.ages = total.ages / total.participants; //perticipant men or woman

    if (p.gender === 'men') report.total.mens += 1;else if (p.gender === 'woman') report.total.womans += 1; //performance high or medium

    if (p.performance === 'high') report.performance.high += 1;else if (p.performance === 'medium') report.performance.medium += 1;
  });

  function addParticipant(data) {
    data.category = state.selectedCategory;
    state.participants.push(data);
    updateState({
      addParticipant: false
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.selectCategory,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: "Selecciona una categoria",
            onClose: function onClose(ev) {
              return updateState({
                selectCategory: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Category, {
              category: "route",
              onClick: function onClick(ev) {
                return updateState({
                  selectCategory: false,
                  addParticipant: true,
                  selectedCategory: 'route'
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Category, {
              category: "mountain",
              onClick: function onClick(ev) {
                return updateState({
                  selectCategory: false,
                  addParticipant: true,
                  selectedCategory: 'mountain'
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.addParticipant,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          onSubmit: addParticipant,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: "Agregar participante",
            onClose: function onClose(ev) {
              return updateState({
                addParticipant: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      my: 40,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Row, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Icon, {
          icon: "add",
          label: "Agregar participante",
          onClick: function onClick(ev) {
            return updateState({
              selectCategory: true
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Participant, {
            name: true,
            category: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      width: "700px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "f5Xd+HyVVshX1zPQ1io80rSlxWo=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicGFydGljaXBhbnRzIiwibmFtZSIsImNhdGVnb3J5IiwicmVwb3J0IiwibGFiZWwiLCJ2YWx1ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5zdGF0ZSIsImVycm9ycyIsInRvdGFsIiwid29tYW5zIiwibWVucyIsImFnZXMiLCJhdmVyYWdlIiwicGVyZm9ybWFuY2UiLCJoaWdoIiwibWVkaXVtIiwiZm9yRWFjaCIsInBhcnRpY2lwYW50IiwicCIsImFnZSIsImdlbmRlciIsImRhdGEiLCJwdXNoIiwiZXYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsd0JBQ1dDLHFEQUFBLENBQWU7QUFDdkNDLGtCQUFjLEVBQUUsS0FEdUI7QUFFdkNDLGtCQUFjLEVBQUUsS0FGdUI7QUFHdkNDLG9CQUFnQixFQUFFLElBSHFCO0FBSXZDQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsVUFBSSxFQUFFLFFBRFI7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FEWSxFQUtaO0FBQ0VELFVBQUksRUFBRSxVQURSO0FBRUVDLGNBQVEsRUFBRTtBQUZaLEtBTFksRUFTWjtBQUNFRCxVQUFJLEVBQUUsYUFEUjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQVRZLENBSnlCO0FBbUJ2Q0MsVUFBTSxFQUFFO0FBQ04sNkJBQXVCO0FBQ3JCQyxhQUFLLEVBQUUsbUJBRGM7QUFFckJDLGFBQUssRUFBRTtBQUZjLE9BRGpCO0FBTU4sdUJBQWlCO0FBQ2ZELGFBQUssRUFBRSxTQURRO0FBRWZDLGFBQUssRUFBRTtBQUZRLE9BTlg7QUFXTix1QkFBaUI7QUFDZkQsYUFBSyxFQUFFLFNBRFE7QUFFZkMsYUFBSyxFQUFFO0FBRlEsT0FYWDtBQWdCTix5QkFBbUI7QUFDakJELGFBQUssRUFBRSxrQkFEVTtBQUVqQkMsYUFBSyxFQUFFO0FBRlUsT0FoQmI7QUFxQk4sMEJBQW9CO0FBQ2xCRCxhQUFLLEVBQUUsbUJBRFc7QUFFbEJDLGFBQUssRUFBRTtBQUZXLE9BckJkO0FBMEJOLHlCQUFtQjtBQUNqQkQsYUFBSyxFQUFFLGlCQURVO0FBRWpCQyxhQUFLLEVBQUU7QUFGVTtBQTFCYjtBQW5CK0IsR0FBZixDQURYO0FBQUE7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFxRGYsV0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0JGLFlBQVEsaUNBQ0hELEtBREcsR0FFSEcsTUFGRyxFQUFSO0FBSUQ7O0FBRUQsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJUCxNQUFNLEdBQUc7QUFDWFEsU0FBSyxFQUFFO0FBQ0xYLGtCQUFZLEVBQUUsQ0FEVDtBQUVMWSxZQUFNLEVBQUUsQ0FGSDtBQUdMQyxVQUFJLEVBQUUsQ0FIRDtBQUlMQyxVQUFJLEVBQUU7QUFKRCxLQURJO0FBT1hDLFdBQU8sRUFBRTtBQUNQRCxVQUFJLEVBQUU7QUFEQyxLQVBFO0FBVVhFLGVBQVcsRUFBRTtBQUNYQyxVQUFJLEVBQUUsQ0FESztBQUVYQyxZQUFNLEVBQUU7QUFGRztBQVZGLEdBQWI7QUFnQkFaLE9BQUssQ0FBQ04sWUFBTixDQUFtQm1CLE9BQW5CLENBQTJCLFVBQUFDLFdBQVcsRUFBRztBQUN2QyxRQUFNQyxDQUFDLEdBQUdELFdBQVY7QUFFQWpCLFVBQU0sQ0FBQ1EsS0FBUCxDQUFhWCxZQUFiLElBQTZCLENBQTdCO0FBQ0FHLFVBQU0sQ0FBQ1EsS0FBUCxDQUFhRyxJQUFiLElBQXFCTyxDQUFDLENBQUNDLEdBQXZCO0FBSnVDLFFBTWxDWCxLQU5rQyxHQU16QlIsTUFOeUIsQ0FNbENRLEtBTmtDO0FBT3ZDUixVQUFNLENBQUNZLE9BQVAsQ0FBZUQsSUFBZixHQUFzQkgsS0FBSyxDQUFDRyxJQUFOLEdBQWFILEtBQUssQ0FBQ1gsWUFBekMsQ0FQdUMsQ0FTdkM7O0FBQ0EsUUFBR3FCLENBQUMsQ0FBQ0UsTUFBRixLQUFhLEtBQWhCLEVBQ0VwQixNQUFNLENBQUNRLEtBQVAsQ0FBYUUsSUFBYixJQUFxQixDQUFyQixDQURGLEtBR0ssSUFBR1EsQ0FBQyxDQUFDRSxNQUFGLEtBQWEsT0FBaEIsRUFDSHBCLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQyxNQUFiLElBQXVCLENBQXZCLENBZHFDLENBZ0J2Qzs7QUFDQSxRQUFHUyxDQUFDLENBQUNMLFdBQUYsS0FBa0IsTUFBckIsRUFDRWIsTUFBTSxDQUFDYSxXQUFQLENBQW1CQyxJQUFuQixJQUEyQixDQUEzQixDQURGLEtBR0ssSUFBR0ksQ0FBQyxDQUFDTCxXQUFGLEtBQWtCLFFBQXJCLEVBQ0hiLE1BQU0sQ0FBQ2EsV0FBUCxDQUFtQkUsTUFBbkIsSUFBNkIsQ0FBN0I7QUFFSCxHQXZCRDs7QUF5QkEsV0FBU3JCLGNBQVQsQ0FBd0IyQixJQUF4QixFQUE4QjtBQUM1QkEsUUFBSSxDQUFDdEIsUUFBTCxHQUFnQkksS0FBSyxDQUFDUCxnQkFBdEI7QUFDQU8sU0FBSyxDQUFDTixZQUFOLENBQW1CeUIsSUFBbkIsQ0FBd0JELElBQXhCO0FBRUFoQixlQUFXLENBQUM7QUFDVlgsb0JBQWMsRUFBRTtBQUROLEtBQUQsQ0FBWDtBQUdEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBTyxZQUFNLEVBQUVTLEtBQUssQ0FBQ1IsY0FBckI7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQUEsa0NBQ0UsOERBQUMsNERBQUQ7QUFDRSxpQkFBSyxFQUFDLDBCQURSO0FBRUUsbUJBQU8sRUFBRSxpQkFBQTRCLEVBQUU7QUFBQSxxQkFBSWxCLFdBQVcsQ0FBQztBQUFDViw4QkFBYyxFQUFFO0FBQWpCLGVBQUQsQ0FBZjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFDRSxzQkFBUSxFQUFDLE9BRFg7QUFFRSxxQkFBTyxFQUFFLGlCQUFBNEIsRUFBRTtBQUFBLHVCQUFJbEIsV0FBVyxDQUFDO0FBQ3pCVixnQ0FBYyxFQUFFLEtBRFM7QUFFekJELGdDQUFjLEVBQUUsSUFGUztBQUd6QkUsa0NBQWdCLEVBQUU7QUFITyxpQkFBRCxDQUFmO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBU0UsOERBQUMsK0RBQUQ7QUFDRSxzQkFBUSxFQUFDLFVBRFg7QUFFRSxxQkFBTyxFQUFFLGlCQUFBMkIsRUFBRTtBQUFBLHVCQUFJbEIsV0FBVyxDQUFDO0FBQ3pCVixnQ0FBYyxFQUFFLEtBRFM7QUFFekJELGdDQUFjLEVBQUUsSUFGUztBQUd6QkUsa0NBQWdCLEVBQUU7QUFITyxpQkFBRCxDQUFmO0FBQUE7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBOEJFLDhEQUFDLHNEQUFEO0FBQU8sWUFBTSxFQUFFTyxLQUFLLENBQUNULGNBQXJCO0FBQUEsNkJBQ0UsOERBQUMsNERBQUQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFNLGtCQUFRLEVBQUVBLGNBQWhCO0FBQUEsa0NBQ0UsOERBQUMsNERBQUQ7QUFDRSxpQkFBSyxFQUFDLHNCQURSO0FBRUUsbUJBQU8sRUFBRSxpQkFBQTZCLEVBQUU7QUFBQSxxQkFBSWxCLFdBQVcsQ0FBQztBQUN6QlgsOEJBQWMsRUFBRTtBQURTLGVBQUQsQ0FBZjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSw4REFBQywyREFBRDtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLHNCQUFRLEVBQUMsTUFGWDtBQUdFLHFCQUFPLEVBQUUsaUJBQUE4QixLQUFLO0FBQUEsdUJBQUdqQixNQUFNLENBQUNlLElBQVAsQ0FBWUUsS0FBWixDQUFIO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQU9FLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLGVBUUUsOERBQUMsMkRBQUQ7QUFDRSxrQkFBSSxFQUFDLEtBRFA7QUFFRSxzQkFBUSxFQUFDLEtBRlg7QUFHRSxxQkFBTyxFQUFFLGlCQUFBQSxLQUFLO0FBQUEsdUJBQUdqQixNQUFNLENBQUNlLElBQVAsQ0FBWUUsS0FBWixDQUFIO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRixlQWFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGLGVBY0UsOERBQUMsZ0VBQUQ7QUFBaUIsa0JBQUksRUFBQyxRQUF0QjtBQUFBLHNDQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGLGVBbUJFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5CRixlQW9CRSw4REFBQyxnRUFBRDtBQUFpQixrQkFBSSxFQUFDLGFBQXRCO0FBQUEsc0NBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQWdDRSw4REFBQyw0REFBRDtBQUFBLG1DQUNFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUF5RUUsOERBQUMsMERBQUQ7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNFLDhEQUFDLDhEQUFEO0FBQUEsK0JBQ0UsOERBQUMsNERBQUQ7QUFDRSxjQUFJLEVBQUMsS0FEUDtBQUVFLGVBQUssRUFBQyxzQkFGUjtBQUdFLGlCQUFPLEVBQUUsaUJBQUFELEVBQUU7QUFBQSxtQkFBSWxCLFdBQVcsQ0FBQztBQUN6QlYsNEJBQWMsRUFBRTtBQURTLGFBQUQsQ0FBZjtBQUFBO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekVGLGVBMEZFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLCtEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxjQUFJLEVBQUVRLEtBQUssQ0FBQ04sWUFBakI7QUFBQSxpQ0FDRSw4REFBQyxrRUFBRDtBQUNFLGdCQUFJLE1BRE47QUFFRSxvQkFBUTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFGRixlQXdHRSw4REFBQywwREFBRDtBQUFXLFdBQUssRUFBQyxPQUFqQjtBQUFBLDhCQUNFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQUssY0FBSSxFQUFFTSxLQUFLLENBQUNILE1BQWpCO0FBQUEsaUNBQ0UsOERBQUMsNkRBQUQ7QUFDRSxpQkFBSyxFQUFDLHFCQURSO0FBRUUsaUJBQUssRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhHRjtBQUFBLGtCQURGO0FBd0hEOztHQXhPUVIsSzs7S0FBQUEsSztBQTBPVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5lNjVmYWYzNDYzMzRjOTdmMGNiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICBwYXJ0aWNpcGFudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQW5kcmVzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIm1vdW50YWluXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTHVpcyBwYXRpw7FvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIlxyXG4gICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIHJlcG9ydDoge1xyXG4gICAgICAndG90YWwgcGFydGljaXBhbnRlcyc6IHtcclxuICAgICAgICBsYWJlbDogJ3RvdGFsIHBhcmNpcGFudGVzJyxcclxuICAgICAgICB2YWx1ZTogJzIwMCdcclxuICAgICAgfSxcclxuICBcclxuICAgICAgJ3RvdGFsIG11amVyZXMnOiB7XHJcbiAgICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgICB2YWx1ZTogJzkwJ1xyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAndG90YWwgaG9tYnJlcyc6IHtcclxuICAgICAgICBsYWJlbDogJ0hvbWJyZXMnLFxyXG4gICAgICAgIHZhbHVlOiAnMTEwJ1xyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAncmVkaW1pZW50byBhbHRvJzoge1xyXG4gICAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gYWx0bycsXHJcbiAgICAgICAgdmFsdWU6ICc4MCdcclxuICAgICAgfSxcclxuICBcclxuICAgICAgJ3JlZGltaWVudG8gbWVkaW8nOiB7XHJcbiAgICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBtZWRpbycsXHJcbiAgICAgICAgdmFsdWU6ICcxMjAnXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgICdwcm9tZWRpbyBlZGFkZXMnOiB7XHJcbiAgICAgICAgbGFiZWw6ICdQcm9tZWRpbyBlZGFkZXMnLFxyXG4gICAgICAgIHZhbHVlOiAnMjInXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobnN0YXRlKSB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAuLi5uc3RhdGUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IGVycm9ycyA9IFtdO1xyXG5cclxuICBsZXQgcmVwb3J0ID0ge1xyXG4gICAgdG90YWw6IHtcclxuICAgICAgcGFydGljaXBhbnRzOiAwLFxyXG4gICAgICB3b21hbnM6IDAsXHJcbiAgICAgIG1lbnM6IDAsXHJcbiAgICAgIGFnZXM6IDAsXHJcbiAgICB9LFxyXG4gICAgYXZlcmFnZToge1xyXG4gICAgICBhZ2VzOiAwLFxyXG4gICAgfSxcclxuICAgIHBlcmZvcm1hbmNlOiB7XHJcbiAgICAgIGhpZ2g6IDAsXHJcbiAgICAgIG1lZGl1bTogMCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRlLnBhcnRpY2lwYW50cy5mb3JFYWNoKHBhcnRpY2lwYW50PT4ge1xyXG4gICAgY29uc3QgcCA9IHBhcnRpY2lwYW50O1xyXG5cclxuICAgIHJlcG9ydC50b3RhbC5wYXJ0aWNpcGFudHMgKz0gMTtcclxuICAgIHJlcG9ydC50b3RhbC5hZ2VzICs9IHAuYWdlO1xyXG5cclxuICAgIGxldCB7dG90YWx9ID0gcmVwb3J0O1xyXG4gICAgcmVwb3J0LmF2ZXJhZ2UuYWdlcyA9IHRvdGFsLmFnZXMgLyB0b3RhbC5wYXJ0aWNpcGFudHM7XHJcblxyXG4gICAgLy9wZXJ0aWNpcGFudCBtZW4gb3Igd29tYW5cclxuICAgIGlmKHAuZ2VuZGVyID09PSAnbWVuJylcclxuICAgICAgcmVwb3J0LnRvdGFsLm1lbnMgKz0gMTtcclxuXHJcbiAgICBlbHNlIGlmKHAuZ2VuZGVyID09PSAnd29tYW4nKVxyXG4gICAgICByZXBvcnQudG90YWwud29tYW5zICs9IDE7XHJcblxyXG4gICAgLy9wZXJmb3JtYW5jZSBoaWdoIG9yIG1lZGl1bVxyXG4gICAgaWYocC5wZXJmb3JtYW5jZSA9PT0gJ2hpZ2gnKVxyXG4gICAgICByZXBvcnQucGVyZm9ybWFuY2UuaGlnaCArPSAxO1xyXG5cclxuICAgIGVsc2UgaWYocC5wZXJmb3JtYW5jZSA9PT0gJ21lZGl1bScpXHJcbiAgICAgIHJlcG9ydC5wZXJmb3JtYW5jZS5tZWRpdW0gKz0gMTtcclxuXHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gYWRkUGFydGljaXBhbnQoZGF0YSkge1xyXG4gICAgZGF0YS5jYXRlZ29yeSA9IHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMucHVzaChkYXRhKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuc2VsZWN0Q2F0ZWdvcnl9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nU2VsZWNjaW9uYSB1bmEgY2F0ZWdvcmlhJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtzZWxlY3RDYXRlZ29yeTogZmFsc2V9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdyb3V0ZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ3JvdXRlJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0nbW91bnRhaW4nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdtb3VudGFpbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdOYW1lJ1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17ZXJyb3I9PiBlcnJvcnMucHVzaChlcnJvcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FZGFkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J0FnZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yPT4gZXJyb3JzLnB1c2goZXJyb3IpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZXJvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0nZ2VuZGVyJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1hY2hvPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGVtYnJhPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZW5kaW1pZW50bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J3BlcmZvcm1hbmNlJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1hY2hvPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGVtYnJhPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGFpbmVyIG15PXs0MH0+XHJcbiAgICAgICAgPENvbnRhaW5lci5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nYWRkJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXHJcbiAgICAgICAgICAgIGxhYmVsPSdCdXNjYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hQYXJ0aWNpcGFudH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyLlJvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUGFydGljaXBhbnRlcyBpbnNjcml0b3NcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5wYXJ0aWNpcGFudHN9PlxyXG4gICAgICAgICAgICA8QmxvY2suUGFydGljaXBhbnRcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciB3aWR0aD0nNzAwcHgnPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9