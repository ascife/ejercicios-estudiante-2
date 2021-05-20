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

  var _state$selectedPartic, _state$selectedPartic2, _state$selectedPartic3, _state$selectedPartic4, _state$selectedPartic5, _state$notification, _state$notification2;

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
      console.log(value);
      continuer = false;
      updateState({
        notification: {
          label: "Verifica los campos",
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
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
            lineNumber: 242,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
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
            lineNumber: 283,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
      showIf: state.notification,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Center, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
          onSubmit: function onSubmit(ev) {
            return updateState({
              notification: null
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
            label: (_state$notification = state.notification) === null || _state$notification === void 0 ? void 0 : _state$notification.label,
            onClose: function onClose(ev) {
              return updateState({
                notification: null
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: (_state$notification2 = state.notification) === null || _state$notification2 === void 0 ? void 0 : _state$notification2.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#999999",
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 324,
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
          lineNumber: 349,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 365,
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
            lineNumber: 370,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 379,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsIm5vdGlmaWNhdGlvbiIsImFkZFBhcnRpY2lwYW50Iiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5IiwicmVtb3ZlUGFydGljaXBhbnQiLCJzZWxlY3RlZFBhcnRpY2lwYW50IiwicGFydGljaXBhbnRzIiwiaWQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJhZ2UiLCJnZW5kZXIiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwZXJmb3JtYW5jZSIsInJlcG9ydCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5zdGF0ZSIsImNhdGVnb3J5TW91bnRhaW4iLCJsYWJlbCIsInZhbHVlIiwiY2F0ZWdvcnlSb3V0ZSIsInRvdGFsUGFydGljaXBhbnRzIiwidG90YWxXb21hbnMiLCJ0b3RhbE1lbnMiLCJwZXJmb3JtYW5jZUhpZ2giLCJwZXJmb3JtYW5jZU1lZGl1bSIsInRvdGFsQWdlcyIsImF2ZXJhZ2VBZ2VzIiwiZm9yRWFjaCIsInBhcnRpY2lwYW50IiwidG9Mb3dlckNhc2UiLCJyb3VuZCIsImNvbnRpbnVlciIsImZpZWxkIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicHVzaCIsImZpbHRlciIsInAiLCJzZWxlY3RQYXJ0aWNpcGFudCIsImV2IiwibWFwIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1dDLHFEQUFBLENBQWU7QUFDdkNDLGdCQUFZLEVBQUUsSUFEeUI7QUFFdkNDLGtCQUFjLEVBQUUsS0FGdUI7QUFHdkNDLGtCQUFjLEVBQUUsS0FIdUI7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QUssRUFBQyxxQkFEUjtBQUVFLGlCQUFLLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3S0Y7QUFBQSxrQkFERjtBQTZMRDs7R0FqWVFsQixLOztLQUFBQSxLO0FBbVlULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LmJlZGJmYTI2NThjMTg2ODMxODk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4uLy4uL2hlbHBlcnMvbWFwJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9jayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbm90aWZpY2F0aW9uOiBudWxsLFxyXG4gICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeTogbnVsbCxcclxuICAgIHJlbW92ZVBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICBwYXJ0aWNpcGFudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDApLFxyXG4gICAgICAgIGFnZTogMjMsXHJcbiAgICAgICAgZ2VuZGVyOiAnbWVuJyxcclxuICAgICAgICBuYW1lOiBcIkFuZHJlc1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJvdXRlXCIsXHJcbiAgICAgICAgcGVyZm9ybWFuY2U6ICdoaWdoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDApLFxyXG4gICAgICAgIGFnZTogMjksXHJcbiAgICAgICAgZ2VuZGVyOiAnbWVuJyxcclxuICAgICAgICBuYW1lOiBcIkNyaXN0aWFuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwibW91bnRhaW5cIixcclxuICAgICAgICBwZXJmb3JtYW5jZTogJ21lZGl1bScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSxcclxuICAgICAgICBhZ2U6IDQwLFxyXG4gICAgICAgIGdlbmRlcjogJ21lbicsXHJcbiAgICAgICAgbmFtZTogXCJMdWlzIHBhdGnDsW9cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJyb3V0ZVwiLFxyXG4gICAgICAgIHBlcmZvcm1hbmNlOiAnbWVkaXVtJyxcclxuICAgICAgfVxyXG4gICAgXSxcclxuXHJcbiAgICByZXBvcnQ6IHt9XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobnN0YXRlKSB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAuLi5uc3RhdGUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHJlcG9ydCA9IHtcclxuICAgIGNhdGVnb3J5TW91bnRhaW46IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgbW9udGHDsWEnLFxyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgY2F0ZWdvcnlSb3V0ZToge1xyXG4gICAgICBsYWJlbDogJ0JpY2ljbGV0YSBkZSBydXRhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsUGFydGljaXBhbnRzOiB7XHJcbiAgICAgIGxhYmVsOiAndG90YWwgcGFyY2lwYW50ZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFdvbWFuczoge1xyXG4gICAgICBsYWJlbDogJ011amVyZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbE1lbnM6IHtcclxuICAgICAgbGFiZWw6ICdIb21icmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgcGVyZm9ybWFuY2VIaWdoOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gYWx0bycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlTWVkaXVtOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gbWVkaW8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbEFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdUb3RhbCBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBhdmVyYWdlQWdlczoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LCAgICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGUucGFydGljaXBhbnRzLmZvckVhY2goKHBhcnRpY2lwYW50KT0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICBwZXJmb3JtYW5jZSxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgYWdlLFxyXG4gICAgfSA9IHBhcnRpY2lwYW50O1xyXG5cclxuICAgIHBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2UudG9Mb3dlckNhc2UoKTtcclxuICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgIHRvdGFsUGFydGljaXBhbnRzLFxyXG4gICAgICBhdmVyYWdlQWdlcyxcclxuICAgICAgdG90YWxBZ2VzLFxyXG4gICAgICB0b3RhbE1lbnMsXHJcbiAgICAgIHRvdGFsV29tYW5zLFxyXG4gICAgICBwZXJmb3JtYW5jZUhpZ2gsXHJcbiAgICAgIGNhdGVnb3J5Um91dGUsXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4sXHJcbiAgICAgIHBlcmZvcm1hbmNlTWVkaXVtLFxyXG4gICAgfSA9IHJlcG9ydDtcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSArPSAxO1xyXG4gICAgdG90YWxBZ2VzLnZhbHVlICs9IGFnZTtcclxuICAgIGF2ZXJhZ2VBZ2VzLnZhbHVlID0gTWF0aC5yb3VuZCh0b3RhbEFnZXMudmFsdWUgLyB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSk7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdtb3VudGFpbicpXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4udmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihjYXRlZ29yeSA9PT0gJ3JvdXRlJylcclxuICAgICAgY2F0ZWdvcnlSb3V0ZS52YWx1ZSArPSAxO1xyXG4gICAgXHJcbiAgICBpZihnZW5kZXIgPT09ICdtZW4nKVxyXG4gICAgICB0b3RhbE1lbnMudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihnZW5kZXIgPT09ICd3b21hbicpXHJcbiAgICAgIHRvdGFsV29tYW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdoaWdoJylcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdtZWRpdW0nKVxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bS52YWx1ZSArPSAxO1xyXG5cclxuICB9KVxyXG5cclxuICBzdGF0ZS5yZXBvcnQgPSByZXBvcnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICBsZXQgY29udGludWVyID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgZmllbGQgPSB7XHJcbiAgICAgICduYW1lJzogJ25vbWJyZScsXHJcbiAgICAgICdhZ2UnOiAnZWRhZCcsXHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmtleXMocGFydGljaXBhbnQpLmZvckVhY2goKGtleSk9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHBhcnRpY2lwYW50W2tleV07XHJcbiAgXHJcbiAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IDAgfHwgY29udGludWVyID09PSBmYWxzZSkgXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgICAgY29udGludWVyID0gZmFsc2U7XHJcbiAgICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgICAgIGxhYmVsOiBgVmVyaWZpY2EgbG9zIGNhbXBvc2AsXHJcbiAgICAgICAgICBtZXNzYWdlOiBgRWwgY2FtcG8gJHtmaWVsZFtrZXldfSBlc3RhIHZhY2lvYFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYoIWNvbnRpbnVlcilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHBhcnRpY2lwYW50LmNhdGVnb3J5ID0gc3RhdGUuc2VsZWN0ZWRDYXRlZ29yeTtcclxuICAgIHN0YXRlLnBhcnRpY2lwYW50cy5wdXNoKHBhcnRpY2lwYW50KTsgIFxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMgPSBzdGF0ZS5wYXJ0aWNpcGFudHMuZmlsdGVyKHAgPT4ge1xyXG4gICAgICBpZihwYXJ0aWNpcGFudC5pZCAhPT0gcC5pZClcclxuICAgICAgICByZXR1cm4gMTsgIFxyXG4gICAgfSlcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VsZWN0UGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogcGFydGljaXBhbnQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdENhdGVnb3J5fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjY2lvbmEgdW5hIGNhdGVnb3JpYSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7c2VsZWN0Q2F0ZWdvcnk6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0ncm91dGUnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdyb3V0ZScsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J21vdW50YWluJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAnbW91bnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICB7Lyogbm90aGluZyAqL31cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdOYW1lJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2FnZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdBZ2UnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5kZXInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+V29tYW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncGVyZm9ybWFuY2UnPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGlnaDwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lZGl1bTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyM1NTExNDQnPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtyZW1vdmVQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdQYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogbnVsbCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5WYXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ob21icmU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uZ2VuZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J3BlcmZvcm1hbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LnBlcmZvcm1hbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjZmYwMDAwJz5cclxuICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUubm90aWZpY2F0aW9ufT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZXYgPT4gdXBkYXRlU3RhdGUoe25vdGlmaWNhdGlvbjogbnVsbH0pfT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyIFxyXG4gICAgICAgICAgICAgIGxhYmVsPXtzdGF0ZS5ub3RpZmljYXRpb24/LmxhYmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogbnVsbFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm5vdGlmaWNhdGlvbj8ubWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjOTk5OTk5Jz5cclxuICAgICAgICAgICAgICAgIG9rXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc2VsZWN0UGFydGljaXBhbnQoZXYubWFwLmRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9