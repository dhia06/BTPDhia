function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-button-basic-button-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicButtonRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonRoutingModule", function () {
      return BasicButtonRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");

    var routes = [{
      path: '',
      component: _basic_button_component__WEBPACK_IMPORTED_MODULE_2__["BasicButtonComponent"]
    }];

    var BasicButtonRoutingModule = function BasicButtonRoutingModule() {
      _classCallCheck(this, BasicButtonRoutingModule);
    };

    BasicButtonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicButtonRoutingModule
    });
    BasicButtonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicButtonRoutingModule_Factory(t) {
        return new (t || BasicButtonRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicButtonRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicButtonRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicButtonComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonComponent", function () {
      return BasicButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BasicButtonComponent =
    /*#__PURE__*/
    function () {
      function BasicButtonComponent() {
        _classCallCheck(this, BasicButtonComponent);

        this.radioButtons = '1';
        this.checkBox = {
          left: true,
          center: false,
          right: false
        };
      }

      _createClass(BasicButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicButtonComponent;
    }();

    BasicButtonComponent.ɵfac = function BasicButtonComponent_Factory(t) {
      return new (t || BasicButtonComponent)();
    };

    BasicButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicButtonComponent,
      selectors: [["app-basic-button"]],
      decls: 1066,
      vars: 83,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Default", 3, "options"], ["type", "button", "ngbTooltip", "btn-primary", 1, "btn", "btn-primary"], ["type", "button", "ngbTooltip", "btn-secondary", 1, "btn", "btn-secondary"], ["type", "button", "ngbTooltip", "btn-success", 1, "btn", "btn-success"], ["type", "button", "ngbTooltip", "btn-danger", 1, "btn", "btn-danger"], ["type", "button", "ngbTooltip", "btn-warning", 1, "btn", "btn-warning"], ["type", "button", "ngbTooltip", "btn-info", 1, "btn", "btn-info"], ["type", "button", "ngbTooltip", "btn-light", 1, "btn", "btn-light"], ["type", "button", "ngbTooltip", "btn-dark", 1, "btn", "btn-dark"], ["type", "button", "ngbTooltip", "btn-link", 1, "btn", "btn-link"], [1, "col-md-12"], ["cardTitle", "Outline", 3, "options"], ["type", "button", "ngbTooltip", "btn-outline-primary", 1, "btn", "btn-outline-primary"], ["type", "button", "ngbTooltip", "btn-outline-secondary", 1, "btn", "btn-outline-secondary"], ["type", "button", "ngbTooltip", "btn-outline-success", 1, "btn", "btn-outline-success"], ["type", "button", "ngbTooltip", "btn-outline-danger", 1, "btn", "btn-outline-danger"], ["type", "button", "ngbTooltip", "btn-outline-warning", 1, "btn", "btn-outline-warning"], ["type", "button", "ngbTooltip", "btn-outline-info", 1, "btn", "btn-outline-info"], ["type", "button", "ngbTooltip", "btn-outline-light", 1, "btn", "btn-outline-light"], ["type", "button", "ngbTooltip", "btn-outline-dark", 1, "btn", "btn-outline-dark"], ["cardTitle", "Square Button", 3, "options"], ["type", "button", 1, "btn", "btn-square", "btn-primary"], ["type", "button", 1, "btn", "btn-square", "btn-secondary"], ["type", "button", 1, "btn", "btn-square", "btn-success"], ["type", "button", 1, "btn", "btn-square", "btn-danger"], ["type", "button", 1, "btn", "btn-square", "btn-warning"], ["type", "button", 1, "btn", "btn-square", "btn-info"], ["type", "button", 1, "btn", "btn-square", "btn-light"], ["type", "button", 1, "btn", "btn-square", "btn-dark"], ["cardTitle", "Disabled Button", 3, "options"], ["type", "button", 1, "btn", "disabled", "btn-primary"], ["type", "button", 1, "btn", "disabled", "btn-secondary"], ["type", "button", 1, "btn", "disabled", "btn-success"], ["type", "button", 1, "btn", "disabled", "btn-danger"], ["type", "button", 1, "btn", "disabled", "btn-warning"], ["type", "button", 1, "btn", "disabled", "btn-info"], ["type", "button", 1, "btn", "disabled", "btn-light"], ["type", "button", 1, "btn", "disabled", "btn-dark"], ["cardTitle", "Rounded Button", 3, "options"], ["type", "button", 1, "btn", "btn-rounded", "btn-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-light"], ["type", "button", 1, "btn", "btn-rounded", "btn-dark"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-light"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-dark"], ["cardTitle", "Glow Button", 3, "options"], ["type", "button", "title", "btn btn-glow-primary btn-primary", "data-toggle", "tooltip", 1, "btn", "btn-glow-primary", "btn-primary"], ["type", "button", "title", "btn btn-glow-secondary btn-secondary", "data-toggle", "tooltip", 1, "btn", "btn-glow-secondary", "btn-secondary"], ["type", "button", "title", "btn btn-glow-success btn-success", "data-toggle", "tooltip", 1, "btn", "btn-glow-success", "btn-success"], ["type", "button", "title", "btn btn-glow-danger btn-danger", "data-toggle", "tooltip", 1, "btn", "btn-glow-danger", "btn-danger"], ["type", "button", "title", "btn btn-glow-warning btn-warning", "data-toggle", "tooltip", 1, "btn", "btn-glow-warning", "btn-warning"], ["type", "button", "title", "btn btn-glow-info btn-info", "data-toggle", "tooltip", 1, "btn", "btn-glow-info", "btn-info"], ["type", "button", "title", "btn btn-glow-light btn-light", "data-toggle", "tooltip", 1, "btn", "btn-glow-light", "btn-light"], ["type", "button", "title", "btn btn-glow-dark btn-dark", "data-toggle", "tooltip", 1, "btn", "btn-glow-dark", "btn-dark"], ["cardTitle", "Shadow Button", 3, "options"], ["type", "button", 1, "btn", "shadow-1", "btn-primary"], ["type", "button", 1, "btn", "shadow-2", "btn-success"], ["type", "button", 1, "btn", "shadow-3", "btn-danger"], ["type", "button", 1, "btn", "shadow-4", "btn-warning"], ["type", "button", 1, "btn", "shadow-5", "btn-info"], [1, "col-md-6"], ["cardTitle", "Sizes [ Large ]", 3, "options"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg"], ["cardTitle", "Sizes [ small ]", 3, "options"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm"], ["cardTitle", "Checkbox Button", 3, "options"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn", "btn-secondary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], ["cardTitle", "Radio Buttons", 3, "options"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn", "btn-secondary", "active"], ["type", "radio", "ngbButton", "", "name", "options", "id", "option1", "value", "1", "checked", ""], ["type", "radio", "ngbButton", "", "name", "options", "id", "option2", "value", "2"], ["type", "radio", "ngbButton", "", "name", "options", "id", "option3", "value", "3"], ["cardTitle", "Buttons With Icon", 3, "options"], ["type", "button", 1, "btn", "btn-primary"], [1, "feather", "icon-thumbs-up"], ["type", "button", 1, "btn", "btn-secondary"], [1, "feather", "icon-camera"], ["type", "button", 1, "btn", "btn-success"], [1, "feather", "icon-check-circle"], ["type", "button", 1, "btn", "btn-danger"], [1, "feather", "icon-slash"], ["type", "button", 1, "btn", "btn-warning"], [1, "feather", "icon-alert-triangle"], ["type", "button", 1, "btn", "btn-info"], [1, "feather", "icon-info"], ["cardTitle", "Outline Icon Buttons", 3, "options"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-info"], ["cardTitle", "Only Icon", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-success"], ["type", "button", 1, "btn", "btn-icon", "btn-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-info"], ["cardTitle", "Outline Icon", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-success"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-info"], ["cardTitle", "Icon Button Rounded", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-success"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-info"], ["cardTitle", "Icon Outline Button Rounded", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-success"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-rounded", "btn-outline-info"], ["cardTitle", "Basic Dropdown Button", 3, "options"], ["ngbDropdown", "", 1, "btn-group", "mb-2", "mr-2", 3, "placement"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary"], ["ngbDropdownMenu", ""], ["href", "javascript:", 1, "dropdown-item"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-info"], ["cardTitle", "Split Dropdown Button", 3, "options"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], [1, "sr-only"], [1, "dropdown-divider"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-info", "dropdown-toggle-split"], ["cardTitle", "Basic Outline Dropdown Button", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-info"], ["cardTitle", "Split Outline Dropdown Button", 3, "options"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-success", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-danger", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-warning", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-info", "dropdown-toggle-split"], ["cardTitle", "Basic Icon Dropdown", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-info"], ["cardTitle", "Outline Icon Dropdown", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-outline-info"], ["cardTitle", "Basic Rounded Icon Dropdown", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-info"], ["cardTitle", "Outline Rounded Icon Dropdown", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "drp-icon", "btn-rounded", "btn-outline-info"], ["cardTitle", "Basic Button Group", 3, "options"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "mb-2"], ["cardTitle", "Button Toolbar", 3, "options"], [1, "btn-toolbar"], [1, "btn-group", "mr-2"], [1, "btn-group"], ["cardTitle", "Button Toolbar Size", 3, "options"], [1, "col-xl-4", "col-md-6", "mb-2"], ["role", "group", "aria-label", "button groups", 1, "btn-group"], [1, "col-xl-4", "col-md-12", "mb-2"], ["role", "group", "aria-label", "button groups xl", 1, "btn-group", "btn-group-lg"], ["role", "group", "aria-label", "button groups sm", 1, "btn-group", "btn-group-sm"], ["cardTitle", "Nesting", 3, "options"], ["role", "group", 1, "btn-group"], ["role", "group", "ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary"], ["cardTitle", "Vertical Variation", 3, "options"], [1, "col-4"], ["role", "group", 1, "btn-group", "btn-group-vertical"], [1, "col-8"], ["role", "group", "ngbDropdown", "", 1, "btn-group", 3, "placement"]],
      template: function BasicButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "use class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".btn-*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " class to get various button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "use class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".btn-outline-*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " class to get various outline button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "app-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ".btn-square");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " class to get square button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " class to get Disabled button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "app-card", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, ".btn-rounded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " class to get Rounded button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".btn-rounded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".btn-outline-*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " class to get Rounded Outline button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "app-card", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".btn-glow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " class to get Glow button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "app-card", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ".shadow-[1 / 2 / 3 / 4 / 5] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " class to get Shadow button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, ".shadow-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, ".shadow-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ".shadow-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ".shadow-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, ".shadow-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "app-card", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ".btn-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " class to get Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "app-card", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, ".btn-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " class to get Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "app-card", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "ngbButton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " selector in checkbox input to get checkbox button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_241_listener($event) {
            return ctx.checkBox.left = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_244_listener($event) {
            return ctx.checkBox.center = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_247_listener($event) {
            return ctx.checkBox.right = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "app-card", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "ngbButton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "ngbRadioGroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " selector in radio input to get radio button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicButtonComponent_Template_div_ngModelChange_259_listener($event) {
            return ctx.radioButtons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "app-card", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "app-card", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "app-card", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "app-card", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "button", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "button", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "button", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "button", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "button", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "app-card", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "button", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "button", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "button", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "button", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "button", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "button", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "app-card", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "button", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "button", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "button", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "button", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "button", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "button", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "app-card", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "ngbDropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "ngbDropdownToggle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "ngbDropdownMenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " selector in proper way to get dropdown button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "button", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "button", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "button", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "button", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "app-card", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "button", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "button", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "button", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "button", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "button", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "button", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "app-card", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "button", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "button", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "button", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "button", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "app-card", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "button", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "button", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](643, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "button", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "button", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "button", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "button", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "app-card", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "button", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](698, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "button", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](708, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "button", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](718, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "button", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](728, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "button", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](738, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "button", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](748, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "app-card", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "button", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](760, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "button", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "button", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](780, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "button", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "button", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](800, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "button", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](810, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "app-card", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "button", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "button", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](832, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "button", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](842, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "button", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](852, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "button", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](862, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "button", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](872, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "app-card", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "button", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](884, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "button", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](894, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "button", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "button", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "button", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "i", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "app-card", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](950, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "app-card", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "div", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "div", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](965, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](967, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "div", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "app-card", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "this is default size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "div", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, ".btn-group-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, ".btn-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, " class to get large size button group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, ".btn-group-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1007, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, ".btn-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, " class to get small size button group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "div", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "app-card", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "div", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "div", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "button", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "app-card", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, ".btn-group-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, ".btn-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, " class to get vertical variation button group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "div", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "div", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "div", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "div", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "div", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "button", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, "Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "a", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBox.left);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBox.center);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkBox.right);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", "top-right");
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYnV0dG9uL2Jhc2ljLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-button',
          templateUrl: './basic-button.component.html',
          styleUrls: ['./basic-button.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicButtonModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonModule", function () {
      return BasicButtonModule;
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


    var _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-button-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts");
    /* harmony import */


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicButtonModule = function BasicButtonModule() {
      _classCallCheck(this, BasicButtonModule);
    };

    BasicButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicButtonModule
    });
    BasicButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicButtonModule_Factory(t) {
        return new (t || BasicButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicButtonModule, {
        declarations: [_basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]],
          declarations: [_basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-button-basic-button-module-es5.js.map