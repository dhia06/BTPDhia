(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-ui-elements-ui-basic-ui-basic-module"],{

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UiBasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicRoutingModule", function() { return UiBasicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'button',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-button-basic-button-module */ "basic-button-basic-button-module").then(__webpack_require__.bind(null, /*! ./basic-button/basic-button.module */ "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts")).then(m => m.BasicButtonModule)
            },
            {
                path: 'badges',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-badge-basic-badge-module */ "basic-badge-basic-badge-module").then(__webpack_require__.bind(null, /*! ./basic-badge/basic-badge.module */ "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts")).then(m => m.BasicBadgeModule)
            },
            {
                path: 'breadcrumb-paging',
                loadChildren: () => __webpack_require__.e(/*! import() | breadcrumb-paging-breadcrumb-paging-module */ "breadcrumb-paging-breadcrumb-paging-module").then(__webpack_require__.bind(null, /*! ./breadcrumb-paging/breadcrumb-paging.module */ "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts")).then(m => m.BreadcrumbPagingModule)
            },
            {
                path: 'collapse',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-collapse-basic-collapse-module */ "basic-collapse-basic-collapse-module").then(__webpack_require__.bind(null, /*! ./basic-collapse/basic-collapse.module */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.module.ts")).then(m => m.BasicCollapseModule)
            },
            {
                path: 'tabs-pills',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-tabs-pills-basic-tabs-pills-module */ "basic-tabs-pills-basic-tabs-pills-module").then(__webpack_require__.bind(null, /*! ./basic-tabs-pills/basic-tabs-pills.module */ "./src/app/demo/ui-elements/ui-basic/basic-tabs-pills/basic-tabs-pills.module.ts")).then(m => m.BasicTabsPillsModule)
            },
            {
                path: 'typography',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-typography-basic-typography-module */ "basic-typography-basic-typography-module").then(__webpack_require__.bind(null, /*! ./basic-typography/basic-typography.module */ "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts")).then(m => m.BasicTypographyModule)
            }
        ]
    }
];
class UiBasicRoutingModule {
}
UiBasicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiBasicRoutingModule });
UiBasicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiBasicRoutingModule_Factory(t) { return new (t || UiBasicRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiBasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiBasicRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/*! exports provided: UiBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiBasicModule", function() { return UiBasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-basic-routing.module */ "./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts");




class UiBasicModule {
}
UiBasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiBasicModule });
UiBasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiBasicModule_Factory(t) { return new (t || UiBasicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiBasicRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiBasicModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiBasicRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiBasicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiBasicRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=demo-ui-elements-ui-basic-ui-basic-module-es2015.js.map