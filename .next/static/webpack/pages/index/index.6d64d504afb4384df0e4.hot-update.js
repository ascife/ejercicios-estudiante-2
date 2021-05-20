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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducers_persist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/reducers/persist */ "./store/reducers/persist.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\cristian\\Desktop\\Code\\Web\\Next\\my-student2\\pages\\index\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 //redux




function Index(props) {
  _s();

  var _state$selectedPartic, _state$selectedPartic2, _state$selectedPartic3, _state$selectedPartic4, _state$selectedPartic5, _state$notification, _state$notification2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    notification: null,
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null,
    removeParticipant: false,
    selectedParticipant: null,
    participants: props.persisted.participants || [],
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
      label: 'total participantes',
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
      if (value.toString().length > 0) return;
      if (continuer) updateState({
        notification: {
          label: "Verifica los campos",
          message: "El campo ".concat(field[key], " esta vacio")
        }
      });
      continuer = false;
    });
    if (!continuer) return;
    participant.id = Math.random() * 100000;
    participant.category = state.selectedCategory;
    state.participants.push(participant);
    props.persist('participants', state.participants);
    updateState({
      addParticipant: false
    });
  }

  function removeParticipant(participant) {
    state.participants = state.participants.filter(function (p) {
      if (participant.id !== p.id) return 1;
    });
    props.persist('participants', state.participants);
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
            lineNumber: 193,
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
              lineNumber: 198,
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
              lineNumber: 206,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
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
            lineNumber: 225,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
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
            lineNumber: 266,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
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
            lineNumber: 310,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: (_state$notification2 = state.notification) === null || _state$notification2 === void 0 ? void 0 : _state$notification2.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#999999",
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 307,
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
          lineNumber: 332,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
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
            lineNumber: 353,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "fg3IpM3mcJnHEF1q2IWGIqu/LQs=");

_c = Index;

var mapStateToProps = function mapStateToProps(store) {
  return {
    persisted: store.persistReducer
  };
};

