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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction PostForm(param) {\n    let { onSubmit } = param;\n    _s();\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const descriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSubmit = (event)=>{\n        var _titleRef_current, _descriptionRef_current;\n        event.preventDefault();\n        const titleValue = (_titleRef_current = titleRef.current) === null || _titleRef_current === void 0 ? void 0 : _titleRef_current.value;\n        const description = (_descriptionRef_current = descriptionRef.current) === null || _descriptionRef_current === void 0 ? void 0 : _descriptionRef_current.value;\n        if (titleValue && description) {\n            onSubmit({\n                title,\n                description\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col gap-2 w-[500px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"title\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                ref: titleRef,\n                className: \"input input-bordered w-full max-w\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"description\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                ref: descriptionRef,\n                className: \"input input-bordered w-full max-w\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn btn-primary\",\n                children: \"submit\"\n            }, void 0, false, {\n                fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nguyen.tran.dai/Workspaces/Sun/lp/try-nest-next-graphql-firebase/apps/next-app/src/components/PostForm.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(PostForm, \"mg3m7eYljD4Nj5UP53FQkuo4tOM=\");\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3N0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQU1qRCxTQUFTQyxTQUFTLEtBQW1CO1FBQW5CLEVBQUVDLFFBQVEsRUFBUyxHQUFuQjs7SUFDaEIsTUFBTUMsV0FBV0gsNkNBQU1BLENBQW1CO0lBQzFDLE1BQU1JLGlCQUFpQkosNkNBQU1BLENBQW1CO0lBRWhELE1BQU1LLGVBQWtELENBQUNDO1lBR3BDSCxtQkFDQ0M7UUFIcEJFLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsY0FBYUwsb0JBQUFBLFNBQVNNLE9BQU8sY0FBaEJOLHdDQUFBQSxrQkFBa0JPLEtBQUs7UUFDMUMsTUFBTUMsZUFBY1AsMEJBQUFBLGVBQWVLLE9BQU8sY0FBdEJMLDhDQUFBQSx3QkFBd0JNLEtBQUs7UUFFakQsSUFBSUYsY0FBY0csYUFBYTtZQUM3QlQsU0FBUztnQkFDUFU7Z0JBQ0FEO1lBQ0Y7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUtYLFVBQVVHO1FBQWNTLFdBQVU7OzBCQUN0Qyw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLEtBQUtmO2dCQUNMVyxXQUFVOzs7Ozs7MEJBRVosOERBQUNLOzs7OzswQkFDRCw4REFBQ0o7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLEtBQUtkO2dCQUNMVSxXQUFVOzs7Ozs7MEJBRVosOERBQUNLOzs7OzswQkFDRCw4REFBQ0M7Z0JBQU9ILE1BQUs7Z0JBQVNILFdBQVU7MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFLeEQ7R0F2Q1NiO0tBQUFBO0FBeUNULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3RGb3JtLnRzeD9jNTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvblN1Ym1pdChkYXRhOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSk6IHZvaWQ7XG59O1xuXG5mdW5jdGlvbiBQb3N0Rm9ybSh7IG9uU3VibWl0IH06IFByb3BzKSB7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBkZXNjcmlwdGlvblJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQ6IEZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0aXRsZVZhbHVlID0gdGl0bGVSZWYuY3VycmVudD8udmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblJlZi5jdXJyZW50Py52YWx1ZTtcblxuICAgIGlmICh0aXRsZVZhbHVlICYmIGRlc2NyaXB0aW9uKSB7XG4gICAgICBvblN1Ym1pdCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgdy1bNTAwcHhdXCI+XG4gICAgICA8bGFiZWw+dGl0bGU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVmPXt0aXRsZVJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13XCJcbiAgICAgIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsYWJlbD5kZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICByZWY9e2Rlc2NyaXB0aW9uUmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXdcIlxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgIHN1Ym1pdFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJQb3N0Rm9ybSIsIm9uU3VibWl0IiwidGl0bGVSZWYiLCJkZXNjcmlwdGlvblJlZiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZVZhbHVlIiwiY3VycmVudCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImZvcm0iLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInJlZiIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PostForm.tsx\n"));

/***/ })

});