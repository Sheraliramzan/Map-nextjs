"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Map_map_js",{

/***/ "./components/Map/map.js":
/*!*******************************!*\
  !*** ./components/Map/map.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction Map() {\n    const position = [\n        49.2859835,\n        -123.1137688\n    ];\n    const polyline = [\n        [\n            49.2859835,\n            -123.1137688\n        ],\n        [\n            49.2855563,\n            -123.1223926\n        ]\n    ];\n    const blueOption = {\n        color: \"#00008B\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().map),\n        center: position,\n        zoom: 14,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                position: position,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Popup, {\n                    children: [\n                        \"Waterfront \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                            lineNumber: 28,\n                            columnNumber: 32\n                        }, this),\n                        \" Skytrain Station\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Polyline, {\n                pathOptions: blueOption,\n                positions: polyline\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNTO0FBQzJDO0FBQ3JDO0FBRTRDO0FBQzFEO0FBRW5CLFNBQVNRLE1BQUs7SUFFekIsTUFBTUMsV0FBVztRQUFDO1FBQVksQ0FBQztLQUFZO0lBRTNDLE1BQU1GLFdBQVc7UUFDYjtZQUFDO1lBQVksQ0FBQztTQUFZO1FBQzFCO1lBQUM7WUFBVyxDQUFDO1NBQVk7S0FDNUI7SUFFRCxNQUFNRyxhQUFhO1FBQUNDLE9BQU87SUFBUztJQUNwQyxxQkFDSSw4REFBQ1YsdURBQVlBO1FBQUNXLFdBQVdaLG9FQUFTO1FBQUVjLFFBQVFMO1FBQVVNLE1BQU07UUFBSUMsaUJBQWlCLElBQUk7OzBCQUNqRiw4REFBQ2Qsb0RBQVNBO2dCQUNOZSxhQUFZO2dCQUNaQyxLQUFJOzs7Ozs7MEJBR1IsOERBQUNmLGlEQUFNQTtnQkFBQ00sVUFBVUE7MEJBQ2QsNEVBQUNMLGdEQUFLQTs7d0JBQUM7c0NBQ1EsOERBQUNlOzs7Ozt3QkFBSTs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ2QsbURBQVFBO2dCQUFDZSxhQUFhVjtnQkFBWVcsV0FBV2Q7Ozs7Ozs7Ozs7OztBQUcxRCxDQUFDO0tBekJ1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAvbWFwLmpzPzMwNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnXG5pbXBvcnQgJ2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eSdcbmltcG9ydCAnbGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5L2Rpc3QvbGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5LmNzcydcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQge01hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwLCBQb2x5bGluZSwgQ2lyY2xlTWFya2VyfSBmcm9tICdyZWFjdC1sZWFmbGV0J1xuaW1wb3J0IHsgcG9seWxpbmUgfSBmcm9tICdsZWFmbGV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKXtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gWzQ5LjI4NTk4MzUsIC0xMjMuMTEzNzY4OF1cblxuICAgIGNvbnN0IHBvbHlsaW5lID0gW1xuICAgICAgICBbNDkuMjg1OTgzNSwgLTEyMy4xMTM3Njg4XSxcbiAgICAgICAgWzQ5LjI4NTU1NjMsLTEyMy4xMjIzOTI2XSxcbiAgICBdXG5cbiAgICBjb25zdCBibHVlT3B0aW9uID0ge2NvbG9yOiAnIzAwMDA4Qid9XG4gICAgcmV0dXJuKFxuICAgICAgICA8TWFwQ29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGUubWFwfSBjZW50ZXI9e3Bvc2l0aW9ufSB6b29tPXsxNH0gc2Nyb2xsV2hlZWxab29tPXt0cnVlfT5cbiAgICAgICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAgICAgIDxQb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgV2F0ZXJmcm9udCA8YnIvPiBTa3l0cmFpbiBTdGF0aW9uXG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICAgPFBvbHlsaW5lIHBhdGhPcHRpb25zPXtibHVlT3B0aW9ufSBwb3NpdGlvbnM9e3BvbHlsaW5lfS8+XG4gICAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGUiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsIlBvbHlsaW5lIiwiQ2lyY2xlTWFya2VyIiwicG9seWxpbmUiLCJNYXAiLCJwb3NpdGlvbiIsImJsdWVPcHRpb24iLCJjb2xvciIsImNsYXNzTmFtZSIsIm1hcCIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJhdHRyaWJ1dGlvbiIsInVybCIsImJyIiwicGF0aE9wdGlvbnMiLCJwb3NpdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map/map.js\n"));

/***/ })

});