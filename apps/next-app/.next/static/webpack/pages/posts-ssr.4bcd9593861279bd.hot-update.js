"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts-ssr",{

/***/ "./src/components/PostForm.tsx":
/*!*************************************!*\
  !*** ./src/components/PostForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PostForm(param) {\n    let { onSubmit } = param;\n    _s();\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const descriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSubmit = (event)=>{\n        var _titleRef_current, _descriptionRef_current;\n        event.preventDefault();\n        onSubmit({\n            title: (_titleRef_current = titleRef.current) === null || _titleRef_current === void 0 ? void 0 : _titleRef_current.value,\n            description: (_descriptionRef_current = descriptionRef.current) === null || _descriptionRef_current === void 0 ? void 0 : _descriptionRef_current.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"title\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                ref: titleRef,\n                className: \"input input-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"description\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                ref: descriptionRef,\n                className: \"input input-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                children: \"submit\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(PostForm, \"mg3m7eYljD4Nj5UP53FQkuo4tOM=\");\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQU1qRCxTQUFTQyxTQUFTLEtBQW1CO1FBQW5CLEVBQUVDLFFBQVEsRUFBUyxHQUFuQjs7SUFDaEIsTUFBTUMsV0FBV0gsNkNBQU1BLENBQW1CO0lBQzFDLE1BQU1JLGlCQUFpQkosNkNBQU1BLENBQW1CO0lBRWhELE1BQU1LLGVBQWtELENBQUNDO1lBSTlDSCxtQkFDTUM7UUFKZkUsTUFBTUMsY0FBYztRQUVwQkwsU0FBUztZQUNQTSxLQUFLLEdBQUVMLG9CQUFBQSxTQUFTTSxPQUFPLGNBQWhCTix3Q0FBQUEsa0JBQWtCTyxLQUFLO1lBQzlCQyxXQUFXLEdBQUVQLDBCQUFBQSxlQUFlSyxPQUFPLGNBQXRCTCw4Q0FBQUEsd0JBQXdCTSxLQUFLO1FBQzVDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBS1YsVUFBVUc7UUFBY1EsV0FBVTs7MEJBQ3RDLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsS0FBS2Q7Z0JBQ0xVLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Ozs7OzBCQUNELDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsS0FBS2I7Z0JBQ0xTLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Ozs7OzBCQUNELDhEQUFDQztnQkFBT0gsTUFBSztnQkFBU0gsV0FBVTswQkFBa0I7Ozs7Ozs7Ozs7OztBQUt4RDtHQWxDU1o7S0FBQUE7QUFvQ1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdEZvcm0udHN4P2M1NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uU3VibWl0KGRhdGE6IHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9KTogdm9pZDtcbn07XG5cbmZ1bmN0aW9uIFBvc3RGb3JtKHsgb25TdWJtaXQgfTogUHJvcHMpIHtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIG9uU3VibWl0KHtcbiAgICAgIHRpdGxlOiB0aXRsZVJlZi5jdXJyZW50Py52YWx1ZSEsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25SZWYuY3VycmVudD8udmFsdWUhLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxuICAgICAgPGxhYmVsPnRpdGxlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHJlZj17dGl0bGVSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8bGFiZWw+ZGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVmPXtkZXNjcmlwdGlvblJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICBzdWJtaXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiUG9zdEZvcm0iLCJvblN1Ym1pdCIsInRpdGxlUmVmIiwiZGVzY3JpcHRpb25SZWYiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImZvcm0iLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInJlZiIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PostForm.tsx\n"));

/***/ })

});