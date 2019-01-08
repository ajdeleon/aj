webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Project */ "./components/Project.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.js */ "./data.js");
var _jsxFileName = "/Users/adeleon/coding/next/aj/pages/projects.js";





var renderMemberList = function renderMemberList() {
  return _data_js__WEBPACK_IMPORTED_MODULE_3__["projectData"].map(function (_ref) {
    var imageSource = _ref.imageSource,
        caption = _ref.caption,
        description = _ref.description,
        tags = _ref.tags;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageSource: imageSource,
      caption: caption,
      description: description,
      key: caption,
      tags: tags,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }) //I miss punning from Reason ^^
    ;
  });
};

var Projects = function Projects() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    role: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "tagPicker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "My favorite technologies")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "memberList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, renderMemberList())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\n        main {\n          display: flex;\n          justify-content: center;\n        }\n        .tagPicker {\n          outline: 1px solid black;\n          width: 80%;\n          text-align: center;\n        }\n        .memberList {\n          display: flex;\n          flex-wrap: wrap;\n          justify-content: center;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=projects.js.182c839e4808b60a8e8c.hot-update.js.map