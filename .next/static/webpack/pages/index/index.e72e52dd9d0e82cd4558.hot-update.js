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
      age: 23,
      gender: 'men',
      name: "Andres",
      category: "route",
      performance: 'high'
    }, {
      age: 29,
      gender: 'men',
      name: "Cristian",
      category: "mountain",
      performance: 'medium'
    }, {
      age: 40,
      gender: 'men',
      name: "Luis patiño",
      category: "route",
      performance: 'medium'
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
    var r = report;
    r.total.participants += 1;
    r.total.ages += p.age;
    r.average.ages = r.total.ages / r.total.participants; //perticipant men or woman

    if (p.gender === 'men') r.total.mens += 1;else if (p.gender === 'woman') r.total.womans += 1; //performance high or medium

    if (p.performance === 'high') r.performance.high += 1;else if (p.performance === 'medium') r.performance.medium += 1;
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
            lineNumber: 138,
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
              lineNumber: 143,
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
              lineNumber: 151,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
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
            lineNumber: 167,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age",
              onError: function onError(error) {
                return errors.push(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Macho"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Hembra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
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
          lineNumber: 209,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Participant, {
            name: true,
            category: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      width: "700px",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "F6cCrBqVsO9foni0s24X01hgZ4Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicGFydGljaXBhbnRzIiwiYWdlIiwiZ2VuZGVyIiwibmFtZSIsImNhdGVnb3J5IiwicGVyZm9ybWFuY2UiLCJyZXBvcnQiLCJsYWJlbCIsInZhbHVlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibnN0YXRlIiwidG90YWwiLCJ3b21hbnMiLCJtZW5zIiwiYWdlcyIsImF2ZXJhZ2UiLCJoaWdoIiwibWVkaXVtIiwiZm9yRWFjaCIsInBhcnRpY2lwYW50IiwicCIsInIiLCJkYXRhIiwicHVzaCIsImV2IiwiZXJyb3IiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHdCQUNXQyxxREFBQSxDQUFlO0FBQ3ZDQyxrQkFBYyxFQUFFLEtBRHVCO0FBRXZDQyxrQkFBYyxFQUFFLEtBRnVCO0FBR3ZDQyxvQkFBZ0IsRUFBRSxJQUhxQjtBQUl2Q0MsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLFNBQUcsRUFBRSxFQURQO0FBRUVDLFlBQU0sRUFBRSxLQUZWO0FBR0VDLFVBQUksRUFBRSxRQUhSO0FBSUVDLGNBQVEsRUFBRSxPQUpaO0FBS0VDLGlCQUFXLEVBQUU7QUFMZixLQURZLEVBUVo7QUFDRUosU0FBRyxFQUFFLEVBRFA7QUFFRUMsWUFBTSxFQUFFLEtBRlY7QUFHRUMsVUFBSSxFQUFFLFVBSFI7QUFJRUMsY0FBUSxFQUFFLFVBSlo7QUFLRUMsaUJBQVcsRUFBRTtBQUxmLEtBUlksRUFlWjtBQUNFSixTQUFHLEVBQUUsRUFEUDtBQUVFQyxZQUFNLEVBQUUsS0FG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b0JBQVE7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExRkYsZUF3R0UsOERBQUMsMERBQUQ7QUFBVyxXQUFLLEVBQUMsT0FBakI7QUFBQSw4QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsK0RBQUQ7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFLLGNBQUksRUFBRVMsS0FBSyxDQUFDSCxNQUFqQjtBQUFBLGlDQUNFLDhEQUFDLDZEQUFEO0FBQ0UsaUJBQUssRUFBQyxxQkFEUjtBQUVFLGlCQUFLLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4R0Y7QUFBQSxrQkFERjtBQXdIRDs7R0FwUFFYLEs7O0tBQUFBLEs7QUFzUFQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguZTcyZTUyZGQ5ZDBlODJjZDQ1NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vaGVscGVycy9tYXAnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2NrJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICBzZWxlY3RlZENhdGVnb3J5OiBudWxsLFxyXG4gICAgcGFydGljaXBhbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhZ2U6IDIzLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJBbmRyZXNcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnaGlnaCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZ2U6IDI5LFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIm1vdW50YWluXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdtZWRpdW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWdlOiA0MCxcclxuICAgICAgICBnZW5kZXI6ICdtZW4nLFxyXG4gICAgICAgIG5hbWU6IFwiTHVpcyBwYXRpw7FvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ21lZGl1bScsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgcmVwb3J0OiB7XHJcbiAgICAgICd0b3RhbCBwYXJ0aWNpcGFudGVzJzoge1xyXG4gICAgICAgIGxhYmVsOiAndG90YWwgcGFyY2lwYW50ZXMnLFxyXG4gICAgICAgIHZhbHVlOiAnMjAwJ1xyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAndG90YWwgbXVqZXJlcyc6IHtcclxuICAgICAgICBsYWJlbDogJ011amVyZXMnLFxyXG4gICAgICAgIHZhbHVlOiAnOTAnXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgICd0b3RhbCBob21icmVzJzoge1xyXG4gICAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgICAgdmFsdWU6ICcxMTAnXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgICdyZWRpbWllbnRvIGFsdG8nOiB7XHJcbiAgICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBhbHRvJyxcclxuICAgICAgICB2YWx1ZTogJzgwJ1xyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAncmVkaW1pZW50byBtZWRpbyc6IHtcclxuICAgICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIG1lZGlvJyxcclxuICAgICAgICB2YWx1ZTogJzEyMCdcclxuICAgICAgfSxcclxuICBcclxuICAgICAgJ3Byb21lZGlvIGVkYWRlcyc6IHtcclxuICAgICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgICAgdmFsdWU6ICcyMidcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuc3RhdGUpIHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC4uLm5zdGF0ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgcmVwb3J0ID0ge1xyXG4gICAgdG90YWw6IHtcclxuICAgICAgcGFydGljaXBhbnRzOiAwLFxyXG4gICAgICB3b21hbnM6IDAsXHJcbiAgICAgIG1lbnM6IDAsXHJcbiAgICAgIGFnZXM6IDAsXHJcbiAgICB9LFxyXG4gICAgYXZlcmFnZToge1xyXG4gICAgICBhZ2VzOiAwLFxyXG4gICAgfSxcclxuICAgIHBlcmZvcm1hbmNlOiB7XHJcbiAgICAgIGhpZ2g6IDAsXHJcbiAgICAgIG1lZGl1bTogMCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRlLnBhcnRpY2lwYW50cy5mb3JFYWNoKHBhcnRpY2lwYW50PT4ge1xyXG4gICAgY29uc3QgcCA9IHBhcnRpY2lwYW50O1xyXG4gICAgY29uc3QgciA9IHJlcG9ydDtcclxuXHJcbiAgICByLnRvdGFsLnBhcnRpY2lwYW50cyArPSAxO1xyXG4gICAgci50b3RhbC5hZ2VzICs9IHAuYWdlO1xyXG5cclxuICAgIHIuYXZlcmFnZS5hZ2VzID0gXHJcbiAgICByLnRvdGFsLmFnZXMgLyByLnRvdGFsLnBhcnRpY2lwYW50cztcclxuXHJcbiAgICAvL3BlcnRpY2lwYW50IG1lbiBvciB3b21hblxyXG4gICAgaWYocC5nZW5kZXIgPT09ICdtZW4nKVxyXG4gICAgICByLnRvdGFsLm1lbnMgKz0gMTtcclxuXHJcbiAgICBlbHNlIGlmKHAuZ2VuZGVyID09PSAnd29tYW4nKVxyXG4gICAgICByLnRvdGFsLndvbWFucyArPSAxO1xyXG5cclxuICAgIC8vcGVyZm9ybWFuY2UgaGlnaCBvciBtZWRpdW1cclxuICAgIGlmKHAucGVyZm9ybWFuY2UgPT09ICdoaWdoJylcclxuICAgICAgci5wZXJmb3JtYW5jZS5oaWdoICs9IDE7XHJcblxyXG4gICAgZWxzZSBpZihwLnBlcmZvcm1hbmNlID09PSAnbWVkaXVtJylcclxuICAgICAgci5wZXJmb3JtYW5jZS5tZWRpdW0gKz0gMTtcclxuXHJcbiAgfSlcclxuXHJcblxyXG4gXHJcbiAgXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBhcnRpY2lwYW50KGRhdGEpIHtcclxuICAgIGRhdGEuY2F0ZWdvcnkgPSBzdGF0ZS5zZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdENhdGVnb3J5fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjY2lvbmEgdW5hIGNhdGVnb3JpYSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7c2VsZWN0Q2F0ZWdvcnk6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0ncm91dGUnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdyb3V0ZScsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J21vdW50YWluJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAnbW91bnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD4gXHJcblxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5hZGRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2FkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ob21icmU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yPT4gZXJyb3JzLnB1c2goZXJyb3IpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2FnZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdBZ2UnXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXtlcnJvcj0+IGVycm9ycy5wdXNoKGVycm9yKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J2dlbmRlcic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NYWNobzwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PkhlbWJyYTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdwZXJmb3JtYW5jZSc+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NYWNobzwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PkhlbWJyYTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgd2lkdGg9JzcwMHB4Jz5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFJlcG9ydGUgZGUgcGFydGljaXBhbnRlc1xyXG4gICAgICAgIDwvQ29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICA8Q29udGFpbmVyLldyYXA+XHJcbiAgICAgICAgICA8TWFwIGRhdGE9e3N0YXRlLnJlcG9ydH0+XHJcbiAgICAgICAgICAgIDxCbG9jay5SZXBvcnQgXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYXJ0aWNpcGFudGVzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjIwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==