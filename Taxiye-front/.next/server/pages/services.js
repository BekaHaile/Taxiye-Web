module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/serv_img_1.png":
/*!**************************************!*\
  !*** ./assets/images/serv_img_1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/serv_img_1-283c657be920790cd4d8e7e931e65a32.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzEucG5nP2M3MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzEucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlcnZfaW1nXzEtMjgzYzY1N2JlOTIwNzkwY2Q0ZDhlN2U5MzFlNjVhMzIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/images/serv_img_1.png\n");

/***/ }),

/***/ "./assets/images/serv_img_2.png":
/*!**************************************!*\
  !*** ./assets/images/serv_img_2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/serv_img_2-f84214c753e479bab43199012bb650a5.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzIucG5nP2U4NWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzIucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlcnZfaW1nXzItZjg0MjE0Yzc1M2U0NzliYWI0MzE5OTAxMmJiNjUwYTUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/images/serv_img_2.png\n");

/***/ }),

/***/ "./assets/images/serv_img_3.png":
/*!**************************************!*\
  !*** ./assets/images/serv_img_3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/serv_img_3-8feccb480788cbd9047721b52d4d12c2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzMucG5nP2E0Y2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzMucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlcnZfaW1nXzMtOGZlY2NiNDgwNzg4Y2JkOTA0NzcyMWI1MmQ0ZDEyYzIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/images/serv_img_3.png\n");

/***/ }),

/***/ "./assets/images/serv_img_4.png":
/*!**************************************!*\
  !*** ./assets/images/serv_img_4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/serv_img_4-445830ef1cf13e7ef774272bcfcc02cf.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzQucG5nP2IzOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzQucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlcnZfaW1nXzQtNDQ1ODMwZWYxY2YxM2U3ZWY3NzQyNzJiY2ZjYzAyY2YucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/images/serv_img_4.png\n");

/***/ }),

/***/ "./components/section/index.tsx":
/*!**************************************!*\
  !*** ./components/section/index.tsx ***!
  \**************************************/
/*! exports provided: GraySection, DefaultSection, SecondarySection, SectionTitle, CenteredText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraySection\", function() { return GraySection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultSection\", function() { return DefaultSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SecondarySection\", function() { return SecondarySection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionTitle\", function() { return SectionTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CenteredText\", function() { return CenteredText; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"section\")`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px 60px;\n`;\nconst DefaultSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Section)`\nbackground: #fff;\n`;\nconst SecondarySection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DefaultSection)`\n  margin: 30px 60px;\n`;\nconst GraySection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Section)`\nbackground: #E5E5E5;\n`;\nconst SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"h1\")`\n  font-family: Open Sans;\n  width:400px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 44px;\n  color: #e45397;\n  text-align: center;\n  margin: 0;\n`;\nconst CenteredText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(\"p\")`\n  font-size: 18px;\n  line-height: 25px;\n  text-align: center;\n  color: #444444;\n  max-width: 800px;\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgudHN4Pzk4MDMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsIkRlZmF1bHRTZWN0aW9uIiwiU2Vjb25kYXJ5U2VjdGlvbiIsIkdyYXlTZWN0aW9uIiwiU2VjdGlvblRpdGxlIiwiQ2VudGVyZWRUZXh0Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFNLENBQUMsU0FBRCxDQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1DLGNBQWMsR0FBR0Qsd0RBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3ZDO0FBQ0EsQ0FGQTtBQUdBLE1BQU1HLGdCQUFnQixHQUFHRix3REFBTSxDQUFDQyxjQUFELENBQWlCO0FBQ2hEO0FBQ0EsQ0FGQTtBQUlBLE1BQU1FLFdBQVcsR0FBR0gsd0RBQU0sQ0FBQ0QsT0FBRCxDQUFVO0FBQ3BDO0FBQ0EsQ0FGQTtBQUlBLE1BQU1LLFlBQVksR0FBR0osd0RBQU0sQ0FBQyxJQUFELENBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWQTtBQVlBLE1BQU1LLFlBQVksR0FBR0wsd0RBQU0sQ0FBQyxHQUFELENBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkKFwic2VjdGlvblwiKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweCA2MHB4O1xuYDtcblxuY29uc3QgRGVmYXVsdFNlY3Rpb24gPSBzdHlsZWQoU2VjdGlvbilgXG5iYWNrZ3JvdW5kOiAjZmZmO1xuYDtcbmNvbnN0IFNlY29uZGFyeVNlY3Rpb24gPSBzdHlsZWQoRGVmYXVsdFNlY3Rpb24pYFxuICBtYXJnaW46IDMwcHggNjBweDtcbmA7XG5cbmNvbnN0IEdyYXlTZWN0aW9uID0gc3R5bGVkKFNlY3Rpb24pYFxuYmFja2dyb3VuZDogI0U1RTVFNTtcbmA7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZChcImgxXCIpYFxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICB3aWR0aDo0MDBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogI2U0NTM5NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBDZW50ZXJlZFRleHQgPSBzdHlsZWQoXCJwXCIpYFxuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuYDtcblxuZXhwb3J0IHtHcmF5U2VjdGlvbiwgRGVmYXVsdFNlY3Rpb24sIFNlY29uZGFyeVNlY3Rpb24sIFNlY3Rpb25UaXRsZSwgQ2VudGVyZWRUZXh0fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/section/index.tsx\n");

/***/ }),

