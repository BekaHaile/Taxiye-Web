webpackHotUpdate_N_E("pages/corporate",{

/***/ "./components/section/index.tsx":
/*!**************************************!*\
  !*** ./components/section/index.tsx ***!
  \**************************************/
/*! exports provided: GraySection, DefaultSection, SectionTitle, CenteredText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraySection\", function() { return GraySection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultSection\", function() { return DefaultSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionTitle\", function() { return SectionTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CenteredText\", function() { return CenteredText; });\n/* harmony import */ var _home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject5() {\n  var data = Object(_home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 18px;\\n  line-height: 25px;\\n  text-align: center;\\n  color: #444444;\\n  max-width: 800px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-family: Open Sans;\\n  width:400px;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 32px;\\n  line-height: 44px;\\n  color: #e45397;\\n  text-align: center;\\n  margin: 0;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nbackground: #E5E5E5;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nbackground: #fff;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_kal_Documents_Development_Taxiye_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 30px 60px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"section\")(_templateObject());\nvar DefaultSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Section)(_templateObject2());\nvar GraySection = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Section)(_templateObject3());\nvar SectionTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h1\")(_templateObject4());\nvar CenteredText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"p\")(_templateObject5());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4LnRzeD85ODAzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJEZWZhdWx0U2VjdGlvbiIsIkdyYXlTZWN0aW9uIiwiU2VjdGlvblRpdGxlIiwiQ2VudGVyZWRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxpRUFBTSxDQUFDLFNBQUQsQ0FBVCxtQkFBYjtBQU9BLElBQU1DLGNBQWMsR0FBR0QsaUVBQU0sQ0FBQ0QsT0FBRCxDQUFULG9CQUFwQjtBQUlBLElBQU1HLFdBQVcsR0FBR0YsaUVBQU0sQ0FBQ0QsT0FBRCxDQUFULG9CQUFqQjtBQUlBLElBQU1JLFlBQVksR0FBR0gsaUVBQU0sQ0FBQyxJQUFELENBQVQsb0JBQWxCO0FBWUEsSUFBTUksWUFBWSxHQUFHSixpRUFBTSxDQUFDLEdBQUQsQ0FBVCxvQkFBbEI7QUFRQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2VjdGlvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQoXCJzZWN0aW9uXCIpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDYwcHg7XG5gO1xuXG5jb25zdCBEZWZhdWx0U2VjdGlvbiA9IHN0eWxlZChTZWN0aW9uKWBcbmJhY2tncm91bmQ6ICNmZmY7XG5gO1xuXG5jb25zdCBHcmF5U2VjdGlvbiA9IHN0eWxlZChTZWN0aW9uKWBcbmJhY2tncm91bmQ6ICNFNUU1RTU7XG5gO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQoXCJoMVwiKWBcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgd2lkdGg6NDAwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgY29sb3I6ICNlNDUzOTc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgQ2VudGVyZWRUZXh0ID0gc3R5bGVkKFwicFwiKWBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbmA7XG5cbmV4cG9ydCB7R3JheVNlY3Rpb24sIERlZmF1bHRTZWN0aW9uLCBTZWN0aW9uVGl0bGUsIENlbnRlcmVkVGV4dH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/section/index.tsx\n");

/***/ })

})