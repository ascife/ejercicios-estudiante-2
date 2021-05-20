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
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/map */ "./helpers/map.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Form */ "./components/Form.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Modal */ "./components/Modal.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Block */ "./components/Block.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Container */ "./components/Container.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\my-student2\\pages\\index\\index.js",
    _s = $RefreshSig$();









function Index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState({
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null
  }),
      _React$useState2 = (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var participants = [{
    name: "Andres",
    category: "route"
  }, {
    name: "Cristian",
    category: "mountain"
  }, {
    name: "Luis patiño",
    category: "route"
  }];
  var report = {
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
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(),
      _React$useState4 = (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      currentModal = _React$useState4[0],
      setCurrentModal = _React$useState4[1];

  function searchParticipant(ev) {
    setCurrentModal("search participant");
    return;
  }

  var errors = [];

  function addParticipant(data) {
    return;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      showIf: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
            label: "Selecciona una categoria"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Category, {
              category: "route",
              onClick: function onClick(ev) {
                return state.setState({
                  selectedCategory: 'route'
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Category, {
              category: "mountain",
              onClick: function onClick(ev) {
                return state.setState({
                  selectedCategory: 'mountain'
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      showIf: state.addParticipant && state.selectedCategory,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
          onSubmit: addParticipant,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
            label: "Agregar participante",
            onClose: function onClose(ev) {
              return setState({
                addParticipant: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Field, {
              name: "nombre",
              verifier: "Name",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Field, {
              name: "edad",
              verifier: "Age",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBoxes, {
              name: "genero",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBoxes, {
              name: "rendimiento",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Fill, {
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      my: 40,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Icon, {
          icon: "add",
          label: "Agregar participante",
          onClick: function onClick(ev) {
            return setState({
              addParticipant: true
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Icon, {
          icon: "search",
          label: "Buscar participante",
          onClick: searchParticipant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Participant, {
            name: true,
            category: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      width: "700px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "JH68r4BVUSf3xhXhWYbH/wsyaII=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInBhcnRpY2lwYW50cyIsIm5hbWUiLCJjYXRlZ29yeSIsInJlcG9ydCIsImxhYmVsIiwidmFsdWUiLCJjdXJyZW50TW9kYWwiLCJzZXRDdXJyZW50TW9kYWwiLCJzZWFyY2hQYXJ0aWNpcGFudCIsImV2IiwiZXJyb3JzIiwiZGF0YSIsImVycm9yIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsd0JBQ1dDLHFEQUFBLENBQWU7QUFDdkNDLGtCQUFjLEVBQUUsS0FEdUI7QUFFdkNDLGtCQUFjLEVBQUUsS0FGdUI7QUFHdkNDLG9CQUFnQixFQUFFO0FBSHFCLEdBQWYsQ0FEWDtBQUFBO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBT2YsTUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLFFBQUksRUFBRSxRQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBRG1CLEVBS25CO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBTG1CLEVBU25CO0FBQ0VELFFBQUksRUFBRSxhQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBVG1CLENBQXJCO0FBZUEsTUFBTUMsTUFBTSxHQUFHO0FBQ2IsMkJBQXVCO0FBQ3JCQyxXQUFLLEVBQUUsbUJBRGM7QUFFckJDLFdBQUssRUFBRTtBQUZjLEtBRFY7QUFNYixxQkFBaUI7QUFDZkQsV0FBSyxFQUFFLFNBRFE7QUFFZkMsV0FBSyxFQUFFO0FBRlEsS0FOSjtBQVdiLHFCQUFp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O0FBQUEsWUEzRkY7QUFBQSxrQkFERjtBQTJHRDs7R0EvS1FWLEs7O0tBQUFBLEs7QUFpTFQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguZmZjODI0NzYyZWI3ZWI2YzZmMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vaGVscGVycy9tYXAnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2NrJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICBzZWxlY3RlZENhdGVnb3J5OiBudWxsLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBbmRyZXNcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJtb3VudGFpblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkx1aXMgcGF0acOxb1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICBjb25zdCByZXBvcnQgPSB7XHJcbiAgICAndG90YWwgcGFydGljaXBhbnRlcyc6IHtcclxuICAgICAgbGFiZWw6ICd0b3RhbCBwYXJjaXBhbnRlcycsXHJcbiAgICAgIHZhbHVlOiAnMjAwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAndG90YWwgbXVqZXJlcyc6IHtcclxuICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgdmFsdWU6ICc5MCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3RvdGFsIGhvbWJyZXMnOiB7XHJcbiAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgIHZhbHVlOiAnMTEwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncmVkaW1pZW50byBhbHRvJzoge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIGFsdG8nLFxyXG4gICAgICB2YWx1ZTogJzgwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncmVkaW1pZW50byBtZWRpbyc6IHtcclxuICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBtZWRpbycsXHJcbiAgICAgIHZhbHVlOiAnMTIwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncHJvbWVkaW8gZWRhZGVzJzoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAnMjInXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgbGV0IFtjdXJyZW50TW9kYWwsIHNldEN1cnJlbnRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuICBmdW5jdGlvbiBzZWFyY2hQYXJ0aWNpcGFudChldikge1xyXG4gICAgc2V0Q3VycmVudE1vZGFsKFwic2VhcmNoIHBhcnRpY2lwYW50XCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGVycm9ycyA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiBhZGRQYXJ0aWNpcGFudChkYXRhKSB7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3RydWV9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nU2VsZWNjaW9uYSB1bmEgY2F0ZWdvcmlhJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J3JvdXRlJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc3RhdGUuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0ZWdvcnk6ICdyb3V0ZSd9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J21vdW50YWluJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc3RhdGUuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0ZWdvcnk6ICdtb3VudGFpbid9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50ICYmIHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnl9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiBzZXRTdGF0ZSh7YWRkUGFydGljaXBhbnQ6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Tm9tYnJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdub21icmUnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yPT4gZXJyb3JzLnB1c2goZXJyb3IpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VkYWQnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nQWdlJ1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17ZXJyb3I9PiBlcnJvcnMucHVzaChlcnJvcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5lcm8nPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWFjaG88L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IZW1icmE8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncmVuZGltaWVudG8nPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWFjaG88L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IZW1icmE8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgXHJcbiAgICAgIDxDb250YWluZXIgbXk9ezQwfT5cclxuICAgICAgICA8Q29udGFpbmVyLlJvdz5cclxuICAgICAgICAgIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdhZGQnXHJcbiAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc2V0U3RhdGUoe2FkZFBhcnRpY2lwYW50OiB0cnVlfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J3NlYXJjaCdcclxuICAgICAgICAgICAgbGFiZWw9J0J1c2NhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaFBhcnRpY2lwYW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17cGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgd2lkdGg9JzcwMHB4Jz5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFJlcG9ydGUgZGUgcGFydGljaXBhbnRlc1xyXG4gICAgICAgIDwvQ29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICA8Q29udGFpbmVyLldyYXA+XHJcbiAgICAgICAgICA8TWFwIGRhdGE9e3JlcG9ydH0+XHJcbiAgICAgICAgICAgIDxCbG9jay5SZXBvcnQgXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYXJ0aWNpcGFudGVzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjIwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==