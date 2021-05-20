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
    notification: null,
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null,
    removeParticipant: false,
    selectedParticipant: null,
    participants: [{
      id: parseInt(Math.random() * 10000),
      age: 23,
      gender: 'men',
      name: "Andres",
      category: "route",
      performance: 'high'
    }, {
      id: parseInt(Math.random() * 10000),
      age: 29,
      gender: 'men',
      name: "Cristian",
      category: "mountain",
      performance: 'medium'
    }, {
      id: parseInt(Math.random() * 10000),
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
    var continuer = true;
    var field = {
      'name': 'nombre',
      'age': 'edad'
    };
    Object.keys(participant).forEach(function (key) {
      var value = participant[key];
      if (value.length > 0 || continuer === false) return;
      continuer = false;
      updateState({
        notification: {
          label: "Campo ".concat(field[key]),
          message: "El campo ".concat(field[key], " esta vacio")
        }
      });
    });
    if (!continuer) return;
    participant.category = state.selectedCategory;
    state.participants.push(participant);
    updateState({
      addParticipant: false
    });
  }

  console.log(state.notification);

  function removeParticipant(participant) {
    state.participants = state.participants.filter(function (p) {
      if (participant.id !== p.id) return 1;
    });
    updateState({
      selectedParticipant: null
    });
  }

  function selectParticipant(participant) {
    updateState({
      selectedParticipant: participant
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.selectCategory !== false,
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
            lineNumber: 210,
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
              lineNumber: 215,
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
              lineNumber: 223,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.addParticipant !== false,
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
            lineNumber: 239,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.selectedParticipant !== null,
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
            lineNumber: 280,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.notification !== null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
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
          lineNumber: 327,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
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
            lineNumber: 348,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "75DYWvI1B6vJXsed/4UkqhvJ7mU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsIm5vdGlmaWNhdGlvbiIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicmVtb3ZlUGFydGljaXBhbnQiLCJzZWxlY3RlZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnRzIiwiaWQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJhZ2UiLCJnZW5kZXIiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwZXJmb3JtYW5jZSIsInJlcG9ydCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5zdGF0ZSIsImNhdGVnb3J5TW91bnRhaW4iLCJsYWJlbCIsInZhbHVlIiwiY2F0ZWdvcnlSb3V0ZSIsInRvdGFsUGFydGljaXBhbnRzIiwidG90YWxXb21hbnMiLCJ0b3RhbE1lbnMiLCJwZXJmb3JtYW5jZUhpZ2giLCJwZXJmb3JtYW5jZU1lZGl1bSIsInRvdGFsQWdlcyIsImF2ZXJhZ2VBZ2VzIiwiZm9yRWFjaCIsInBhcnRpY2lwYW50IiwidG9Mb3dlckNhc2UiLCJyb3VuZCIsImNvbnRpbnVlciIsImZpZWxkIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInAiLCJzZWxlY3RQYXJ0aWNpcGFudCIsImV2IiwibWFwIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1dDLHFEQUFBLENBQWU7QUFDdkNDLGdCQUFZLEVBQUUsSUFEeUI7QUFFdkNDLGtCQUFjLEVBQUUsS0FGdUI7QUFHdkNDLGtCQUFjLEVBQUUsS0FIdUI7QUFJdkNDLG9CQUFnQixFQUFFLElBSnFCO0FBS3ZDQyxxQkFBaUIsRUFBRSxLQUxvQjtBQU12Q0MsdUJBQW1CLEVBQUUsSUFOa0I7QUFPdkNDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxRQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQWpCLENBRGQ7QUFFRUMsU0FBRyxFQUFFLEVBRlA7QUFHRUMsWUFBTSxFQUFFLEtBSFY7QUFJRUMsVUFBSSxFQUFFLFFBSlI7QUFLRUMsY0FBUSxFQUFFLE9BTFo7QUFNRUMsaUJBQVcsRUFBRTtBQU5mLEtBRFksRUFTWjtBQUNFUixRQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQWpCLENBRGQ7QUFFRUMsU0FBRyxFQUFFLEVBRlA7QUFHRUMsWUFBTSxFQUFFLEtBSFY7QUFJRUMsVUFBSSxFQUFFLFVBSlI7QUFLRUMsY0FBUSxFQUFFLFVBTFo7QUFNRUMsaUJBQVcsRUFBRTtBQU5mLEtBVFksRUFpQlo7QUFDRVIsUUFBRSxFQUFFQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFqQixDQURkO0FBRUVDLFNBQUcsRUFBRSxFQUZQO0FBR0VDLFlBQU0sRUFBRSxLQUhWO0FBSUVDLFVBQUksRUFBRSxhQUpSO0FBS0VDLGNBQVEsRUFBRSxPQUxaO0FBTUVDLGlCQUFXLEVBQUU7QUFOZixLQWpCWSxDQVB5QjtBQWtDdkNDLFVBQU0sRUFBRTtBQWxDK0IsR0FBZixDQURYO0FBQUE7QUFBQSxNQUNSQyxLQURRO0FBQUEsTUFDREMsUUFEQzs7QUFzQ2YsV0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0JGLFlBQVEsaUNBQ0hELEtBREcsR0FFSEcsTUFGRyxFQUFSO0FBSUQ7O0FBRUQsTUFBSUosTUFBTSxHQUFHO0FBQ1hLLG9CQUFnQixFQUFFO0FBQ2hCQyxXQUFLLEVBQUUsc0JBRFM7QUFFaEJDLFdBQUssRUFBRTtBQUZTLEtBRFA7QUFNWEMsaUJBQWEsRUFBRTtBQUNiRixXQUFLLEVBQUUsbUJBRE07QUFFYkMsV0FBSyxFQUFFO0FBRk0sS0FOSjtBQVdYRSxxQkFBaUIsRUFBRTtBQUNqQkgsV0FBSyxFQUFFLG1CQURVO0FBRWpCQyxXQUFLLEVBQUU7QUFGVSxLQVhSO0FBZ0JYRyxlQUFXLEVBQUU7QUFDWEosV0FBSyxFQUFFLFNBREk7QUFFWEMsV0FBSyxFQUFFO0FBRkksS0FoQkY7QUFxQlhJLGFBQVMsRUFBRTtBQUNUTCxXQUFLLEVBQUUsU0FERTtBQUVUQyxXQUFLLEVBQUU7QUFGRSxLQXJCQTtBQTBCWEssbUJBQWUsRUFBRTtBQUNmTixXQUFLLEVBQUUsa0JBRFE7QUFFZkMsV0FBSyxFQUFFO0FBRlEsS0ExQk47QUErQlhNLHFCQUFpQixFQUFFO0FBQ2pCUCxXQUFLLEVBQUUsbUJBRFU7QUFFakJDLFdBQUssRUFBRTtBQUZVLEtBL0JSO0FBb0NYTyxhQUFTLEVBQUU7QUFDVFIsV0FBSyxFQUFFLGNBREU7QUFFVEMsV0FBSyxFQUFFO0FBRkUsS0FwQ0E7QUF5Q1hRLGVBQVcsRUFBRTtBQUNYVCxXQUFLLEVBQUUsaUJBREk7QUFFWEMsV0FBSyxFQUFFO0FBRkk7QUF6Q0YsR0FBYjtBQStDQU4sT0FBSyxDQUFDWCxZQUFOLENBQW1CMEIsT0FBbkIsQ0FBMkIsVUFBQ0MsV0FBRCxFQUFnQjtBQUFBLFFBR3ZDbEIsV0FIdUMsR0FPckNrQixXQVBxQyxDQUd2Q2xCLFdBSHVDO0FBQUEsUUFJdkNELFFBSnVDLEdBT3JDbUIsV0FQcUMsQ0FJdkNuQixRQUp1QztBQUFBLFFBS3ZDRixNQUx1QyxHQU9yQ3FCLFdBUHFDLENBS3ZDckIsTUFMdUM7QUFBQSxRQU12Q0QsR0FOdUMsR0FPckNzQixXQVBxQyxDQU12Q3RCLEdBTnVDO0FBU3pDSSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ21CLFdBQVosRUFBZDtBQUNBcEIsWUFBUSxHQUFHQSxRQUFRLENBQUNvQixXQUFULEVBQVg7QUFDQXRCLFVBQU0sR0FBR0EsTUFBTSxDQUFDc0IsV0FBUCxFQUFUO0FBWHlDLFFBY3ZDVCxpQkFkdUMsR0F1QnJDVCxNQXZCcUMsQ0FjdkNTLGlCQWR1QztBQUFBLFFBZXZDTSxXQWZ1QyxHQXVCckNmLE1BdkJxQyxDQWV2Q2UsV0FmdUM7QUFBQSxRQWdCdkNELFNBaEJ1QyxHQXVCckNkLE1BdkJxQyxDQWdCdkNjLFNBaEJ1QztBQUFBLFFBaUJ2Q0gsU0FqQnVDLEdBdUJyQ1gsTUF2QnFDLENBaUJ2Q1csU0FqQnVDO0FBQUEsUUFrQnZDRCxXQWxCdUMsR0F1QnJDVixNQXZCcUMsQ0FrQnZDVSxXQWxCdUM7QUFBQSxRQW1CdkNFLGVBbkJ1QyxHQXVCckNaLE1BdkJxQyxDQW1CdkNZLGVBbkJ1QztBQUFBLFFBb0J2Q0osYUFwQnVDLEdBdUJyQ1IsTUF2QnFDLENBb0J2Q1EsYUFwQnVDO0FBQUEsUUFxQnZDSCxnQkFyQnVDLEdBdUJyQ0wsTUF2QnFDLENBcUJ2Q0ssZ0JBckJ1QztBQUFBLFFBc0J2Q1EsaUJBdEJ1QyxHQXVCckNiLE1BdkJxQyxDQXNCdkNhLGlCQXRCdUM7QUF5QnpDSixxQkFBaUIsQ0FBQ0YsS0FBbEIsSUFBMkIsQ0FBM0I7QUFDQU8sYUFBUyxDQUFDUCxLQUFWLElBQW1CWixHQUFuQjtBQUNBb0IsZUFBVyxDQUFDUixLQUFaLEdBQW9CZCxJQUFJLENBQUMwQixLQUFMLENBQVdMLFNBQVMsQ0FBQ1AsS0FBVixHQUFrQkUsaUJBQWlCLENBQUNGLEtBQS9DLENBQXBCO0FBRUEsUUFBR1QsUUFBUSxLQUFLLFVBQWhCLEVBQ0VPLGdCQUFnQixDQUFDRSxLQUFqQixJQUEwQixDQUExQjtBQUVGLFFBQUdULFFBQVEsS0FBSyxPQUFoQixFQUNFVSxhQUFhLENBQUNELEtBQWQsSUFBdUIsQ0FBdkI7QUFFRixRQUFHWCxNQUFNLEtBQUssS0FBZCxFQUNFZSxTQUFTLENBQUNKLEtBQVYsSUFBbUIsQ0FBbkI7QUFFRixRQUFHWCxNQUFNLEtBQUssT0FBZCxFQUNFYyxXQUFXLENBQUNILEtBQVosSUFBcUIsQ0FBckI7QUFFRixRQUFHUixXQUFXLEtBQUssTUFBbkIsRUFDRWEsZUFBZSxDQUFDTCxLQUFoQixJQUF5QixDQUF6QjtBQUVGLFFBQUdSLFdBQVcsS0FBSyxRQUFuQixFQUNFYyxpQkFBaUIsQ0FBQ04sS0FBbEIsSUFBMkIsQ0FBM0I7QUFFSCxHQS9DRDtBQWlEQU4sT0FBSyxDQUFDRCxNQUFOLEdBQWVBLE1BQWY7O0FBRUEsV0FBU2YsY0FBVCxDQUF3QmdDLFdBQXhCLEVBQXFDO0FBQ25DLFFBQUlHLFNBQVMsR0FBRyxJQUFoQjtBQUVBLFFBQUlDLEtBQUssR0FBRztBQUNWLGNBQVEsUUFERTtBQUVWLGFBQU87QUFGRyxLQUFaO0FBS0FDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZTixXQUFaLEVBQXlCRCxPQUF6QixDQUFpQyxVQUFDUSxHQUFELEVBQVE7QUFDdkMsVUFBSWpCLEtBQUssR0FBR1UsV0FBVyxDQUFDTyxHQUFELENBQXZCO0FBRUEsVUFBR2pCLEtBQUssQ0FBQ2tCLE1BQU4sR0FBZSxDQUFmLElBQW9CTCxTQUFTLEtBQUssS0FBckMsRUFDRTtBQUVGQSxlQUFTLEdBQUcsS0FBWjtBQUNBakIsaUJBQVcsQ0FBQztBQUNWbkIsb0JBQVksRUFBRTtBQUNac0IsZUFBSyxrQkFBV2UsS0FBSyxDQUFDRyxHQUFELENBQWhCLENBRE87QUFFWkUsaUJBQU8scUJBQWNMLEtBQUssQ0FBQ0csR0FBRCxDQUFuQjtBQUZLO0FBREosT0FBRCxDQUFYO0FBTUQsS0FiRDtBQWVBLFFBQUcsQ0FBQ0osU0FBSixFQUNFO0FBRUZILGVBQVcsQ0FBQ25CLFFBQVosR0FBdUJHLEtBQUssQ0FBQ2QsZ0JBQTdCO0FBQ0FjLFNBQUssQ0FBQ1gsWUFBTixDQUFtQnFDLElBQW5CLENBQXdCVixXQUF4QjtBQUVBZCxlQUFXLENBQUM7QUFDVmxCLG9CQUFjLEVBQUU7QUFETixLQUFELENBQVg7QUFHRDs7QUFFRDJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZNUIsS0FBSyxDQUFDakIsWUFBbEI7O0FBRUEsV0FBU0ksaUJBQVQsQ0FBMkI2QixXQUEzQixFQUF3QztBQUN0Q2hCLFNBQUssQ0FBQ1gsWUFBTixHQUFxQlcsS0FBSyxDQUFDWCxZQUFOLENBQW1Cd0MsTUFBbkIsQ0FBMEIsVUFBQUMsQ0FBQyxFQUFJO0FBQ2xELFVBQUdkLFdBQVcsQ0FBQzFCLEVBQVosS0FBbUJ3QyxDQUFDLENBQUN4QyxFQUF4QixFQUNFLE9BQU8sQ0FBUDtBQUNILEtBSG9CLENBQXJCO0FBS0FZLGVBQVcsQ0FBQztBQUNWZCx5QkFBbUIsRUFBRTtBQURYLEtBQUQsQ0FBWDtBQUdEOztBQUVELFdBQVMyQyxpQkFBVCxDQUEyQmYsV0FBM0IsRUFBd0M7QUFDdENkLGVBQVcsQ0FBQztBQUNWZCx5QkFBbUIsRUFBRTRCO0FBRFgsS0FBRCxDQUFYO0FBR0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFPLFlBQU0sRUFBRWhCLEtBQUssQ0FBQ2YsY0FBTixLQUF5QixLQUF4QztBQUFBLDZCQUNFLDhEQUFDLDREQUFEO0FBQUEsK0JBQ0UsOERBQUMscURBQUQ7QUFBQSxrQ0FDRSw4REFBQyw0REFBRDtBQUNFLGlCQUFLLEVBQUMsMEJBRFI7QUFFRSxtQkFBTyxFQUFFLGlCQUFBK0MsRUFBRTtBQUFBLHFCQUFJOUIsV0FBVyxDQUFDO0FBQUNqQiw4QkFBYyxFQUFFO0FBQWpCLGVBQUQsQ0FBZjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0UsOERBQUMsK0RBQUQ7QUFDRSxzQkFBUSxFQUFDLE9BRFg7QUFFRSxxQkFBTyxFQUFFLGlCQUFBK0MsRUFBRTtBQUFBLHVCQUFJOUIsV0FBVyxDQUFDO0FBQ3pCakIsZ0NBQWMsRUFBRSxLQURTO0FBRXpCRCxnQ0FBYyxFQUFFLElBRlM7QUFHekJFLGtDQUFnQixFQUFFO0FBSE8saUJBQUQsQ0FBZjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVNFLDhEQUFDLCtEQUFEO0FBQ0Usc0JBQVEsRUFBQyxVQURYO0FBRUUscUJBQU8sRUFBRSxpQkFBQThDLEVBQUU7QUFBQSx1QkFBSTlCLFdBQVcsQ0FBQztBQUN6QmpCLGdDQUFjLEVBQUUsS0FEUztBQUV6QkQsZ0NBQWMsRUFBRSxJQUZTO0FBR3pCRSxrQ0FBZ0IsRUFBRTtBQUhPLGlCQUFELENBQWY7QUFBQTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE4QkUsOERBQUMsc0RBQUQ7QUFBTyxZQUFNLEVBQUVjLEtBQUssQ0FBQ2hCLGNBQU4sS0FBeUIsS0FBeEM7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQU0sa0JBQVEsRUFBRUEsY0FBaEI7QUFBQSxrQ0FDRSw4REFBQyw0REFBRDtBQUNFLGlCQUFLLEVBQUMsc0JBRFI7QUFFRSxtQkFBTyxFQUFFLGlCQUFBZ0QsRUFBRTtBQUFBLHFCQUFJOUIsV0FBVyxDQUFDO0FBQ3pCbEIsOEJBQWMsRUFBRTtBQURTLGVBQUQsQ0FBZjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FLDhEQUFDLDBEQUFEO0FBQUEsb0NBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSw4REFBQywyREFBRDtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLHNCQUFRLEVBQUM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBTUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsZUFPRSw4REFBQywyREFBRDtBQUNFLGtCQUFJLEVBQUMsS0FEUDtBQUVFLHNCQUFRLEVBQUM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLGVBV0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEYsZUFZRSw4REFBQyxnRUFBRDtBQUFpQixrQkFBSSxFQUFDLFFBQXRCO0FBQUEsc0NBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkYsZUFpQkUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGLGVBa0JFLDhEQUFDLGdFQUFEO0FBQWlCLGtCQUFJLEVBQUMsYUFBdEI7QUFBQSxzQ0FDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBOEJFLDhEQUFDLDREQUFEO0FBQUEsbUNBQ0UsOERBQUMsNERBQUQ7QUFBYSxtQkFBSyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUF1RUUsOERBQUMsc0RBQUQ7QUFBTyxZQUFNLEVBQUVnQixLQUFLLENBQUNaLG1CQUFOLEtBQThCLElBQTdDO0FBQUEsNkJBQ0UsOERBQUMsNERBQUQ7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFNLGtCQUFRLEVBQUVELGlCQUFoQjtBQUFBLGtDQUNFLDhEQUFDLDREQUFEO0FBQ0UsaUJBQUssRUFBQyxjQURSO0FBRUUsbUJBQU8sRUFBRSxpQkFBQTZDLEVBQUU7QUFBQSxxQkFBSTlCLFdBQVcsQ0FBQztBQUN6QmQsbUNBQW1CLEVBQUU7QUFESSxlQUFELENBQWY7QUFBQTtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRSw4REFBQywwREFBRDtBQUFBLG9DQUNFLDhEQUFDLDhEQUFEO0FBQ0Usa0JBQUksRUFBQyxJQURQO0FBRUUsbUJBQUssMkJBQUVZLEtBQUssQ0FBQ1osbUJBQVIsMERBQUUsc0JBQTJCRTtBQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBS0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsZUFNRSw4REFBQyxtRUFBRDtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLG1CQUFLLDRCQUFFVSxLQUFLLENBQUNaLG1CQUFSLDJEQUFFLHVCQUEyQlE7QUFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixlQVVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGLGVBV0UsOERBQUMsbUVBQUQ7QUFDRSxrQkFBSSxFQUFDLEtBRFA7QUFFRSxtQkFBSyw0QkFBRUksS0FBSyxDQUFDWixtQkFBUiwyREFBRSx1QkFBMkJNO0FBRnBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEYsZUFlRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmRixlQWdCRSw4REFBQyxtRUFBRDtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFLLDRCQUFFTSxLQUFLLENBQUNaLG1CQUFSLDJEQUFFLHVCQUEyQk87QUFGcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkYsZUFvQkUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEJGLGVBcUJFLDhEQUFDLG1FQUFEO0FBQ0Usa0JBQUksRUFBQyxhQURQO0FBRUUsbUJBQUssNEJBQUVLLEtBQUssQ0FBQ1osbUJBQVIsMkRBQUUsdUJBQTJCVTtBQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFpQ0UsOERBQUMsNERBQUQ7QUFBQSxtQ0FDRSw4REFBQyw0REFBRDtBQUFhLG1CQUFLLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFRixlQW1IRSw4REFBQyxzREFBRDtBQUFPLFlBQU0sRUFBRUUsS0FBSyxDQUFDakIsWUFBTixLQUF1QjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkhGLGVBdUhFLDhEQUFDLDBEQUFEO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBLCtCQUNFLDhEQUFDLDREQUFEO0FBQ0UsY0FBSSxFQUFDLEtBRFA7QUFFRSxlQUFLLEVBQUMsc0JBRlI7QUFHRSxpQkFBTyxFQUFFLGlCQUFBaUQsRUFBRTtBQUFBLG1CQUFJOUIsV0FBVyxDQUFDO0FBQ3pCakIsNEJBQWMsRUFBRTtBQURTLGFBQUQsQ0FBZjtBQUFBO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkhGLGVBd0lFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0UsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLCtEQUFEO0FBQUEsK0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxjQUFJLEVBQUVlLEtBQUssQ0FBQ1gsWUFBakI7QUFBQSxpQ0FDRSw4REFBQyxrRUFBRDtBQUNFLGdCQUFJLE1BRE47QUFFRSxvQkFBUSxNQUZWO0FBR0UsbUJBQU8sRUFBRSxpQkFBQTJDLEVBQUU7QUFBQSxxQkFBSUQsaUJBQWlCLENBQUNDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxJQUFSLENBQXJCO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4SUYsZUF1SkUsOERBQUMsMERBQUQ7QUFBQSw4QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMsK0RBQUQ7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFLLGNBQUksRUFBRWxDLEtBQUssQ0FBQ0QsTUFBakI7QUFBQSxpQ0FDRSw4REFBQyw2REFBRDtBQUNFLGlCQUFLLEVBQUMscUJBRFI7QUFFRSxpQkFBSyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkpGO0FBQUEsa0JBREY7QUF1S0Q7O0dBM1dRbEIsSzs7S0FBQUEsSztBQTZXVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC9pbmRleC42MWU1ZTQ0YWNiNGQxOTc5MzVkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9oZWxwZXJzL21hcCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2snO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIG5vdGlmaWNhdGlvbjogbnVsbCxcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICByZW1vdmVQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgcGFydGljaXBhbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSxcclxuICAgICAgICBhZ2U6IDIzLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJBbmRyZXNcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnaGlnaCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSxcclxuICAgICAgICBhZ2U6IDI5LFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJDcmlzdGlhblwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIm1vdW50YWluXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdtZWRpdW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCksXHJcbiAgICAgICAgYWdlOiA0MCxcclxuICAgICAgICBnZW5kZXI6ICdtZW4nLFxyXG4gICAgICAgIG5hbWU6IFwiTHVpcyBwYXRpw7FvXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicm91dGVcIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ21lZGl1bScsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgcmVwb3J0OiB7fVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5zdGF0ZSkge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgLi4ubnN0YXRlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCByZXBvcnQgPSB7XHJcbiAgICBjYXRlZ29yeU1vdW50YWluOiB7XHJcbiAgICAgIGxhYmVsOiAnQmljaWNsZXRhIGRlIG1vbnRhw7FhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhdGVnb3J5Um91dGU6IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgcnV0YScsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czoge1xyXG4gICAgICBsYWJlbDogJ3RvdGFsIHBhcmNpcGFudGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxXb21hbnM6IHtcclxuICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxNZW5zOiB7XHJcbiAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlSGlnaDoge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIGFsdG8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBwZXJmb3JtYW5jZU1lZGl1bToge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIG1lZGlvJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxBZ2VzOiB7XHJcbiAgICAgIGxhYmVsOiAnVG90YWwgZWRhZGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgYXZlcmFnZUFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdQcm9tZWRpbyBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSwgICAgICBcclxuICB9XHJcblxyXG4gIHN0YXRlLnBhcnRpY2lwYW50cy5mb3JFYWNoKChwYXJ0aWNpcGFudCk9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgcGVyZm9ybWFuY2UsXHJcbiAgICAgIGNhdGVnb3J5LFxyXG4gICAgICBnZW5kZXIsXHJcbiAgICAgIGFnZSxcclxuICAgIH0gPSBwYXJ0aWNpcGFudDtcclxuXHJcbiAgICBwZXJmb3JtYW5jZSA9IHBlcmZvcm1hbmNlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjYXRlZ29yeSA9IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBnZW5kZXIgPSBnZW5kZXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICB0b3RhbFBhcnRpY2lwYW50cyxcclxuICAgICAgYXZlcmFnZUFnZXMsXHJcbiAgICAgIHRvdGFsQWdlcyxcclxuICAgICAgdG90YWxNZW5zLFxyXG4gICAgICB0b3RhbFdvbWFucyxcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLFxyXG4gICAgICBjYXRlZ29yeVJvdXRlLFxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLFxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bSxcclxuICAgIH0gPSByZXBvcnQ7XHJcblxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHMudmFsdWUgKz0gMTtcclxuICAgIHRvdGFsQWdlcy52YWx1ZSArPSBhZ2U7XHJcbiAgICBhdmVyYWdlQWdlcy52YWx1ZSA9IE1hdGgucm91bmQodG90YWxBZ2VzLnZhbHVlIC8gdG90YWxQYXJ0aWNpcGFudHMudmFsdWUpO1xyXG5cclxuICAgIGlmKGNhdGVnb3J5ID09PSAnbW91bnRhaW4nKVxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdyb3V0ZScpXHJcbiAgICAgIGNhdGVnb3J5Um91dGUudmFsdWUgKz0gMTtcclxuICAgIFxyXG4gICAgaWYoZ2VuZGVyID09PSAnbWVuJylcclxuICAgICAgdG90YWxNZW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoZ2VuZGVyID09PSAnd29tYW4nKVxyXG4gICAgICB0b3RhbFdvbWFucy52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnaGlnaCcpXHJcbiAgICAgIHBlcmZvcm1hbmNlSGlnaC52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnbWVkaXVtJylcclxuICAgICAgcGVyZm9ybWFuY2VNZWRpdW0udmFsdWUgKz0gMTtcclxuXHJcbiAgfSlcclxuXHJcbiAgc3RhdGUucmVwb3J0ID0gcmVwb3J0O1xyXG5cclxuICBmdW5jdGlvbiBhZGRQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgbGV0IGNvbnRpbnVlciA9IHRydWU7XHJcblxyXG4gICAgbGV0IGZpZWxkID0ge1xyXG4gICAgICAnbmFtZSc6ICdub21icmUnLFxyXG4gICAgICAnYWdlJzogJ2VkYWQnLFxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHBhcnRpY2lwYW50KS5mb3JFYWNoKChrZXkpPT4ge1xyXG4gICAgICBsZXQgdmFsdWUgPSBwYXJ0aWNpcGFudFtrZXldO1xyXG4gIFxyXG4gICAgICBpZih2YWx1ZS5sZW5ndGggPiAwIHx8IGNvbnRpbnVlciA9PT0gZmFsc2UpIFxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnRpbnVlciA9IGZhbHNlO1xyXG4gICAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgICBsYWJlbDogYENhbXBvICR7ZmllbGRba2V5XX1gLFxyXG4gICAgICAgICAgbWVzc2FnZTogYEVsIGNhbXBvICR7ZmllbGRba2V5XX0gZXN0YSB2YWNpb2BcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjb250aW51ZXIpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBwYXJ0aWNpcGFudC5jYXRlZ29yeSA9IHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMucHVzaChwYXJ0aWNpcGFudCk7ICBcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhzdGF0ZS5ub3RpZmljYXRpb24pO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzID0gc3RhdGUucGFydGljaXBhbnRzLmZpbHRlcihwID0+IHtcclxuICAgICAgaWYocGFydGljaXBhbnQuaWQgIT09IHAuaWQpXHJcbiAgICAgICAgcmV0dXJuIDE7ICBcclxuICAgIH0pXHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlbGVjdFBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IHBhcnRpY2lwYW50LFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5zZWxlY3RDYXRlZ29yeSAhPT0gZmFsc2V9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nU2VsZWNjaW9uYSB1bmEgY2F0ZWdvcmlhJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtzZWxlY3RDYXRlZ29yeTogZmFsc2V9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdyb3V0ZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ3JvdXRlJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0nbW91bnRhaW4nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdtb3VudGFpbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50ICE9PSBmYWxzZX0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2FkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ob21icmU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nTmFtZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVkYWQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhZ2UnXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmllcj0nQWdlJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZXJvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0nZ2VuZGVyJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lbjwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PldvbWFuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZW5kaW1pZW50bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J3BlcmZvcm1hbmNlJz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94PkhpZ2g8L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NZWRpdW08L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjNTUxMTQ0Jz5cclxuICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50ICE9PSBudWxsfT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17cmVtb3ZlUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nUGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uVmFyaWFibGVcclxuICAgICAgICAgICAgICAgIG5hbWU9J2lkJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmlkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Tm9tYnJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8ubmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVkYWQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2FnZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5hZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nZ2VuZGVyJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmdlbmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwZXJmb3JtYW5jZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5wZXJmb3JtYW5jZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24uRmlsbCBjb2xvcj0nI2ZmMDAwMCc+XHJcbiAgICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLm5vdGlmaWNhdGlvbiAhPT0gbnVsbH0+XHJcblxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc2VsZWN0UGFydGljaXBhbnQoZXYubWFwLmRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9