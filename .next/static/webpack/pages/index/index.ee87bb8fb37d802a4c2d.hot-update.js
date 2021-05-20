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
      if (value.length > 0) return;
      if (continuer) updateState({
        notification: {
          label: "Verifica los campos",
          message: "El campo ".concat(field[key], " esta vacio")
        }
      });
      continuer = false;
    });
    if (!continuer) return;
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
            lineNumber: 192,
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
              lineNumber: 197,
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
              lineNumber: 205,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
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
            lineNumber: 224,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
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
            lineNumber: 265,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
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
            lineNumber: 309,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: (_state$notification2 = state.notification) === null || _state$notification2 === void 0 ? void 0 : _state$notification2.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#999999",
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 306,
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
          lineNumber: 331,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Participantes inscritos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 347,
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
            lineNumber: 352,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.TitleBold, {
        children: "Reporte de participantes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default.Wrap, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_map__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: state.report,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Block__WEBPACK_IMPORTED_MODULE_7__.default.Report, {
            label: "Total Participantes",
            value: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 361,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIlJlYWN0Iiwibm90aWZpY2F0aW9uIiwiYWRkUGFydGljaXBhbnQiLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJyZW1vdmVQYXJ0aWNpcGFudCIsInNlbGVjdGVkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudHMiLCJwZXJzaXN0ZWQiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInBlcmZvcm1hbmNlIiwiY2F0ZWdvcnkiLCJnZW5kZXIiLCJhZ2UiLCJ0b0xvd2VyQ2FzZSIsIk1hdGgiLCJyb3VuZCIsImNvbnRpbnVlciIsImZpZWxkIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJwdXNoIiwicGVyc2lzdCIsImZpbHRlciIsInAiLCJpZCIsInNlbGVjdFBhcnRpY2lwYW50IiwiZXYiLCJuYW1lIiwibWFwIiwiZGF0YSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJtYXBBY3Rpb25zVG9Qcm9wcyIsImRpc3BhdGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7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QjtBQUMxQyxTQUFPO0FBQ0xiLFdBQU8sRUFBRSxpQkFBQ0osR0FBRCxFQUFNdEIsS0FBTjtBQUFBLGFBQWV1QyxPQUFPLENBQUNiLGlFQUFPLENBQUNKLEdBQUQsRUFBTXRCLEtBQU4sQ0FBUixDQUF0QjtBQUFBO0FBREosR0FBUDtBQUdELENBSkQ7O0FBTUEsK0RBQWV3QyxxREFBTyxDQUFDTCxlQUFELEVBQWtCRyxpQkFBbEIsQ0FBUCxDQUE0Q3hELEtBQTVDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgvaW5kZXguZWU4N2JiOGZiMzdkODAyYTRjMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vaGVscGVycy9tYXAnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2NrJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXInO1xyXG5cclxuLy9yZWR1eFxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBwZXJzaXN0IH0gZnJvbSAnLi4vLi4vc3RvcmUvcmVkdWNlcnMvcGVyc2lzdCc7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbm90aWZpY2F0aW9uOiBudWxsLFxyXG4gICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeTogbnVsbCxcclxuICAgIHJlbW92ZVBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICBwYXJ0aWNpcGFudHM6IHByb3BzLnBlcnNpc3RlZC5wYXJ0aWNpcGFudHMgfHwgW10sXHJcbiAgICByZXBvcnQ6IHt9LFxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5zdGF0ZSkge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgLi4ubnN0YXRlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxldCByZXBvcnQgPSB7XHJcbiAgICBjYXRlZ29yeU1vdW50YWluOiB7XHJcbiAgICAgIGxhYmVsOiAnQmljaWNsZXRhIGRlIG1vbnRhw7FhJyxcclxuICAgICAgdmFsdWU6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhdGVnb3J5Um91dGU6IHtcclxuICAgICAgbGFiZWw6ICdCaWNpY2xldGEgZGUgcnV0YScsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czoge1xyXG4gICAgICBsYWJlbDogJ3RvdGFsIHBhcnRpY2lwYW50ZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbFdvbWFuczoge1xyXG4gICAgICBsYWJlbDogJ011amVyZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbE1lbnM6IHtcclxuICAgICAgbGFiZWw6ICdIb21icmVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgcGVyZm9ybWFuY2VIaWdoOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gYWx0bycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBlcmZvcm1hbmNlTWVkaXVtOiB7XHJcbiAgICAgIGxhYmVsOiAnUmVuZGltaWVudG8gbWVkaW8nLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICB0b3RhbEFnZXM6IHtcclxuICAgICAgbGFiZWw6ICdUb3RhbCBlZGFkZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBhdmVyYWdlQWdlczoge1xyXG4gICAgICBsYWJlbDogJ1Byb21lZGlvIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LCAgICAgIFxyXG4gIH1cclxuXHJcbiAgc3RhdGUucGFydGljaXBhbnRzLmZvckVhY2goKHBhcnRpY2lwYW50KT0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICBwZXJmb3JtYW5jZSxcclxuICAgICAgY2F0ZWdvcnksXHJcbiAgICAgIGdlbmRlcixcclxuICAgICAgYWdlLFxyXG4gICAgfSA9IHBhcnRpY2lwYW50O1xyXG5cclxuICAgIHBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2UudG9Mb3dlckNhc2UoKTtcclxuICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcclxuICAgIGdlbmRlciA9IGdlbmRlci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgIHRvdGFsUGFydGljaXBhbnRzLFxyXG4gICAgICBhdmVyYWdlQWdlcyxcclxuICAgICAgdG90YWxBZ2VzLFxyXG4gICAgICB0b3RhbE1lbnMsXHJcbiAgICAgIHRvdGFsV29tYW5zLFxyXG4gICAgICBwZXJmb3JtYW5jZUhpZ2gsXHJcbiAgICAgIGNhdGVnb3J5Um91dGUsXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4sXHJcbiAgICAgIHBlcmZvcm1hbmNlTWVkaXVtLFxyXG4gICAgfSA9IHJlcG9ydDtcclxuXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSArPSAxO1xyXG4gICAgdG90YWxBZ2VzLnZhbHVlICs9IGFnZTtcclxuICAgIGF2ZXJhZ2VBZ2VzLnZhbHVlID0gTWF0aC5yb3VuZCh0b3RhbEFnZXMudmFsdWUgLyB0b3RhbFBhcnRpY2lwYW50cy52YWx1ZSk7XHJcblxyXG4gICAgaWYoY2F0ZWdvcnkgPT09ICdtb3VudGFpbicpXHJcbiAgICAgIGNhdGVnb3J5TW91bnRhaW4udmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihjYXRlZ29yeSA9PT0gJ3JvdXRlJylcclxuICAgICAgY2F0ZWdvcnlSb3V0ZS52YWx1ZSArPSAxO1xyXG4gICAgXHJcbiAgICBpZihnZW5kZXIgPT09ICdtZW4nKVxyXG4gICAgICB0b3RhbE1lbnMudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihnZW5kZXIgPT09ICd3b21hbicpXHJcbiAgICAgIHRvdGFsV29tYW5zLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdoaWdoJylcclxuICAgICAgcGVyZm9ybWFuY2VIaWdoLnZhbHVlICs9IDE7XHJcblxyXG4gICAgaWYocGVyZm9ybWFuY2UgPT09ICdtZWRpdW0nKVxyXG4gICAgICBwZXJmb3JtYW5jZU1lZGl1bS52YWx1ZSArPSAxO1xyXG5cclxuICB9KVxyXG5cclxuICBzdGF0ZS5yZXBvcnQgPSByZXBvcnQ7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFBhcnRpY2lwYW50KHBhcnRpY2lwYW50KSB7XHJcbiAgICBsZXQgY29udGludWVyID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgZmllbGQgPSB7XHJcbiAgICAgICduYW1lJzogJ25vbWJyZScsXHJcbiAgICAgICdhZ2UnOiAnZWRhZCcsXHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmtleXMocGFydGljaXBhbnQpLmZvckVhY2goKGtleSk9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHBhcnRpY2lwYW50W2tleV07XHJcbiAgXHJcbiAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IDApIFxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmKGNvbnRpbnVlcilcclxuICAgICAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgICAgICAgbGFiZWw6IGBWZXJpZmljYSBsb3MgY2FtcG9zYCxcclxuICAgICAgICAgICAgbWVzc2FnZTogYEVsIGNhbXBvICR7ZmllbGRba2V5XX0gZXN0YSB2YWNpb2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY29udGludWVyID0gZmFsc2U7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjb250aW51ZXIpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBwYXJ0aWNpcGFudC5jYXRlZ29yeSA9IHN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnk7XHJcbiAgICBzdGF0ZS5wYXJ0aWNpcGFudHMucHVzaChwYXJ0aWNpcGFudCk7ICBcclxuICAgIFxyXG4gICAgcHJvcHMucGVyc2lzdCgncGFydGljaXBhbnRzJywgc3RhdGUucGFydGljaXBhbnRzKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzID0gc3RhdGUucGFydGljaXBhbnRzLmZpbHRlcihwID0+IHtcclxuICAgICAgaWYocGFydGljaXBhbnQuaWQgIT09IHAuaWQpXHJcbiAgICAgICAgcmV0dXJuIDE7ICBcclxuICAgIH0pXHJcblxyXG4gICAgcHJvcHMucGVyc2lzdCgncGFydGljaXBhbnRzJywgc3RhdGUucGFydGljaXBhbnRzKTtcclxuXHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkUGFydGljaXBhbnQ6IG51bGwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VsZWN0UGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogcGFydGljaXBhbnQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdENhdGVnb3J5fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjY2lvbmEgdW5hIGNhdGVnb3JpYSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7c2VsZWN0Q2F0ZWdvcnk6IGZhbHNlfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0ncm91dGUnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdyb3V0ZScsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCbG9jay5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9J21vdW50YWluJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGFkZFBhcnRpY2lwYW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiAnbW91bnRhaW4nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICB7Lyogbm90aGluZyAqL31cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPiBcclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLmFkZFBhcnRpY2lwYW50fT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17YWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdOYW1lJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2FnZSdcclxuICAgICAgICAgICAgICAgIHZlcmlmaWVyPSdBZ2UnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5HZW5lcm88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdnZW5kZXInPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVuPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+V29tYW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNoZWNrQm94ZXM+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlbmRpbWllbnRvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94ZXMgbmFtZT0ncGVyZm9ybWFuY2UnPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+SGlnaDwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNoZWNrQm94Pk1lZGl1bTwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyM1NTExNDQnPlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkZpbGw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Gb3JtLkNlbnRlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbCBzaG93SWY9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtyZW1vdmVQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdQYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogbnVsbCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8Rm9ybS5WYXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ob21icmU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RWRhZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LmFnZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdnZW5kZXInXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uZ2VuZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGREaXNhYmxlZCBcclxuICAgICAgICAgICAgICAgIG5hbWU9J3BlcmZvcm1hbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/LnBlcmZvcm1hbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjZmYwMDAwJz5cclxuICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUubm90aWZpY2F0aW9ufT5cclxuICAgICAgICA8Rm9ybS5DZW50ZXI+XHJcbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZXYgPT4gdXBkYXRlU3RhdGUoe25vdGlmaWNhdGlvbjogbnVsbH0pfT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyIFxyXG4gICAgICAgICAgICAgIGxhYmVsPXtzdGF0ZS5ub3RpZmljYXRpb24/LmxhYmVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbjogbnVsbFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm5vdGlmaWNhdGlvbj8ubWVzc2FnZX1cclxuICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybS5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5GaWxsIGNvbG9yPScjOTk5OTk5Jz5cclxuICAgICAgICAgICAgICAgIG9rXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBteT17NDB9PlxyXG4gICAgICAgIDxDb250YWluZXIuUm93PlxyXG4gICAgICAgICAgPEJ1dHRvbi5JY29uXHJcbiAgICAgICAgICAgIGljb249J2FkZCdcclxuICAgICAgICAgICAgbGFiZWw9J0FncmVnYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQnVzY2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgb25DbGljaz17c2VhcmNoUGFydGljaXBhbnR9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0NvbnRhaW5lci5Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGFpbmVyLlRpdGxlQm9sZD5cclxuICAgICAgICAgIFBhcnRpY2lwYW50ZXMgaW5zY3JpdG9zXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucGFydGljaXBhbnRzfT5cclxuICAgICAgICAgICAgPEJsb2NrLlBhcnRpY2lwYW50XHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4gc2VsZWN0UGFydGljaXBhbnQoZXYubWFwLmRhdGEpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUmVwb3J0ZSBkZSBwYXJ0aWNpcGFudGVzXHJcbiAgICAgICAgPC9Db250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgIDxDb250YWluZXIuV3JhcD5cclxuICAgICAgICAgIDxNYXAgZGF0YT17c3RhdGUucmVwb3J0fT5cclxuICAgICAgICAgICAgPEJsb2NrLlJlcG9ydCBcclxuICAgICAgICAgICAgICBsYWJlbD1cIlRvdGFsIFBhcnRpY2lwYW50ZXNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTWFwPlxyXG4gICAgICAgIDwvQ29udGFpbmVyLldyYXA+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGVyc2lzdGVkOiBzdG9yZS5wZXJzaXN0UmVkdWNlclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwQWN0aW9uc1RvUHJvcHMgPSBmdW5jdGlvbihkaXNwYXRoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBlcnNpc3Q6IChrZXksIHZhbHVlKT0+IGRpc3BhdGgocGVyc2lzdChrZXksIHZhbHVlKSkgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwQWN0aW9uc1RvUHJvcHMpKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9