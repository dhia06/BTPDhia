function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-typography-basic-typography-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: BasicTypographyRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyRoutingModule", function () {
      return BasicTypographyRoutingModule;
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


    var _basic_typography_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-typography.component */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");

    var routes = [{
      path: '',
      component: _basic_typography_component__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyComponent"]
    }];

    var BasicTypographyRoutingModule = function BasicTypographyRoutingModule() {
      _classCallCheck(this, BasicTypographyRoutingModule);
    };

    BasicTypographyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicTypographyRoutingModule
    });
    BasicTypographyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicTypographyRoutingModule_Factory(t) {
        return new (t || BasicTypographyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicTypographyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTypographyRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: BasicTypographyComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyComponent", function () {
      return BasicTypographyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    var BasicTypographyComponent =
    /*#__PURE__*/
    function () {
      function BasicTypographyComponent() {
        _classCallCheck(this, BasicTypographyComponent);
      }

      _createClass(BasicTypographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicTypographyComponent;
    }();

    BasicTypographyComponent.??fac = function BasicTypographyComponent_Factory(t) {
      return new (t || BasicTypographyComponent)();
    };

    BasicTypographyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicTypographyComponent,
      selectors: [["app-basic-typography"]],
      decls: 202,
      vars: 9,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Headings", 3, "options"], [1, "text-muted", "mb-4"], [1, "clearfix"], [1, "text-muted", "mb-0"], ["cardTitle", "Display Headings", 3, "options"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "col-md-6"], ["cardTitle", "Inline Text Elements", 3, "options"], [1, "lead", "m-t-0"], ["cardTitle", "Contextual Text Colors", 3, "options"], [1, "text-muted", "mb-1"], [1, "text-primary", "mb-1"], [1, "text-success", "mb-1"], [1, "text-info", "mb-1"], [1, "text-warning", "mb-1"], [1, "text-danger", "mb-1"], [1, "text-dark", "mb-1"], [1, "col-md-6", "col-lg-4"], ["cardTitle", "Unordered", 3, "options"], ["cardTitle", "Ordered", 3, "options"], [1, "col-md-12", "col-lg-4"], ["cardTitle", "Unstyled", 3, "options"], [1, "list-unstyled"], [1, "list-inline", "m-b-0"], [1, "list-inline-item"], ["cardTitle", "Blockquotes", 3, "options"], [1, "text-muted", "m-b-30"], [1, "blockquote"], [1, "mb-2"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "text-muted", "m-b-15", "m-t-20"], [1, "blockquote", "text-right"], ["cardTitle", "Horizontal Description", 3, "options"], [1, "dl-horizontal", "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"]],
      template: function BasicTypographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "This is a Heading 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "This is a Heading 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "This is a Heading 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "This is a Heading 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "This is a Heading 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "This is a Heading 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "app-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Display 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Display 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Display 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Display 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Your title goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " You can use the mark tag to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " text. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "This line of text is meant to be treated as deleted text.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "This line of text is meant to be treated as an addition to the document.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "rendered as bold text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "rendered as italicized text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Maecenas sed diam eget risus varius blandit sit amet non magna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Etiam porta sem malesuada magna mollis euismod.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "app-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "app-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "app-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Integer molestie lorem at massa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Phasellus iaculis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Nulla volutpat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "app-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Your awesome text goes here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "blockquote", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Someone famous in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "cite", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Source Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, ".text-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " for a blockquote with right-aligned content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "blockquote", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Someone famous in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "cite", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Source Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "app-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "dl", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Description lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "A description list is perfect for defining terms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Euismod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Donec id elit non mi porta gravida at eget metus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Malesuada porta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Etiam porta sem malesuada magna mollis euismod.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "dt", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Truncated term is truncated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdHlwb2dyYXBoeS9iYXNpYy10eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-typography',
          templateUrl: './basic-typography.component.html',
          styleUrls: ['./basic-typography.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicTypographyModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyModule", function () {
      return BasicTypographyModule;
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


    var _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-typography-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts");
    /* harmony import */


    var _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-typography.component */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicTypographyModule = function BasicTypographyModule() {
      _classCallCheck(this, BasicTypographyModule);
    };

    BasicTypographyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicTypographyModule
    });
    BasicTypographyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicTypographyModule_Factory(t) {
        return new (t || BasicTypographyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicTypographyModule, {
        declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTypographyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-typography-basic-typography-module-es5.js.map