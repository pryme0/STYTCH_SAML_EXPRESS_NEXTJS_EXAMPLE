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

/***/ "(app-pages-browser)/./src/app/components/dashboard/Settings.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/dashboard/Settings.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Settings: function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"(app-pages-browser)/./src/app/utils/index.ts\");\n/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Spinner */ \"(app-pages-browser)/./src/app/components/common/Spinner.tsx\");\n/* harmony import */ var _barrel_optimize_names_IoSettings_react_icons_io5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=IoSettings!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Modal */ \"(app-pages-browser)/./src/app/components/common/Modal.tsx\");\n/* __next_internal_client_entry_do_not_use__ Settings auto */ \n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Import the Modal component\nvar Settings = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), loading = _useState[0], setLoading = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showSAMLForm = _useState1[0], setShowSAMLForm = _useState1[1];\n    var copyToClipboard = function(text) {\n        navigator.clipboard.writeText(text);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully copied to clipboard\", {\n            position: \"top-right\",\n            autoClose: 3000\n        });\n    };\n    var organization = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.organizationReducer.organization;\n    });\n    var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        defaultValues: {\n            metaDataUrl: (organization === null || organization === void 0 ? void 0 : organization.metaDataUrl) || \"\"\n        }\n    }), register = _useForm.register, handleSubmit = _useForm.handleSubmit, errors = _useForm.formState.errors, reset = _useForm.reset;\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__._)(function(data) {\n            var error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        setLoading(true);\n                        return [\n                            4,\n                            _utils__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.put(\"/saml/connection/\".concat(organization.id), data)\n                        ];\n                    case 1:\n                        _state.sent();\n                        setLoading(false);\n                        setShowSAMLForm(false);\n                        reset();\n                        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"SAML Configuration updated successfully!\", {\n                            position: \"top-right\",\n                            autoClose: 3000\n                        });\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        setLoading(false);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message || \"SAML Configuration Failed, please try again with the correct credentials\", {\n                            position: \"top-right\",\n                            autoClose: 3000\n                        });\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Settings\"\n            }, void 0, false, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full bg-white p-6 shadow-md rounded-lg\",\n                children: [\n                     true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col h-full justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoSettings_react_icons_io5__WEBPACK_IMPORTED_MODULE_11__.IoSettings, {\n                                size: 300\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setShowSAMLForm(true);\n                                },\n                                className: \"flex mt-4 font-bold justify-center w-md bg-[#13e5c0] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#19303d] focus:outline-none focus:ring-2  focus:ring-offset-2\",\n                                children: \"Configure SAML\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ 0,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                        isOpen: showSAMLForm,\n                        onClose: function() {\n                            return setShowSAMLForm(false);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold mb-4\",\n                                children: \"Use the credentials below to setup SAML on your IdP\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Copy the ACS url below and paste it into your IdP SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer\",\n                                        onClick: function() {\n                                            return copyToClipboard(organization && organization.stytchAcsUrl);\n                                        },\n                                        title: \"Click to copy\",\n                                        children: organization.stytchAcsUrl\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Copy the Audience url below and paste it into your IdP SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer\",\n                                        onClick: function() {\n                                            return copyToClipboard(organization.stytchAudienceUrl);\n                                        },\n                                        title: \"Click to copy\",\n                                        children: organization.stytchAudienceUrl\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit(onSubmit),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"metaDataUrl\",\n                                                className: \"block text-sm font-medium text-gray-700\",\n                                                children: \"Meta data url\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_12__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_13__._)({}, register(\"metaDataUrl\", {\n                                                required: \"Meta data URL is required\",\n                                                pattern: {\n                                                    value: /^(https?|chrome):\\/\\/[^\\s$.?#].[^\\s]*$/gm,\n                                                    message: \"Enter a valid URL\"\n                                                }\n                                            })), {\n                                                type: \"text\",\n                                                id: \"metaDataUrl\",\n                                                className: \"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                                placeholder: \"Enter meta data url\"\n                                            }), void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 15\n                                            }, _this),\n                                            errors.metaDataUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-red-500 text-sm mt-1\",\n                                                children: errors.metaDataUrl.message\n                                            }, void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 143,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex mb-5 font-bold justify-center w-full text-white py-2 px-4 rounded-md shadow-sm bg-[#19303d] focus:outline-none focus:ring-2  focus:ring-offset-2\",\n                                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                                            fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                            lineNumber: 153,\n                                            columnNumber: 26\n                                        }, _this) : \"Update SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this);\n};\n_s(Settings, \"O4wQwB0+hfee2q52L2E8EhYCHV0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNTO0FBQ0E7QUFDSDtBQUVLO0FBQ0E7QUFDQztBQUNMLENBQUMsNkJBQTZCO0FBTS9ELElBQU1RLFdBQVc7O0lBQ3RCLElBQThCUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaENTLFVBQXVCVCxjQUFkVSxhQUFjVjtJQUM5QixJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQTFDVyxlQUFpQ1gsZUFBbkJZLGtCQUFtQlo7SUFFeEMsSUFBTWEsa0JBQWtCLFNBQUNDO1FBQ3ZCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7UUFDOUJYLGlEQUFLQSxDQUFDZSxPQUFPLENBQUMsb0NBQW9DO1lBQ2hEQyxVQUFVO1lBQ1ZDLFdBQVc7UUFDYjtJQUNGO0lBRUEsSUFBTUMsZUFBZW5CLHdEQUFXQSxDQUM5QixTQUFDb0I7ZUFBcUJBLE1BQU1DLG1CQUFtQixDQUFDRixZQUFZOztJQUU5RCxJQUtJcEIsV0FBQUEsd0RBQU9BLENBQWlCO1FBQzFCdUIsZUFBZTtZQUNiQyxhQUFhSixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNJLFdBQVcsS0FBSTtRQUM1QztJQUNGLElBUkVDLFdBSUV6QixTQUpGeUIsVUFDQUMsZUFHRTFCLFNBSEYwQixjQUNBQyxTQUVFM0IsU0FGRjJCLFVBQWFDLFFBQ2JDLFFBQ0U3QixTQURGNkI7SUFPRixJQUFNQzttQkFBVyw0RUFBT0M7Z0JBV2JDOzs7Ozs7Ozs7O3dCQVRQdkIsV0FBVzt3QkFDWDs7NEJBQU1OLGlEQUFhQSxDQUFDOEIsR0FBRyxDQUFDLG9CQUFvQyxPQUFoQmIsYUFBYWMsRUFBRSxHQUFJSDs7O3dCQUEvRDt3QkFDQXRCLFdBQVc7d0JBQ1hFLGdCQUFnQjt3QkFDaEJrQjt3QkFDQTNCLGlEQUFLQSxDQUFDZSxPQUFPLENBQUMsNENBQTRDOzRCQUN4REMsVUFBVTs0QkFDVkMsV0FBVzt3QkFDYjs7Ozs7O3dCQUNPYTt3QkFDUHZCLFdBQVc7d0JBQ1hQLGlEQUFLQSxDQUFDOEIsS0FBSyxDQUNUQSxNQUFNRyxPQUFPLElBQ1gsNEVBQ0Y7NEJBQ0VqQixVQUFVOzRCQUNWQyxXQUFXO3dCQUNiOzs7Ozs7Ozs7OztRQUdOO3dCQXRCTVcsU0FBa0JDOzs7O0lBd0J4QixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaLEtBQUksaUJBQ0gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2hDLDBGQUFVQTtnQ0FBQ2tDLE1BQU07Ozs7OzswQ0FDbEIsOERBQUNDO2dDQUNDQyxTQUFTOzJDQUFNOUIsZ0JBQWdCOztnQ0FDL0IwQixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs4Q0FLSDtrQ0FLRiw4REFBQy9CLGdEQUFLQTt3QkFBQ29DLFFBQVFoQzt3QkFBY2lDLFNBQVM7bUNBQU1oQyxnQkFBZ0I7OzswQ0FDMUQsOERBQUNpQztnQ0FBR1AsV0FBVTswQ0FBNkI7Ozs7OzswQ0FJM0MsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1E7d0NBQU1SLFdBQVU7a0RBQTBDOzs7Ozs7a0RBSTNELDhEQUFDRDt3Q0FDQ0MsV0FBVTt3Q0FDVkksU0FBUzttREFDUDdCLGdCQUFnQlEsZ0JBQWdCQSxhQUFhMEIsWUFBWTs7d0NBRTNEQyxPQUFNO2tEQUVMM0IsYUFBYTBCLFlBQVk7Ozs7Ozs7Ozs7OzswQ0FJOUIsOERBQUNWO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1E7d0NBQU1SLFdBQVU7a0RBQTBDOzs7Ozs7a0RBSTNELDhEQUFDRDt3Q0FDQ0MsV0FBVTt3Q0FDVkksU0FBUzttREFBTTdCLGdCQUFnQlEsYUFBYTRCLGlCQUFpQjs7d0NBQzdERCxPQUFNO2tEQUVMM0IsYUFBYTRCLGlCQUFpQjs7Ozs7Ozs7Ozs7OzBDQUluQyw4REFBQ0M7Z0NBQUtuQixVQUFVSixhQUFhSTs7a0RBQzNCLDhEQUFDTTt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNRO2dEQUNDSyxTQUFRO2dEQUNSYixXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNjLFNBQUFBLG9FQUFBQSxDQUFBQSw4REFBQUEsS0FDSzFCLFNBQVMsZUFBZTtnREFDMUIyQixVQUFVO2dEQUNWQyxTQUFTO29EQUNQQyxPQUFPO29EQUNQbkIsU0FBUztnREFDWDs0Q0FDRjtnREFDQW9CLE1BQUs7Z0RBQ0xyQixJQUFHO2dEQUNIRyxXQUFVO2dEQUNWbUIsYUFBWTs7Ozs7OzRDQUViNUIsT0FBT0osV0FBVyxrQkFDakIsOERBQUNpQztnREFBRXBCLFdBQVU7MERBQ1ZULE9BQU9KLFdBQVcsQ0FBQ1csT0FBTzs7Ozs7Ozs7Ozs7O2tEQUtqQyw4REFBQ0s7d0NBQ0NlLE1BQUs7d0NBQ0xsQixXQUFVO2tEQUVUN0Isd0JBQVUsOERBQUNKLG9EQUFPQTs7OztvREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZDLEVBQUU7R0FoSldHOztRQVlVTixvREFBV0E7UUFRNUJELG9EQUFPQTs7O0tBcEJBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL1NldHRpbmdzLnRzeD9lMjBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCIuLi9jb21tb24vU3Bpbm5lclwiO1xuaW1wb3J0IHsgSW9TZXR0aW5ncyB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vbi9Nb2RhbFwiOyAvLyBJbXBvcnQgdGhlIE1vZGFsIGNvbXBvbmVudFxuXG5pbnRlcmZhY2UgU0FNTEZvcm1JbnB1dHMge1xuICBtZXRhRGF0YVVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dTQU1MRm9ybSwgc2V0U2hvd1NBTUxGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBjb3BpZWQgdG8gY2xpcGJvYXJkXCIsIHtcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLCAvLyBDbG9zZSBhZnRlciAzIHNlY29uZHNcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvcmdhbml6YXRpb24gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUub3JnYW5pemF0aW9uUmVkdWNlci5vcmdhbml6YXRpb25cbiAgKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgcmVzZXQsXG4gIH0gPSB1c2VGb3JtPFNBTUxGb3JtSW5wdXRzPih7XG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgbWV0YURhdGFVcmw6IG9yZ2FuaXphdGlvbj8ubWV0YURhdGFVcmwgfHwgXCJcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBTQU1MRm9ybUlucHV0cykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5wdXQoYC9zYW1sL2Nvbm5lY3Rpb24vJHtvcmdhbml6YXRpb24uaWR9YCwgZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldFNob3dTQU1MRm9ybShmYWxzZSk7XG4gICAgICByZXNldCgpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcIlNBTUwgQ29uZmlndXJhdGlvbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIiwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLCAvLyBDbG9zZSBhZnRlciAzIHNlY29uZHNcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgdG9hc3QuZXJyb3IoXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgfHxcbiAgICAgICAgICBcIlNBTUwgQ29uZmlndXJhdGlvbiBGYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW4gd2l0aCB0aGUgY29ycmVjdCBjcmVkZW50aWFsc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLCAvLyBDbG9zZSBhZnRlciAzIHNlY29uZHNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTZcIj5TZXR0aW5nczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBiZy13aGl0ZSBwLTYgc2hhZG93LW1kIHJvdW5kZWQtbGdcIj5cbiAgICAgICAge3RydWUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJb1NldHRpbmdzIHNpemU9ezMwMH0gLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NBTUxGb3JtKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTQgZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIHctbWQgYmctWyMxM2U1YzBdIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgc2hhZG93LXNtIGhvdmVyOmJnLVsjMTkzMDNkXSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yICBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29uZmlndXJlIFNBTUxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmb250LWJvbGQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGJnLVsjMTNlNWMwXSB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIHNoYWRvdy1zbSBob3ZlcjpiZy1bIzE5MzAzZF0gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiAgZm9jdXM6cmluZy1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgVmlldyBDb25maWd1cmF0aW9uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPE1vZGFsIGlzT3Blbj17c2hvd1NBTUxGb3JtfSBvbkNsb3NlPXsoKSA9PiBzZXRTaG93U0FNTEZvcm0oZmFsc2UpfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5cbiAgICAgICAgICAgIFVzZSB0aGUgY3JlZGVudGlhbHMgYmVsb3cgdG8gc2V0dXAgU0FNTCBvbiB5b3VyIElkUFxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgQ29weSB0aGUgQUNTIHVybCBiZWxvdyBhbmQgcGFzdGUgaXQgaW50byB5b3VyIElkUCBTQU1MXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKG9yZ2FuaXphdGlvbiAmJiBvcmdhbml6YXRpb24uc3R5dGNoQWNzVXJsKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gY29weVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcmdhbml6YXRpb24uc3R5dGNoQWNzVXJsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgQ29weSB0aGUgQXVkaWVuY2UgdXJsIGJlbG93IGFuZCBwYXN0ZSBpdCBpbnRvIHlvdXIgSWRQIFNBTUxcbiAgICAgICAgICAgICAgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKG9yZ2FuaXphdGlvbi5zdHl0Y2hBdWRpZW5jZVVybCl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gY29weVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcmdhbml6YXRpb24uc3R5dGNoQXVkaWVuY2VVcmx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwibWV0YURhdGFVcmxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNZXRhIGRhdGEgdXJsXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcIm1ldGFEYXRhVXJsXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIk1ldGEgZGF0YSBVUkwgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eKGh0dHBzP3xjaHJvbWUpOlxcL1xcL1teXFxzJC4/I10uW15cXHNdKiQvZ20sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgYSB2YWxpZCBVUkxcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwibWV0YURhdGFVcmxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIGRhdGEgdXJsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5tZXRhRGF0YVVybCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMVwiPlxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5tZXRhRGF0YVVybC5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1iLTUgZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIHctZnVsbCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIHNoYWRvdy1zbSBiZy1bIzE5MzAzZF0gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gPFNwaW5uZXIgLz4gOiBcIlVwZGF0ZSBTQU1MIGNvbmZpZ3VyYXRpb25cIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ1c2VTZWxlY3RvciIsInRvYXN0IiwiYXhpb3NJbnN0YW5jZSIsIlNwaW5uZXIiLCJJb1NldHRpbmdzIiwiTW9kYWwiLCJTZXR0aW5ncyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd1NBTUxGb3JtIiwic2V0U2hvd1NBTUxGb3JtIiwiY29weVRvQ2xpcGJvYXJkIiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsIm9yZ2FuaXphdGlvbiIsInN0YXRlIiwib3JnYW5pemF0aW9uUmVkdWNlciIsImRlZmF1bHRWYWx1ZXMiLCJtZXRhRGF0YVVybCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzZXQiLCJvblN1Ym1pdCIsImRhdGEiLCJlcnJvciIsInB1dCIsImlkIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2l6ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW4iLCJvbkNsb3NlIiwiaDIiLCJsYWJlbCIsInN0eXRjaEFjc1VybCIsInRpdGxlIiwic3R5dGNoQXVkaWVuY2VVcmwiLCJmb3JtIiwiaHRtbEZvciIsImlucHV0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/dashboard/Settings.tsx\n"));

/***/ })

});