function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-elements-basic-elements-module"], {
  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: BasicElementsRoutingModule */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsRoutingModule", function () {
      return BasicElementsRoutingModule;
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


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts");

    var routes = [{
      path: '',
      component: _basic_elements_component__WEBPACK_IMPORTED_MODULE_2__["BasicElementsComponent"]
    }];

    var BasicElementsRoutingModule = function BasicElementsRoutingModule() {
      _classCallCheck(this, BasicElementsRoutingModule);
    };

    BasicElementsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicElementsRoutingModule
    });
    BasicElementsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicElementsRoutingModule_Factory(t) {
        return new (t || BasicElementsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicElementsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicElementsRoutingModule, [{
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
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicElementsComponent */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsComponent", function () {
      return BasicElementsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicElementsComponent =
    /*#__PURE__*/
    function () {
      function BasicElementsComponent() {
        _classCallCheck(this, BasicElementsComponent);
      }

      _createClass(BasicElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicElementsComponent;
    }();

    BasicElementsComponent.??fac = function BasicElementsComponent_Factory(t) {
      return new (t || BasicElementsComponent)();
    };

    BasicElementsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicElementsComponent,
      selectors: [["app-basic-elements"]],
      decls: 712,
      vars: 5,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Basic Component", 3, "options"], [1, "col-md-6"], ["action", "javascript:"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Text", 1, "form-control"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [1, "mt-5"], ["type", "text", "placeholder", ".form-control-lg", 1, "mb-3", "form-control", "form-control-lg"], ["type", "text", "placeholder", "Default input", 1, "mb-3", "form-control"], ["type", "text", "placeholder", ".form-control-sm", 1, "mb-3", "form-control", "form-control-sm"], [1, "mb-3", "form-control", "form-control-lg"], [1, "mb-3", "form-control"], ["for", "formControlRange"], ["type", "range", "id", "formControlRange", 1, "form-control-range"], ["type", "text", "placeholder", "Readonly input here\u2026", "readonly", "", 1, "form-control"], [1, "form-group", "row"], ["for", "staticEmail", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "readonly", "", "id", "staticEmail", "value", "email@example.com", 1, "form-control-plaintext"], ["for", "inputPassword", 1, "col-sm-3", "col-form-label"], ["type", "password", "id", "inputPassword", "placeholder", "Password", 1, "form-control"], ["action", "javascript:", 1, "form-inline"], [1, "form-group", "mb-2"], ["for", "staticEmail2", 1, "sr-only"], ["type", "text", "readonly", "", "id", "staticEmail2", "value", "email@example.com", 1, "form-control-plaintext"], [1, "form-group", "mx-sm-3", "mb-2"], ["for", "inputPassword2", 1, "sr-only"], ["type", "password", "id", "inputPassword2", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mb-2"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword4"], ["type", "password", "id", "inputPassword4", "placeholder", "Password", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["for", "inputEmail3", 1, "col-sm-3", "col-form-label"], ["type", "email", "id", "inputEmail3", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword3", 1, "col-sm-3", "col-form-label"], ["type", "password", "id", "inputPassword3", "placeholder", "Password", 1, "form-control"], ["type", "radio", "name", "gridRadios", "id", "gridRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "gridRadios1", 1, "form-check-label"], ["type", "radio", "name", "gridRadios", "id", "gridRadios2", "value", "option2", 1, "form-check-input"], ["for", "gridRadios2", 1, "form-check-label"], [1, "form-check", "disabled"], ["type", "radio", "name", "gridRadios", "id", "gridRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "gridRadios3", 1, "form-check-label"], [1, "col-sm-3"], ["type", "checkbox", "id", "gridCheck1", 1, "form-check-input"], ["for", "gridCheck1", 1, "form-check-label"], [1, "col-sm-10"], ["for", "colFormLabelSm", 1, "col-sm-3", "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-sm-3", "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-sm-3", "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"], ["for", "inputPassword5"], ["type", "password", "id", "inputPassword5", "aria-describedby", "passwordHelpBlock", 1, "form-control"], ["id", "passwordHelpBlock", 1, "form-text", "text-muted"], [1, "form-group", "mt-3"], ["for", "inputPassword6"], ["type", "password", "id", "inputPassword6", "aria-describedby", "passwordHelpInline", 1, "form-control", "mx-sm-3"], ["id", "passwordHelpInline", 1, "text-muted"], ["action", "javascript:", "novalidate", "", 1, "needs-validation"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["type", "text", "id", "validationCustomUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "placeholder", "Zip", "required", "", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["action", "javascript:", 1, "was-validated"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customControlValidation1", "required", "", 1, "custom-control-input"], ["for", "customControlValidation1", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "customControlValidation2", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation2", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "mb-3"], ["type", "radio", "id", "customControlValidation3", "name", "radio-stacked", "required", "", 1, "custom-control-input"], ["for", "customControlValidation3", 1, "custom-control-label"], ["required", "", 1, "custom-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "custom-file"], ["type", "file", "id", "validatedCustomFile", "required", "", 1, "custom-file-input"], ["for", "validatedCustomFile", 1, "custom-file-label"], ["for", "validationTooltip01"], ["type", "text", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationTooltipUsername"], ["id", "validationTooltipUsernamePrepend", 1, "input-group-text"], ["type", "text", "id", "validationTooltipUsername", "placeholder", "Username", "aria-describedby", "validationTooltipUsernamePrepend", "required", "", 1, "form-control"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationTooltip05"], ["type", "text", "id", "validationTooltip05", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "mt-3"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "customRadioInline1", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline1", 1, "custom-control-label"], ["type", "radio", "id", "customRadioInline2", "name", "customRadioInline1", 1, "custom-control-input"], ["for", "customRadioInline2", 1, "custom-control-label"], ["for", "customRange1"], ["type", "range", "id", "customRange1", 1, "custom-range"], ["for", "customRange2"], ["type", "range", "min", "0", "max", "5", "id", "customRange2", 1, "custom-range"], ["for", "customRange3"], ["type", "range", "min", "0", "max", "5", "step", "0.5", "id", "customRange3", 1, "custom-range"], ["cardTitle", "Input Group", 3, "options"], [1, "input-group", "mb-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["for", "basic-url"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-sm", "mb-3"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "aria-label", "Checkbox for following text input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "aria-label", "Radio button for following text input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "", "aria-label", "", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary"], ["ngbDropdown", "", 1, "input-group-prepend", 3, "placement"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary"], ["ngbDropdownMenu", ""], ["href", "javascript:", 1, "dropdown-item"], ["role", "separator", 1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["ngbDropdown", "", 1, "input-group-append", 3, "placement"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "dropdown-toggle-split"], [1, "sr-only"], ["type", "text", "aria-label", "Text input with segmented dropdown button", 1, "form-control"], ["ngbDropdown", "", 1, "input-group-append"], ["for", "inputGroupSelect01", 1, "input-group-text"], ["id", "inputGroupSelect01", 1, "custom-select"], ["id", "inputGroupSelect02", 1, "custom-select"], ["for", "inputGroupSelect02", 1, "input-group-text"], ["id", "inputGroupSelect03", 1, "custom-select"], ["id", "inputGroupSelect04", 1, "custom-select"], ["type", "file", "id", "inputGroupFile01", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["type", "file", "id", "inputGroupFile02", 1, "custom-file-input"], ["for", "inputGroupFile02", 1, "custom-file-label"], [1, "input-group", "cust-file-button", "mb-3"], ["type", "file", "id", "inputGroupFile03", 1, "custom-file-input"], ["for", "inputGroupFile03", 1, "custom-file-label"], [1, "input-group", "cust-file-button"], ["type", "file", "id", "inputGroupFile04", 1, "custom-file-input"], ["for", "inputGroupFile04", 1, "custom-file-label"]],
      template: function BasicElementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Form controls");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Check me out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Example select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Example textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Sizing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Large select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Default select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Range Inputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Example Range input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Readonly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Readonly plain Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "form", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Confirm identity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Form Grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Address 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Large select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Check me out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Horizontal Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "fieldset", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "First radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Second radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Third disabled radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Example checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Horizontal Form Label Sizing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Help Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](222, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "small", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "form", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](229, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "small", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Must be 8-20 characters long.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Validation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](234, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "label", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "@");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " Please choose a username. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "label", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](263, "input", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, " Please provide a valid city. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "label", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, " Please provide a valid state. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " Please provide a valid zip. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "label", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "Agree to terms and conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, " You must agree before submitting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Submit form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Supported Elements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](289, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "form", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "label", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Check this custom checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Example invalid feedback text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "label", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Toggle this custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](302, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "label", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Or toggle this other custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, "More example invalid feedback text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Open this select menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Example invalid custom select feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "label", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "Choose file...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Example invalid custom file feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Tooltips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](327, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "label", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](333, "input", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "label", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](339, "input", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "span", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "@");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "input", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, " Please choose a unique and valid username. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "label", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](356, "input", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, " Please provide a valid city. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "label", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](362, "input", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, " Please provide a valid state. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "label", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](368, "input", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, " Please provide a valid zip. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "Submit form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Checkboxes and Radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "h5", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](376, "Checkboxes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](377, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](379, "input", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "label", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "Check this custom checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](386, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](388, "input", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "label", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "Toggle this custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](392, "input", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "label", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Or toggle this other custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "Inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](399, "input", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "label", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Toggle this custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](403, "input", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "label", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "Or toggle this other custom radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "Range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](409, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "label", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "Example range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](412, "input", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "label", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "Example range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "input", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "label", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "Example range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](418, "input", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "app-card", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "span", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "@");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](425, "input", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](427, "input", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "span", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "label", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "Your vanity URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "span", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "https://example.com/users/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](437, "input", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](442, "input", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, ".00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "With textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](450, "textarea", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Sizing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](455, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "span", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "input", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "span", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](465, "input", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "span", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](470, "input", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Checkboxes and radios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](474, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](478, "input", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](479, "input", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](483, "input", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "input", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Multiple inputs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "First and last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](493, "input", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](494, "input", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "Multiple addons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](498, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "0.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](505, "input", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](507, "input", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "0.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "Button Addons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](522, "input", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](524, "input", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "button", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](535, "input", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](537, "input", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "button", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "Buttons With Dropdowns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](546, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "button", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](558, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](561, "input", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](563, "input", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "div", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](565, "button", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](566, "Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](574, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "Segmented Buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](580, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "button", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "button", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "span", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](590, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](591, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](592, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](593, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](594, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](595, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](598, "input", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](600, "input", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "div", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "button", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](603, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "button", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "span", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](606, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](614, "div", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "a", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "Custom Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "h5", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](622, "Custom Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](623, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "label", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](627, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](628, "select", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](630, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](632, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](634, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](636, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](637, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "select", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](639, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](640, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](642, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](643, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](644, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](646, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "label", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](653, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](654, "select", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](658, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](662, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](663, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "select", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](668, "One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](670, "Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](671, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](672, "Three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](675, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](676, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](677, "h5", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](678, "Custom File Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](679, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](682, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](683, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](684, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](685, "input", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "label", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](687, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](690, "input", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "label", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](692, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](693, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "span", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](695, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](696, "div", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](697, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](699, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](701, "input", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "label", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](703, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "div", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](705, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](706, "input", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](707, "label", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](708, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "button", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](711, "Button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](418);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "bottom-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "bottom-left");
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvZm9ybS1lbGVtZW50cy9iYXNpYy1lbGVtZW50cy9iYXNpYy1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */", ".row[_ngcontent-%COMP%]{\n    background-color: blueviolet;\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicElementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-elements',
          templateUrl: './basic-elements.component.html',
          styleUrls: ['./basic-elements.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicElementsModule */

  /***/
  function srcAppDemoPagesFormElementsBasicElementsBasicElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsModule", function () {
      return BasicElementsModule;
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


    var _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-elements-routing.module */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements-routing.module.ts");
    /* harmony import */


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/demo/pages/form-elements/basic-elements/basic-elements.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicElementsModule = function BasicElementsModule() {
      _classCallCheck(this, BasicElementsModule);
    };

    BasicElementsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicElementsModule
    });
    BasicElementsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicElementsModule_Factory(t) {
        return new (t || BasicElementsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicElementsModule, {
        declarations: [_basic_elements_component__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"]],
          declarations: [_basic_elements_component__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-elements-basic-elements-module-es5.js.map