var mapActionsToProps = function mapActionsToProps(dispath) {
  return {
    persist: function persist(key, value) {
      return dispath((0,_store_reducers_persist__WEBPACK_IMPORTED_MODULE_11__.persist)(key, value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_10__.connect)(mapStateToProps, mapActionsToProps)(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIlJlYWN0Iiwibm90aWZpY2F0aW9uIiwiYWRkUGFydGljaXBhbnQiLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJyZW1vdmVQYXJ0aWNpcGFudCIsInNlbGVjdGVkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudHMiLCJwZXJzaXN0ZWQiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInBlcmZvcm1hbmNlIiwiY2F0ZWdvcnkiLCJnZW5kZXIiLCJhZ2UiLCJ0b0xvd2VyQ2FzZSIsIk1hdGgiLCJyb3VuZCIsImNvbnRpbnVlciIsImZpZWxkIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWVzc2FnZSIsImlkIiwicmFuZG9tIiwicHVzaCIsInBlcnNpc3QiLCJmaWx0ZXIiLCJwIiwic2VsZWN0UGFydGljaXBhbnQiLCJldiIsIm5hbWUiLCJtYXAiLCJkYXRhIiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJwZXJzaXN0UmVkdWNlciIsIm1hcEFjdGlvbnNUb1Byb3BzIiwiZGlzcGF0aCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FB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QVMsRUFBRThDLEtBQUssQ0FBQ0M7QUFEWixHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVNDLE9BQVQsRUFBa0I7QUFDMUMsU0FBTztBQUNMWixXQUFPLEVBQUUsaUJBQUNQLEdBQUQsRUFBTXRCLEtBQU47QUFBQSxhQUFleUMsT0FBTyxDQUFDWixpRUFBTyxDQUFDUCxHQUFELEVBQU10QixLQUFOLENBQVIsQ0FBdEI7QUFBQTtBQURKLEdBQVA7QUFHRCxDQUpEOztBQU1BLCtEQUFlMEMscURBQU8sQ0FBQ0wsZUFBRCxFQUFrQkcsaUJBQWxCLENBQVAsQ0FBNEMxRCxLQUE1QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4L2luZGV4LjZkNjRkNTA0YWZiNDM4NGRmMGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4uLy4uL2hlbHBlcnMvbWFwJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9jayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbi8vcmVkdXhcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcGVyc2lzdCB9IGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3BlcnNpc3QnO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIG5vdGlmaWNhdGlvbjogbnVsbCxcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICByZW1vdmVQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgcGFydGljaXBhbnRzOiBwcm9wcy5wZXJzaXN0ZWQucGFydGljaXBhbnRzIHx8IFtdLFxyXG4gICAgcmVwb3J0OiB7fSxcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuc3RhdGUpIHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC4uLm5zdGF0ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgcmVwb3J0ID0ge1xyXG4gICAgY2F0ZWdvcnlNb3VudGFpbjoge1xyXG4gICAgICBsYWJlbDogJ0JpY2ljbGV0YSBkZSBtb250YcOxYScsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXRlZ29yeVJvdXRlOiB7XHJcbiAgICAgIGxhYmVsOiAnQmljaWNsZXRhIGRlIHJ1dGEnLFxyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHM6IHtcclxuICAgICAgbGFiZWw6ICd0b3RhbCBwYXJ0aWNpcGFudGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxXb21hbnM6IHtcclxuICAgICAgbGFiZWw6ICdNdWplcmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxNZW5zOiB7XHJcbiAgICAgIGxhYmVsOiAnSG9tYnJlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlSGlnaDoge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIGFsdG8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBwZXJmb3JtYW5jZU1lZGl1bToge1xyXG4gICAgICBsYWJlbDogJ1JlbmRpbWllbnRvIG1lZGlvJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxBZ2VzOiB7XHJcbiAgICAgIGxhYmVsOiAnVG90YWwgZWRhZGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgYXZlcmFnZUFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdQcm9tZWRpbyBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSwgICAgICBcclxuICB9XHJcblxyXG4gIHN0YXRlLnBhcnRpY2lwYW50cy5mb3JFYWNoKChwYXJ0aWNpcGFudCk9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgcGVyZm9ybWFuY2UsXHJcbiAgICAgIGNhdGVnb3J5LFxyXG4gICAgICBnZW5kZXIsXHJcbiAgICAgIGFnZSxcclxuICAgIH0gPSBwYXJ0aWNpcGFudDtcclxuXHJcbiAgICBwZXJmb3JtYW5jZSA9IHBlcmZvcm1hbmNlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjYXRlZ29yeSA9IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBnZW5kZXIgPSBnZW5kZXIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICB0b3RhbFBhcnRpY2lwYW50cyxcclxuICAgICAgYXZlcmFnZUFnZXMsXHJcbiAgICAgIHRvdGFsQWdlcyxcclxuICAgICAgdG90YWxNZW5zLFxyXG4gICAgICB0b3RhbFdvbWFucyxcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLFxyXG4gICAgICBjYXRlZ29yeVJvdXRlLFxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLFxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bSxcclxuICAgIH0gPSByZXBvcnQ7XHJcblxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHMudmFsdWUgKz0gMTtcclxuICAgIHRvdGFsQWdlcy52YWx1ZSArPSBhZ2U7XHJcbiAgICBhdmVyYWdlQWdlcy52YWx1ZSA9IE1hdGgucm91bmQodG90YWxBZ2VzLnZhbHVlIC8gdG90YWxQYXJ0aWNpcGFudHMudmFsdWUpO1xyXG5cclxuICAgIGlmKGNhdGVnb3J5ID09PSAnbW91bnRhaW4nKVxyXG4gICAgICBjYXRlZ29yeU1vdW50YWluLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdyb3V0ZScpXHJcbiAgICAgIGNhdGVnb3J5Um91dGUudmFsdWUgKz0gMTtcclxuICAgIFxyXG4gICAgaWYoZ2VuZGVyID09PSAnbWVuJylcclxuICAgICAgdG90YWxNZW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYoZ2VuZGVyID09PSAnd29tYW4nKVxyXG4gICAgICB0b3RhbFdvbWFucy52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnaGlnaCcpXHJcbiAgICAgIHBlcmZvcm1hbmNlSGlnaC52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKHBlcmZvcm1hbmNlID09PSAnbWVkaXVtJylcclxuICAgICAgcGVyZm9ybWFuY2VNZWRpdW0udmFsdWUgKz0gMTtcclxuXHJcbiAgfSlcclxuXHJcbiAgc3RhdGUucmVwb3J0ID0gcmVwb3J0O1xyXG5cclxuICBmdW5jdGlvbiBhZGRQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgbGV0IGNvbnRpbnVlciA9IHRydWU7XHJcblxyXG4gICAgbGV0IGZpZWxkID0ge1xyXG4gICAgICAnbmFtZSc6ICdub21icmUnLFxyXG4gICAgICAnYWdlJzogJ2VkYWQnLFxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHBhcnRpY2lwYW50KS5mb3JFYWNoKChrZXkpPT4ge1xyXG4gICAgICBsZXQgdmFsdWUgPSBwYXJ0aWNpcGFudFtrZXldO1xyXG4gIFxyXG4gICAgICBpZih2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDApIFxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmKGNvbnRpbnVlcilcclxuICAgICAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgICAgICAgbGFiZWw6IGBWZXJpZmljYSBsb3MgY2FtcG9zYCxcclxuICAgICAgICAgICAgbWVzc2FnZTogYEVsIGNhbXBvICR7ZmllbGRba2V5XX0gZXN0YSB2YWNpb2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29udGludWVyID0gZmFsc2U7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjb250aW51ZXIpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBwYXJ0aWNpcGFudC5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDA7XHJcbiAgICBwYXJ0aWNpcGFudC5jYXRlZ29yeSA9IHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMucHVzaChwYXJ0aWNpcGFudCk7ICBcclxuICAgIFxyXG4gICAgcHJvcHMucGVyc2lzdCgncGFydGljaXBhbnRzJywgc3RhdGUucGFydGljaXBhbnRzKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzID0gc3RhdGUucGFydGljaXBhbnRzLmZpbHRlcihwID0+IHtcclxuICAgICAgaWYocGFydGljaXBhbnQuaWQgIT09IHAuaWQpXHJcbiAgICAgICAgcmV0dXJuIDE7ICBcclxuICAgIH0pXHJcblxyXG4gICAgcHJvcHMucGVyc2lzdCgncGFydGljaXBhbnRzJywgc3RhdGUucGFydGljaXBhbnRzKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VsZWN0UGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogcGFydGljaXBhbnQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdENhdGVnb3J5fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjY2lvbmEgdW5hIGNhdGVnb3JpYSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7c2VsZWN0Q2F0ZWdvcnk6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0ncm91dGUnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdyb3V0ZScsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J21vdW50YWluJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAnbW91bnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICB7Lyogbm90aGluZyAqL31cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdOYW1lJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2FnZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdBZ2UnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5kZXInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+V29tYW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncGVyZm9ybWFuY2UnPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGlnaDwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lZGl1bTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyM1NTExNDQnPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtyZW1vdmVQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdQYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogbnVsbCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5WYXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ob21icmU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uZ2VuZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J3BlcmZvcm1hbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LnBlcmZvcm1hbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjZmYwMDAwJz5cclxuICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUubm90aWZpY2F0aW9ufT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZXYgPT4gdXBkYXRlU3RhdGUoe25vdGlmaWNhdGlvbjogbnVsbH0pfT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyIFxyXG4gICAgICAgICAgICAgIGxhYmVsPXtzdGF0ZS5ub3RpZmljYXRpb24/LmxhYmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogbnVsbFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm5vdGlmaWNhdGlvbj8ubWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjOTk5OTk5Jz5cclxuICAgICAgICAgICAgICAgIG9rXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc2VsZWN0UGFydGljaXBhbnQoZXYubWFwLmRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGVyc2lzdGVkOiBzdG9yZS5wZXJzaXN0UmVkdWNlclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSBmdW5jdGlvbihkaXNwYXRoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBlcnNpc3Q6IChrZXksIHZhbHVlKT0+IGRpc3BhdGgocGVyc2lzdChrZXksIHZhbHVlKSkgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9