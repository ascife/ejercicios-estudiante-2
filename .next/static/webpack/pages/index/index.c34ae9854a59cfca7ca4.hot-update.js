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
    report: {}
  }),
      _React$useState2 = (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  function updateState(nstate) {
    setState(_objectSpread(_objectSpread({}, state), nstate));
  }

  var report = {
    categoryMountain: {
      label: 'Bicicleta de montaña',
      value: 0
    },
    categoryRoute: {
      label: 'Bicicleta de ruta',
      value: 0
    },
    totalParticipants: {
      label: 'total parcipantes',
      value: 0
    },
    totalWomans: {
      label: 'Mujeres',
      value: 0
    },
    totalMens: {
      label: 'Hombres',
      value: 0
    },
    performanceHigh: {
      label: 'Rendimiento alto',
      value: 0
    },
    performanceMedium: {
      label: 'Rendimiento medio',
      value: 0
    },
    totalAges: {
      label: 'Total edades',
      value: 0
    },
    averageAges: {
      label: 'Promedio edades',
      value: 0
    }
  };
  state.participants.forEach(function (participant) {
    var performance = participant.performance,
        category = participant.category,
        gender = participant.gender,
        age = participant.age;
    performance = performance.toLowerCase();
    category = category.toLowerCase();
    gender = gender.toLowerCase();
    var totalParticipants = report.totalParticipants,
        averageAges = report.averageAges,
        totalAges = report.totalAges,
        totalMens = report.totalMens,
        totalWomans = report.totalWomans,
        performanceHigh = report.performanceHigh,
        categoryRoute = report.categoryRoute,
        categoryMountain = report.categoryMountain,
        performanceMedium = report.performanceMedium;
    totalParticipants.value += 1;
    totalAges.value += age;
    averageAges.value = Math.round(totalAges.value / totalParticipants.value);
    if (category === 'mountain') categoryMountain.value += 1;
    if (category === 'route') categoryRoute.value += 1;
    if (gender === 'men') totalMens.value += 1;
    if (gender === 'woman') totalWomans.value += 1;
    if (performance === 'high') performanceHigh.value += 1;
    if (performance === 'medium') performanceMedium.value += 1;
  });
  state.report = report;

  function addParticipant(data) {
    data.category = state.selectedCategory;
    state.participants.push(data);
    updateState({
      addParticipant: false
    });
  }

  function removeParticipant(data) {
    console.log(data);
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
            lineNumber: 164,
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
              lineNumber: 169,
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
              lineNumber: 177,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
            lineNumber: 193,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name",
              onError: function onError(error) {
                return console.log(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age",
              onError: function onError(error) {
                return console.log(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Gender"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          onSubmit: removeParticipant,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: "Participante",
            onClose: function onClose(ev) {
              return updateState({
                addParticipant: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              value: "cristian"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              value: "90"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Gender"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              value: "Men"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              value: "High"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
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
          lineNumber: 271,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Participant, {
            name: true,
            category: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "sLgixQDs9U84sX/HvamAxgr59pQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicGFydGljaXBhbnRzIiwiYWdlIiwiZ2VuZGVyIiwibmFtZSIsImNhdGVnb3J5IiwicGVyZm9ybWFuY2UiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInRvTG93ZXJDYXNlIiwiTWF0aCIsInJvdW5kIiwiZGF0YSIsInB1c2giLCJyZW1vdmVQYXJ0aWNpcGFudCIsImNvbnNvbGUiLCJsb2ciLCJldiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSx3QkFDV0MscURBQUEsQ0FBZTtBQUN2Q0Msa0JBQWMsRUFBRSxLQUR1QjtBQUV2Q0Msa0JBQWMsRUFBRSxLQUZ1QjtBQUd2Q0Msb0JBQWdCLEVBQUUsSUFIcUI7QUFJdkNDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxTQUFHLEVBQUUsRUFEUDtBQUVFQyxZQUFNLEVBQUUsS0FGVjtBQUdFQyxVQUFJLEVBQUUsUUFIUjtBQUlFQyxjQUFRLEVBQUUsT0FKWjtBQUtFQyxpQkFBVyxFQUFFO0FBTGYsS0FEWSxFQVFaO0FBQ0VKLFNBQUcsRUFBRSxFQURQ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLCtEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxjQUFJLEVBQUVTLEtBQUssQ0FBQ1AsWUFBakI7QUFBQSxpQ0FDRSw4REFBQyxrRUFBRDtBQUNFLGdCQUFJLE1BRE47QUFFRSxvQkFBUTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlIRixlQTRJRSw4REFBQywwREFBRDtBQUFBLDhCQUNFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQUssY0FBSSxFQUFFTyxLQUFLLENBQUNELE1BQWpCO0FBQUEsaUNBQ0UsOERBQUMsNkRBQUQ7QUFDRSxpQkFBSyxFQUFDLHFCQURSO0FBRUUsaUJBQUssRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVJRjtBQUFBLGtCQURGO0FBNEpEOztHQWxUUVgsSzs7S0FBQUEsSztBQW9UVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5jMzRhZTk4NTRhNTljZmNhN2NhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICBwYXJ0aWNpcGFudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGFnZTogMjMsXHJcbiAgICAgICAgZ2VuZGVyOiAnbWVuJyxcclxuICAgICAgICBuYW1lOiBcIkFuZHJlc1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJvdXRlXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdoaWdoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFnZTogMjksXHJcbiAgICAgICAgZ2VuZGVyOiAnbWVuJyxcclxuICAgICAgICBuYW1lOiBcIkNyaXN0aWFuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwibW91bnRhaW5cIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ21lZGl1bScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZ2U6IDQwLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJMdWlzIHBhdGnDsW9cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnbWVkaXVtJyxcclxuICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICByZXBvcnQ6IHt9XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobnN0YXRlKSB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAuLi5uc3RhdGUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHJlcG9ydCA9IHtcclxuICAgIGNhdGVnb3J5TW91bnRhaW46IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgbW9udGHDsWEnLFxyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgY2F0ZWdvcnlSb3V0ZToge1xyXG4gICAgICBsYWJlbDogJ0JpY2ljbGV0YSBkZSBydXRhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsUGFydGljaXBhbnRzOiB7XHJcbiAgICAgIGxhYmVsOiAndG90YWwgcGFyY2lwYW50ZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFdvbWFuczoge1xyXG4gICAgICBsYWJlbDogJ011amVyZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbE1lbnM6IHtcclxuICAgICAgbGFiZWw6ICdIb21icmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgcGVyZm9ybWFuY2VIaWdoOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gYWx0bycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlTWVkaXVtOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gbWVkaW8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbEFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdUb3RhbCBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBhdmVyYWdlQWdlczoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LCAgICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGUucGFydGljaXBhbnRzLmZvckVhY2goKHBhcnRpY2lwYW50KT0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICBwZXJmb3JtYW5jZSxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgYWdlLFxyXG4gICAgfSA9IHBhcnRpY2lwYW50O1xyXG5cclxuICAgIHBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2UudG9Mb3dlckNhc2UoKTtcclxuICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgIHRvdGFsUGFydGljaXBhbnRzLFxyXG4gICAgICBhdmVyYWdlQWdlcyxcclxuICAgICAgdG90YWxBZ2VzLFxyXG4gICAgICB0b3RhbE1lbnMsXHJcbiAgICAgIHRvdGFsV29tYW5zLFxyXG4gICAgICBwZXJmb3JtYW5jZUhpZ2gsXHJcbiAgICAgIGNhdGVnb3J5Um91dGUsXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4sXHJcbiAgICAgIHBlcmZvcm1hbmNlTWVkaXVtLFxyXG4gICAgfSA9IHJlcG9ydDtcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSArPSAxO1xyXG4gICAgdG90YWxBZ2VzLnZhbHVlICs9IGFnZTtcclxuICAgIGF2ZXJhZ2VBZ2VzLnZhbHVlID0gTWF0aC5yb3VuZCh0b3RhbEFnZXMudmFsdWUgLyB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSk7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdtb3VudGFpbicpXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4udmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihjYXRlZ29yeSA9PT0gJ3JvdXRlJylcclxuICAgICAgY2F0ZWdvcnlSb3V0ZS52YWx1ZSArPSAxO1xyXG4gICAgXHJcbiAgICBpZihnZW5kZXIgPT09ICdtZW4nKVxyXG4gICAgICB0b3RhbE1lbnMudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihnZW5kZXIgPT09ICd3b21hbicpXHJcbiAgICAgIHRvdGFsV29tYW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdoaWdoJylcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdtZWRpdW0nKVxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bS52YWx1ZSArPSAxO1xyXG5cclxuICB9KVxyXG5cclxuICBzdGF0ZS5yZXBvcnQgPSByZXBvcnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBhcnRpY2lwYW50KGRhdGEpIHtcclxuICAgIGRhdGEuY2F0ZWdvcnkgPSBzdGF0ZS5zZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUGFydGljaXBhbnQoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuc2VsZWN0Q2F0ZWdvcnl9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nU2VsZWNjaW9uYSB1bmEgY2F0ZWdvcmlhJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtzZWxlY3RDYXRlZ29yeTogZmFsc2V9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdyb3V0ZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ3JvdXRlJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0nbW91bnRhaW4nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdtb3VudGFpbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yPT4gY29uc29sZS5sb2coZXJyb3IpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+QWdlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J0FnZSdcclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yPT4gY29uc29sZS5sb2coZXJyb3IpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZGVyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0nZ2VuZGVyJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lbjwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PldvbWFuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QZXJmb3JtYW5jZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J3BlcmZvcm1hbmNlJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PkhpZ2g8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NZWRpdW08L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjNTUxMTQ0Jz5cclxuICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXt0cnVlfT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17cmVtb3ZlUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nUGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPSdjcmlzdGlhbidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9JzkwJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZGVyPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPSdNZW4nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QZXJmb3JtYW5jZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9J0hpZ2gnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyNmZjAwMDAnPlxyXG4gICAgICAgICAgICAgICAgRWxpbWluYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGFpbmVyIG15PXs0MH0+XHJcbiAgICAgICAgPENvbnRhaW5lci5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nYWRkJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXHJcbiAgICAgICAgICAgIGxhYmVsPSdCdXNjYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hQYXJ0aWNpcGFudH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyLlJvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUGFydGljaXBhbnRlcyBpbnNjcml0b3NcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5wYXJ0aWNpcGFudHN9PlxyXG4gICAgICAgICAgICA8QmxvY2suUGFydGljaXBhbnRcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFJlcG9ydGUgZGUgcGFydGljaXBhbnRlc1xyXG4gICAgICAgIDwvQ29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICA8Q29udGFpbmVyLldyYXA+XHJcbiAgICAgICAgICA8TWFwIGRhdGE9e3N0YXRlLnJlcG9ydH0+XHJcbiAgICAgICAgICAgIDxCbG9jay5SZXBvcnQgXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYXJ0aWNpcGFudGVzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIjIwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==