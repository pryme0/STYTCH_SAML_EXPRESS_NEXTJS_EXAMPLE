"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/components/dashboard/Profile.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/dashboard/Profile.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ Profile auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Profile = function() {\n    var _member_roles;\n    _s();\n    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return {\n            member: state.memberReducer.member,\n            organization: state.organizationReducer.organization\n        };\n    }), member = _useSelector.member, organization = _useSelector.organization;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-fill md:w-1/2 gap-5 bg-white p-6 shadow-md rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \" User Details \"\n                    }, void 0, false, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-20 h-20 rounded-full bg-gray-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"Stytch_Logo.png\",\n                            className: \"w-50 h-50\",\n                            src: \"Stytch_Logo.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex gap-8 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            member === null || member === void 0 ? void 0 : member.firstName,\n                            \" \",\n                            member === null || member === void 0 ? void 0 : member.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            member === null || member === void 0 ? void 0 : member.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Role\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            member === null || member === void 0 ? void 0 : (_member_roles = member.roles) === null || _member_roles === void 0 ? void 0 : _member_roles.map(function(role) {\n                                return role;\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"SAML Configured\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            \" \",\n                            organization.samlConfigured\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Profile.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Profile, \"Cb31xNYqtC2K2E6WzdfhSk5IRIs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBDO0FBSW5DLElBQU1DLFVBQVU7UUEwQlVDOztJQXpCL0IsSUFBaUNGLGVBQUFBLHdEQUFXQSxDQUFDLFNBQUNHO1FBQzVDLE9BQU87WUFDTEQsUUFBUUMsTUFBTUMsYUFBYSxDQUFDRixNQUFNO1lBQ2xDRyxjQUFjRixNQUFNRyxtQkFBbUIsQ0FBQ0QsWUFBWTtRQUN0RDtJQUNGLElBTFFILFNBQXlCRixhQUF6QkUsUUFBUUcsZUFBaUJMLGFBQWpCSztJQU1oQixxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDM0MsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQ0MsS0FBSTs0QkFDSkosV0FBVTs0QkFDVkssS0FBSTs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO3dCQUFFTixXQUFVOzswQ0FDWCw4REFBQ087MENBQU87Ozs7Ozs0QkFBYTs0QkFBRWIsbUJBQUFBLDZCQUFBQSxPQUFRYyxTQUFTOzRCQUFDOzRCQUFFZCxtQkFBQUEsNkJBQUFBLE9BQVFlLFFBQVE7Ozs7Ozs7a0NBRTdELDhEQUFDSDt3QkFBRU4sV0FBVTs7MENBQ1gsOERBQUNPOzBDQUFPOzs7Ozs7NEJBQWM7NEJBQUViLG1CQUFBQSw2QkFBQUEsT0FBUWdCLEtBQUs7Ozs7Ozs7a0NBRXZDLDhEQUFDSjt3QkFBRU4sV0FBVTs7MENBQ1gsOERBQUNPOzBDQUFPOzs7Ozs7NEJBQWE7NEJBQUViLG1CQUFBQSw4QkFBQUEsZ0JBQUFBLE9BQVFpQixLQUFLLGNBQWJqQixvQ0FBQUEsY0FBZWtCLEdBQUcsQ0FBQyxTQUFDQzt1Q0FBU0E7Ozs7Ozs7O2tDQUV0RCw4REFBQ1A7d0JBQUVOLFdBQVU7OzBDQUNYLDhEQUFDTzswQ0FBTzs7Ozs7OzRCQUF3Qjs0QkFBRVYsYUFBYWlCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkUsRUFBRTtHQWxDV3JCOztRQUNzQkQsb0RBQVdBOzs7S0FEakNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvZmlsZS50c3g/NDNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVkdWNlcnNcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi8uLi9wYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCB7IG1lbWJlciwgb3JnYW5pemF0aW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZW1iZXI6IHN0YXRlLm1lbWJlclJlZHVjZXIubWVtYmVyLFxuICAgICAgb3JnYW5pemF0aW9uOiBzdGF0ZS5vcmdhbml6YXRpb25SZWR1Y2VyLm9yZ2FuaXphdGlvbixcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTZcIj5Qcm9maWxlPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZpbGwgbWQ6dy0xLzIgZ2FwLTUgYmctd2hpdGUgcC02IHNoYWRvdy1tZCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPiBVc2VyIERldGFpbHMgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiU3R5dGNoX0xvZ28ucG5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNTAgaC01MFwiXG4gICAgICAgICAgICBzcmM9XCJTdHl0Y2hfTG9nby5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGdhcC04IFwiPlxuICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPiB7bWVtYmVyPy5maXJzdE5hbWV9IHttZW1iZXI/Lmxhc3ROYW1lfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggZ2FwLThcIj5cbiAgICAgICAgICA8c3Ryb25nPkVtYWlsPC9zdHJvbmc+IHttZW1iZXI/LmVtYWlsfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggZ2FwLThcIj5cbiAgICAgICAgICA8c3Ryb25nPlJvbGU8L3N0cm9uZz4ge21lbWJlcj8ucm9sZXM/Lm1hcCgocm9sZSkgPT4gcm9sZSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBnYXAtOFwiPlxuICAgICAgICAgIDxzdHJvbmc+U0FNTCBDb25maWd1cmVkPC9zdHJvbmc+IHtvcmdhbml6YXRpb24uc2FtbENvbmZpZ3VyZWR9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlByb2ZpbGUiLCJtZW1iZXIiLCJzdGF0ZSIsIm1lbWJlclJlZHVjZXIiLCJvcmdhbml6YXRpb24iLCJvcmdhbml6YXRpb25SZWR1Y2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImltZyIsImFsdCIsInNyYyIsInAiLCJzdHJvbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicm9sZXMiLCJtYXAiLCJyb2xlIiwic2FtbENvbmZpZ3VyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/dashboard/Profile.tsx\n"));

/***/ })

});