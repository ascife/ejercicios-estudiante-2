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
            lineNumber: 188,
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
              lineNumber: 193,
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
              lineNumber: 201,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
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
            lineNumber: 220,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "name",
              verifier: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Field, {
              name: "age",
              verifier: "Age"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "gender",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Men"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Woman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBoxes, {
              name: "performance",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "High"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.CheckBox, {
                children: "Medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#551144",
              children: "Agregar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
            lineNumber: 261,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Variable, {
              name: "id",
              value: (_state$selectedPartic = state.selectedParticipant) === null || _state$selectedPartic === void 0 ? void 0 : _state$selectedPartic.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Nombre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "name",
              value: (_state$selectedPartic2 = state.selectedParticipant) === null || _state$selectedPartic2 === void 0 ? void 0 : _state$selectedPartic2.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "age",
              value: (_state$selectedPartic3 = state.selectedParticipant) === null || _state$selectedPartic3 === void 0 ? void 0 : _state$selectedPartic3.age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "gender",
              value: (_state$selectedPartic4 = state.selectedParticipant) === null || _state$selectedPartic4 === void 0 ? void 0 : _state$selectedPartic4.gender
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: "Rendimiento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.FieldDisabled, {
              name: "performance",
              value: (_state$selectedPartic5 = state.selectedParticipant) === null || _state$selectedPartic5 === void 0 ? void 0 : _state$selectedPartic5.performance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#ff0000",
              children: "Eliminar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
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
            lineNumber: 305,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Label, {
              children: (_state$notification2 = state.notification) === null || _state$notification2 === void 0 ? void 0 : _state$notification2.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default.Fill, {
              color: "#999999",
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
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

_s(Index, "fg3IpM3mcJnHEF1q2IWGIqu/LQs=");

_c = Index;

var mapStateToProps = function mapStateToProps(store) {
  return {
    persisted: store.persistReducer
  };
};

var mapActionsToProps = function mapActionsToProps(dispath) {
  return {
    persist: dispath(persist)
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


/***/ }),

/***/ "./store/reducers/persist.js":
/*!***********************************!*\
  !*** ./store/reducers/persist.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ reducer; },
/* harmony export */   "setPersist": function() { return /* binding */ setPersist; }
/* harmony export */ });
/* harmony import */ var C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//set values from the exterior
var _state = {}; //types creators

var SET_PERSIST = 'SET_LAST'; //reducer

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  function updateState(newState) {
    return _objectSpread(_objectSpread({}, state), newState);
  }

  switch (action.type) {
    case SET_PERSIST:
      return updateState((0,C_Users_cristian_Desktop_Code_Web_Next_my_student2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, action.key, action.value));

    default:
      return state;
  }
} //action creators

var setPersist = function setPersist(key, value) {
  return function (dispath, getState) {
    dispath({
      type: SET_PERSIST,
      key: key,
      value: value
    });
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL3BlcnNpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIlJlYWN0Iiwibm90aWZpY2F0aW9uIiwiYWRkUGFydGljaXBhbnQiLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJyZW1vdmVQYXJ0aWNpcGFudCIsInNlbGVjdGVkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudHMiLCJwZXJzaXN0ZWQiLCJyZXBvcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJuc3RhdGUiLCJjYXRlZ29yeU1vdW50YWluIiwibGFiZWwiLCJ2YWx1ZSIsImNhdGVnb3J5Um91dGUiLCJ0b3RhbFBhcnRpY2lwYW50cyIsInRvdGFsV29tYW5zIiwidG90YWxNZW5zIiwicGVyZm9ybWFuY2VIaWdoIiwicGVyZm9ybWFuY2VNZWRpdW0iLCJ0b3RhbEFnZXMiLCJhdmVyYWdlQWdlcyIsImZvckVhY2giLCJwYXJ0aWNpcGFudCIsInBlcmZvcm1hbmNlIiwiY2F0ZWdvcnkiLCJnZW5kZXIiLCJhZ2UiLCJ0b0xvd2VyQ2FzZSIsIk1hdGgiLCJyb3VuZCIsImNvbnRpbnVlciIsImZpZWxkIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWVzc2FnZSIsInB1c2giLCJmaWx0ZXIiLCJwIiwiaWQiLCJzZWxlY3RQYXJ0aWNpcGFudCIsImV2IiwibmFtZSIsIm1hcCIsImRhdGEiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwibWFwQWN0aW9uc1RvUHJvcHMiLCJkaXNwYXRoIiwicGVyc2lzdCIsImNvbm5lY3QiLCJfc3RhdGUiLCJTRVRfUEVSU0lTVCIsInJlZHVjZXIiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsInR5cGUiLCJzZXRQZXJzaXN0IiwiZ2V0U3Rh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ODIzN2MwN2MzYTM2MTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4uLy4uL2hlbHBlcnMvbWFwJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CbG9jayc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcclxuXHJcbi8vcmVkdXhcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0UGVyc2lzdCB9IGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3BlcnNpc3QnO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIG5vdGlmaWNhdGlvbjogbnVsbCxcclxuICAgIGFkZFBhcnRpY2lwYW50OiBmYWxzZSxcclxuICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICByZW1vdmVQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgcGFydGljaXBhbnRzOiBwcm9wcy5wZXJzaXN0ZWQucGFydGljaXBhbnRzIHx8IFtdLFxyXG4gICAgcmVwb3J0OiB7fSxcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuc3RhdGUpIHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC4uLm5zdGF0ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgcmVwb3J0ID0ge1xyXG4gICAgY2F0ZWdvcnlNb3VudGFpbjoge1xyXG4gICAgICBsYWJlbDogJ0JpY2ljbGV0YSBkZSBtb250YcOxYScsXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXRlZ29yeVJvdXRlOiB7XHJcbiAgICAgIGxhYmVsOiAnQmljaWNsZXRhIGRlIHJ1dGEnLFxyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHM6IHtcclxuICAgICAgbGFiZWw6ICd0b3RhbCBwYXJjaXBhbnRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsV29tYW5zOiB7XHJcbiAgICAgIGxhYmVsOiAnTXVqZXJlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsTWVuczoge1xyXG4gICAgICBsYWJlbDogJ0hvbWJyZXMnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBwZXJmb3JtYW5jZUhpZ2g6IHtcclxuICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBhbHRvJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcblxyXG4gICAgcGVyZm9ybWFuY2VNZWRpdW06IHtcclxuICAgICAgbGFiZWw6ICdSZW5kaW1pZW50byBtZWRpbycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsQWdlczoge1xyXG4gICAgICBsYWJlbDogJ1RvdGFsIGVkYWRlcycsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIGF2ZXJhZ2VBZ2VzOiB7XHJcbiAgICAgIGxhYmVsOiAnUHJvbWVkaW8gZWRhZGVzJyxcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sICAgICAgXHJcbiAgfVxyXG5cclxuICBzdGF0ZS5wYXJ0aWNpcGFudHMuZm9yRWFjaCgocGFydGljaXBhbnQpPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgIHBlcmZvcm1hbmNlLFxyXG4gICAgICBjYXRlZ29yeSxcclxuICAgICAgZ2VuZGVyLFxyXG4gICAgICBhZ2UsXHJcbiAgICB9ID0gcGFydGljaXBhbnQ7XHJcblxyXG4gICAgcGVyZm9ybWFuY2UgPSBwZXJmb3JtYW5jZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY2F0ZWdvcnkgPSBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZ2VuZGVyID0gZ2VuZGVyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgdG90YWxQYXJ0aWNpcGFudHMsXHJcbiAgICAgIGF2ZXJhZ2VBZ2VzLFxyXG4gICAgICB0b3RhbEFnZXMsXHJcbiAgICAgIHRvdGFsTWVucyxcclxuICAgICAgdG90YWxXb21hbnMsXHJcbiAgICAgIHBlcmZvcm1hbmNlSGlnaCxcclxuICAgICAgY2F0ZWdvcnlSb3V0ZSxcclxuICAgICAgY2F0ZWdvcnlNb3VudGFpbixcclxuICAgICAgcGVyZm9ybWFuY2VNZWRpdW0sXHJcbiAgICB9ID0gcmVwb3J0O1xyXG5cclxuICAgIHRvdGFsUGFydGljaXBhbnRzLnZhbHVlICs9IDE7XHJcbiAgICB0b3RhbEFnZXMudmFsdWUgKz0gYWdlO1xyXG4gICAgYXZlcmFnZUFnZXMudmFsdWUgPSBNYXRoLnJvdW5kKHRvdGFsQWdlcy52YWx1ZSAvIHRvdGFsUGFydGljaXBhbnRzLnZhbHVlKTtcclxuXHJcbiAgICBpZihjYXRlZ29yeSA9PT0gJ21vdW50YWluJylcclxuICAgICAgY2F0ZWdvcnlNb3VudGFpbi52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKGNhdGVnb3J5ID09PSAncm91dGUnKVxyXG4gICAgICBjYXRlZ29yeVJvdXRlLnZhbHVlICs9IDE7XHJcbiAgICBcclxuICAgIGlmKGdlbmRlciA9PT0gJ21lbicpXHJcbiAgICAgIHRvdGFsTWVucy52YWx1ZSArPSAxO1xyXG5cclxuICAgIGlmKGdlbmRlciA9PT0gJ3dvbWFuJylcclxuICAgICAgdG90YWxXb21hbnMudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihwZXJmb3JtYW5jZSA9PT0gJ2hpZ2gnKVxyXG4gICAgICBwZXJmb3JtYW5jZUhpZ2gudmFsdWUgKz0gMTtcclxuXHJcbiAgICBpZihwZXJmb3JtYW5jZSA9PT0gJ21lZGl1bScpXHJcbiAgICAgIHBlcmZvcm1hbmNlTWVkaXVtLnZhbHVlICs9IDE7XHJcblxyXG4gIH0pXHJcblxyXG4gIHN0YXRlLnJlcG9ydCA9IHJlcG9ydDtcclxuXHJcbiAgZnVuY3Rpb24gYWRkUGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIGxldCBjb250aW51ZXIgPSB0cnVlO1xyXG5cclxuICAgIGxldCBmaWVsZCA9IHtcclxuICAgICAgJ25hbWUnOiAnbm9tYnJlJyxcclxuICAgICAgJ2FnZSc6ICdlZGFkJyxcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhwYXJ0aWNpcGFudCkuZm9yRWFjaCgoa2V5KT0+IHtcclxuICAgICAgbGV0IHZhbHVlID0gcGFydGljaXBhbnRba2V5XTtcclxuICBcclxuICAgICAgaWYodmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKSBcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBpZihjb250aW51ZXIpXHJcbiAgICAgICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBgVmVyaWZpY2EgbG9zIGNhbXBvc2AsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBFbCBjYW1wbyAke2ZpZWxkW2tleV19IGVzdGEgdmFjaW9gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnRpbnVlciA9IGZhbHNlO1xyXG4gICAgfSlcclxuXHJcbiAgICBpZighY29udGludWVyKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgcGFydGljaXBhbnQuY2F0ZWdvcnkgPSBzdGF0ZS5zZWxlY3RlZENhdGVnb3J5O1xyXG4gICAgc3RhdGUucGFydGljaXBhbnRzLnB1c2gocGFydGljaXBhbnQpOyAgXHJcblxyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUGFydGljaXBhbnQocGFydGljaXBhbnQpIHtcclxuICAgIHN0YXRlLnBhcnRpY2lwYW50cyA9IHN0YXRlLnBhcnRpY2lwYW50cy5maWx0ZXIocCA9PiB7XHJcbiAgICAgIGlmKHBhcnRpY2lwYW50LmlkICE9PSBwLmlkKVxyXG4gICAgICAgIHJldHVybiAxOyAgXHJcbiAgICB9KVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRQYXJ0aWNpcGFudDogbnVsbCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWxlY3RQYXJ0aWNpcGFudChwYXJ0aWNpcGFudCkge1xyXG4gICAgdXBkYXRlU3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBwYXJ0aWNpcGFudCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuc2VsZWN0Q2F0ZWdvcnl9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXJcclxuICAgICAgICAgICAgICBsYWJlbD0nU2VsZWNjaW9uYSB1bmEgY2F0ZWdvcmlhJ1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2V2ID0+IHVwZGF0ZVN0YXRlKHtzZWxlY3RDYXRlZ29yeTogZmFsc2V9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uQm9keT5cclxuICAgICAgICAgICAgICA8QmxvY2suQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PSdyb3V0ZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2F0ZWdvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogJ3JvdXRlJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJsb2NrLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT0nbW91bnRhaW4nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENhdGVnb3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgYWRkUGFydGljaXBhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6ICdtb3VudGFpbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIHsvKiBub3RoaW5nICovfVxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+IFxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuYWRkUGFydGljaXBhbnR9PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXthZGRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkhlYWRlclxyXG4gICAgICAgICAgICAgIGxhYmVsPSdBZ3JlZ2FyIHBhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJ0aWNpcGFudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+Tm9tYnJlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J05hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FZGFkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYWdlJ1xyXG4gICAgICAgICAgICAgICAgdmVyaWZpZXI9J0FnZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkdlbmVybzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveGVzIG5hbWU9J2dlbmRlcic+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5NZW48L0Zvcm0uQ2hlY2tCb3g+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5Xb21hbjwvRm9ybS5DaGVja0JveD5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ2hlY2tCb3hlcz5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVuZGltaWVudG88L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3hlcyBuYW1lPSdwZXJmb3JtYW5jZSc+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja0JveD5IaWdoPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tCb3g+TWVkaXVtPC9Gb3JtLkNoZWNrQm94PlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5DaGVja0JveGVzPlxyXG4gICAgICAgICAgICA8L0Zvcm0uQm9keT5cclxuICAgICAgICAgICAgPEZvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24uRmlsbCBjb2xvcj0nIzU1MTE0NCc+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uRmlsbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkZvb3Rlcj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm0uQ2VudGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsIHNob3dJZj17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudH0+XHJcbiAgICAgICAgPEZvcm0uQ2VudGVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3JlbW92ZVBhcnRpY2lwYW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSGVhZGVyXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1BhcnRpY2lwYW50ZSdcclxuICAgICAgICAgICAgICBvbkNsb3NlPXtldiA9PiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcnRpY2lwYW50OiBudWxsLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxGb3JtLlZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpZCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWJyZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNlbGVjdGVkUGFydGljaXBhbnQ/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FZGFkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWQgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhZ2UnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8uYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+R2VuZXJvPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2dlbmRlcidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZWxlY3RlZFBhcnRpY2lwYW50Py5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZW5kaW1pZW50bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZERpc2FibGVkIFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGVyZm9ybWFuY2UnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2VsZWN0ZWRQYXJ0aWNpcGFudD8ucGVyZm9ybWFuY2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyNmZjAwMDAnPlxyXG4gICAgICAgICAgICAgICAgRWxpbWluYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWwgc2hvd0lmPXtzdGF0ZS5ub3RpZmljYXRpb259PlxyXG4gICAgICAgIDxGb3JtLkNlbnRlcj5cclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtldiA9PiB1cGRhdGVTdGF0ZSh7bm90aWZpY2F0aW9uOiBudWxsfSl9PlxyXG4gICAgICAgICAgICA8Rm9ybS5IZWFkZXIgXHJcbiAgICAgICAgICAgICAgbGFiZWw9e3N0YXRlLm5vdGlmaWNhdGlvbj8ubGFiZWx9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17ZXYgPT4gdXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uOiBudWxsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLkJvZHk+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubm90aWZpY2F0aW9uPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPC9Gb3JtLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtLkZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uLkZpbGwgY29sb3I9JyM5OTk5OTknPlxyXG4gICAgICAgICAgICAgICAgb2tcclxuICAgICAgICAgICAgICA8L0J1dHRvbi5GaWxsPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRm9vdGVyPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvRm9ybS5DZW50ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgICA8Q29udGFpbmVyIG15PXs0MH0+XHJcbiAgICAgICAgPENvbnRhaW5lci5Sb3c+XHJcbiAgICAgICAgICA8QnV0dG9uLkljb25cclxuICAgICAgICAgICAgaWNvbj0nYWRkJ1xyXG4gICAgICAgICAgICBsYWJlbD0nQWdyZWdhciBwYXJ0aWNpcGFudGUnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RDYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxCdXR0b24uSWNvblxyXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXHJcbiAgICAgICAgICAgIGxhYmVsPSdCdXNjYXIgcGFydGljaXBhbnRlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hQYXJ0aWNpcGFudH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvQ29udGFpbmVyLlJvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIuVGl0bGVCb2xkPlxyXG4gICAgICAgICAgUGFydGljaXBhbnRlcyBpbnNjcml0b3NcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5wYXJ0aWNpcGFudHN9PlxyXG4gICAgICAgICAgICA8QmxvY2suUGFydGljaXBhbnRcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiBzZWxlY3RQYXJ0aWNpcGFudChldi5tYXAuZGF0YSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L01hcD5cclxuICAgICAgICA8L0NvbnRhaW5lci5XcmFwPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgICBSZXBvcnRlIGRlIHBhcnRpY2lwYW50ZXNcclxuICAgICAgICA8L0NvbnRhaW5lci5UaXRsZUJvbGQ+XHJcbiAgICAgICAgPENvbnRhaW5lci5XcmFwPlxyXG4gICAgICAgICAgPE1hcCBkYXRhPXtzdGF0ZS5yZXBvcnR9PlxyXG4gICAgICAgICAgICA8QmxvY2suUmVwb3J0IFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGFydGljaXBhbnRlc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIyMDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgPC9Db250YWluZXIuV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbihzdG9yZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwZXJzaXN0ZWQ6IHN0b3JlLnBlcnNpc3RSZWR1Y2VyXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IGZ1bmN0aW9uKGRpc3BhdGgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGVyc2lzdDogZGlzcGF0aChwZXJzaXN0KSBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBBY3Rpb25zVG9Qcm9wcykoSW5kZXgpOyIsIi8vc2V0IHZhbHVlcyBmcm9tIHRoZSBleHRlcmlvclxyXG5jb25zdCBfc3RhdGUgPSB7fVxyXG5cclxuLy90eXBlcyBjcmVhdG9yc1xyXG5jb25zdCBTRVRfUEVSU0lTVCA9ICdTRVRfTEFTVCc7XHJcblxyXG4vL3JlZHVjZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZT1fc3RhdGUsIGFjdGlvbikge1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC4uLm5ld1N0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX1BFUlNJU1Q6XHJcbiAgICAgIHJldHVybiB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgICAgW2FjdGlvbi5rZXldOiBhY3Rpb24udmFsdWVcclxuICAgICAgfSlcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yc1xyXG5leHBvcnQgY29uc3Qgc2V0UGVyc2lzdCA9IChrZXksIHZhbHVlKT0+IChkaXNwYXRoLCBnZXRTdGF0ZSk9PiB7XHJcbiAgZGlzcGF0aCh7XHJcbiAgICB0eXBlOiBTRVRfUEVSU0lTVCxcclxuICAgIGtleToga2V5LFxyXG4gICAgdmFsdWU6IHZhbHVlXHJcbiAgfSkgIFxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=