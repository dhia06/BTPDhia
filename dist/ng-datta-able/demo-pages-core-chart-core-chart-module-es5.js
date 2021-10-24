function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-core-chart-core-chart-module"], {
  /***/
  "./src/app/demo/pages/core-chart/core-chart-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/core-chart-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: CoreChartRoutingModule */

  /***/
  function srcAppDemoPagesCoreChartCoreChartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreChartRoutingModule", function () {
      return CoreChartRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'morris',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | crt-morris-crt-morris-module */
          "crt-morris-crt-morris-module").then(__webpack_require__.bind(null,
          /*! ./crt-morris/crt-morris.module */
          "./src/app/demo/pages/core-chart/crt-morris/crt-morris.module.ts")).then(function (m) {
            return m.CrtMorrisModule;
          });
        }
      }]
    }];

    var CoreChartRoutingModule = function CoreChartRoutingModule() {
      _classCallCheck(this, CoreChartRoutingModule);
    };

    CoreChartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreChartRoutingModule
    });
    CoreChartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreChartRoutingModule_Factory(t) {
        return new (t || CoreChartRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreChartRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreChartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/core-chart/core-chart.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/core-chart.module.ts ***!
    \************************************************************/

  /*! exports provided: CoreChartModule */

  /***/
  function srcAppDemoPagesCoreChartCoreChartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreChartModule", function () {
      return CoreChartModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core-chart-routing.module */
    "./src/app/demo/pages/core-chart/core-chart-routing.module.ts");

    var CoreChartModule = function CoreChartModule() {
      _classCallCheck(this, CoreChartModule);
    };

    CoreChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreChartModule
    });
    CoreChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreChartModule_Factory(t) {
        return new (t || CoreChartModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreChartRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreChartModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreChartRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoreChartRoutingModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=demo-pages-core-chart-core-chart-module-es5.js.map