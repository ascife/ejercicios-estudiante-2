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

  var _state$selectedPartic, _state$selectedPartic2, _state$selectedPartic3, _state$selectedPartic4, _state$selectedPartic5;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null,
    removeParticipant: false,
    selectedParticipant: null,
    participants: [{
      id: Math.random() * 10000,
      age: 23,
      gender: 'men',
      name: "Andres",
      category: "route",
      performance: 'high'
    }, {
      id: Math.random() * 10000,
      age: 29,
      gender: 'men',
      name: "Cristian",
      category: "mountain",
      performance: 'medium'
    }, {
      id: Math.random() * 10000,
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

  function addParticipant(participant) {
    participant.category = state.selectedCategory;
    state.participants.push(participant);
    updateState({
      addParticipant: false
    });
  }

  function removeParticipant(participant) {
    console.log(participant);
    state.participants = state.participants.filter(function (p) {
      if (participant.id !== p.id) return 1;
    });
    updateState({
      removeParticipant: false
    });
  }

  function selectParticipant(participant) {
    updateState({
      selectedParticipant: participant
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
            lineNumber: 183,
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
              lineNumber: 188,
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
              lineNumber: 196,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
            lineNumber: 212,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.selectedParticipant,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          onSubmit: removeParticipant,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: "Participante",
            onClose: function onClose(ev) {
              return updateState({
                selectedParticipant: null
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
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
          lineNumber: 296,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Participant, {
            name: true,
            category: true,
            onClick: function onClick(ev) {
              return selectParticipant(ev.map.data);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "g377EmQ9TcQcC3J4Iqz0EDPOS8k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicmVtb3ZlUGFydGljaXBhbnQiLCJzZWxlY3RlZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnRzIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwiYWdlIiwiZ2VuZGVyIiwibmFtZSIsImNhdGVnb3J5IiwicGVyZm9ybWFuY2UiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInRvTG93ZXJDYXNlIiwicm91bmQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInAiLCJzZWxlY3RQYXJ0aWNpcGFudCIsImV2IiwibWFwIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1dDLHFEQUFBLENBQWU7QUFDdkNDLGtCQUFjLEVBQUUsS0FEdUI7QUFFdkNDLGtCQUFjLEVBQUUsS0FGdUI7QUFHdkNDLG9CQUFnQixFQUFFLElBSHFCO0FBSXZDQyxxQkFBaUIsRUFBRSxLQUpvQjtBQUt2Q0MsdUJBQW1CLEVBQUUsSUFMa0I7QUFNdkNDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxRQUFFLEVB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Q0UsZ0JBQUksTUFETjtBQUVFLG9CQUFRLE1BRlY7QUFHRSxtQkFBTyxFQUFFLGlCQUFBbUMsRUFBRTtBQUFBLHFCQUFJRCxpQkFBaUIsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFILENBQU9DLElBQVIsQ0FBckI7QUFBQTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBJRixlQW1KRSw4REFBQywwREFBRDtBQUFBLDhCQUNFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLCtCQUNFLDhEQUFDLGlEQUFEO0FBQUssY0FBSSxFQUFFM0IsS0FBSyxDQUFDRCxNQUFqQjtBQUFBLGlDQUNFLDhEQUFDLDZEQUFEO0FBQ0UsaUJBQUssRUFBQyxxQkFEUjtBQUVFLGlCQUFLLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuSkY7QUFBQSxrQkFERjtBQW1LRDs7R0E1VVFoQixLOztLQUFBQSxLO0FBOFVULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LjM4NDE1NDEzOTVkZDk5N2MxNzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4uLy4uL2hlbHBlcnMvbWFwJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9jayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeTogbnVsbCxcclxuICAgIHJlbW92ZVBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICBwYXJ0aWNpcGFudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpICogMTAwMDAsXHJcbiAgICAgICAgYWdlOiAyMyxcclxuICAgICAgICBnZW5kZXI6ICdtZW4nLFxyXG4gICAgICAgIG5hbWU6IFwiQW5kcmVzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ2hpZ2gnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgKiAxMDAwMCxcclxuICAgICAgICBhZ2U6IDI5LFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIm1vdW50YWluXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdtZWRpdW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgKiAxMDAwMCxcclxuICAgICAgICBhZ2U6IDQwLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJMdWlzIHBhdGnDsW9cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnbWVkaXVtJyxcclxuICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICByZXBvcnQ6IHt9XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobnN0YXRlKSB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAuLi5uc3RhdGUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHJlcG9ydCA9IHtcclxuICAgIGNhdGVnb3J5TW91bnRhaW46IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgbW9udGHDsWEnLFxyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgY2F0ZWdvcnlSb3V0ZToge1xyXG4gICAgICBsYWJlbDogJ0JpY2ljbGV0YSBkZSBydXRhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsUGFydGljaXBhbnRzOiB7XHJcbiAgICAgIGxhYmVsOiAndG90YWwgcGFyY2lwYW50ZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFdvbWFuczoge1xyXG4gICAgICBsYWJlbDogJ011amVyZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbE1lbnM6IHtcclxuICAgICAgbGFiZWw6ICdIb21icmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgcGVyZm9ybWFuY2VIaWdoOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gYWx0bycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlTWVkaXVtOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gbWVkaW8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbEFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdUb3RhbCBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBhdmVyYWdlQWdlczoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LCAgICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGUucGFydGljaXBhbnRzLmZvckVhY2goKHBhcnRpY2lwYW50KT0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICBwZXJmb3JtYW5jZSxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgYWdlLFxyXG4gICAgfSA9IHBhcnRpY2lwYW50O1xyXG5cclxuICAgIHBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2UudG9Mb3dlckNhc2UoKTtcclxuICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgIHRvdGFsUGFydGljaXBhbnRzLFxyXG4gICAgICBhdmVyYWdlQWdlcyxcclxuICAgICAgdG90YWxBZ2VzLFxyXG4gICAgICB0b3RhbE1lbnMsXHJcbiAgICAgIHRvdGFsV29tYW5zLFxyXG4gICAgICBwZXJmb3JtYW5jZUhpZ2gsXHJcbiAgICAgIGNhdGVnb3J5Um91dGUsXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4sXHJcbiAgICAgIHBlcmZvcm1hbmNlTWVkaXVtLFxyXG4gICAgfSA9IHJlcG9ydDtcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSArPSAxO1xyXG4gICAgdG90YWxBZ2VzLnZhbHVlICs9IGFnZTtcclxuICAgIGF2ZXJhZ2VBZ2VzLnZhbHVlID0gTWF0aC5yb3VuZCh0b3RhbEFnZXMudmFsdWUgLyB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSk7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdtb3VudGFpbicpXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4udmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihjYXRlZ29yeSA9PT0gJ3JvdXRlJylcclxuICAgICAgY2F0ZWdvcnlSb3V0ZS52YWx1ZSArPSAxO1xyXG4gICAgXHJcbiAgICBpZihnZW5kZXIgPT09ICdtZW4nKVxyXG4gICAgICB0b3RhbE1lbnMudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihnZW5kZXIgPT09ICd3b21hbicpXHJcbiAgICAgIHRvdGFsV29tYW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdoaWdoJylcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdtZWRpdW0nKVxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bS52YWx1ZSArPSAxO1xyXG5cclxuICB9KVxyXG5cclxuICBzdGF0ZS5yZXBvcnQgPSByZXBvcnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICBwYXJ0aWNpcGFudC5jYXRlZ29yeSA9IHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMucHVzaChwYXJ0aWNpcGFudCk7XHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhcnRpY2lwYW50KTtcclxuICAgIHN0YXRlLnBhcnRpY2lwYW50cyA9IHN0YXRlLnBhcnRpY2lwYW50cy5maWx0ZXIocCA9PiB7XHJcbiAgICAgIGlmKHBhcnRpY2lwYW50LmlkICE9PSBwLmlkKVxyXG4gICAgICAgIHJldHVybiAxOyAgXHJcbiAgICB9KVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgcmVtb3ZlUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlbGVjdFBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IHBhcnRpY2lwYW50LFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5zZWxlY3RDYXRlZ29yeX0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdTZWxlY2Npb25hIHVuYSBjYXRlZ29yaWEnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe3NlbGVjdENhdGVnb3J5OiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J3JvdXRlJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAncm91dGUnLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdtb3VudGFpbidcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ21vdW50YWluJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+IFxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuYWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Tm9tYnJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J05hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FZGFkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J0FnZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J2dlbmRlcic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NZW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5Xb21hbjwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdwZXJmb3JtYW5jZSc+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IaWdoPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVkaXVtPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24uRmlsbCBjb2xvcj0nIzU1MTE0NCc+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3JlbW92ZVBhcnRpY2lwYW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1BhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLlZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpZCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FZGFkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhZ2UnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZXJvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2dlbmRlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZW5kaW1pZW50bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGVyZm9ybWFuY2UnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8ucGVyZm9ybWFuY2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyNmZjAwMDAnPlxyXG4gICAgICAgICAgICAgICAgRWxpbWluYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGFpbmVyIG15PXs0MH0+XHJcbiAgICAgICAgPENvbnRhaW5lci5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nYWRkJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXHJcbiAgICAgICAgICAgIGxhYmVsPSdCdXNjYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hQYXJ0aWNpcGFudH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyLlJvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUGFydGljaXBhbnRlcyBpbnNjcml0b3NcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5wYXJ0aWNpcGFudHN9PlxyXG4gICAgICAgICAgICA8QmxvY2suUGFydGljaXBhbnRcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiBzZWxlY3RQYXJ0aWNpcGFudChldi5tYXAuZGF0YSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgICBSZXBvcnRlIGRlIHBhcnRpY2lwYW50ZXNcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5yZXBvcnR9PlxyXG4gICAgICAgICAgICA8QmxvY2suUmVwb3J0IFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGFydGljaXBhbnRlc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIyMDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=