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

  function addParticipant(participant) {
    participant.category = state.selectedCategory;
    state.participants.push(participant);
    updateState({
      addParticipant: false
    });
  }

  function removeParticipant(participant) {
    state.participants = state.participants.filter(function (p) {
      if (participant.id !== p.id) return 1;
    });
    updateState({
      removeParticipant: false
    });
  }

  function selectParticipant(ev) {}

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
            lineNumber: 177,
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
              lineNumber: 182,
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
              lineNumber: 190,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
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
            lineNumber: 206,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name",
              onError: function onError(error) {
                return console.log(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age",
              onError: function onError(error) {
                return console.log(error);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Gender"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.removeParticipant,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          onSubmit: removeParticipant,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: "Participante",
            onClose: function onClose(ev) {
              return updateState({
                removeParticipant: false
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Gender"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
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
          lineNumber: 292,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.participants,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Participant, {
            name: true,
            category: true,
            onClick: function onClick(ev) {
              return console.log(ev.map.data);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "ID42pr59yGyu7MhmgMvNSvsv/+c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicmVtb3ZlUGFydGljaXBhbnQiLCJzZWxlY3RlZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnRzIiwiYWdlIiwiZ2VuZGVyIiwibmFtZSIsImNhdGVnb3J5IiwicGVyZm9ybWFuY2UiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInRvTG93ZXJDYXNlIiwiTWF0aCIsInJvdW5kIiwicHVzaCIsImZpbHRlciIsInAiLCJpZCIsInNlbGVjdFBhcnRpY2lwYW50IiwiZXYiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSx3QkFDV0MscURBQUEsQ0FBZTtBQUN2Q0Msa0JBQWMsRUFBRSxLQUR1QjtBQUV2Q0Msa0JBQWMsRUFBRSxLQUZ1QjtBQUd2Q0Msb0JBQWdCLEVBQUUsSUFIcUI7QUFJdkNDLHFCQUFpQixFQUFFLEtBSm9CO0FBS3ZDQyx1QkFBbUIsRUFBRSxJQUxrQjtBQU12Q0MsZ0JBQVksRUFBRSxDQUNaO0FBQ0VDLFNBQUcsRUFB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QUEscUJBQUlFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxFQUFFLENBQUNJLEdBQUgsQ0FBT0MsSUFBbkIsQ0FBSjtBQUFBO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdElGLGVBcUpFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLCtEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxjQUFJLEVBQUU5QixLQUFLLENBQUNELE1BQWpCO0FBQUEsaUNBQ0UsOERBQUMsNkRBQUQ7QUFDRSxpQkFBSyxFQUFDLHFCQURSO0FBRUUsaUJBQUssRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJKRjtBQUFBLGtCQURGO0FBcUtEOztHQXhVUWIsSzs7S0FBQUEsSztBQTBVVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC5iZDM1YzBkYTY3YmUxZjY0NjI1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICByZW1vdmVQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgcGFydGljaXBhbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhZ2U6IDIzLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJBbmRyZXNcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnaGlnaCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZ2U6IDI5LFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIm1vdW50YWluXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdtZWRpdW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWdlOiA0MCxcclxuICAgICAgICBnZW5kZXI6ICdtZW4nLFxyXG4gICAgICAgIG5hbWU6IFwiTHVpcyBwYXRpw7FvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ21lZGl1bScsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgcmVwb3J0OiB7fVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5zdGF0ZSkge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgLi4ubnN0YXRlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCByZXBvcnQgPSB7XHJcbiAgICBjYXRlZ29yeU1vdW50YWluOiB7XHJcbiAgICAgIGxhYmVsOiAnQmljaWNsZXRhIGRlIG1vbnRhw7FhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhdGVnb3J5Um91dGU6IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgcnV0YScsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czoge1xyXG4gICAgICBsYWJlbDogJ3RvdGFsIHBhcmNpcGFudGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxXb21hbnM6IHtcclxuICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxNZW5zOiB7XHJcbiAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlSGlnaDoge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIGFsdG8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBwZXJmb3JtYW5jZU1lZGl1bToge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIG1lZGlvJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxBZ2VzOiB7XHJcbiAgICAgIGxhYmVsOiAnVG90YWwgZWRhZGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgYXZlcmFnZUFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdQcm9tZWRpbyBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSwgICAgICBcclxuICB9XHJcblxyXG4gIHN0YXRlLnBhcnRpY2lwYW50cy5mb3JFYWNoKChwYXJ0aWNpcGFudCk9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgcGVyZm9ybWFuY2UsXHJcbiAgICAgIGNhdGVnb3J5LFxyXG4gICAgICBnZW5kZXIsXHJcbiAgICAgIGFnZSxcclxuICAgIH0gPSBwYXJ0aWNpcGFudDtcclxuXHJcbiAgICBwZXJmb3JtYW5jZSA9IHBlcmZvcm1hbmNlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjYXRlZ29yeSA9IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBnZW5kZXIgPSBnZW5kZXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICB0b3RhbFBhcnRpY2lwYW50cyxcclxuICAgICAgYXZlcmFnZUFnZXMsXHJcbiAgICAgIHRvdGFsQWdlcyxcclxuICAgICAgdG90YWxNZW5zLFxyXG4gICAgICB0b3RhbFdvbWFucyxcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLFxyXG4gICAgICBjYXRlZ29yeVJvdXRlLFxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLFxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bSxcclxuICAgIH0gPSByZXBvcnQ7XHJcblxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHMudmFsdWUgKz0gMTtcclxuICAgIHRvdGFsQWdlcy52YWx1ZSArPSBhZ2U7XHJcbiAgICBhdmVyYWdlQWdlcy52YWx1ZSA9IE1hdGgucm91bmQodG90YWxBZ2VzLnZhbHVlIC8gdG90YWxQYXJ0aWNpcGFudHMudmFsdWUpO1xyXG5cclxuICAgIGlmKGNhdGVnb3J5ID09PSAnbW91bnRhaW4nKVxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdyb3V0ZScpXHJcbiAgICAgIGNhdGVnb3J5Um91dGUudmFsdWUgKz0gMTtcclxuICAgIFxyXG4gICAgaWYoZ2VuZGVyID09PSAnbWVuJylcclxuICAgICAgdG90YWxNZW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoZ2VuZGVyID09PSAnd29tYW4nKVxyXG4gICAgICB0b3RhbFdvbWFucy52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnaGlnaCcpXHJcbiAgICAgIHBlcmZvcm1hbmNlSGlnaC52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnbWVkaXVtJylcclxuICAgICAgcGVyZm9ybWFuY2VNZWRpdW0udmFsdWUgKz0gMTtcclxuXHJcbiAgfSlcclxuXHJcbiAgc3RhdGUucmVwb3J0ID0gcmVwb3J0O1xyXG5cclxuICBmdW5jdGlvbiBhZGRQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgcGFydGljaXBhbnQuY2F0ZWdvcnkgPSBzdGF0ZS5zZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzLnB1c2gocGFydGljaXBhbnQpO1xyXG5cclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMgPSBzdGF0ZS5wYXJ0aWNpcGFudHMuZmlsdGVyKHAgPT4ge1xyXG4gICAgICBpZihwYXJ0aWNpcGFudC5pZCAhPT0gcC5pZClcclxuICAgICAgICByZXR1cm4gMTsgIFxyXG4gICAgfSlcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHJlbW92ZVBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWxlY3RQYXJ0aWNpcGFudChldikge1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5zZWxlY3RDYXRlZ29yeX0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdTZWxlY2Npb25hIHVuYSBjYXRlZ29yaWEnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe3NlbGVjdENhdGVnb3J5OiBmYWxzZX0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J3JvdXRlJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAncm91dGUnLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdtb3VudGFpbidcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ21vdW50YWluJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+IFxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuYWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdOYW1lJ1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17ZXJyb3I9PiBjb25zb2xlLmxvZyhlcnJvcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BZ2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhZ2UnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nQWdlJ1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17ZXJyb3I9PiBjb25zb2xlLmxvZyhlcnJvcil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5kZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5kZXInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+V29tYW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBlcmZvcm1hbmNlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncGVyZm9ybWFuY2UnPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGlnaDwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lZGl1bTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyM1NTExNDQnPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnJlbW92ZVBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17cmVtb3ZlUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nUGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5WYXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8ubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkFnZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmRlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uZ2VuZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGVyZm9ybWFuY2U8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J3BlcmZvcm1hbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LnBlcmZvcm1hbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjZmYwMDAwJz5cclxuICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gY29uc29sZS5sb2coZXYubWFwLmRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9