/***/ "./components/services/index.tsx":
/*!***************************************!*\
  !*** ./components/services/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section */ \"./components/section/index.tsx\");\n\n\nvar _jsxFileName = \"/home/kal/Documents/Development/Taxiye-front/components/services/index.tsx\";\n\n\n\nconst ServiceTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_section__WEBPACK_IMPORTED_MODULE_3__[\"SectionTitle\"])`\n  margin: 30px 0px;\n`;\nconst RightServiceTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(ServiceTitle)`\ntext-align: right;\n`;\nconst FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(\"div\")`\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 60px 0px;\n  width: 100%;\n`;\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(\"p\")`\n  ont-weight: normal;\n  font-size: 16px;\n  line-height: 22px;\n  margin: 30px 0px;\n  max-width: 500px;\n  flex: 1;\n`;\nconst RightDescription = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Description)`\n  text-align: right;\n`;\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('img')`\nmax-width: 550px;\nflex: 1;\n`;\n\nconst Services = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"DefaultSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"SectionTitle\"], {\n        children: \"Our Services\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"CenteredText\"], {\n        children: \"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FlexRow, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n          src: __webpack_require__(/*! ../../assets/images/serv_img_1.png */ \"./assets/images/serv_img_1.png\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightServiceTitle, {\n            children: \"Taxi on Demand\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightDescription, {\n            children: \"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"GraySection\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FlexRow, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ServiceTitle, {\n            children: \"City to City Travel\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Description, {\n            children: \"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n          src: __webpack_require__(/*! ../../assets/images/serv_img_2.png */ \"./assets/images/serv_img_2.png\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"DefaultSection\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FlexRow, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n          src: __webpack_require__(/*! ../../assets/images/serv_img_3.png */ \"./assets/images/serv_img_3.png\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightServiceTitle, {\n            children: \"Hourly Rentals\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RightDescription, {\n            children: [\" \", \"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_section__WEBPACK_IMPORTED_MODULE_3__[\"GraySection\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FlexRow, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ServiceTitle, {\n            children: \"Messenger Delivery\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Description, {\n            children: \"Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque. Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n          src: __webpack_require__(/*! ../../assets/images/serv_img_4.png */ \"./assets/images/serv_img_4.png\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlcnZpY2VzL2luZGV4LnRzeD83ZTNjIl0sIm5hbWVzIjpbIlNlcnZpY2VUaXRsZSIsInN0eWxlZCIsIlNlY3Rpb25UaXRsZSIsIlJpZ2h0U2VydmljZVRpdGxlIiwiRmxleFJvdyIsIkRlc2NyaXB0aW9uIiwiUmlnaHREZXNjcmlwdGlvbiIsIkltYWdlIiwiU2VydmljZXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLFlBQVksR0FBR0Msd0RBQU0sQ0FBQ0MscURBQUQsQ0FBZTtBQUMxQztBQUNBLENBRkE7QUFJQSxNQUFNQyxpQkFBaUIsR0FBR0Ysd0RBQU0sQ0FBQ0QsWUFBRCxDQUFlO0FBQy9DO0FBQ0EsQ0FGQTtBQUlBLE1BQU1JLE9BQU8sR0FBR0gsd0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7QUFRQSxNQUFNSSxXQUFXLEdBQUdKLHdEQUFNLENBQUMsR0FBRCxDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTQSxNQUFNSyxnQkFBZ0IsR0FBR0wsd0RBQU0sQ0FBQ0ksV0FBRCxDQUFjO0FBQzdDO0FBQ0EsQ0FGQTtBQUlBLE1BQU1FLEtBQUssR0FBR04sd0RBQU0sQ0FBQyxLQUFELENBQVE7QUFDNUI7QUFDQTtBQUNBLENBSEE7O0FBS0EsTUFBTU8sUUFBUSxHQUFHLE1BQU07QUFDckIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyx1REFBRDtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFNRSxxRUFBQyxPQUFEO0FBQUEsZ0NBQ0UscUVBQUMsS0FBRDtBQUFPLGFBQUcsRUFBRUMsbUJBQU8sQ0FBQywwRUFBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxrQ0FDRSxxRUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLHFFQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBMkJFLHFFQUFDLG9EQUFEO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFO0FBQUEsa0NBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBaUJFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVBLG1CQUFPLENBQUMsMEVBQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkYsZUFnREUscUVBQUMsdURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxPQUFEO0FBQUEsZ0NBQ0UscUVBQUMsS0FBRDtBQUFPLGFBQUcsRUFBRUEsbUJBQU8sQ0FBQywwRUFBRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxrQ0FDRSxxRUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLHFFQUFDLGdCQUFEO0FBQUEsdUJBQ0csR0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERGLGVBc0VFLHFFQUFDLG9EQUFEO0FBQUEsNkJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFO0FBQUEsa0NBQ0UscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBaUJFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVBLG1CQUFPLENBQUMsMEVBQUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0RUY7QUFBQSxrQkFERjtBQThGRCxDQS9GRDs7QUFpR2VELHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZXJ2aWNlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFNlY3Rpb24sXG4gIEdyYXlTZWN0aW9uLFxuICBTZWN0aW9uVGl0bGUsXG4gIENlbnRlcmVkVGV4dCxcbn0gZnJvbSBcIi4uL3NlY3Rpb25cIjtcblxuY29uc3QgU2VydmljZVRpdGxlID0gc3R5bGVkKFNlY3Rpb25UaXRsZSlgXG4gIG1hcmdpbjogMzBweCAwcHg7XG5gO1xuXG5jb25zdCBSaWdodFNlcnZpY2VUaXRsZSA9IHN0eWxlZChTZXJ2aWNlVGl0bGUpYFxudGV4dC1hbGlnbjogcmlnaHQ7XG5gO1xuXG5jb25zdCBGbGV4Um93ID0gc3R5bGVkKFwiZGl2XCIpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZChcInBcIilgXG4gIG9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IFJpZ2h0RGVzY3JpcHRpb24gPSBzdHlsZWQoRGVzY3JpcHRpb24pYFxuICB0ZXh0LWFsaWduOiByaWdodDtcbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkKCdpbWcnKWBcbm1heC13aWR0aDogNTUwcHg7XG5mbGV4OiAxO1xuYDtcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZT5PdXIgU2VydmljZXM8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgPENlbnRlcmVkVGV4dD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgc29kYWxlcyBwcmltaXMsXG4gICAgICAgICAgbW9sbGlzIHZpdmVycmEgY29udWJpYSBsaWd1bGEgaW5jZXB0b3MgbGFvcmVldC5cbiAgICAgICAgPC9DZW50ZXJlZFRleHQ+XG4gICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NlcnZfaW1nXzEucG5nXCIpfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmlnaHRTZXJ2aWNlVGl0bGU+VGF4aSBvbiBEZW1hbmQ8L1JpZ2h0U2VydmljZVRpdGxlPlxuICAgICAgICAgICAgPFJpZ2h0RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBzb2RhbGVzXG4gICAgICAgICAgICAgIHByaW1pcywgbW9sbGlzIHZpdmVycmEgY29udWJpYSBsaWd1bGEgaW5jZXB0b3MgbGFvcmVldCBsaWJlcm9cbiAgICAgICAgICAgICAgdG9ydG9yLCBuYXNjZXR1ciBub24gaGFiaXRhc3NlIGlhY3VsaXMgdGVtcG9yIG5lYyBlZ2VzdGFzIGZhbWVzXG4gICAgICAgICAgICAgIGF1Z3VlLCBwbGF0ZWEgcG9ydGEgaW50ZWdlciBub3N0cmEgY3VyYWUgc2VkIGFyY3UuIE5lYyB1dCBkaWFtXG4gICAgICAgICAgICAgIHZ1bHB1dGF0ZSBhbnRlIHNjZWxlcmlzcXVlIHJpZGljdWx1cyBsb2JvcnRpcyBvcmNpIG1pIGN1cmFlXG4gICAgICAgICAgICAgIGhpbWVuYWVvcyBxdWlzLCBzZW5lY3R1cyBjdXJhYml0dXIgdWxsYW1jb3JwZXIgYSBwb3J0dGl0b3IgbmliaFxuICAgICAgICAgICAgICBmZXJtZW50dW0gbmlzaSBjdW0gbW9yYmkgYWxpcXVhbS4gVml0YWUgcHJldGl1bSB2ZXN0aWJ1bHVtIGR1aVxuICAgICAgICAgICAgICBncmF2aWRhIGluIHBvdGVudGkgaW50ZXJkdW0sIGNsYXNzIHJob25jdXMgbmVxdWUuIFVsbGFtY29ycGVyXG4gICAgICAgICAgICAgIHBvcnR0aXRvciBub24gcGhhcmV0cmEgY3Vyc3VzIG5pc2wgbW9sbGlzIHBlbGxlbnRlc3F1ZSBwcmltaXNcbiAgICAgICAgICAgICAgcGVuYXRpYnVzIHBsYXRlYSwgZGljdHVtIGhpbWVuYWVvcyBlZ2V0IG1pIGJpYmVuZHVtIGFkIG1vbGVzdGllXG4gICAgICAgICAgICAgIGFsaXF1ZXQgY3VyYWUgcXVpcyBxdWlzcXVlLlxuICAgICAgICAgICAgPC9SaWdodERlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICA8L0RlZmF1bHRTZWN0aW9uPlxuICAgICAgPEdyYXlTZWN0aW9uPlxuICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNlcnZpY2VUaXRsZT5DaXR5IHRvIENpdHkgVHJhdmVsPC9TZXJ2aWNlVGl0bGU+XG4gICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBzb2RhbGVzXG4gICAgICAgICAgICAgIHByaW1pcywgbW9sbGlzIHZpdmVycmEgY29udWJpYSBsaWd1bGEgaW5jZXB0b3MgbGFvcmVldCBsaWJlcm9cbiAgICAgICAgICAgICAgdG9ydG9yLCBuYXNjZXR1ciBub24gaGFiaXRhc3NlIGlhY3VsaXMgdGVtcG9yIG5lYyBlZ2VzdGFzIGZhbWVzXG4gICAgICAgICAgICAgIGF1Z3VlLCBwbGF0ZWEgcG9ydGEgaW50ZWdlciBub3N0cmEgY3VyYWUgc2VkIGFyY3UuIE5lYyB1dCBkaWFtXG4gICAgICAgICAgICAgIHZ1bHB1dGF0ZSBhbnRlIHNjZWxlcmlzcXVlIHJpZGljdWx1cyBsb2JvcnRpcyBvcmNpIG1pIGN1cmFlXG4gICAgICAgICAgICAgIGhpbWVuYWVvcyBxdWlzLCBzZW5lY3R1cyBjdXJhYml0dXIgdWxsYW1jb3JwZXIgYSBwb3J0dGl0b3IgbmliaFxuICAgICAgICAgICAgICBmZXJtZW50dW0gbmlzaSBjdW0gbW9yYmkgYWxpcXVhbS4gVml0YWUgcHJldGl1bSB2ZXN0aWJ1bHVtIGR1aVxuICAgICAgICAgICAgICBncmF2aWRhIGluIHBvdGVudGkgaW50ZXJkdW0sIGNsYXNzIHJob25jdXMgbmVxdWUuIFVsbGFtY29ycGVyXG4gICAgICAgICAgICAgIHBvcnR0aXRvciBub24gcGhhcmV0cmEgY3Vyc3VzIG5pc2wgbW9sbGlzIHBlbGxlbnRlc3F1ZSBwcmltaXNcbiAgICAgICAgICAgICAgcGVuYXRpYnVzIHBsYXRlYSwgZGljdHVtIGhpbWVuYWVvcyBlZ2V0IG1pIGJpYmVuZHVtIGFkIG1vbGVzdGllXG4gICAgICAgICAgICAgIGFsaXF1ZXQgY3VyYWUgcXVpcyBxdWlzcXVlLlxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXJ2X2ltZ18yLnBuZ1wiKX0gLz5cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgPC9HcmF5U2VjdGlvbj5cbiAgICAgIDxEZWZhdWx0U2VjdGlvbj5cbiAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2Vydl9pbWdfMy5wbmdcIil9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSaWdodFNlcnZpY2VUaXRsZT5Ib3VybHkgUmVudGFsczwvUmlnaHRTZXJ2aWNlVGl0bGU+XG4gICAgICAgICAgICA8UmlnaHREZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgc29kYWxlc1xuICAgICAgICAgICAgICBwcmltaXMsIG1vbGxpcyB2aXZlcnJhIGNvbnViaWEgbGlndWxhIGluY2VwdG9zIGxhb3JlZXQgbGliZXJvXG4gICAgICAgICAgICAgIHRvcnRvciwgbmFzY2V0dXIgbm9uIGhhYml0YXNzZSBpYWN1bGlzIHRlbXBvciBuZWMgZWdlc3RhcyBmYW1lc1xuICAgICAgICAgICAgICBhdWd1ZSwgcGxhdGVhIHBvcnRhIGludGVnZXIgbm9zdHJhIGN1cmFlIHNlZCBhcmN1LiBOZWMgdXQgZGlhbVxuICAgICAgICAgICAgICB2dWxwdXRhdGUgYW50ZSBzY2VsZXJpc3F1ZSByaWRpY3VsdXMgbG9ib3J0aXMgb3JjaSBtaSBjdXJhZVxuICAgICAgICAgICAgICBoaW1lbmFlb3MgcXVpcywgc2VuZWN0dXMgY3VyYWJpdHVyIHVsbGFtY29ycGVyIGEgcG9ydHRpdG9yIG5pYmhcbiAgICAgICAgICAgICAgZmVybWVudHVtIG5pc2kgY3VtIG1vcmJpIGFsaXF1YW0uIFZpdGFlIHByZXRpdW0gdmVzdGlidWx1bSBkdWlcbiAgICAgICAgICAgICAgZ3JhdmlkYSBpbiBwb3RlbnRpIGludGVyZHVtLCBjbGFzcyByaG9uY3VzIG5lcXVlLiBVbGxhbWNvcnBlclxuICAgICAgICAgICAgICBwb3J0dGl0b3Igbm9uIHBoYXJldHJhIGN1cnN1cyBuaXNsIG1vbGxpcyBwZWxsZW50ZXNxdWUgcHJpbWlzXG4gICAgICAgICAgICAgIHBlbmF0aWJ1cyBwbGF0ZWEsIGRpY3R1bSBoaW1lbmFlb3MgZWdldCBtaSBiaWJlbmR1bSBhZCBtb2xlc3RpZVxuICAgICAgICAgICAgICBhbGlxdWV0IGN1cmFlIHF1aXMgcXVpc3F1ZS5cbiAgICAgICAgICAgIDwvUmlnaHREZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgPC9EZWZhdWx0U2VjdGlvbj5cbiAgICAgIDxHcmF5U2VjdGlvbj5cbiAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTZXJ2aWNlVGl0bGU+TWVzc2VuZ2VyIERlbGl2ZXJ5PC9TZXJ2aWNlVGl0bGU+XG4gICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBzb2RhbGVzXG4gICAgICAgICAgICAgIHByaW1pcywgbW9sbGlzIHZpdmVycmEgY29udWJpYSBsaWd1bGEgaW5jZXB0b3MgbGFvcmVldCBsaWJlcm9cbiAgICAgICAgICAgICAgdG9ydG9yLCBuYXNjZXR1ciBub24gaGFiaXRhc3NlIGlhY3VsaXMgdGVtcG9yIG5lYyBlZ2VzdGFzIGZhbWVzXG4gICAgICAgICAgICAgIGF1Z3VlLCBwbGF0ZWEgcG9ydGEgaW50ZWdlciBub3N0cmEgY3VyYWUgc2VkIGFyY3UuIE5lYyB1dCBkaWFtXG4gICAgICAgICAgICAgIHZ1bHB1dGF0ZSBhbnRlIHNjZWxlcmlzcXVlIHJpZGljdWx1cyBsb2JvcnRpcyBvcmNpIG1pIGN1cmFlXG4gICAgICAgICAgICAgIGhpbWVuYWVvcyBxdWlzLCBzZW5lY3R1cyBjdXJhYml0dXIgdWxsYW1jb3JwZXIgYSBwb3J0dGl0b3IgbmliaFxuICAgICAgICAgICAgICBmZXJtZW50dW0gbmlzaSBjdW0gbW9yYmkgYWxpcXVhbS4gVml0YWUgcHJldGl1bSB2ZXN0aWJ1bHVtIGR1aVxuICAgICAgICAgICAgICBncmF2aWRhIGluIHBvdGVudGkgaW50ZXJkdW0sIGNsYXNzIHJob25jdXMgbmVxdWUuIFVsbGFtY29ycGVyXG4gICAgICAgICAgICAgIHBvcnR0aXRvciBub24gcGhhcmV0cmEgY3Vyc3VzIG5pc2wgbW9sbGlzIHBlbGxlbnRlc3F1ZSBwcmltaXNcbiAgICAgICAgICAgICAgcGVuYXRpYnVzIHBsYXRlYSwgZGljdHVtIGhpbWVuYWVvcyBlZ2V0IG1pIGJpYmVuZHVtIGFkIG1vbGVzdGllXG4gICAgICAgICAgICAgIGFsaXF1ZXQgY3VyYWUgcXVpcyBxdWlzcXVlLlxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXJ2X2ltZ180LnBuZ1wiKX0gLz5cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgPC9HcmF5U2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/services/index.tsx\n");

/***/ }),

/***/ "./pages/services.tsx":
/*!****************************!*\
  !*** ./pages/services.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/services */ \"./components/services/index.tsx\");\n\nvar _jsxFileName = \"/home/kal/Documents/Development/Taxiye-front/pages/services.tsx\";\n\n\n\nconst Services = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_services__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJ2aWNlcy50c3g/OGI1MCJdLCJuYW1lcyI6WyJTZXJ2aWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLHNCQUFPLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VydmljZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlcnZpY2VzU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2VzJztcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG4gIHJldHVybiA8U2VydmljZXNTZWN0aW9uIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });