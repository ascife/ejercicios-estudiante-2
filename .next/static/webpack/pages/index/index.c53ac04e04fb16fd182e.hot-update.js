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

_s(Index, "2VgT24478KIWkG0hy6HOmbaa1Mo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInBhcnRpY2lwYW50cyIsIm5hbWUiLCJjYXRlZ29yeSIsInJlcG9ydCIsImxhYmVsIiwidmFsdWUiLCJjdXJyZW50TW9kYWwiLCJzZXRDdXJyZW50TW9kYWwiLCJldiIsInNlYXJjaFBhcnRpY2lwYW50Iiwic2V0RXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHdCQUNXQyxxREFBQSxDQUFlO0FBQ3ZDQyxrQkFBYyxFQUFFO0FBRHVCLEdBQWYsQ0FEWDtBQUFBO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBS2YsTUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLFFBQUksRUFBRSxRQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBRG1CLEVBS25CO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBTG1CLEVBU25CO0FBQ0VELFFBQUksRUFBRSxhQURSO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBVG1CLENBQXJCO0FBZUEsTUFBTUMsTUFBTSxHQUFHO0FBQ2IsMkJBQXVCO0FBQ3JCQyxXQUFLLEVBQUUsbUJBRGM7QUFFckJDLFdBQUssRUFBRTtBQUZjLEtBRFY7QUFNYixxQkFBaUI7QUFDZkQsV0FBSyxFQUFFLFNBRFE7QUFFZkMsV0FBSyxFQUFFO0FBRlEsS0FOSjtBQVdiLHFCQUFpQjtBQUNmRCxXQUFLLEVBQUUsU0FEUTtBQUVmQyxXQUFLLEVBQUU7QUFGUSxLQVhKO0FBZ0JiLHVCQUFtQjtB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Q0UsOERBQUMsNkRBQUQ7QUFDRSxpQkFBSyxFQUFDLHFCQURSO0FBRUUsaUJBQUssRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFRjtBQUFBLGtCQURGO0FBdUZEOztHQWpLUVIsSzs7S0FBQUEsSztBQW1LVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5jNTNhYzA0ZTA0ZmIxNmZkMTgyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICB9KVxyXG5cclxuICBjb25zdCBwYXJ0aWNpcGFudHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQW5kcmVzXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInJvdXRlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ3Jpc3RpYW5cIixcclxuICAgICAgY2F0ZWdvcnk6IFwibW91bnRhaW5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMdWlzIHBhdGnDsW9cIixcclxuICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIlxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgY29uc3QgcmVwb3J0ID0ge1xyXG4gICAgJ3RvdGFsIHBhcnRpY2lwYW50ZXMnOiB7XHJcbiAgICAgIGxhYmVsOiAndG90YWwgcGFyY2lwYW50ZXMnLFxyXG4gICAgICB2YWx1ZTogJzIwMCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3RvdGFsIG11amVyZXMnOiB7XHJcbiAgICAgIGxhYmVsOiAnTXVqZXJlcycsXHJcbiAgICAgIHZhbHVlOiAnOTAnXHJcbiAgICB9LFxyXG5cclxuICAgICd0b3RhbCBob21icmVzJzoge1xyXG4gICAgICBsYWJlbDogJ0hvbWJyZXMnLFxyXG4gICAgICB2YWx1ZTogJzExMCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3JlZGltaWVudG8gYWx0byc6IHtcclxuICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBhbHRvJyxcclxuICAgICAgdmFsdWU6ICc4MCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3JlZGltaWVudG8gbWVkaW8nOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gbWVkaW8nLFxyXG4gICAgICB2YWx1ZTogJzEyMCdcclxuICAgIH0sXHJcblxyXG4gICAgJ3Byb21lZGlvIGVkYWRlcyc6IHtcclxuICAgICAgbGFiZWw6ICdQcm9tZWRpbyBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogJzIyJ1xyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGxldCBbY3VycmVudE1vZGFsLCBzZXRDdXJyZW50TW9kYWxdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUGFydGljaXBhbnQoZXYpIHtcclxuICAgIHNldEN1cnJlbnRNb2RhbCgnYWRkIHBhcnRpY2lwYW50Jyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWFyY2hQYXJ0aWNpcGFudChldikge1xyXG4gICAgc2V0Q3VycmVudE1vZGFsKFwic2VhcmNoIHBhcnRpY2lwYW50XCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gc2V0U3RhdGUoe2FkZFBhcnRpY2lwYW50OiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbm9tYnJlJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J05hbWUnXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXtzZXRFcnJvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVkYWQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlZGFkJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J0FnZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3NldEVycm9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZXJvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0nZ2VuZXJvJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1hY2hvPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGVtYnJhPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZW5kaW1pZW50bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J3JlbmRpbWllbnRvJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1hY2hvPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGVtYnJhPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGFpbmVyIG15PXs0MH0+XHJcbiAgICAgICAgPENvbnRhaW5lci5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nYWRkJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFBhcnRpY2lwYW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXHJcbiAgICAgICAgICAgIGxhYmVsPSdCdXNjYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hQYXJ0aWNpcGFudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXIuUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgICBQYXJ0aWNpcGFudGVzIGluc2NyaXRvc1xyXG4gICAgICAgIDwvQ29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICA8Q29udGFpbmVyLldyYXA+XHJcbiAgICAgICAgICA8TWFwIGRhdGE9e3BhcnRpY2lwYW50c30+XHJcbiAgICAgICAgICAgIDxCbG9jay5QYXJ0aWNpcGFudFxyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIHdpZHRoPSc3MDBweCc+XHJcbiAgICAgICAgPENvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgICBSZXBvcnRlIGRlIHBhcnRpY2lwYW50ZXNcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtyZXBvcnR9PlxyXG4gICAgICAgICAgICA8QmxvY2suUmVwb3J0IFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGFydGljaXBhbnRlc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIyMDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=