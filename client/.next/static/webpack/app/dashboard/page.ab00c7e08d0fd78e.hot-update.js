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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Settings: function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ \"(app-pages-browser)/./src/app/utils/index.ts\");\n/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Spinner */ \"(app-pages-browser)/./src/app/components/common/Spinner.tsx\");\n/* harmony import */ var _barrel_optimize_names_IoSettings_react_icons_io5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=IoSettings!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Modal */ \"(app-pages-browser)/./src/app/components/common/Modal.tsx\");\n/* __next_internal_client_entry_do_not_use__ Settings auto */ \n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Import the Modal component\nvar Settings = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), loading = _useState[0], setLoading = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showSAMLForm = _useState1[0], setShowSAMLForm = _useState1[1];\n    var copyToClipboard = function(text) {\n        navigator.clipboard.writeText(text);\n        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Successfully copied to clipboard\", {\n            position: \"top-right\",\n            autoClose: 3000\n        });\n    };\n    var organization = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.organizationReducer.organization;\n    });\n    var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        defaultValues: {\n            metaDataUrl: (organization === null || organization === void 0 ? void 0 : organization.metaDataUrl) || \"\"\n        }\n    }), register = _useForm.register, handleSubmit = _useForm.handleSubmit, errors = _useForm.formState.errors, reset = _useForm.reset;\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__._)(function(data) {\n            var error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        setLoading(true);\n                        return [\n                            4,\n                            _utils__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.put(\"/saml/connection/\".concat(organization.id), data)\n                        ];\n                    case 1:\n                        _state.sent();\n                        setLoading(false);\n                        setShowSAMLForm(false);\n                        reset();\n                        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"SAML Configuration updated successfully!\", {\n                            position: \"top-right\",\n                            autoClose: 3000\n                        });\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        setLoading(false);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message || \"SAML Configuration Failed, please try again with the correct credentials\", {\n                            position: \"top-right\",\n                            autoClose: 3000\n                        });\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Settings\"\n            }, void 0, false, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-6 shadow-md rounded-lg\",\n                children: [\n                     true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoSettings_react_icons_io5__WEBPACK_IMPORTED_MODULE_11__.IoSettings, {\n                                size: 400\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setShowSAMLForm(true);\n                                },\n                                className: \"flex mt-4 font-bold justify-center w-full bg-[#13e5c0] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#19303d] focus:outline-none focus:ring-2  focus:ring-offset-2\",\n                                children: \"Configure SAML\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ 0,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                        isOpen: showSAMLForm,\n                        onClose: function() {\n                            return setShowSAMLForm(false);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold mb-4\",\n                                children: \"Use the credentials below to setup SAML on your IdP\"\n                            }, void 0, false, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Copy the ACS url below and paste it into your IdP SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer\",\n                                        onClick: function() {\n                                            return copyToClipboard(organization && organization.stytchAcsUrl);\n                                        },\n                                        title: \"Click to copy\",\n                                        children: organization.stytchAcsUrl\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-sm font-medium text-gray-700\",\n                                        children: \"Copy the Audience url below and paste it into your IdP SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer\",\n                                        onClick: function() {\n                                            return copyToClipboard(organization.stytchAudienceUrl);\n                                        },\n                                        title: \"Click to copy\",\n                                        children: organization.stytchAudienceUrl\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit(onSubmit),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"metaDataUrl\",\n                                                className: \"block text-sm font-medium text-gray-700\",\n                                                children: \"Meta data url\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 123,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_12__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_13__._)({}, register(\"metaDataUrl\", {\n                                                required: \"Meta data URL is required\",\n                                                pattern: {\n                                                    value: /^(https?|chrome):\\/\\/[^\\s$.?#].[^\\s]*$/gm,\n                                                    message: \"Enter a valid URL\"\n                                                }\n                                            })), {\n                                                type: \"text\",\n                                                id: \"metaDataUrl\",\n                                                className: \"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                                placeholder: \"Enter meta data url\"\n                                            }), void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 15\n                                            }, _this),\n                                            errors.metaDataUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-red-500 text-sm mt-1\",\n                                                children: errors.metaDataUrl.message\n                                            }, void 0, false, {\n                                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                                lineNumber: 143,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"flex mb-5 font-bold justify-center w-full text-white py-2 px-4 rounded-md shadow-sm bg-[#19303d] focus:outline-none focus:ring-2  focus:ring-offset-2\",\n                                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Spinner__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                                            fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                            lineNumber: 153,\n                                            columnNumber: 26\n                                        }, _this) : \"Update SAML configuration\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jowey/Desktop/jocodes/SAML_SSO_Next_And_EXPRESS/client/src/app/components/dashboard/Settings.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this);\n};\n_s(Settings, \"O4wQwB0+hfee2q52L2E8EhYCHV0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNTO0FBQ0E7QUFDSDtBQUVLO0FBQ0E7QUFDQztBQUNMLENBQUMsNkJBQTZCO0FBTS9ELElBQU1RLFdBQVc7O0lBQ3RCLElBQThCUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaENTLFVBQXVCVCxjQUFkVSxhQUFjVjtJQUM5QixJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQTFDVyxlQUFpQ1gsZUFBbkJZLGtCQUFtQlo7SUFFeEMsSUFBTWEsa0JBQWtCLFNBQUNDO1FBQ3ZCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7UUFDOUJYLGlEQUFLQSxDQUFDZSxPQUFPLENBQUMsb0NBQW9DO1lBQ2hEQyxVQUFVO1lBQ1ZDLFdBQVc7UUFDYjtJQUNGO0lBRUEsSUFBTUMsZUFBZW5CLHdEQUFXQSxDQUM5QixTQUFDb0I7ZUFBcUJBLE1BQU1DLG1CQUFtQixDQUFDRixZQUFZOztJQUU5RCxJQUtJcEIsV0FBQUEsd0RBQU9BLENBQWlCO1FBQzFCdUIsZUFBZTtZQUNiQyxhQUFhSixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNJLFdBQVcsS0FBSTtRQUM1QztJQUNGLElBUkVDLFdBSUV6QixTQUpGeUIsVUFDQUMsZUFHRTFCLFNBSEYwQixjQUNBQyxTQUVFM0IsU0FGRjJCLFVBQWFDLFFBQ2JDLFFBQ0U3QixTQURGNkI7SUFPRixJQUFNQzttQkFBVyw0RUFBT0M7Z0JBV2JDOzs7Ozs7Ozs7O3dCQVRQdkIsV0FBVzt3QkFDWDs7NEJBQU1OLGlEQUFhQSxDQUFDOEIsR0FBRyxDQUFDLG9CQUFvQyxPQUFoQmIsYUFBYWMsRUFBRSxHQUFJSDs7O3dCQUEvRDt3QkFDQXRCLFdBQVc7d0JBQ1hFLGdCQUFnQjt3QkFDaEJrQjt3QkFDQTNCLGlEQUFLQSxDQUFDZSxPQUFPLENBQUMsNENBQTRDOzRCQUN4REMsVUFBVTs0QkFDVkMsV0FBVzt3QkFDYjs7Ozs7O3dCQUNPYTt3QkFDUHZCLFdBQVc7d0JBQ1hQLGlEQUFLQSxDQUFDOEIsS0FBSyxDQUNUQSxNQUFNRyxPQUFPLElBQ1gsNEVBQ0Y7NEJBQ0VqQixVQUFVOzRCQUNWQyxXQUFXO3dCQUNiOzs7Ozs7Ozs7OztRQUdOO3dCQXRCTVcsU0FBa0JDOzs7O0lBd0J4QixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaLEtBQUksaUJBQ0g7OzBDQUNFLDhEQUFDaEMsMEZBQVVBO2dDQUFDa0MsTUFBTTs7Ozs7OzBDQUNsQiw4REFBQ0M7Z0NBQ0NDLFNBQVM7MkNBQU05QixnQkFBZ0I7O2dDQUMvQjBCLFdBQVU7MENBQ1g7Ozs7Ozs7cURBS0g7a0NBS0YsOERBQUMvQixnREFBS0E7d0JBQUNvQyxRQUFRaEM7d0JBQWNpQyxTQUFTO21DQUFNaEMsZ0JBQWdCOzs7MENBQzFELDhEQUFDaUM7Z0NBQUdQLFdBQVU7MENBQTZCOzs7Ozs7MENBSTNDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUFNUixXQUFVO2tEQUEwQzs7Ozs7O2tEQUkzRCw4REFBQ0Q7d0NBQ0NDLFdBQVU7d0NBQ1ZJLFNBQVM7bURBQ1A3QixnQkFBZ0JRLGdCQUFnQkEsYUFBYTBCLFlBQVk7O3dDQUUzREMsT0FBTTtrREFFTDNCLGFBQWEwQixZQUFZOzs7Ozs7Ozs7Ozs7MENBSTlCLDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUFNUixXQUFVO2tEQUEwQzs7Ozs7O2tEQUkzRCw4REFBQ0Q7d0NBQ0NDLFdBQVU7d0NBQ1ZJLFNBQVM7bURBQU03QixnQkFBZ0JRLGFBQWE0QixpQkFBaUI7O3dDQUM3REQsT0FBTTtrREFFTDNCLGFBQWE0QixpQkFBaUI7Ozs7Ozs7Ozs7OzswQ0FJbkMsOERBQUNDO2dDQUFLbkIsVUFBVUosYUFBYUk7O2tEQUMzQiw4REFBQ007d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUTtnREFDQ0ssU0FBUTtnREFDUmIsV0FBVTswREFDWDs7Ozs7OzBEQUdELDhEQUFDYyxTQUFBQSxvRUFBQUEsQ0FBQUEsOERBQUFBLEtBQ0sxQixTQUFTLGVBQWU7Z0RBQzFCMkIsVUFBVTtnREFDVkMsU0FBUztvREFDUEMsT0FBTztvREFDUG5CLFNBQVM7Z0RBQ1g7NENBQ0Y7Z0RBQ0FvQixNQUFLO2dEQUNMckIsSUFBRztnREFDSEcsV0FBVTtnREFDVm1CLGFBQVk7Ozs7Ozs0Q0FFYjVCLE9BQU9KLFdBQVcsa0JBQ2pCLDhEQUFDaUM7Z0RBQUVwQixXQUFVOzBEQUNWVCxPQUFPSixXQUFXLENBQUNXLE9BQU87Ozs7Ozs7Ozs7OztrREFLakMsOERBQUNLO3dDQUNDZSxNQUFLO3dDQUNMbEIsV0FBVTtrREFFVDdCLHdCQUFVLDhEQUFDSixvREFBT0E7Ozs7b0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QyxFQUFFO0dBaEpXRzs7UUFZVU4sb0RBQVdBO1FBUTVCRCxvREFBT0E7OztLQXBCQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5ncy50c3g/ZTIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVkdWNlcnNcIjtcbmltcG9ydCB7IGF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vY29tbW9uL1NwaW5uZXJcIjtcbmltcG9ydCB7IElvU2V0dGluZ3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi9jb21tb24vTW9kYWxcIjsgLy8gSW1wb3J0IHRoZSBNb2RhbCBjb21wb25lbnRcblxuaW50ZXJmYWNlIFNBTUxGb3JtSW5wdXRzIHtcbiAgbWV0YURhdGFVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93U0FNTEZvcm0sIHNldFNob3dTQU1MRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgY29waWVkIHRvIGNsaXBib2FyZFwiLCB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgIGF1dG9DbG9zZTogMzAwMCwgLy8gQ2xvc2UgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3JnYW5pemF0aW9uID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLm9yZ2FuaXphdGlvblJlZHVjZXIub3JnYW5pemF0aW9uXG4gICk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIHJlc2V0LFxuICB9ID0gdXNlRm9ybTxTQU1MRm9ybUlucHV0cz4oe1xuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIG1ldGFEYXRhVXJsOiBvcmdhbml6YXRpb24/Lm1ldGFEYXRhVXJsIHx8IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YTogU0FNTEZvcm1JbnB1dHMpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UucHV0KGAvc2FtbC9jb25uZWN0aW9uLyR7b3JnYW5pemF0aW9uLmlkfWAsIGRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRTaG93U0FNTEZvcm0oZmFsc2UpO1xuICAgICAgcmVzZXQoKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJTQU1MIENvbmZpZ3VyYXRpb24gdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIsIHtcbiAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCwgLy8gQ2xvc2UgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRvYXN0LmVycm9yKFxuICAgICAgICBlcnJvci5tZXNzYWdlIHx8XG4gICAgICAgICAgXCJTQU1MIENvbmZpZ3VyYXRpb24gRmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluIHdpdGggdGhlIGNvcnJlY3QgY3JlZGVudGlhbHNcIixcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICAgIGF1dG9DbG9zZTogMzAwMCwgLy8gQ2xvc2UgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02XCI+U2V0dGluZ3M8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgc2hhZG93LW1kIHJvdW5kZWQtbGdcIj5cbiAgICAgICAge3RydWUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxJb1NldHRpbmdzIHNpemU9ezQwMH0gLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1NBTUxGb3JtKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG10LTQgZm9udC1ib2xkIGp1c3RpZnktY2VudGVyIHctZnVsbCBiZy1bIzEzZTVjMF0gdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctWyMxOTMwM2RdIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb25maWd1cmUgU0FNTFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZvbnQtYm9sZCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgYmctWyMxM2U1YzBdIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgc2hhZG93LXNtIGhvdmVyOmJnLVsjMTkzMDNkXSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yICBmb2N1czpyaW5nLW9mZnNldC0yXCI+XG4gICAgICAgICAgICBTQU1MIENvbmZpZ3VyYXRpb25cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8TW9kYWwgaXNPcGVuPXtzaG93U0FNTEZvcm19IG9uQ2xvc2U9eygpID0+IHNldFNob3dTQU1MRm9ybShmYWxzZSl9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgVXNlIHRoZSBjcmVkZW50aWFscyBiZWxvdyB0byBzZXR1cCBTQU1MIG9uIHlvdXIgSWRQXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBDb3B5IHRoZSBBQ1MgdXJsIGJlbG93IGFuZCBwYXN0ZSBpdCBpbnRvIHlvdXIgSWRQIFNBTUxcbiAgICAgICAgICAgICAgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQob3JnYW5pemF0aW9uICYmIG9yZ2FuaXphdGlvbi5zdHl0Y2hBY3NVcmwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byBjb3B5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29yZ2FuaXphdGlvbi5zdHl0Y2hBY3NVcmx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBDb3B5IHRoZSBBdWRpZW5jZSB1cmwgYmVsb3cgYW5kIHBhc3RlIGl0IGludG8geW91ciBJZFAgU0FNTFxuICAgICAgICAgICAgICBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc20gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb3B5VG9DbGlwYm9hcmQob3JnYW5pemF0aW9uLnN0eXRjaEF1ZGllbmNlVXJsKX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byBjb3B5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29yZ2FuaXphdGlvbi5zdHl0Y2hBdWRpZW5jZVVybH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXRhRGF0YVVybFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1ldGEgZGF0YSB1cmxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibWV0YURhdGFVcmxcIiwge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiTWV0YSBkYXRhIFVSTCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL14oaHR0cHM/fGNocm9tZSk6XFwvXFwvW15cXHMkLj8jXS5bXlxcc10qJC9nbSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIHZhbGlkIFVSTFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXRhRGF0YVVybFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1ldGEgZGF0YSB1cmxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLm1ldGFEYXRhVXJsICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1ldGFEYXRhVXJsLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWItNSBmb250LWJvbGQganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgc2hhZG93LXNtIGJnLVsjMTkzMDNkXSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yICBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvYWRpbmcgPyA8U3Bpbm5lciAvPiA6IFwiVXBkYXRlIFNBTUwgY29uZmlndXJhdGlvblwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRm9ybSIsInVzZVNlbGVjdG9yIiwidG9hc3QiLCJheGlvc0luc3RhbmNlIiwiU3Bpbm5lciIsIklvU2V0dGluZ3MiLCJNb2RhbCIsIlNldHRpbmdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaG93U0FNTEZvcm0iLCJzZXRTaG93U0FNTEZvcm0iLCJjb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwib3JnYW5pemF0aW9uIiwic3RhdGUiLCJvcmdhbml6YXRpb25SZWR1Y2VyIiwiZGVmYXVsdFZhbHVlcyIsIm1ldGFEYXRhVXJsIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNldCIsIm9uU3VibWl0IiwiZGF0YSIsImVycm9yIiwicHV0IiwiaWQiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzaXplIiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoMiIsImxhYmVsIiwic3R5dGNoQWNzVXJsIiwidGl0bGUiLCJzdHl0Y2hBdWRpZW5jZVVybCIsImZvcm0iLCJodG1sRm9yIiwiaW5wdXQiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/dashboard/Settings.tsx\n"));

/***/ })

});