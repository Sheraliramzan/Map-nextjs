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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction Map() {\n    const position = [\n        49.2856,\n        -123.1124\n    ];\n    const polyline = [\n        [\n            49.2856,\n            -123.1124\n        ],\n        [\n            49.286,\n            -123.1190\n        ],\n        [\n            49.2829,\n            -123.116\n        ],\n        [\n            49.2795,\n            -123.109\n        ],\n        [\n            49.273,\n            -123.100\n        ],\n        [\n            49.2626265,\n            -123.07\n        ],\n        [\n            49.2484,\n            -123.056\n        ],\n        [\n            49.2442835,\n            -123.046\n        ],\n        []\n    ];\n    const blueOption = {\n        color: \"#00008B\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().map),\n        center: position,\n        zoom: 14,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                position: position,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Popup, {\n                    children: [\n                        \"Waterfront \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                            lineNumber: 35,\n                            columnNumber: 32\n                        }, this),\n                        \" Skytrain Station\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Polyline, {\n                pathOptions: blueOption,\n                positions: polyline\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNTO0FBQzJDO0FBQ3JDO0FBRTRDO0FBQzFEO0FBRW5CLFNBQVNRLE1BQUs7SUFFekIsTUFBTUMsV0FBVztRQUFDO1FBQVMsQ0FBQztLQUFTO0lBRXJDLE1BQU1GLFdBQVc7UUFDYjtZQUFDO1lBQVMsQ0FBQztTQUFTO1FBQ3BCO1lBQUM7WUFBTyxDQUFDO1NBQVM7UUFDbEI7WUFBQztZQUFRLENBQUM7U0FBUTtRQUNsQjtZQUFDO1lBQVEsQ0FBQztTQUFRO1FBQ2xCO1lBQUM7WUFBTyxDQUFDO1NBQVE7UUFDakI7WUFBQztZQUFXLENBQUM7U0FBTztRQUNwQjtZQUFDO1lBQVEsQ0FBQztTQUFRO1FBQ2xCO1lBQUM7WUFBVyxDQUFDO1NBQVE7UUFDckIsRUFBRTtLQUNMO0lBRUQsTUFBTUcsYUFBYTtRQUFDQyxPQUFPO0lBQVM7SUFDcEMscUJBQ0ksOERBQUNWLHVEQUFZQTtRQUFDVyxXQUFXWixvRUFBUztRQUFFYyxRQUFRTDtRQUFVTSxNQUFNO1FBQUlDLGlCQUFpQixJQUFJOzswQkFDakYsOERBQUNkLG9EQUFTQTtnQkFDTmUsYUFBWTtnQkFDWkMsS0FBSTs7Ozs7OzBCQUdSLDhEQUFDZixpREFBTUE7Z0JBQUNNLFVBQVVBOzBCQUNkLDRFQUFDTCxnREFBS0E7O3dCQUFDO3NDQUNRLDhEQUFDZTs7Ozs7d0JBQUk7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNkLG1EQUFRQTtnQkFBQ2UsYUFBYVY7Z0JBQVlXLFdBQVdkOzs7Ozs7Ozs7Ozs7QUFHMUQsQ0FBQztLQWhDdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwL21hcC5qcz8zMDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xuaW1wb3J0ICdsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHknXG5pbXBvcnQgJ2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3MnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IHtNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCwgUG9seWxpbmUsIENpcmNsZU1hcmtlcn0gZnJvbSAncmVhY3QtbGVhZmxldCdcbmltcG9ydCB7IHBvbHlsaW5lIH0gZnJvbSAnbGVhZmxldCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCl7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IFs0OS4yODU2LCAtMTIzLjExMjRdXG5cbiAgICBjb25zdCBwb2x5bGluZSA9IFtcbiAgICAgICAgWzQ5LjI4NTYsIC0xMjMuMTEyNF0sXG4gICAgICAgIFs0OS4yODYsLTEyMy4xMTkwXSxcbiAgICAgICAgWzQ5LjI4MjksLTEyMy4xMTZdLFxuICAgICAgICBbNDkuMjc5NSwtMTIzLjEwOV0sXG4gICAgICAgIFs0OS4yNzMsLTEyMy4xMDBdLFxuICAgICAgICBbNDkuMjYyNjI2NSwtMTIzLjA3XSxcbiAgICAgICAgWzQ5LjI0ODQsLTEyMy4wNTZdLFxuICAgICAgICBbNDkuMjQ0MjgzNSwtMTIzLjA0Nl0sXG4gICAgICAgIFtdXG4gICAgXVxuXG4gICAgY29uc3QgYmx1ZU9wdGlvbiA9IHtjb2xvcjogJyMwMDAwOEInfVxuICAgIHJldHVybihcbiAgICAgICAgPE1hcENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlLm1hcH0gY2VudGVyPXtwb3NpdGlvbn0gem9vbT17MTR9IHNjcm9sbFdoZWVsWm9vbT17dHJ1ZX0+XG4gICAgICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIFdhdGVyZnJvbnQgPGJyLz4gU2t5dHJhaW4gU3RhdGlvblxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIDxQb2x5bGluZSBwYXRoT3B0aW9ucz17Ymx1ZU9wdGlvbn0gcG9zaXRpb25zPXtwb2x5bGluZX0vPlxuICAgICAgICA8L01hcENvbnRhaW5lcj5cbiAgICApXG59Il0sIm5hbWVzIjpbInN0eWxlIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJQb2x5bGluZSIsIkNpcmNsZU1hcmtlciIsInBvbHlsaW5lIiwiTWFwIiwicG9zaXRpb24iLCJibHVlT3B0aW9uIiwiY29sb3IiLCJjbGFzc05hbWUiLCJtYXAiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJiciIsInBhdGhPcHRpb25zIiwicG9zaXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map/map.js\n"));

/***/ })

});