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
    addParticipant: false
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
    name: "Luis pati??o",
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

  function addParticipant(ev) {
    setCurrentModal('add participant');
    return;
  }

  function searchParticipant(ev) {
    setCurrentModal("search participant");
    return;
  }

  function setError(error) {
    console.log(error);
    return;
  }

  function onSubmit(data) {
    console.log(data);
    return;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      showIf: state.addParticipant,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
          onSubmit: onSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Header, {
            label: "Agregar participante",
            onClose: function onClose(ev) {
              return setState({
                addParticipant: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Field, {
              name: "nombre",
              verifier: "Name",
              onError: setError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Field, {
              name: "edad",
              verifier: "Age",
              onError: setError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBoxes, {
              name: "genero",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBoxes, {
              name: "rendimiento",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_4__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Fill, {
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      my: 40,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Icon, {
          icon: "add",
          label: "Agregar participante",
          onClick: addParticipant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.default.Icon, {
          icon: "search",
          label: "Buscar participante",
          onClick: searchParticipant
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Participant, {
            name: true,
            category: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      width: "700px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_8__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_6__.default.Report, {
            label: "Total Participantes",
            value: "200"
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
    }, this)]
  }, void 0, true);
}

_s(Index, "ehPjnmiwgoIEL+NGKaoEQvDYDhU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInBhcnRpY2lwYW50cyIsIm5hbWUiLCJjYXRlZ29yeSIsInJlcG9ydCIsImxhYmVsIiwidmFsdWUiLCJjdXJyZW50TW9kYWwiLCJzZXRDdXJyZW50TW9kYWwiLCJldiIsInNlYXJjaFBhcnRpY2lwYW50Iiwic2V0RXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHdCQUNXQyxxREFBQSxDQUFlO0FBQ3ZDQyxrQkFBYyxFQUFFO0FBRHVCLEdBQWYsQ0FEWDtBQUFBO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBS2YsTUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLFFBQUksRUFBRSxRQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBRG1CLEVBS25CO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBTG1CLEVBU25CO0FBQ0VELFFBQUksRUFBRSxhQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBVG1CLENBQXJCO0FBZUEsTUFBTUMsTUFBTSxHQUFHO0FBQ2IsMkJBQXVCO0FBQ3JCQyxXQUFLLEVBQUUsbUJBRGM7QUFFckJDLFdBQUssRUFBRTtBQUZjLEtBRFY7QUFNYixxQkFBaUI7QUFDZkQsV0FBSyxFQUFFLFNBRFE7QUFFZkMsV0FBSyxFQUFFO0FBRlEsS0FOSjtBQVdiLHFCQUFpQjtBQUNmRCxXQUFLLEVBQUUsU0FEUTtBQUVmQyxXQUFLLEVBQUU7QUFGUSxLQVhKO0FBZ0JiLHVCQUFtQjtB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Q0UsOERBQUMsNkRBQUQ7QUFDRSxpQkFBSyxFQUFDLHFCQURSO0FBRUUsaUJBQUssRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFRjtBQUFBLGtCQURGO0FBdUZEOztHQWpLUVIsSzs7S0FBQUEsSztBQW1LVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5lY2ZkODc3ZGNjMzlhMTBjZWI1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHBhcnRpY2lwYW50cyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBbmRyZXNcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJtb3VudGFpblwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkx1aXMgcGF0acOxb1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICBjb25zdCByZXBvcnQgPSB7XHJcbiAgICAndG90YWwgcGFydGljaXBhbnRlcyc6IHtcclxuICAgICAgbGFiZWw6ICd0b3RhbCBwYXJjaXBhbnRlcycsXHJcbiAgICAgIHZhbHVlOiAnMjAwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAndG90YWwgbXVqZXJlcyc6IHtcclxuICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgdmFsdWU6ICc5MCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3RvdGFsIGhvbWJyZXMnOiB7XHJcbiAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgIHZhbHVlOiAnMTEwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncmVkaW1pZW50byBhbHRvJzoge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIGFsdG8nLFxyXG4gICAgICB2YWx1ZTogJzgwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncmVkaW1pZW50byBtZWRpbyc6IHtcclxuICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBtZWRpbycsXHJcbiAgICAgIHZhbHVlOiAnMTIwJ1xyXG4gICAgfSxcclxuXHJcbiAgICAncHJvbWVkaW8gZWRhZGVzJzoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAnMjInXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgbGV0IFtjdXJyZW50TW9kYWwsIHNldEN1cnJlbnRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRQYXJ0aWNpcGFudChldikge1xyXG4gICAgc2V0Q3VycmVudE1vZGFsKCdhZGQgcGFydGljaXBhbnQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaFBhcnRpY2lwYW50KGV2KSB7XHJcbiAgICBzZXRDdXJyZW50TW9kYWwoXCJzZWFyY2ggcGFydGljaXBhbnRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRFcnJvcihlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuYWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiBzZXRTdGF0ZSh7YWRkUGFydGljaXBhbnQ6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Tm9tYnJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdub21icmUnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3NldEVycm9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VkYWQnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nQWdlJ1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17c2V0RXJyb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5lcm8nPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWFjaG88L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IZW1icmE8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncmVuZGltaWVudG8nPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWFjaG88L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IZW1icmE8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgXHJcbiAgICAgIDxDb250YWluZXIgbXk9ezQwfT5cclxuICAgICAgICA8Q29udGFpbmVyLlJvdz5cclxuICAgICAgICAgIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdhZGQnXHJcbiAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17YWRkUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J3NlYXJjaCdcclxuICAgICAgICAgICAgbGFiZWw9J0J1c2NhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaFBhcnRpY2lwYW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17cGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgd2lkdGg9JzcwMHB4Jz5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFJlcG9ydGUgZGUgcGFydGljaXBhbnRlc1xyXG4gICAgICAgIDwvQ29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICA8Q29udGFpbmVyLldyYXA+XHJcbiAgICAgICAgICA8TWFwIGRhdGE9e3JlcG9ydH0+XHJcbiAgICAgICAgICAgIDxCbG9jay5SZXBvcnQgXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYXJ0aWNpcGFudGVzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjIwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==