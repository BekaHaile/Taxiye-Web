webpackHotUpdate_N_E("pages/articles",{

/***/ "./pages/articles/index.tsx":
/*!**********************************!*\
  !*** ./pages/articles/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return articles; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/articles */ \"./components/articles/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_form_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/inputs */ \"./components/form/inputs.tsx\");\n/* harmony import */ var _components_hero___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hero/ */ \"./components/hero/index.tsx\");\n\n\nvar _jsxFileName = \"/home/kal/Documents/Development/Taxiye-front/pages/articles/index.tsx\";\n\n\n\n\n\nvar SearchContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"articles__SearchContainer\",\n  componentId: \"sc-843mxb-0\"\n})([\"width:400px;margin:auto;\"]);\n_c = SearchContainer;\n\nvar children = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SearchContainer, {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_form_inputs__WEBPACK_IMPORTED_MODULE_4__[\"SecondaryInputs\"], {\n    id: \"location\",\n    placeholder: \"Search...\",\n    icon: __webpack_require__(/*! ../../assets/icons/search.svg */ \"./assets/icons/search.svg\")\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 15,\n  columnNumber: 18\n}, undefined);\n\nvar __N_SSP = true;\nfunction articles(_ref) {\n  var data = _ref.data,\n      error = _ref.error;\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"Error loading page\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 12\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_hero___WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      hero: data.articlePage.hero,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_articles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      featured: data.featured,\n      unfeatured: data.unfeatured\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvaW5kZXgudHN4PzQxNTEiXSwibmFtZXMiOlsiU2VhcmNoQ29udGFpbmVyIiwic3R5bGVkIiwiY2hpbGRyZW4iLCJyZXF1aXJlIiwiYXJ0aWNsZXMiLCJkYXRhIiwiZXJyb3IiLCJhcnRpY2xlUGFnZSIsImhlcm8iLCJmZWF0dXJlZCIsInVuZmVhdHVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLGVBQWUsR0FBR0MsaUVBQU0sQ0FBQyxLQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsZ0NBQXJCO0tBQU1ELGU7O0FBS04sSUFBTUUsUUFBUSxnQkFBRyxxRUFBQyxlQUFEO0FBQUEseUJBQ2IscUVBQUMsdUVBQUQ7QUFDSSxNQUFFLEVBQUMsVUFEUDtBQUVJLGVBQVcsRUFBQyxXQUZoQjtBQUdJLFFBQUksRUFBRUMsbUJBQU8sQ0FBQyxnRUFBRDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFqQjs7O0FBNEVlLFNBQVNDLFFBQVQsT0FBaUM7QUFBQSxNQUFkQyxJQUFjLFFBQWRBLElBQWM7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDNUMsTUFBSUEsS0FBSixFQUNBLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHlEQUFEO0FBQVEsVUFBSSxFQUFFRCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJDLElBQS9CO0FBQXFDLGNBQVEsRUFBRU47QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBaUIsY0FBUSxFQUFFRyxJQUFJLENBQUNJLFFBQWhDO0FBQTBDLGdCQUFVLEVBQUVKLElBQUksQ0FBQ0s7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFPSCIsImZpbGUiOiIuL3BhZ2VzL2FydGljbGVzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnRpY2xlc0NvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcnRpY2xlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2Vjb25kYXJ5SW5wdXRzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9pbnB1dHNcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby9cIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2JhY2tlbmQtY2xpZW50XCI7XG5cblxuY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkKFwiZGl2XCIpYFxuICAgIHdpZHRoOjQwMHB4O1xuICAgIG1hcmdpbjphdXRvO1xuYDtcblxuY29uc3QgY2hpbGRyZW4gPSA8U2VhcmNoQ29udGFpbmVyPlxuICAgIDxTZWNvbmRhcnlJbnB1dHNcbiAgICAgICAgaWQ9XCJsb2NhdGlvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgaWNvbj17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnXCIpfVxuICAgIC8+XG48L1NlYXJjaENvbnRhaW5lcj5cblxuXG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuIyBXcml0ZSB5b3VyIHF1ZXJ5IG9yIG11dGF0aW9uIGhlcmVcbnF1ZXJ5IHtcbiAgXHRhcnRpY2xlUGFnZXtcbiAgICAgIGhlcm97XG4gICAgICAgIHRpdGxlXG4gICAgICAgIHN1YlRpdGxlXG4gICAgICAgIGJhY2tncm91bmR7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZmVhdHVyZWQ6IGFydGljbGVzKHNvcnQ6IFwiY3JlYXRlZF9hdFwiICx3aGVyZToge2ZlYXR1cmVkOnRydWV9KXtcbiAgICBpZFxuICAgIHB1Ymxpc2hlZF9hdFxuICAgIGZlYXR1cmVkXG4gICAgaGVhZGVye1xuICAgIFx0dGl0bGVcbiAgICBcdHN1YlRpdGxlXG4gICAgICAgIGxvbmdTdWJUaXRsZVxuICAgIFx0dGh1bWJuYWlse1xuICAgICAgXHR1cmxcbiAgICBcdH1cbiAgICAgICAgbWFpbk1lZGlhe1xuICAgICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgfVxuICB1bmZlYXR1cmVkOiBhcnRpY2xlcyhzb3J0OiBcImNyZWF0ZWRfYXRcIiAsd2hlcmU6IHtmZWF0dXJlZDpmYWxzZX0sIGxpbWl0Ojkpe1xuICAgIGlkXG4gICAgcHVibGlzaGVkX2F0XG4gICAgZmVhdHVyZWRcbiAgICBoZWFkZXJ7XG4gICAgXHR0aXRsZVxuICAgIFx0c3ViVGl0bGVcbiAgICAgICAgbG9uZ1N1YlRpdGxlXG4gICAgXHR0aHVtYm5haWx7XG4gICAgICBcdHVybFxuICAgIFx0fVxuICAgICAgICBtYWluTWVkaWF7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIFxuICB9XG59XG5gXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICB0cnl7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBlcnJvcjplcnJvclxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHtwcm9wczp7ZXJyb3I6dHJ1ZX19O1xuICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJ0aWNsZXMoe2RhdGEsIGVycm9yfSkge1xuICAgIGlmIChlcnJvcilcbiAgICByZXR1cm4gPGgxPkVycm9yIGxvYWRpbmcgcGFnZTwvaDE+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCYW5uZXIgaGVybz17ZGF0YS5hcnRpY2xlUGFnZS5oZXJvfSBjaGlsZHJlbj17Y2hpbGRyZW59Lz5cbiAgICAgICAgICAgIDxBcnRpY2xlc0NvbnRlbnQgZmVhdHVyZWQ9e2RhdGEuZmVhdHVyZWR9IHVuZmVhdHVyZWQ9e2RhdGEudW5mZWF0dXJlZH0vPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/index.tsx\n");

/***/ })

})