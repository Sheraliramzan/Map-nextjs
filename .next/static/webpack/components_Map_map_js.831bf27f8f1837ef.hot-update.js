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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction Map() {\n    const position = [\n        49.2859835,\n        -123.1137688\n    ];\n    const polyline = [\n        [\n            49.2859835,\n            -123.1137688\n        ],\n        [\n            49.2854657,\n            -123.1222897\n        ],\n        [\n            49.2826315,\n            -123.1186908\n        ]\n    ];\n    const blueOption = {\n        color: \"#00008B\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().map),\n        center: position,\n        zoom: 14,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                position: position,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Popup, {\n                    children: [\n                        \"Waterfront \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                            lineNumber: 29,\n                            columnNumber: 32\n                        }, this),\n                        \" Skytrain Station\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Polyline, {\n                pathOptions: blueOption,\n                positions: polyline\n            }, void 0, false, {\n                fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alyramzan/Desktop/Map-nextjs/components/Map/map.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNTO0FBQzJDO0FBQ3JDO0FBRTRDO0FBQzFEO0FBRW5CLFNBQVNRLE1BQUs7SUFFekIsTUFBTUMsV0FBVztRQUFDO1FBQVksQ0FBQztLQUFZO0lBRTNDLE1BQU1GLFdBQVc7UUFDYjtZQUFDO1lBQVksQ0FBQztTQUFZO1FBQzFCO1lBQUM7WUFBVyxDQUFDO1NBQVk7UUFDekI7WUFBQztZQUFXLENBQUM7U0FBWTtLQUM1QjtJQUVELE1BQU1HLGFBQWE7UUFBQ0MsT0FBTztJQUFTO0lBQ3BDLHFCQUNJLDhEQUFDVix1REFBWUE7UUFBQ1csV0FBV1osb0VBQVM7UUFBRWMsUUFBUUw7UUFBVU0sTUFBTTtRQUFJQyxpQkFBaUIsSUFBSTs7MEJBQ2pGLDhEQUFDZCxvREFBU0E7Z0JBQ05lLGFBQVk7Z0JBQ1pDLEtBQUk7Ozs7OzswQkFHUiw4REFBQ2YsaURBQU1BO2dCQUFDTSxVQUFVQTswQkFDZCw0RUFBQ0wsZ0RBQUtBOzt3QkFBQztzQ0FDUSw4REFBQ2U7Ozs7O3dCQUFJOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDZCxtREFBUUE7Z0JBQUNlLGFBQWFWO2dCQUFZVyxXQUFXZDs7Ozs7Ozs7Ozs7O0FBRzFELENBQUM7S0ExQnVCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC9tYXAuanM/MzA2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcydcbmltcG9ydCAnbGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5J1xuaW1wb3J0ICdsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7TWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAsIFBvbHlsaW5lLCBDaXJjbGVNYXJrZXJ9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgeyBwb2x5bGluZSB9IGZyb20gJ2xlYWZsZXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpe1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBbNDkuMjg1OTgzNSwgLTEyMy4xMTM3Njg4XVxuXG4gICAgY29uc3QgcG9seWxpbmUgPSBbXG4gICAgICAgIFs0OS4yODU5ODM1LCAtMTIzLjExMzc2ODhdLFxuICAgICAgICBbNDkuMjg1NDY1NywtMTIzLjEyMjI4OTddLFxuICAgICAgICBbNDkuMjgyNjMxNSwtMTIzLjExODY5MDhdLFxuICAgIF1cblxuICAgIGNvbnN0IGJsdWVPcHRpb24gPSB7Y29sb3I6ICcjMDAwMDhCJ31cbiAgICByZXR1cm4oXG4gICAgICAgIDxNYXBDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZS5tYXB9IGNlbnRlcj17cG9zaXRpb259IHpvb209ezE0fSBzY3JvbGxXaGVlbFpvb209e3RydWV9PlxuICAgICAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICAgICAgICBXYXRlcmZyb250IDxici8+IFNreXRyYWluIFN0YXRpb25cbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgICA8UG9seWxpbmUgcGF0aE9wdGlvbnM9e2JsdWVPcHRpb259IHBvc2l0aW9ucz17cG9seWxpbmV9Lz5cbiAgICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzdHlsZSIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwiUG9seWxpbmUiLCJDaXJjbGVNYXJrZXIiLCJwb2x5bGluZSIsIk1hcCIsInBvc2l0aW9uIiwiYmx1ZU9wdGlvbiIsImNvbG9yIiwiY2xhc3NOYW1lIiwibWFwIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwiYnIiLCJwYXRoT3B0aW9ucyIsInBvc2l0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map/map.js\n"));

/***/ })

});