webpackHotUpdate_N_E("pages/articles/[id]",{

/***/ "./components/articles/single/content/media.tsx":
/*!******************************************************!*\
  !*** ./components/articles/single/content/media.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/home/kal/Documents/Development/Taxiye-front/components/articles/single/content/media.tsx\",\n    _this = undefined;\n\n\n\nvar Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\").withConfig({\n  displayName: \"media__Container\",\n  componentId: \"sc-12f8w9i-0\"\n})([\"margin:auto;\"]);\n_c = Container;\nvar Figure = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"figure\").withConfig({\n  displayName: \"media__Figure\",\n  componentId: \"sc-12f8w9i-1\"\n})([\"border:1px inset tomato;display:inline-block;margin:0px;\"]);\n_c2 = Figure;\nvar Caption = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"figcaption\").withConfig({\n  displayName: \"media__Caption\",\n  componentId: \"sc-12f8w9i-2\"\n})([\"width:540px;font-family:Open Sans;font-style:italic;font-weight:normal;font-size:14px;line-height:21px;color:#2A2A2A;\"]);\n_c3 = Caption;\nvar Image = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\").withConfig({\n  displayName: \"media__Image\",\n  componentId: \"sc-12f8w9i-3\"\n})([\"width:560px;\"]);\n_c4 = Image;\n\nvar Quote = function Quote(_ref) {\n  var media = _ref.media;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Figure, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n          src: media.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Caption, {\n          children: media.caption\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_c5 = Quote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Figure\");\n$RefreshReg$(_c3, \"Caption\");\n$RefreshReg$(_c4, \"Image\");\n$RefreshReg$(_c5, \"Quote\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy9zaW5nbGUvY29udGVudC9tZWRpYS50c3g/Y2QxNiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJGaWd1cmUiLCJDYXB0aW9uIiwiSW1hZ2UiLCJRdW90ZSIsIm1lZGlhIiwidXJsIiwiY2FwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsaUVBQU0sQ0FBQyxLQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0JBQWY7S0FBTUQsUztBQUlOLElBQU1FLE1BQU0sR0FBR0QsaUVBQU0sQ0FBQyxRQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0VBQVo7TUFBTUMsTTtBQUtOLElBQU1DLE9BQU8sR0FBR0YsaUVBQU0sQ0FBQyxZQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNkhBQWI7TUFBTUUsTztBQVVOLElBQU1DLEtBQUssR0FBR0gsaUVBQU0sQ0FBQyxLQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0JBQVg7TUFBTUcsSzs7QUFNTixJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3pCLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsU0FBRDtBQUFBLDZCQUNJLHFFQUFDLE1BQUQ7QUFBQSxnQ0FDQSxxRUFBQyxLQUFEO0FBQU8sYUFBRyxFQUFFQSxLQUFLLENBQUNDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQSxxRUFBQyxPQUFEO0FBQUEsb0JBQVVELEtBQUssQ0FBQ0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFVSCxDQVhEOztNQUFNSCxLO0FBYVNBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hcnRpY2xlcy9zaW5nbGUvY29udGVudC9tZWRpYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIpYFxuXG5tYXJnaW46YXV0bztcbmA7XG5jb25zdCBGaWd1cmUgPSBzdHlsZWQoXCJmaWd1cmVcIilgXG5ib3JkZXI6IDFweCBpbnNldCB0b21hdG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbm1hcmdpbjowcHg7XG5gO1xuY29uc3QgQ2FwdGlvbiA9IHN0eWxlZChcImZpZ2NhcHRpb25cIilgXG53aWR0aDogNTQwcHg7XG5mb250LWZhbWlseTogT3BlbiBTYW5zO1xuZm9udC1zdHlsZTogaXRhbGljO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMXB4O1xuY29sb3I6ICMyQTJBMkE7XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZChcImltZ1wiKWBcbndpZHRoOiA1NjBweDtcbi8qaGVpZ2h0OiAzMTlweDsqL1xuYDtcblxuXG5jb25zdCBRdW90ZSA9ICh7IG1lZGlhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RmlndXJlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21lZGlhLnVybH0gLz5cbiAgICAgICAgICAgICAgICA8Q2FwdGlvbj57bWVkaWEuY2FwdGlvbn08L0NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9GaWd1cmU+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/articles/single/content/media.tsx\n");

/***/ })

})