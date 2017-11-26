webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_doors_doors_component__ = __webpack_require__("../../../../../src/app/pages/products/doors/doors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_machinery_machinery_component__ = __webpack_require__("../../../../../src/app/pages/products/machinery/machinery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_legos_legos_component__ = __webpack_require__("../../../../../src/app/pages/products/legos/legos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_reset_reset_component__ = __webpack_require__("../../../../../src/app/auth/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_profile_profile_component__ = __webpack_require__("../../../../../src/app/auth/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quotation_quotation_component__ = __webpack_require__("../../../../../src/app/pages/quotation/quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__ = __webpack_require__("../../../../../src/app/guards/guest.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Error Components

// Landing Components





// Auth Components





// Quotation Components

// Guards


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'products/doors', component: __WEBPACK_IMPORTED_MODULE_5__pages_products_doors_doors_component__["a" /* DoorsComponent */] },
    { path: 'products/machinery', component: __WEBPACK_IMPORTED_MODULE_6__pages_products_machinery_machinery_component__["a" /* MachineryComponent */] },
    { path: 'products/legos', component: __WEBPACK_IMPORTED_MODULE_7__pages_products_legos_legos_component__["a" /* LegosComponent */] },
    { path: 'quotation', component: __WEBPACK_IMPORTED_MODULE_13__pages_quotation_quotation_component__["a" /* QuotationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'auth/forgot', component: __WEBPACK_IMPORTED_MODULE_9__auth_forgot_forgot_component__["a" /* ForgotComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__["a" /* GuestGuard */]] },
    { path: 'auth/login', component: __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__["a" /* GuestGuard */]] },
    { path: 'auth/register', component: __WEBPACK_IMPORTED_MODULE_10__auth_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__["a" /* GuestGuard */]] },
    { path: "auth/profile", component: __WEBPACK_IMPORTED_MODULE_12__auth_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'auth/reset', component: __WEBPACK_IMPORTED_MODULE_11__auth_reset_reset_component__["a" /* ResetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__["a" /* GuestGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__errors_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_guest_guard__["a" /* GuestGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.notificationOptions = {
            position: ['top', 'right'],
            clickToClose: true,
            timeOut: 3000,
            animate: 'fromRight'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__yaga_leaflet_ng2__ = __webpack_require__("../../../../@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__yaga_leaflet_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__yaga_leaflet_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__partials_header_header_component__ = __webpack_require__("../../../../../src/app/partials/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__partials_footer_footer_component__ = __webpack_require__("../../../../../src/app/partials/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__errors_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__errors_server_error_server_error_component__ = __webpack_require__("../../../../../src/app/errors/server-error/server-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_quotation_service__ = __webpack_require__("../../../../../src/app/services/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_machinery_service__ = __webpack_require__("../../../../../src/app/services/machinery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__partials_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__partials_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__errors_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_19__errors_server_error_server_error_component__["a" /* ServerErrorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ngx_owl_carousel__["OwlModule"],
            __WEBPACK_IMPORTED_MODULE_10__yaga_leaflet_ng2__["YagaModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_12__admin_admin_module__["a" /* AdminModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2_angular2_logger_core__["Logger"],
            __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_22__services_quotation_service__["a" /* QuotationService */],
            __WEBPACK_IMPORTED_MODULE_23__services_machinery_service__["a" /* MachineryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_material_material_module__ = __webpack_require__("../../../../../src/app/pages/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reset_reset_component__ = __webpack_require__("../../../../../src/app/auth/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/auth/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__pages_material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* ModalModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_6__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_7__reset_reset_component__["a" /* ResetComponent */], __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["a" /* BsModalService */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forgot works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/auth/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/forgot/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotComponent);

//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <h1>Iniciar Sesión</h1>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <ul class=\"breadcrumb\">\r\n          <li><a href=\"index.html\">Inicio</a>\r\n          </li>\r\n          <li>Iniciar Sesión</li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-3\">\r\n        <div class=\"box\">\r\n          <h2 class=\"text-uppercase\">Iniciar sesión</h2>\r\n\r\n          <p class=\"lead\">Ya eres nuestro cliente?</p>\r\n          <p class=\"text-muted\">\r\n            Inicia sesión con tu cuenta para realizar nuevas cotizaciones, acceder a tu historial de cotizaciones o modificar tus datos personales.\r\n          </p>\r\n          <hr>\r\n\r\n          <div class=\"col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"attemptLogin(loginForm)\" novalidate>\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Correo electrónico</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n                <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"loginForm.controls.email.dirty && loginForm.controls.email.errors\">\r\n                  <ul class=\"list-unstyled\">\r\n                    <li *ngIf=\"loginForm.controls.email.hasError('required')\">\r\n                      <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                    </li>\r\n                    <li *ngIf=\"!loginForm.controls.email.hasError('required') && loginForm.controls.email.hasError('email')\">\r\n                      <span class=\"fa fa-exclamation\"></span> Oops, este campo debe contener un email valido!\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Contraseña</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n                <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"loginForm.controls.password.dirty && loginForm.controls.password.errors\">\r\n                  <ul class=\"list-unstyled\">\r\n                    <li *ngIf=\"loginForm.controls.password.hasError('required')\">\r\n                      <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-template-main pull-right\" [disabled]=\"disabledForm()\"><i class=\"fa fa-sign-in\"></i> Acceder</button>\r\n              <span>No tienes una cuenta? <a href=\"javascript: void(0);\" (click)=\"goToRegister()\">Registrate aquí!</a></span>\r\n            </form>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n  </div>\r\n  <!-- /.container -->\r\n</div>\r\n<!-- /#content -->\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, authService, logger, notificationsService) {
        this.router = router;
        this.authService = authService;
        this.logger = logger;
        this.notificationsService = notificationsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loggingIn = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])
        });
        var redirectMessage = this.authService.getRedirectMessage();
        if (redirectMessage == 'LOGIN_REQUIRED') {
            var toast = this.notificationsService.warn('Autenticación requerida', 'Para acceder a la ruta, primero debes estar autenticado.', { timeOut: 5000 });
            this.authService.unsetRedirectMessage();
        }
    };
    LoginComponent.prototype.attemptLogin = function (form) {
        var _this = this;
        this.logger.info('Logging in user:', form.value);
        this.loggingIn = true;
        var credentials = form.value;
        this.authService.logIn(credentials)
            .subscribe(function (response) {
            var toast = _this.notificationsService.success('Sesión Iniciada', 'La sesión ha sido iniciada correctamente');
            _this.router.navigateByUrl('/');
        }, function (error) {
            _this.loggingIn = false;
            if (error.status === 401) {
                var responseData = JSON.parse(error.error);
                if (responseData.errors) {
                    var toast = _this.notificationsService.error('Error en Formulario', responseData.errors[0]);
                }
                else {
                    var toast = _this.notificationsService.error('Error en Formulario', 'Parece que han habido un error. Vuelva a intentarlo');
                }
            }
            else {
                var toast = _this.notificationsService.error('Error ' + error.status, error.statusText);
            }
        });
    };
    LoginComponent.prototype.disabledForm = function () {
        return this.loginForm.invalid || this.loggingIn;
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigateByUrl('auth/register');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ProfileImage {\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.quotationTable tbody tr:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ntemplate modal-body {\r\n  background-image: image('assets/img/logoEnd.png');\r\n}\r\n\r\n.dataPresent:nth-child(even) {\r\n  background-color: rgba(70, 127, 191, 0.5) !important;\r\n}\r\n\r\nmat-expansion-panel .personalData tr {\r\n  line-height: 54px;\r\n}\r\n\r\nmat-expansion-panel .personalData tr:hover {\r\n  background: rgba(70, 127, 191, 0.6);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <h1>Mi perfil</h1>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <ul class=\"breadcrumb\">\r\n          <li><a href=\"#\">Inicio</a>\r\n          </li>\r\n          <li>Perfil</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"profile text-center\">\r\n        <img class=\"ProfileImage\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuQH3vlB_boW7QuW_SNwYpF5IDBbUlmVhG-RjWhRe_JV3LiJJTg\" alt=\"ProfileIcon\">\r\n        <div class=\"heading\">\r\n          <h2>{{ user.firstName }} {{ user.lastName }}</h2>\r\n        </div>\r\n\r\n        <h4>{{user.role}}</h4>\r\n        <p>{{user.enterprise}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\" id=\"customer-account\">\r\n      <div class=\"col-xs-12\">\r\n        <mat-tab-group>\r\n\r\n          <mat-tab label=\"Estado Cotizaciones\">\r\n            <div class=\"col-md-12\" id=\"customer-orders\">\r\n              <h3 class=\"text-center\">Tus Cotizaciones</h3>\r\n              <div class=\"box\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover quotationTable\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>NumeroOrden</th>\r\n                        <th>Fecha</th>\r\n                        <th>Producto Solicitado</th>\r\n                        <th>cantidad</th>\r\n                        <th>Estado</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let quotation of quotations\" class=\"quotationTable \" (click)=\"openModal(template,quotation)\">\r\n                        <th># {{quotation.id}}</th>\r\n                        <td>{{quotation.date.toLocaleString(es-ES, { hour12: true,weekday:'long',year:'numeric',month: 'long', day: 'numeric', hour:'numeric', minute: 'numeric', second:'numeric' })}}</td>\r\n                        <td>{{quotation.typeProduct}}</td>\r\n                        <th>{{quotation.quantity}}</th>\r\n                        <td>\r\n                          <span class=\"label label-success\" *ngIf=\"quotation.state === '5'\">\r\n                            Cotizacion Terminada\r\n                          </span>\r\n                          <span class=\"label label-primary\" *ngIf=\"quotation.state === '4'\">\r\n                            Enviando al Correo\r\n                          </span>\r\n                          <span class=\"label label-info\" *ngIf=\"quotation.state === '3'\">\r\n                            Generando Cotización\r\n                          </span>\r\n                          <span class=\"label label-warning\" *ngIf=\"quotation.state === '2'\">\r\n                              Generando Modelos\r\n                          </span>\r\n                          <span class=\"label label-danger\" *ngIf=\"quotation.state === '1'\">\r\n                            Sin Procesar\r\n                          </span>\r\n                          <span class=\"label label-default \" *ngIf=\"quotation.state === NULL\">\r\n                            UNDEFINED\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n          <template #template>\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <div class=\"heading text-center\">\r\n                        <h3>Descripción cotización # {{selectedQuotation.id}}</h3>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                  <h3>{{selectedQuotation.typeProduct}}</h3>\r\n                  <p>{{selectedQuotation.originalData['familiaproducto']}}</p>\r\n              </div>\r\n              <div class=\"clearfix\">\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body \">\r\n\r\n              <div class=\"col-xs-10 col-sm-offset-1 text-center\">\r\n                <table class=\"table table-striped table-condensed \">\r\n                  <thead>\r\n                    <tr>\r\n                      <th  class=\"text-center\">Caracteristica</th>\r\n                      <th  class=\"text-center\">Personalización</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\" let prop of displayQuotation\" class=\"dataPresent\">\r\n                      <td >{{prop.key}}</td>\r\n                      <td >{{prop.value}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"clearfix\">\r\n\r\n              </div>\r\n            </div>\r\n          </template>\r\n          <mat-tab label=\"Datos de Contacto\">\r\n            <p class=\"lead\"></p>\r\n            <p class=\"text-muted\">Mantén tus datos actualizados, usamos estos datos para poder contactarle y generar la cotización.</p>\r\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"updateUser(userForm)\">\r\n              <mat-accordion>\r\n                <mat-expansion-panel >\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      <b>Datos personales</b>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <table class=\"col-md-12 personalData\" frame=\"void\" rules=\"rows\">\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Nombres</b>\r\n                      </td>\r\n                      <td>{{user.firstName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Apellidos</b>\r\n                      </td>\r\n                      <td>{{user.lastName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Documento</b>\r\n                      </td>\r\n                      <td>{{user.document}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Correo Electrónico</b>\r\n                      </td>\r\n                      <td>{{user.uid}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Télefono</b>\r\n                      </td>\r\n                      <td>{{user.phone}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Dirección</b>\r\n                      </td>\r\n                      <td>{{user.address}}</td>\r\n                    </tr>\r\n\r\n                  </table>\r\n                </mat-expansion-panel>\r\n                <mat-expansion-panel >\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      <b>Datos Empresariales</b>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <table class=\"col-md-12 personalData\" frame=\"void\" rules=\"rows\">\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Empresa</b>\r\n                      </td>\r\n                      <td>{{user.enterprise}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>NIT</b>\r\n                      </td>\r\n                      <td>{{user.nit}}</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td class=\"col-md-6\">\r\n                        <b>Rol en la compañia</b>\r\n                      </td>\r\n                      <td>{{user.role}}</td>\r\n                    </tr>\r\n\r\n                  </table>\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n            </form>\r\n          </mat-tab>  \r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_quotation_service__ = __webpack_require__("../../../../../src/app/services/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(authService, quotationService, notificationsService, modalService) {
        this.authService = authService;
        this.quotationService = quotationService;
        this.notificationsService = notificationsService;
        this.modalService = modalService;
    }
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.quotationSubscription.unsubscribe();
    };
    ProfileComponent.prototype.callQuotationService = function (toast) {
        var _this = this;
        this.quotationSubscription = this.quotationService.getQuotations(this.user.id)
            .subscribe(function (result) {
            //console.log("Refresh data...");
            //Only update view when its needed
            if (_this.quotations) {
                result = result.reverse();
                for (var i = 0, len = _this.quotations.length; i < len; i++) {
                    if (_this.quotations[i].id != result[i].id || _this.quotations[i].state != result[i].state) {
                        _this.quotations = result;
                        break;
                    }
                }
            }
            else {
                //when call first time
                _this.quotations = result.reverse();
                _this.notificationsService.remove(toast.id);
            }
        }, function (error) {
            // show error only first time, not when refresh data
            if (!_this.quotations) {
                var toast_1 = _this.notificationsService.error('Error ' + error.status, (error.status == 0) ? 'Por favor revise su conexión a Internet' : error.statusText);
            }
            //and try again the service 
            _this.callQuotationService(toast);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var toast = this.notificationsService.info('Cargando', 'Cargando Cotizaciones...', { timeOut: 0 });
        this.user = this.authService.getUser();
        console.log(this.user);
        this.callQuotationService(toast);
        this.userForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.firstName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.lastName, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            document: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.document, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.phone, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.address, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            enterprise: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.enterprise, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            nit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.nit, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            role: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.user.role, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
        });
    };
    ProfileComponent.prototype.openModal = function (template, quotation) {
        this.selectedQuotation = quotation;
        this.modalRef = this.modalService.show(template);
        this.displayQuotation = [];
        var compo = this;
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](this.selectedQuotation.originalData, function (value, key) {
            if (key != 'tipoproducto' &&
                key != 'pedidoid' &&
                key != 'fecha' &&
                key != 'estado' &&
                key != 'cantidad' &&
                key != 'familiaproducto' &&
                key != 'Pieza_1' &&
                key != 'Pieza_2' &&
                key != 'Pieza_3' &&
                key != 'Pieza_4') {
                compo.displayQuotation.push({ key: compo.formatPropertyName(key), value: compo.formatValueName(value, key, compo.selectedQuotation.originalData['tipoproducto']) });
            }
        });
    };
    ProfileComponent.prototype.updateUser = function (userForm) {
    };
    ProfileComponent.prototype.formatPropertyName = function (name) {
        if (name == 'Maquina_Reparar') {
            name = '¿Maquinaria nueva?';
        }
        else if (name == 'Maquina_Nueva') {
            name = '¿Necesita reparación?';
        }
        else if (name == 'Maquina_Estado') {
            name = '¿Maquinaria en buen estado?';
        }
        var re = /_/gi;
        name = name.replace(re, " ");
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.substr(1);
        if (name.charAt(0) == "¿") {
            name = '¿' + name.charAt(1).toUpperCase() + name.substr(2);
        }
        var words = name.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].length >= 4) {
                switch (words[i].substr(words[i].length - 4)) {
                    case "cion":
                        words[i] = words[i].substr(0, words[i].length - 4) + "ción";
                        break;
                    case "sion":
                        words[i] = words[i].substr(0, words[i].length - 4) + "sión";
                        break;
                }
            }
        }
        name = "";
        for (var i = 0; i < words.length; i++) {
            name += words[i];
            if (i < words.length - 1) {
                name += " ";
            }
        }
        return name;
    };
    ProfileComponent.prototype.formatValueName = function (value, property, typeOfProduct) {
        if (typeOfProduct == 'Puerta rápida') {
            if (property == "Color_Lona" || property == "Color_Perfiles") {
                switch (value) {
                    case "1":
                        value = "Amarillo";
                        break;
                    case "2":
                        value = "Azul";
                        break;
                    case "3":
                        value = "Azul claro";
                        break;
                    case "4":
                        value = "Blanco";
                        break;
                    case "5":
                        value = "Crema";
                        break;
                    case "6":
                        value = "Gris";
                        break;
                    case "7":
                        value = "Naranja";
                        break;
                    case "8":
                        value = "Negro";
                        break;
                    case "9":
                        value = "Rojo";
                        break;
                    case "10":
                        value = "Verde";
                        break;
                    case "11":
                        value = "Verde claro";
                        break;
                    case "1":
                        value = "Amarillo";
                        break;
                }
            }
            else if (property != "Ancho" || property != "Alto" || property != "Cantidad_de_Mandos_a_distancia") {
                switch (value) {
                    case "0":
                        value = "No";
                        break;
                    case "1":
                        value = "Si";
                        break;
                }
            }
        }
        else if (typeOfProduct == 'Sellos' || typeOfProduct == 'Abrigos') {
            if (property == "Color") {
                switch (value) {
                    case "1":
                        value = "Amarillo";
                        break;
                    case "2":
                        value = "Azul";
                        break;
                    case "3":
                        value = "Azul claro";
                        break;
                    case "4":
                        value = "Negro";
                        break;
                }
            }
            else if (property == "Exposicion_Aletas") {
                switch (value) {
                    case "1":
                        value = "10 cm";
                        break;
                    case "2":
                        value = "15 cm";
                        break;
                    case "3":
                        value = "20 cm";
                        break;
                }
            }
            else if (property == "Tipo_de_Pared") {
                switch (value) {
                    case "0":
                        value = "Ormigón";
                        break;
                    case "1":
                        value = "Panel Frigo";
                        break;
                }
            }
            else if (property == "Dimensiones") {
                switch (value) {
                    case "1":
                        value = "3200 mm x 3200 mm";
                        break;
                    case "2":
                        value = "3400 mm x 3200 mm";
                        break;
                    case "3":
                        value = "3400 mm x 3400 mm";
                        break;
                }
            }
        }
        else if (typeOfProduct == 'Maquinaria') {
            if (property == "Modelo_Maquina") {
                switch (value) {
                    case "1":
                        value = "Cargadora frontal";
                        break;
                    case "2":
                        value = "Retroexcavadora";
                        break;
                    case "3":
                        value = "Montacargas";
                        break;
                    case "4":
                        value = "Camioneta";
                        break;
                }
            }
            else if (property == "Maquina_Documentacion") {
            }
            else {
                switch (value) {
                    case "0":
                        value = "No";
                        break;
                    case "1":
                        value = "Si";
                        break;
                }
            }
        }
        value += this.formatSuffix(property);
        return value;
    };
    ProfileComponent.prototype.formatSuffix = function (property) {
        var suffix = '';
        if (property == 'Ancho' || property == 'Alto') {
            suffix = ' mm';
        }
        else if (property == 'Inclinacion') {
            suffix = '°';
        }
        return suffix;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/auth/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_quotation_service__["a" /* QuotationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_quotation_service__["a" /* QuotationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <h1>Nueva Cuenta</h1>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <ul class=\"breadcrumb\">\r\n          <li><a href=\"index.html\">Inicio</a>\r\n          </li>\r\n          <li>Registro</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2\">\r\n        <div class=\"box\">\r\n          <h2 class=\"text-uppercase\">Registrarse</h2>\r\n\r\n          <p class=\"lead\">Aún no te has registrado?</p>\r\n          <p>Al registrarse, podrá acceder a nuevos beneficios, descuentos y podrá llevar registro de las cotizaciones que realice en nuestra plataforma. El proceso de registro solo le llevará 1 minuto.</p>\r\n          <p class=\"text-muted\">\r\n            Si tiene alguna pregunta, por favor <a href=\"javascript: void(0);\" (click)=\"goToContact()\">contáctenos</a>, nuestro centro de servicio al cliente esta trabajando para usted 24/7.\r\n          </p>\r\n          <hr>\r\n\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm)\" novalidate>\r\n              <div class=\"col-xs-12\">\r\n                <h4>Información General</h4>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"firstname\">Nombres <sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"firstname\" formControlName=\"firstName\">\r\n                      <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"registerForm.controls.firstName.dirty && registerForm.controls.firstName.errors\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li *ngIf=\"registerForm.controls.firstName.hasError('required')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lastname\">Apellidos <sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastName\">\r\n                      <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"registerForm.controls.lastName.dirty && registerForm.controls.lastName.errors\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li *ngIf=\"registerForm.controls.lastName.hasError('required')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"address\">Dirección</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"address\" formControlName=\"address\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"phone\">Teléfono</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"phone\" formControlName=\"phone\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"document\">Documento de identidad<sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"document\" formControlName=\"document\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"email\">Correo electrónico <sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n                      <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"registerForm.controls.email.dirty &&  registerForm.controls.email.errors\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li *ngIf=\"registerForm.controls.email.hasError('required')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                          </li>\r\n                          <li *ngIf=\"registerForm.controls.email.hasError('email')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo debe contener un email valido!\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"password\">Contraseña <sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n                      <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"registerForm.controls.password.dirty && registerForm.controls.password.errors\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li *ngIf=\"registerForm.controls.password.hasError('required')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                          </li>\r\n                          <li *ngIf=\"!registerForm.controls.password.hasError('required') && registerForm.controls.password.hasError('minlength')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo debe contener minimo 8 caracteres!\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"confirmpassword\">Confirmar contraseña <sup><i class=\"text-danger fa fa-asterisk\"></i></sup></label>\r\n                      <input type=\"password\" class=\"form-control\" id=\"confirmpassword\" formControlName=\"confirmPassword\">\r\n                      <div class=\"alert alert-danger alert-sm border-flat\" *ngIf=\"registerForm.controls.confirmPassword.dirty && registerForm.controls.confirmPassword.errors\">\r\n                        <ul class=\"list-unstyled\">\r\n                          <li *ngIf=\"registerForm.controls.confirmPassword.hasError('required')\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                          </li>\r\n                          <li *ngIf=\"!registerForm.controls.confirmPassword.hasError('required') && registerForm.value.password != registerForm.value.confirmPassword\">\r\n                            <span class=\"fa fa-exclamation\"></span> Oops, los campos de contraseña deben coincidir!\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <h4>Información de Empresa</h4>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"enterprise\">Empresa</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"enterprise\" formControlName=\"enterprise\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"nit\">NIT</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"nit\" formControlName=\"nit\" [value]=\"registerForm.controls.enterprise.value ? registerForm.controls.nit.value : null\" [readonly]=\"!registerForm.controls.enterprise.value\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"rol\">Rol en la Compañia</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"role\" formControlName=\"role\" [value]=\"registerForm.controls.enterprise.value ? registerForm.controls.role.value : null\" [readonly]=\"!registerForm.controls.enterprise.value\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <button type=\"submit\" class=\"btn btn-template-main pull-right\" [disabled]=\"disabledForm()\"><i class=\"fa fa-user-md\"></i> {{ savingUser === true ? 'Registrando' : 'Registrarme' }}</button>\r\n                <span>Ya tienes una cuenta? <a href=\"javascript: void(0);\" (click)=\"goToLogin()\">Inicia sesión</a></span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n  </div>\r\n  <!-- /.container -->\r\n</div>\r\n<!-- /#content -->\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user_register__ = __webpack_require__("../../../../../src/app/models/user-register.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(router, authService, logger, notificationsService) {
        this.router = router;
        this.authService = authService;
        this.logger = logger;
        this.notificationsService = notificationsService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.savingUser = false;
        var password = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(8)]);
        var confirmPassword = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(password)]);
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            address: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', []),
            phone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', []),
            document: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].email]),
            password: password,
            confirmPassword: confirmPassword,
            enterprise: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', []),
            nit: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', []),
            role: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [])
        });
    };
    RegisterComponent.prototype.registerUser = function (form) {
        var _this = this;
        this.logger.info('Registering user:', form.value);
        this.savingUser = true;
        var registerData = new __WEBPACK_IMPORTED_MODULE_7__models_user_register__["a" /* UserRegister */](form.value);
        this.authService.register(registerData)
            .subscribe(function (result) {
            if (result.status === 'success') {
                _this.savingUser = false;
                var toast = _this.notificationsService.success('Usuario Creado', 'El usuario ha sido creado correctamente');
                _this.router.navigateByUrl('/');
            }
        }, function (error) {
            _this.savingUser = false;
            if (error.status === 422) {
                var responseData = JSON.parse(error.error);
                if (responseData.errors.email) {
                    var toast = _this.notificationsService.error('Error en Formulario', responseData.errors['full_messages'][0]);
                }
                else {
                    var toast = _this.notificationsService.error('Error en Formulario', 'Parece que han habido un error. Vuelva a intentarlo');
                }
            }
            else {
                var toast = _this.notificationsService.error('Error ' + error.status, error.statusText);
            }
        });
    };
    RegisterComponent.prototype.disabledForm = function () {
        return this.registerForm.invalid || this.savingUser;
    };
    RegisterComponent.prototype.goToLogin = function () {
        this.router.navigateByUrl('auth/login');
    };
    RegisterComponent.prototype.goToContact = function () {
        this.router.navigateByUrl('contact');
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reset/reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reset works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    return ResetComponent;
}());
ResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset',
        template: __webpack_require__("../../../../../src/app/auth/reset/reset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/reset/reset.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResetComponent);

//# sourceMappingURL=reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/errors/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/errors/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\" id=\"error-page\">\r\n      <div class=\"box\">\r\n        <p class=\"text-center\">\r\n          <a href=\"javascript: void(0);\" routerLink=\"/\">\r\n            <img src=\"assets/img/logo.png\" alt=\"Obaju template\">\r\n          </a>\r\n        </p>\r\n\r\n        <h3>Lo sentimos, esta página no esta disponible.</h3>\r\n        <h4 class=\"text-muted\">Error 404 - Página no encontrada</h4>\r\n\r\n        <p class=\"buttons\"><a href=\"javascript: void(0);\" routerLink=\"/\" class=\"btn btn-template-main\"><i class=\"fa fa-home\"></i> Ir al Inicio</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!-- /.col-sm-6 -->\r\n  </div>\r\n  <!-- /.container -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/errors/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/errors/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/errors/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/errors/server-error/server-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/errors/server-error/server-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\" id=\"error-page\">\r\n      <div class=\"box\">\r\n        <p class=\"text-center\">\r\n          <a href=\"javascript: void(0);\" routerLink=\"/\">\r\n            <img src=\"assets/img/logo.png\" alt=\"Obaju template\">\r\n          </a>\r\n        </p>\r\n\r\n        <h3>Lo sentimos, ha ocurrido un error.</h3>\r\n        <h4 class=\"text-muted\">Error 500 - Error de servidor</h4>\r\n\r\n        <p class=\"buttons\"><a href=\"javascript: void(0);\" routerLink=\"/\" class=\"btn btn-template-main\"><i class=\"fa fa-home\"></i> Ir al Inicio</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!-- /.col-sm-6 -->\r\n  </div>\r\n  <!-- /.container -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/errors/server-error/server-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerErrorComponent = (function () {
    function ServerErrorComponent() {
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    return ServerErrorComponent;
}());
ServerErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-server-error',
        template: __webpack_require__("../../../../../src/app/errors/server-error/server-error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/errors/server-error/server-error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServerErrorComponent);

//# sourceMappingURL=server-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isGuest()) {
            this.authService.setRedirectMessage('LOGIN_REQUIRED');
            this.router.navigateByUrl('/auth/login');
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/guest.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestGuard = (function () {
    function GuestGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    GuestGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuth()) {
            this.authService.setRedirectMessage('GUEST_REQUIRED');
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    return GuestGuard;
}());
GuestGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GuestGuard);

var _a, _b;
//# sourceMappingURL=guest.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/auth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var Auth = (function () {
    function Auth(uid, client, token, user) {
        this.uid = uid;
        this.client = client;
        this.token = token;
        this.user = user;
    }
    Auth.prototype.getUser = function () {
        return this.user;
    };
    Auth.prototype.setUser = function (user) {
        this.user = user;
    };
    Auth.prototype.check = function () {
        return this.uid && this.client && this.token && this.user;
    };
    Auth.prototype.getLogoutData = function () {
        return {
            uid: this.uid,
            client: this.client,
            'access-token': this.token
        };
    };
    return Auth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "../../../../../src/app/models/machinery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Machinery; });
var Machinery = (function () {
    function Machinery(data) {
        this.isModelEnabled = false;
        this.isNewEnabled = false;
        this.isStateEnabled = false;
        this.isRepairableEnabled = false;
        this.isDocumentationEnabled = false;
        if (data instanceof Object) {
            this.model = parseInt(data.Modelo_Maquina);
            this.latitude = parseFloat(data.Latitud.replace(',', '.'));
            this.longitude = parseFloat(data.Longitud.replace(',', '.'));
            this.isNew = data.Maquina_Nueva === "1" ? true : false;
            this.state = data.Maquina_Estado === "1" ? true : false;
            this.repairable = data.Maquina_Reparar === "1" ? true : false;
            this.documentation = parseInt(data.Maquina_Documentacion);
            this.piece1 = parseInt(data.Pieza_1);
            this.piece2 = parseInt(data.Pieza_2);
            this.piece3 = parseInt(data.Pieza_3);
            this.piece4 = parseInt(data.Pieza_4);
            this.originalData = data;
        }
    }
    Machinery.prototype.toArray = function () {
        return [
            { key: 'Modelo de maquinaria', value: this.formatModelMachinery(this.model) },
            { key: 'Latitud', value: this.latitude },
            { key: 'Longitud', value: this.longitude },
            { key: '¿Nueva?', value: this.isNew ? 'Si' : 'No' },
            { key: '¿En buen estado?', value: this.state ? 'Si' : 'No' },
            { key: '¿Necesita repararse?', value: this.repairable ? 'Si' : 'No' },
            { key: 'Tipo de documentación', value: this.documentation },
        ];
    };
    Machinery.prototype.formatModelMachinery = function (value) {
        switch (value) {
            case 1:
                value = "Cargadora frontal";
                break;
            case 2:
                value = "Retroexcavadora";
                break;
            case 3:
                value = "Montacargas";
                break;
            case 4:
                value = "Camioneta";
                break;
        }
        return value;
    };
    return Machinery;
}());

//# sourceMappingURL=machinery.js.map

/***/ }),

/***/ "../../../../../src/app/models/product-property.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProperty; });
var ProductProperty = (function () {
    function ProductProperty(data) {
        this.value = null;
        if (data instanceof Object) {
            this.id = data.id;
            this.name = data.name;
            this.type = data.typefeature;
            this.values = data.range;
        }
    }
    return ProductProperty;
}());

//# sourceMappingURL=product-property.js.map

/***/ }),

/***/ "../../../../../src/app/models/product-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductType; });
var ProductType = (function () {
    function ProductType(data) {
        if (data instanceof Object) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.created_at = new Date(data.created_at);
            this.updated_at = new Date(data.updated_at);
        }
    }
    return ProductType;
}());

//# sourceMappingURL=product-type.js.map

/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Product = (function () {
    function Product(data, properties) {
        if (properties === void 0) { properties = null; }
        if (data instanceof Object) {
            this.id = data.id;
            this.name = data.name;
            this.productType = data.product_id;
            this.created_at = new Date(data.created_at);
            this.updated_at = new Date(data.updated_at);
        }
        if (properties !== null) {
            this.properties = properties;
        }
    }
    Product.prototype.getParamsJSON = function () {
        var params = {};
        __WEBPACK_IMPORTED_MODULE_0_lodash__["forEach"](this.properties, function (property, name) {
            params[property.id] = property.value;
        });
        return params;
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/models/quotation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quotation; });
var Quotation = (function () {
    function Quotation(data, user, product) {
        if (user === void 0) { user = null; }
        if (product === void 0) { product = null; }
        if (data instanceof Object) {
            if (data.pedidoid) {
                var date = data.fecha ? new Date(data.fecha) : null;
                this.id = data.pedidoid ? data.pedidoid : null;
                this.productId = data.productoid ? data.productoid : null;
                this.typeProduct = data.tipoproducto ? data.tipoproducto : null;
                this.state = data.estado ? data.estado : null;
                this.quantity = data.cantidad ? data.cantidad : null;
                this.date = date ? date : null;
            }
            else {
                var date = data.date ? data.date : null;
                this.id = data.id ? data.id : null;
                this.productId = data.productId ? data.productId : null;
                this.quantity = data.quantity ? data.quantity : null;
                this.userId = data.userId ? data.userId : null;
                this.state = data.state ? data.state : "1";
                this.date = date ? date : null;
                this.createdAt = data.createdAt ? new Date(data.createdAt) : null;
                this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : null;
            }
        }
        if (user) {
            this.user = user;
        }
        if (product) {
            this.product = product;
        }
    }
    Quotation.prototype.toJSON = function () {
        var strDate = '';
        var params = this.product ? this.product.getParamsJSON() : {};
        if (this.date) {
            var year = this.date.getFullYear();
            var month = this.date.getMonth() < 10 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1;
            var day = this.date.getDate() < 10 ? "0" + this.date.getDate() : this.date.getDate();
            var hour = this.date.getHours() < 10 ? "0" + this.date.getHours() : this.date.getHours();
            var minutes = this.date.getMinutes() < 10 ? "0" + this.date.getMinutes() : this.date.getMinutes();
            var seconds = this.date.getSeconds() < 10 ? "0" + this.date.getSeconds() : this.date.getSeconds();
            strDate = "" + year + month + day + hour + minutes + seconds;
        }
        return {
            user_id: this.user ? this.user.id : this.userId,
            quantity: this.quantity,
            product_id: this.product.productType,
            date: strDate,
            params: params
        };
    };
    return Quotation;
}());

//# sourceMappingURL=quotation.js.map

/***/ }),

/***/ "../../../../../src/app/models/user-register.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegister; });
var UserRegister = (function () {
    function UserRegister(data) {
        if (data instanceof Object) {
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.address = data.address;
            this.phone = data.phone;
            this.document = data.document;
            this.email = data.email;
            this.password = data.password;
            this.confirmPassword = data.confirmPassword;
            this.enterprise = data.enterprise;
            if (data.enterprise) {
                this.nit = data.nit;
                this.role = data.role;
            }
        }
    }
    UserRegister.prototype.toJSON = function () {
        return {
            firstname: this.firstName,
            lastname: this.lastName,
            address: this.address,
            phone: this.phone,
            document: this.document,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmPassword,
            enterprise: this.enterprise,
            nit: this.nit,
            role: this.role
        };
    };
    return UserRegister;
}());

//# sourceMappingURL=user-register.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(data) {
        if (data instanceof Object) {
            this.id = data.id;
            this.firstName = data.firstName || data.firstname;
            this.lastName = data.lastName || data.lastname;
            this.document = data.document;
            this.address = data.address;
            this.phone = data.phone;
            this.email = data.email;
            this.enterprise = data.enterprise;
            this.provider = data.provider;
            this.uid = data.uid;
            this.nit = data.nit;
            this.role = data.role;
        }
    }
    User.prototype.toJSON = function () {
        return {
            id: this.id,
            firstname: this.firstName,
            lastname: this.lastName,
            document: this.document,
            address: this.address,
            phone: this.phone,
            email: this.email,
            enterprise: this.enterprise,
            nit: this.nit,
            role: this.role,
            provider: this.provider,
            uid: this.uid
        };
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"heading-breadcrumbs\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <h1>Contacto</h1>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <ul class=\"breadcrumb\">\r\n          <li><a href=\"#\">Inicio</a>\r\n          </li>\r\n          <li>Contacto</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"content\">\r\n  <div class=\"container\" id=\"contact\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <section>\r\n          <div class=\"heading\">\r\n            <h2>Contáctese con nosotros</h2>\r\n          </div>\r\n\r\n          <p class=\"lead\">Quieres saber más acerca de nosotros? Tiene algun tipo de problema con nuestros productos? Cualquier duda, inquietud, queja o comentario serán atendidos con prontitud.</p>\r\n          <p>Sientase libre de contactarnos, nuestro centro de servicio al cliente esta trabajando 24/7.</p>\r\n\r\n          <div class=\"heading\">\r\n            <h3>Formulario de contacto</h3>\r\n          </div>\r\n          <form>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"firstname\">Nombre</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"lastname\">Apellido</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lastname\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\">Correo Electrónico</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"subject\">Asunto</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"subject\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"message\">Mensaje</label>\r\n                  <textarea id=\"message\" rows=\"5\" class=\"form-control vertical-textarea\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 text-center\">\r\n                <button type=\"submit\" class=\"btn btn-template-main\"><i class=\"fa fa-envelope-o\"></i> Enviar Mensaje</button>\r\n              </div>\r\n            </div>\r\n            <!-- /.row -->\r\n          </form>\r\n        </section>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n\r\n        <section>\r\n\r\n          <h3 class=\"text-uppercase\">Ubicación</h3>\r\n\r\n          <p>\r\n            Computación Gráfica Ltd.\r\n            <br>Universidad Nacional de Colombia\r\n            <br>Sede Bogotá\r\n            <br>Carrera 45 # 26-85\r\n            <br>Bogotá D.C.\r\n            <br>\r\n            <strong>Colombia</strong>\r\n          </p>\r\n\r\n          <h3 class=\"text-uppercase\">Soporte Técnico</h3>\r\n\r\n          <p class=\"text-muted\">Llamenos o escribanos un correo electrónico.</p>\r\n          <ul>\r\n            <li><strong>Call center: </strong> +57 322 942 25 67</li>\r\n            <li><strong>Correo electrónico: </strong><a href=\"mailto:contact@cg2017-2.com\">contact@cg2017-2.com</a></li>\r\n            <li><strong>Más información: </strong><a href=\"mailto:info@cg2017-2.com\">info@cg2017-2.com</a></li>\r\n          </ul>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <!-- /.row -->\r\n  </div>\r\n  <!-- /#contact.container -->\r\n</div>\r\n<!-- /#content -->\r\n\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [draggable]=\"false\" [disableDoubleClickZoom]=\"true\" [streetViewControl]=\"false\" [zoomControl]=\"false\" [scrollwheel]=\"false\" [mapDraggable]=\"false\" [zoom]=\"14\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 4.639177;
        this.lng = -74.082097;
        this.zoom = 5;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  color: aliceblue;\r\n}\r\n\r\n.size-image {\r\n  width: 70vh;\r\n  height: auto;\r\n}\r\n\r\n.carousel {\r\n  background: #808080;\r\n  margin-top: 20px;\r\n}\r\n\r\n.carousel .item {\r\n  min-height: 280px;\r\n  /* Prevent carousel from being distorted if for some reason image doesn't load */\r\n}\r\n\r\n.carousel .item img {\r\n  margin: 0 auto;\r\n  max-width: 400px;\r\n  /* Align slide image horizontally center */\r\n}\r\n\r\n.bs-example {\r\n  margin: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"no-mb\">\r\n  <!-- *** JUMBOTRON ***\r\n_________________________________________________________ -->\r\n\r\n  <div class=\"jumbotron\">\r\n\r\n    <div class=\"dark-mask\"></div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row mb-small\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <h1>SOMOS CGSTORE</h1>\r\n          <h2>CAD INSTANTANEO!</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 mb-small\">\r\n          <img class=\"img-responsive\" src=\"assets/img/Hello.png\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 text-center-xs\">\r\n          <p class=\"text-uppercase\">Diseños a la medida en instantes.\r\n            <br />Planos automatizados en todo momento.\r\n            <br />Analisis de maquinaria detallado.</p>\r\n          <p>Nuestros modelos incluyen todo lo necesario\r\n            <br />para que decidas comprarlos.</p>\r\n          <p><a (click)=\"goToQuotation()\" class=\"scroll-to btn btn-template-transparent-black\">Cotiza Ahora!</a>\r\n          </p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- *** JUMBOTRON END *** -->\r\n</section>\r\n\r\n<section class=\"bar background-gray no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2 class=\"text-uppercase\">RELLENA EL FORMULARIO</h2>\r\n        <p class=\"lead mb-small\">Personaliza tu producto</p>\r\n        <p class=\"mb-small\">Puedes personalizar tu producto en diferentes aspectos como lo son <strong>color, dimensiones y cantidad de ciertos articulos</strong>. Para que podamos retornarte el resultado de tu cotizacion es necesario que te <strong>registres</strong> en\r\n          nuestra base de datos.\r\n        </p>\r\n\r\n      </div>\r\n      <div class=\"col-md-6 text-center\">\r\n        <img src=\"assets/img/template-easy-customize.png\" alt=\"\" class=\"img-responsive\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"bar no-mb color-white padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-center\">\r\n        <img src=\"assets/img/template-easy-code.png\" alt=\"\" class=\"img-responsive\">\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <h2 class=\"text-uppercase\">Espera unos segundos </h2>\r\n        <p class=\"lead mb-small\">Nuestro sistema automatizado iniciara tan pronto pueda a resolver tu solicitud</p>\r\n        <img src=\"http://gifgifs.com/animations/computers-technology/gears/Gears_spin.gif\" border=0 />\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"bar background-gray no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2 class=\"text-uppercase\">Revisa tu bandeja de entrada</h2>\r\n        <p class=\"mb-small\">Cuando nuestro sistema termina de procesar tu solicitud te enviara un correo electronico con la cotización al correo con el cual estas registrado.Por tanto usa un correo valido para que posteriormente puedas visualizar la cotización.\r\n          <strong>Si no estas registrado sigue el boton de abajo.</strong></p>\r\n\r\n        <p> <a (click)=\"goToRegister()\" class=\"btn btn-template-main \">Registrate Ahora!</a>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6 text-center \">\r\n        <img src=\"assets/img/template-easy-customize2.png \" alt=\" \" class=\"img-responsive \">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<div class=\"row same-height-row bar background-gray no-mb padding-big text-center-sm \">\r\n  <div class=\"heading text-center \">\r\n    <h1>Los Equipos </h1>\r\n  </div>\r\n  <div class=\"container \">\r\n    <div class=\"col-md-4 \">\r\n      <div class=\"box-simple box-dark same-height \" style=\"height: 319px; \">\r\n        <div class=\"icon \">\r\n          <i class=\"fa fa-desktop \"></i>\r\n        </div>\r\n        <h3>Webdesign</h3>\r\n        <p class=\"text-justify \">Puedes acceder a nuestros productos desde la internet debido al trabajo de este equipo, ellos son los encargados de generar posibilitar que entiendas nuestros productos por tanto si tienes sugerencias o dudas sobre su trabajo no dudes en enviarnos\r\n          un email.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 \">\r\n      <div class=\"box-simple box-dark same-height \" style=\"height: 319px; \">\r\n        <div class=\"icon \">\r\n          <i class=\"fa fa-print \"></i>\r\n        </div>\r\n        <h3>Automation</h3>\r\n        <p class=\"text-justify \">Al parecer hacemos magia,pero en realidad es necesario procesar cada una de las solicitudes que nos generas, juntarlas en un documento y responderte lo mas pronto posible.Este equipo realiza esas actividades asi que si tienes dudas o sugerencias\r\n          acerca de su trabajo con gusto seran atendidas y en la medida de lo posible implementadas.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 \">\r\n      <div class=\"box-simple box-dark same-height \" style=\"height: 319px; \">\r\n        <div class=\"icon \">\r\n          <i class=\"fa fa-cogs \" aria-hidden=\"true \"></i>\r\n        </div>\r\n        <h3>Products</h3>\r\n        <p class=\"text-justify \">Los modelos y diseños personalizados son creados en estos equipos, puedes conocer que genera ca da uno de ellos en la sección de productos.<strong>En la parte superior seleccion un equipo y en cada uno de ellos se te describe el producto que podras recibir.</strong></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"bs-example\">\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-interval=\"1500 \" data-ride=\"carousel \">\r\n      <!-- Carousel indicators -->\r\n\r\n      <!-- Wrapper for carousel items -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"active item\">\r\n          <img src=\"https://jaxenter.com/wp-content/uploads/2016/12/angular.png \" alt=\"First Slide\" max-width=\"400px\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>Angular 4</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img class=\"size-image \" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png \" alt=\"Second Slide \" max-width=\"400px\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>El lenguaje de programación simple y libre.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"https://lh3.googleusercontent.com/Dq-mZ5mmdE6aFPeD61DNlVTwYSI75UwHBYDq_BxBZOMSzCBnQ5OCC4-LjfP42tDlyw=w300 \" alt=\"Third Slide \" max-width=\"400px\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>La herramienta de comunicación en equipo.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"https://cdn-images-1.medium.com/max/440/1*-oIlwIWlt0BDN4b5a9rRCQ.jpeg\" alt=\"Ruby\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>La simplicidad en el desarrollo de apps del mundo real.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"https://spin.atomicobject.com/wp-content/uploads/20171003153036/github-logo.png\" alt=\"Github\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>Donde se hace el codigo, nosotros estamos ahí.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"http://static1.squarespace.com/static/5553aa15e4b0f175fd67a77e/t/559ad3d7e4b025eeecf8c44c/1436210136496/auto_desk_inventor\" alt=\"Inventor\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>Poderosas herramientas nos acompañan.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"https://upload.wikimedia.org/wikipedia/zh/thumb/e/ec/Heroku_logo.svg/800px-Heroku_logo.svg.png\" alt=\"Heroku\">\r\n          <div class=\"carousel-caption \">\r\n            <h3>Nuestras bases de datos corren acá.</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Carousel controls -->\r\n      <a class=\"carousel-control left \" href=\"#myCarousel\" data-slide=\"prev\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        </a>\r\n      <a class=\"carousel-control right \" href=\"#myCarousel\" data-slide=\"next\">\r\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        </a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <section class=\"bar background-image-fixed-2 no-mb color-white text-center \">\r\n    <div class=\"dark-mask \"></div>\r\n    <div class=\"container \">\r\n      <div class=\"row \">\r\n        <div class=\"col-md-12 \">\r\n          <div class=\"icon icon-lg \"><i class=\"fa fa-file-code-o \"></i>\r\n          </div>\r\n          <h1>Deseas saber algo mas?</h1>\r\n          <p class=\"lead \">Dirigete a la sección de contacto y dejanos un mensaje.</p>\r\n          <p class=\"text-center \">\r\n            <a (click)=\"goToContact()\" class=\"btn btn-template-transparent-black btn-lg \">Contacto</a>\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, authService, notificationsService) {
        this.router = router;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var redirectMessage = this.authService.getRedirectMessage();
        if (redirectMessage == 'GUEST_REQUIRED') {
            var toast = this.notificationsService.warn('No se puede acceder a la ruta', 'Debe cerrar su cuenta primero');
            this.authService.unsetRedirectMessage();
        }
    };
    HomeComponent.prototype.goToQuotation = function () {
        this.router.navigateByUrl('quotation');
    };
    HomeComponent.prototype.goToRegister = function () {
        this.router.navigateByUrl('auth/register');
    };
    HomeComponent.prototype.goToContact = function () {
        this.router.navigateByUrl('contact');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__yaga_leaflet_ng2__ = __webpack_require__("../../../../@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__yaga_leaflet_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__yaga_leaflet_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_material_module__ = __webpack_require__("../../../../../src/app/pages/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_doors_doors_component__ = __webpack_require__("../../../../../src/app/pages/products/doors/doors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_machinery_machinery_component__ = __webpack_require__("../../../../../src/app/pages/products/machinery/machinery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_legos_legos_component__ = __webpack_require__("../../../../../src/app/pages/products/legos/legos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_component__ = __webpack_require__("../../../../../src/app/pages/quotation/quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__quotation_quotation_form_quotation_form_component__ = __webpack_require__("../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quotation_draw_door_draw_door_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-door/draw-door.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__quotation_draw_lego_draw_lego_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quotation_draw_muelle_draw_muelle_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quotation_draw_abrigo_draw_abrigo_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngvas__ = __webpack_require__("../../../../ngvas/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ngvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_owl_carousel__["OwlModule"],
            __WEBPACK_IMPORTED_MODULE_20_ngvas__["NgvasModule"],
            __WEBPACK_IMPORTED_MODULE_7__yaga_leaflet_ng2__["YagaModule"],
            __WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCJgE_ZRBAXSFQb-ilbeU7OSqo74wUKUdk'
            }),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_11__products_doors_doors_component__["a" /* DoorsComponent */], __WEBPACK_IMPORTED_MODULE_12__products_machinery_machinery_component__["a" /* MachineryComponent */], __WEBPACK_IMPORTED_MODULE_13__products_legos_legos_component__["a" /* LegosComponent */], __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_component__["a" /* QuotationComponent */], __WEBPACK_IMPORTED_MODULE_15__quotation_quotation_form_quotation_form_component__["a" /* QuotationFormComponent */], __WEBPACK_IMPORTED_MODULE_16__quotation_draw_door_draw_door_component__["a" /* DrawDoorComponent */], __WEBPACK_IMPORTED_MODULE_17__quotation_draw_lego_draw_lego_component__["a" /* DrawLegoComponent */], __WEBPACK_IMPORTED_MODULE_19__quotation_draw_abrigo_draw_abrigo_component__["a" /* DrawAbrigoComponent */], __WEBPACK_IMPORTED_MODULE_18__quotation_draw_muelle_draw_muelle_component__["a" /* DrawMuelleComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_11__products_doors_doors_component__["a" /* DoorsComponent */], __WEBPACK_IMPORTED_MODULE_12__products_machinery_machinery_component__["a" /* MachineryComponent */], __WEBPACK_IMPORTED_MODULE_13__products_legos_legos_component__["a" /* LegosComponent */], __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_component__["a" /* QuotationComponent */], __WEBPACK_IMPORTED_MODULE_15__quotation_quotation_form_quotation_form_component__["a" /* QuotationFormComponent */]],
        providers: []
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/doors/doors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* your styles go here */\r\n\r\n.jumbotron {\r\n  background: url('http://www.designals.net/wp-content/uploads/2012/12/texturas-metal-25.jpg') center center repeat;\r\n  background-size: cover;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .vertical_center_col {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n}\r\n\r\n.vertical_center_col {\r\n  text-align: center;\r\n}\r\n\r\n.list_custom {\r\n  font-size: 21px;\r\n  font-weight: 400\r\n}\r\n\r\n@media (max-width: 991px) and (min-width: 768px) {\r\n  .vertical_center_col {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n.custom_dark_mask {\r\n  background: #6d4e4e !important;\r\n}\r\n\r\n.nav-tabs {\r\n  border-bottom: 2px solid #DDD !important;\r\n  text-align: center !important;\r\n}\r\n\r\n.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\r\n  border-width: 0;\r\n  border: none !important;\r\n}\r\n\r\n.nav-tabs>li>a {\r\n  border: none !important;\r\n  color: #666 !important;\r\n}\r\n\r\n.nav-tabs>li.active>a, .nav-tabs>li>a:hover {\r\n  border: none;\r\n  color: #4285F4 !important;\r\n  background: transparent;\r\n}\r\n\r\n.nav-tabs>li>a::after {\r\n  content: \"\";\r\n  background: #4285F4;\r\n  height: 2px;\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0px;\r\n  bottom: -1px;\r\n  transition: all 250ms ease 0s;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n\r\n.nav-tabs>li.active>a::after, .nav-tabs>li:hover>a::after {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.nav-tabs>li {\r\n  display: inline-block !important;\r\n  float: none !important;\r\n}\r\n\r\n.tab-nav>li>a::after {\r\n  background: #21527d none repeat scroll 0% 0%;\r\n  color: #fff;\r\n}\r\n\r\n.tab-pane {\r\n  padding: 15px 0 0 0;\r\n}\r\n\r\n.tab-content {\r\n  padding: 0px !important\r\n}\r\n\r\n.card {\r\n  display: block;\r\n  background: #FFF none repeat scroll 0% 0%;\r\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.img-responsive {\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products/doors/doors.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Nav tabs -->\r\n<div class=\"card\t\">\r\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n    <li role=\"presentation\" class=\"active\"><a href=\"#sello_muelle\" aria-controls=\"sello_muelle\" role=\"tab\" data-toggle=\"tab\">Sellos para Muelles de carga</a>\r\n    </li>\r\n    <li role=\"presentation\"><a href=\"#puerta_rapida\" aria-controls=\"puerta_rapida\" role=\"tab\" data-toggle=\"tab\">Puerta Rápida Enrollable</a></li>\r\n    <li role=\"presentation\"><a href=\"#abrigo_muelle\" aria-controls=\"abrigo_muelle\" role=\"tab\" data-toggle=\"tab\">Abrigos para Muelles de carga</a></li>\r\n\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"sello_muelle\">\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row mb-small\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1>SELLO PARA MUELLES DE CARGA</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_0.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">¿Por qué usarlo?</h2>\r\n                <p class=\"mb-small\">Ofrece el sellado óptimo entre la parte trasera del camión y las paredes alrededor del vano de la puerta para garantizar la separación de ambientes, entre la intemperie, el interior del camión y el área de trabajo. El proceso se realiza\r\n                  automáticamente a medida que el camión presiona el sello y se acopla al muelle de carga.</p>\r\n                <br>\r\n                <p class=\"mb-small\">Los Sellos para muelle de carga son elementos básicos y de gran utilidad en los patios de maniobra. Éstos se pueden instalar en centros de distribución nuevos o adaptar en las plantas existentes.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">BENEFICIOS</h1>\r\n              </div>\r\n              </div>\r\n              <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;  Los sellos para muelle evitan fugas de temperatura, entrada de aire, agua, polvo, insectos, etc. </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Son útiles para proteger y reducir hurto durante la carga y descarga de materiales o productos. </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;  Reduce las pérdidas energéticas gracias a la separación efectiva de ambientes. </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Protege el producto y al personal de condiciones ambientales. </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">PARTES</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\"  >\r\n                  <li> ■ &nbsp;  2 Postes Verticales </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  1 Travesaño Horizontal (Parte superior) </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  1 Travesaño Horizontal con topes internos (Parte inferior) </li>\r\n                  <br>\r\n                  <li> ■ &nbsp; 1 Lona de Recubrimiento Superior </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Cubierta removible con elementos de fijación de alta calidad </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n                            <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_2.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">ALETAS DE DESGASTE</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n                              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_3.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\">Para aumentar la vida útil de los sellos, se implementan aletas superpuestas a lo largo de las columnas aterales. Estas aletas absorben la abrasión que se produce en áreas de alto desgaste protegiendo las almohadillas del sello.</p>\r\n                <br>\r\n                <p class=\"mb-small\">Las solapas de desgaste se encuentran disponibles con una exposición de:</p>\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li> ■ &nbsp; 10 cm </li>\r\n                  <li> ■ &nbsp; 15 cm </li>\r\n                  <li> ■ &nbsp; 20 cm </li>\r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">COMPENSACIÓN DE DESNIVEL</h1>\r\n                <p class=\"mb-small\">La fabricación de cada sello para muelle de carga, se realiza especifícamente para satisfacer las condiciones de inclinación o declinación de la zona.</p>\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_4.png\" alt=\"\" class=\"img-responsive\" style=\"display: inline;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">CUBIERTA REMOVIBLE</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\">Las aletas de desgaste se encuentran dispuestas en una cubierta removible; con elementos de fijación de alta calidad. Lo cual permite el reemplazo de partes por daño o desgaste, sin realizar el desmonte del sello.</p>\r\n              </div>\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_5.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">ACCESORIOS DE INSTALACIÓN</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_6.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\">La instalación de los sellos para muelles de carga se realiza de forma sencilla y rápida, ya que cuenta con accesorios que la facilitan y brindan un acabado estético de calidad.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">GAMA DE COLORES</h1>\r\n                <p class=\"mb-small\">La fabricación de los sellos se realiza con cada combinación posible que se desee, de dos colores.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <img src=\"assets/img/sellos_para_muelles_de_carga/sellos_para_muelles_de_carga_7.png\" alt=\"\" class=\"img-responsive\" >\r\n                <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- *** JUMBOTRON END *** -->\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">CARACTERÍSTICAS TÉCNICAS DE LA LONA</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Material Lona:</strong> &nbsp; Resina Plástica de PVC </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Peso: </strong> &nbsp;900g/m2</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Resistencia al Rasgado: </strong> &nbsp;(Largo) 34 kg/cm - (Ancho) 34 kg/cm\r\n          </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación: </strong> &nbsp;28%</li>               \r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"puerta_rapida\">\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row mb-small\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1>PUERTA RÁPIDA ENROLLABLE</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_1.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">¿Por qué usarlo?</h2>\r\n                <p class=\"mb-small\">En operaciones que requieren gran cantidad de flujo de personal, maquinaria y mercancía y altos niveles de seguridad en los pasajes, la Puerta Rápida Enrollable es la solución perfecta.</p>\r\n                <br>\r\n                <p class=\"mb-small\">Ofrece una excelente resistencia en distintos escenarios de operación y una alta velocidad de apertura que permite un ritmo de trabajo sin interrupción. Es ideal para la separación de espacios con diferentes características y aplicaciones\r\n                  como mantener la cadena de frío, protección de vientos, amortiguación de ruidos, almacenes, muelles de carga, hospitales entre otros. Garantiza seguridad para la mercancía, el personal y la maquinaria en ránsito.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h1 class=\"text-uppercase\">LONA</h1>\r\n                <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_2.png\" alt=\"\" class=\"img-responsive\">\r\n                <p class=\"mb-small\">Compuesta de PVC flexible de alta calidad y resistencia por ambas caras, con un peso de 900gr/m2. Sus principales características entorno a la industria y la seguridad son:</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;  Impermeabilidad</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Sellabilidad</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Resistencia a Rayos Solares UV</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Protección Biosida</li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;  Ignífuga</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;   Resistencia a Diversos productos - Sellabilidad químicos</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;   Mirillas en PVC Cristal</li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h1 class=\"text-uppercase\">CONTROL</h1>\r\n                <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_3.png\" alt=\"\" class=\"img-responsive\">\r\n                <p class=\"mb-small\">La Puerta Rápida Enrollable cuenta con distintos sistemas de control</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">Pulsadores</h2>\r\n                <p class=\"mb-small\">El sistema de control se instala a un costado de la puerta y constituye pulsadores para:</p>\r\n                  <p class=\"list_custom\"> ■ &nbsp;  Subir</p>\r\n                  <p class=\"list_custom\"> ■ &nbsp;  Bajar</p>\r\n                  <p class=\"list_custom\"> ■ &nbsp;  Detener</p>\r\n                  <p class=\"list_custom\"> ■ &nbsp;  Hongo de seguridad </p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">Manual</h2>\r\n                <p class=\"mb-small\">Se encuentra acoplado directamente al motor que controla la puerta y es accionado implementando una llave bristol 3/16”, para enrollar o desenrollar el telón.</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">Automático</h2>\r\n                <p class=\"mb-small\">Posee un sensor de presencia en el cabezal de la puerta para personal y maquinaria, que permite la apertura de la misma. Es opcional colocarlo en ambos lados de la puerta.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h1 class=\"text-uppercase\">SEGURIDAD</h1>\r\n                <p class=\"mb-small\">Se implementan dos sistemas de seguridad estándar para garantizar la seguridad del personal, mercancía y maquinaria:</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">Fotocélulas</h2>\r\n                <p class=\"mb-small\">Si se interrumpe el haz que emiten las fotocélulas durante el cierre, la puerta se detendrá y volverá a abrirse completamente.</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">Barra de Seguridad</h2>\r\n                <p class=\"mb-small\"> Se encuentra ubicada en la parte inferior del telón (borde). En caso de chocar con algún obstáculo durante el cierre, la puerta se detendrá y  olverá a abrirse completamente.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h1 class=\"text-uppercase\">ESTRUCTURA</h1>\r\n                <p class=\"mb-small\">Guías laterales y cabezal en aluminio anodizado o lacado, que se fija a la pared con tornillos en acero galvanizado o inoxidable.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h1 class=\"text-uppercase\">FUNCIONAMIENTO</h1>\r\n                \r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\"> ■ &nbsp; El sistema de apertura y cierre de la puerta cuenta con finales de carrera mecánicos rotativos, lo que garantiza un posicionamiento correcto y seguro en todo momento del telón, evitando errores con detenciones inesperadas de seguridad o falta de suministro de energía eléctrica.</p>\r\n                <p class=\"mb-small\"> ■ &nbsp; El tiempo de espera para el cierre automático es ajustable en el panel de control, dispuesto a un costado de la puerta.\r\n                </p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                    <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_4.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12\">\r\n                <h2 class=\"text-uppercase\">ACCESORIOS</h2>\r\n                <p class=\"mb-small\">Las solapas de desgaste se encuentran disponibles con una exposición de:</p>\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp;Interruptor de Tirador:</strong> &nbsp;  La puerta se abre cuando se hala de una cuerda situada encima de ésta. </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Mando a Distancia: </strong> &nbsp;Capacidad de 15 mandos por puerta a una distancia máx de 152 m</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Fotocélulas: </strong> &nbsp;La puerta se abre cuando se interrumpe el haz de las fotocélulas, situadas frente a la puerta.\r\n        </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp;Apertura / Cierre parcial: </strong> &nbsp;(Apertura parcial para paso peatonal y apertura completa para paso de maquinaria y/o mercancía)</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp;Apertura / Cierre mientras se mantiene el pulsador</strong></li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Luces de Aviso: </strong> &nbsp;Indica el estado actual de la puerta, dependiendo del color y permanencia de la luz (intermitencia o no)\r\n        </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp;Señal Acústica : </strong> &nbsp;Se emite un sonido durante el movimiento de la puerta.</li>                \r\n                </ul>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_5.png\" alt=\"\" class=\"img-responsive\">\r\n                 <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_6.png\" alt=\"\" class=\"img-responsive\">\r\n                  <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_7.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h2 class=\"text-uppercase\">GAMA DE COLORES</h2>\r\n                <img src=\"assets/img/puerta_rapida_enrollable/puerta_rapida_enrollable_8.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">CARACTERÍSTICAS TÉCNICAS DE LA LONA</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Velocidad:</strong> &nbsp;  Apertura y cierre constante, desde 0,8 m/s hasta 1,2m/s </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Vida Útil:  </strong> &nbsp;1 000 000 de ciclos.</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Material Lona:  </strong> &nbsp; Resina Plástica de PVC\r\n        </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Peso Lona: </strong> &nbsp;900g/m2</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Resistencia al Rasgado:</strong> &nbsp; (Largo) 34 kg/cm - (Ancho) 34 kg/cm</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación:</strong> &nbsp;28%</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp;Material Transparente:  </strong> &nbsp; 100% Polyester\r\n        </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Peso:  </strong> &nbsp; 115g/m2li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Resistencia al Rasgado:</strong> &nbsp; (Largo) 80 kg/25mm - (Ancho) 74 kg/25mm. </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación:  </strong> &nbsp; 32%</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Motor:  </strong> &nbsp;  220 VAC - 3 PH - 60 Hz\r\n      </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Sensores:  </strong> &nbsp;12 - 24 VDC</li>                                \r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"abrigo_muelle\">\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row mb-small\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1>ABRIGOS PARA MUELLES DE CARGA</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/abrigos_para_muelles_de_carga/abrigos_para_muelles_de_carga_0.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <h2 class=\"text-uppercase\">¿Por qué usarlo?</h2>\r\n                <p class=\"mb-small\">Diseñados para garantizar el mayor aislamiento y separación de ambientes en el proceso de cargue y descargue en muelles de carga; en cuanto a la intemperie, el interior del área de trabajo y la mercancía. Se acoplan a las distintas dimensiones de camiones y contenedores de carga.</p>\r\n                <br>\r\n                <p class=\"mb-small\">Los Abrigos para muelle son elementos básicos y de gran utilidad en los patios de maniobra. Éstos se pueden instalar en centros de distribución nuevos o adaptar en las plantas existentes.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">BENEFICIOS</h1>\r\n              </div>\r\n              </div>\r\n              <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;   Evitan fugas de temperatura, entrada de aire, agua, polvo, insectos, etc.</li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Son útiles para proteger y reducir hurto durante la carga y descarga de materiales o productos. </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\" >\r\n                  <li> ■ &nbsp;  Reduce las pérdidas energéticas gracias a la separación efectiva de ambientes. </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  Protege el producto y al personal de condiciones ambientales. </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">PARTES</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n\r\n              <div class=\"col-md-6\">\r\n                <ul type=\"none\" class=\"list_custom\"  >\r\n                  <li> ■ &nbsp;  (1) Lona Superior </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  (2) Lonas Laterales (Parte superior) </li>\r\n                  <br>\r\n                  <li> ■ &nbsp;  (3) Bandas verticales para guía en el aparcamiento </li>\r\n                  <br>\r\n                  <li> ■ &nbsp; (4) Lona flexible envolvente </li>\r\n                  <br>\r\n                  <li> ■ &nbsp; (5) Estructura perimetral con perfiles galvanizados </li>\r\n                  <br>\r\n                </ul>\r\n              </div>\r\n                            <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/abrigos_para_muelles_de_carga/abrigos_para_muelles_de_carga_1.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">INCLINACIÓN PARA EVACUACIÓN DE AGUA \r\n                </h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n                              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/abrigos_para_muelles_de_carga/abrigos_para_muelles_de_carga_2.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\">La estructura de cada abrigo cuenta con una inclinación en la parte superior, para facilitar la evacuación del agua en caso de lluvia.</p>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">SISTEMA RETRÁCTIL</h1>\r\n                <p class=\"mb-small\">Los abrigos para muelles de carga poseen un sistema retráctil, que permite flexibilidad en las maniobras de carga y descarga, protegiendo así las instalaciones del muelle y el propio abrigo si se ejerce presión por parte de los vehículos de diferentes dimensiones.</p>\r\n                <br>\r\n                <p class=\"mb-small\">Al retirarse el vehículo, luego de terminada la operación en el muelle, el abrigo volverá a su posición original.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">ESTRUCTURA</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-6\">\r\n                <p class=\"mb-small\">La estructura perimetral del abrigo es fabricada con acero galvanizado y acabados en pintura electrostática, para brindar protección ante  a corrosión en la intemperie.</p>\r\n              </div>\r\n              <div class=\"col-md-6 text-center\">\r\n                <img src=\"assets/img/abrigos_para_muelles_de_carga/abrigos_para_muelles_de_carga_3.png\" alt=\"\" class=\"img-responsive\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">CARACTERÍSTICAS TÉCNICAS DE LA LONA</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Material Lona:</strong> &nbsp; Resina Plástica de PVC </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Peso: </strong> &nbsp;900g/m2</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Resistencia al Rasgado: </strong> &nbsp;(Largo) 34 kg/cm - (Ancho) 34 kg/cm\r\n          </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación: </strong> &nbsp;28%</li>               \r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask custom_dark_mask\"></div>\r\n          <div class=\"container\">\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">GAMA DE COLORES</h1>\r\n                <p class=\"mb-small\">La fabricación de los abrigos se realiza con cada combinación posible que se desee, para la estructura perimetral y la lona.</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <img src=\"assets/img/abrigos_para_muelles_de_carga/abrigos_para_muelles_de_carga_4.png\" alt=\"\" class=\"img-responsive\">\r\n                <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- *** JUMBOTRON END *** -->\r\n      </section>\r\n      <section class=\"no-mb\">\r\n        <div class=\"jumbotron\">\r\n          <div class=\"dark-mask \"></div>\r\n          <div class=\"container\">\r\n          <div class=\"row vertical_center_col\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <h1 class=\"text-uppercase\">CARACTERÍSTICAS TÉCNICAS DE LA LONA</h1>\r\n              </div>\r\n              </div>\r\n            <div class=\"row vertical_center_col\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <ul type=\"none\" class=\"list_custom\">\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Aplicación: </strong> &nbsp;  Interior y exterior.</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; DIMENSIONES ESTANDAR*:</strong><br>ALTO x ANCHO (H x W): <br> * 3.2m x 3.2 <br> * 3.4m x 3.2m <br> * 3.4m x 3.4m </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; LONA SUPERIOR (A): </strong> &nbsp;1m\r\n                 </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; LONAS LATERALES (B): </strong> &nbsp;0.6m\r\n                 </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; PROYECCIÓN (C):  </strong> &nbsp;0.7m\r\n                 </li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación: </strong> &nbsp;28%</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 40px\">LONA</strong></li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Material Lona:  </strong> &nbsp;   Resina Plástica de PVC</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Peso:  </strong> &nbsp;   900g/m2</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Resistencia al Rasgado: </strong> &nbsp;   (Largo) 34 kg/cm - (Ancho) 34 kg/cm</li>\r\n                  <br>\r\n                  <li><strong style=\"font-size: 30px\">■ &nbsp; Elongación:  </strong> &nbsp; 28%</li>\r\n                  <br>\r\n\r\n                  <li><strong style=\"font-size: 40px\">■ &nbsp; ESTRUCTURA</strong> <br> La estructura interna de los abrigos está fabricada en pefiles de acero galvanizado de calibre 16. La estructura perimetral exterior, del mismo material, tiene  cabado en pintura electrostática.</li>\r\n                  <br>\r\n                  <br>               \r\n                </ul>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/products/doors/doors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DoorsComponent = (function () {
    function DoorsComponent() {
    }
    DoorsComponent.prototype.ngOnInit = function () {
    };
    return DoorsComponent;
}());
DoorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-doors',
        template: __webpack_require__("../../../../../src/app/pages/products/doors/doors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/products/doors/doors.component.css")]
    })
], DoorsComponent);

//# sourceMappingURL=doors.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/legos/legos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--------------------------------------*/\r\n\r\n/*     jpolly168 AeVale/OneSixEight     */\r\n\r\n/*     XblackvelvetX                    */\r\n\r\n/*     Main Elements,,,,,,,             */\r\n\r\n/*     #wah comes int waves....wahhhhhh.*/\r\n\r\n/*--------------------------------------*/\r\n\r\n/*Second Dein*/\r\n\r\n.embed-container {\r\n  position: relative;\r\n  padding-bottom: 47%;\r\n  height: 0;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n.embed-container iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.style-two {\r\n  border: 0;\r\n  height: 1.5vh;\r\n  margin: 2vh;\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n\r\n.bar.background-image-fixed-3 {\r\n  background: url('http://thewallpaper.co/wallup.php?src=wp-content/uploads/2016/10/Lego-Backgrounds-For-Desktop-hd-background-wallpapers-free-amazing-cool-tablet-smart-phone-high-definition-1920x1080.jpg&w=1024&h=768&isim=wallup-254634.jpg') center top no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n.box-image .bg {\r\n  border-radius: 2vh;\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.jumbotron {\r\n  background-image: url('https://images2.alphacoders.com/519/519085.jpg');\r\n}\r\n\r\n/*************************************/\r\n\r\n.bar .blue-mask {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgb(28, 42, 167);\r\n  opacity: 0.3;\r\n  filter: alpha(opacity=20);\r\n}\r\n\r\n.over {\r\n  width: 28vh;\r\n  height: 25vh;\r\n  background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/7e4354d88d03e9c98069709dd4b8db05/lego2.png\");\r\n  /* Safari 3.0 */\r\n  /* Gecko 1.9.2 (Firefox 3.6) */\r\n  /* Opera 9.5 */\r\n  background-size: 100% 100%;\r\n  /* Gecko 2.0 (Firefox 4.0) and other CSS3-compliant browsers */\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.over:hover {\r\n  width: 28vh;\r\n  height: 25vh;\r\n  background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/2a98633ce8c7da7231c24db0a1fbb0fd/lego1.png\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.card-content {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.avatar {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-left: 2em;\r\n  margin-top: 2em;\r\n  border-radius: 200px;\r\n  float: center;\r\n}\r\n\r\n.headline {\r\n  color: #FFFFFF;\r\n  margin: 1em;\r\n}\r\n\r\n.card {\r\n  background: #FFF;\r\n  display: block;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  border: 1px solid #AAA;\r\n  border-bottom: 3px solid #BBB;\r\n  padding: 0px;\r\n  margin-top: 5em;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  font-family: 'Roboto', sans-serif;\r\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.card-header {\r\n  width: 100%;\r\n  color: #467fbf;\r\n  border-bottom: 3px solid #BBB;\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n  overflow: hidden;\r\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.card-header-black .card-heading {\r\n  padding: 0.5vh;\r\n  color: #467fbf;\r\n}\r\n\r\n.card-header-blue .card-heading {\r\n  padding: 0.5vh;\r\n  color: white;\r\n}\r\n\r\n.card-body {\r\n  margin: 1em;\r\n  background-color: rgba(36, 159, 237, 0.85);\r\n  padding: 2vh;\r\n  border-radius: 1vh;\r\n}\r\n\r\n.card-p {\r\n  padding: 1vh;\r\n  color: white;\r\n  border-radius: 2px;\r\n  background-color: rgba(43, 41, 45, 0.11);\r\n}\r\n\r\n.card-header-black {\r\n  background-color: #3b3838;\r\n  color: #FFFFFF;\r\n  border-bottom: 3px solid #BBB;\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 2vh;\r\n  overflow: hidden;\r\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.card-header-blue {\r\n  background-color: #467fbf;\r\n  color: #294d76;\r\n  border-bottom: 3px solid #BBB;\r\n  box-shadow: 0 8px 17px 0 rgba(14, 16, 43, 0.55), 0 6px 20px 0 rgba(32, 67, 189, 0.86);\r\n  font-family: 'Roboto', sans-serif;\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n  overflow: hidden;\r\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.card-footer {\r\n  border-top: 1px solid #000;\r\n}\r\n\r\n.btn:hover:not(.btn-link):not(.btn-flat) {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.23), 0 10px 30px rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.btn:active:not(.btn-link):not(.btn-flat) {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.23), 0 10px 30px rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.btn:not(.btn-link):not(.btn-flat), .btn-default:not(.btn-link):not(.btn-flat) {\r\n  background-color: transparent;\r\n}\r\n\r\n/*|||||||CARROUSEL||||||*/\r\n\r\n@-webkit-keyframes change-background {\r\n  0% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/3a2a2a64f2762772da4cc69a95c37a42/Frame1.png\");\r\n  }\r\n  50% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/78bbdfc2a2ad5352db7948fea37d1b28/Frame2.png\");\r\n  }\r\n  100% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/2491f464177446f08a65d7f52893ebdd/Frame3.png\");\r\n  }\r\n}\r\n\r\n@keyframes change-background {\r\n  0% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/3a2a2a64f2762772da4cc69a95c37a42/Frame1.png\");\r\n  }\r\n  50% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/78bbdfc2a2ad5352db7948fea37d1b28/Frame2.png\");\r\n  }\r\n  100% {\r\n    background-image: url(\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/2491f464177446f08a65d7f52893ebdd/Frame3.png\");\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products/legos/legos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bar background-image-fixed-3 no-mb color-white text-center\">\r\n  <div class=\"dark-mask\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"text-uppercase\">Fichas de legos</h1>\r\n        <p class=\"lead\">Personaliza el modelo que deseas y obten los planos de inmediato .</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"background-image-fixed-2 no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2 class=\"text-uppercase\">Por donde la desees mirar! </h2>\r\n        <p class=\"lead mb-small\">Presiona la imagen <span class=\"glyphicon glyphicon glyphicon-hand-right\"></span></p>\r\n        <p class=\"mb-small\">Te enviaremos a tu correo un render muy similar como este para que puedas visualizar el producto en cualquier vista.</p>\r\n      </div>\r\n      <div class=\"col-md-6 text-center\">\r\n\r\n        <div class=\"embed-container\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a7e1816382c9caa87?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <hr class=\"style-two\">\r\n\r\n  <section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">los Modelos </h1>\r\n      <p class=\"lead text-muted\">\r\n        Tenemos impresionantes modelos creados a partir de las famosas fichas de Lego. Ademas puedes personalizar los modelos a tu gusto.\r\n      </p>\r\n      <p>\r\n        <a (click)=\"goToQuotation()\" class=\"btn btn-primary\">Cotiza Ahora!</a>\r\n        <a (click)=\"goToRegister()\" class=\"btn btn-secondary\">Registrate</a>\r\n      </p>\r\n    </div>\r\n  </section>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"box-image\">\r\n          <div class=\"image\">\r\n            <img src=\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/690d70bf97cfe42a07c425a317a0c55b/1.jpg\" alt=\"vehiculo de construcción\" class=\"img-responsive\">\r\n          </div>\r\n          <div class=\"bg\"></div>\r\n          <div class=\"name\">\r\n            <h3>Vehículos de construcción</h3>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>\r\n              Se pueden personalizar varias partes de este modelo así como algunos de sus colores.\r\n            </p>\r\n            <p class=\"buttons\">\r\n              <a (click)=\"goToQuotation()\" class=\"btn btn-template-transparent-primary\">Cotizar!</a>\r\n              <a href=\"https://lc-www-live-s.legocdn.com/bigdownloads/buildinginstructions/6145941.pdf\" class=\"btn btn-template-transparent-primary\">Ensamblado Original</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"box-image\">\r\n          <div class=\"image\">\r\n            <img src=\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98f07324c8361d67aad07/2dc6dbad1194101a65e022f75e29db87/2.jpg\" alt=\"Corredores del desierto\" class=\"img-responsive\">\r\n          </div>\r\n          <div class=\"bg\"></div>\r\n          <div class=\"name\">\r\n            <h3>Corredores del desierto</h3>\r\n            <p>\r\n              Este modelo es de la linea creator y tambien posee partes personalizables.\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"text\">\r\n            <p class=\"buttons\">\r\n              <br>\r\n              <br>\r\n              <a (click)=\"goToQuotation()\" class=\"btn btn-template-transparent-primary\">Cotizar!</a>\r\n              <a href=\"https://lc-www-live-s.legocdn.com/bigdownloads/buildinginstructions/6145903.pdf\" class=\"btn btn-template-transparent-primary\">Ensamblado Original</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"box-image\">\r\n          <div class=\"image\">\r\n            <img src=\"assets/img/lego_3.png\" alt=\"Transportes en el mar\" class=\"img-responsive\">\r\n          </div>\r\n          <div class=\"bg\"></div>\r\n          <div class=\"name\">\r\n            <h3>Transportes en el mar</h3>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p class=\"buttons\">\r\n              <a (click)=\"goToQuotation()\" class=\"btn btn-template-transparent-primary\">Cotizar!</a>\r\n              <a href=\"https://lc-www-live-s.legocdn.com/bigdownloads/buildinginstructions/6112315.pdf\" class=\"btn btn-template-transparent-primary\">Ensamblado Original</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"bar background-gray  no-mb padding-big text-center-sm\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"heading text-justify\">\r\n          <h1>vehiculos</h1>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a7e1816382c9caa87?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a7fea4de478c1f346?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a55bd010144f8774b?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"bar background-gray  no-mb padding-big text-center-sm\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"heading text-justify\">\r\n          <h1>vehiculos</h1>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a9a90e0c4309faac1?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a5a2e5bc713ade7fc?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a6057601defd1a9e5?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"bar background-gray  no-mb padding-big text-center-sm\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"heading text-justify\">\r\n          <h1>Maquinaria</h1>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7abc2996d1b1657933?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7aa4ed9a9a5380c0c9?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n        <div class=\"embed-container col-md-4\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7ae2c1650df7b50783?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n  <!-- /.box-image -->\r\n\r\n\r\n\r\n  <!--    <div class=\"col-md-8 model-content\">\r\n\r\n\r\n        <div class=\"model-header-blue\">\r\n          <h1 class=\"model-heading\">Diseño a tus medidas </h1>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"model-body\">\r\n\r\n          <div class=\"col-md-4\">\r\n            <div class=\"over img-responsive\"><a></a></div>\r\n          </div>\r\n          <div class=\"col-md-8 lead mb-small model-p\">\r\n            Puedes variar el tamaño de tus legos en todas sus dimensiones, tambien puedes escoger la cantidad de legos que deseas obtener en tu cotización.\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"clearfix\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8 model-content\">\r\n\r\n\r\n        <div class=\"model-header-blue\">\r\n          <h2 class=\"model-heading\">Selecciona el color de tus legos</h2>\r\n        </div>\r\n\r\n        <div class=\"box col-md-8\"></div>\r\n        <div class=\"highlight\"></div>\r\n\r\n        <div class=\"clearfix\">\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  </div>\r\n\r\n-->\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/products/legos/legos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegosComponent = (function () {
    function LegosComponent(router) {
        this.router = router;
    }
    LegosComponent.prototype.ngOnInit = function () {
    };
    LegosComponent.prototype.goToQuotation = function () {
        this.router.navigateByUrl('quotation');
    };
    LegosComponent.prototype.goToRegister = function () {
        this.router.navigateByUrl('auth/register');
    };
    return LegosComponent;
}());
LegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-legos',
        template: __webpack_require__("../../../../../src/app/pages/products/legos/legos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/products/legos/legos.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        preserveWhitespaces: false,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LegosComponent);

var _a;
//# sourceMappingURL=legos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/machinery/machinery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "audio {\r\n  background-color: rgb(147, 35, 205) !important;\r\n  border-radius: 30px;\r\n}\r\n\r\n.player {\r\n  border-radius: 5vh;\r\n}\r\n\r\n.mejs-container .mejs-controls {\r\n  background: #000000 !important;\r\n}\r\n\r\n/**/\r\n\r\n.embed-container {\r\n  position: relative;\r\n  padding-bottom: 47%;\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.embed-container iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.alfa {\r\n  background-image: url(https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98e6c05380dffe055dd02/7bcca45ac5b99503fc20356bbe9e36aa/1New.png);\r\n  background-size: 60vh 40vh;\r\n  width: 60vh;\r\n  height: 40vh;\r\n  border: 1vh solid #000000;\r\n  border-radius: 1vh;\r\n  box-shadow: 0 0 1vh #000000, -2vh 2vh 3vh rgba(0, 0, 0, .4);\r\n  padding: 0;\r\n  margin: 1rem auto;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.style-two {\r\n  border: 0;\r\n  height: 1.5vh;\r\n  margin: 0;\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n\r\n.bravo {\r\n  background-image: url(https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98e6c05380dffe055dd02/8fb1704c5aabe3fd88b8ff33feea3ff6/2New.png);\r\n  background-size: 60vh 40vh;\r\n  height: 40vh;\r\n  resize: horizontal;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 0;\r\n  max-width: 500px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.bravo:before {\r\n  content: '\\2194';\r\n  background: rgba(0, 0, 0, .7);\r\n  font-size: 3vh;\r\n  color: white;\r\n  top: 0;\r\n  right: 0px;\r\n  hight: 100%;\r\n  line-height: 50vh;\r\n  position: absolute;\r\n}\r\n\r\n.charly {\r\n  resize: horizontal;\r\n  opacity: 0;\r\n  position: relative;\r\n  top: 20%;\r\n  left: 0px;\r\n  margin-right: 0px;\r\n  width: 0px;\r\n  height: 15px;\r\n  max-width: 486px;\r\n  min-width: 15px;\r\n  outline: 0 solid transparent;\r\n  cursor: move;\r\n  cursor: all-scroll;\r\n  -webkit-transform: scaley(25);\r\n          transform: scaley(25);\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  -webkit-animation: delta 5s 1 normal ease-in-out 1s;\r\n          animation: delta 5s 1 normal ease-in-out 1s;\r\n}\r\n\r\nmaximun-container {\r\n  background-image: url(\"http://cache.lego.com/r/ldd/-/media/digital%20designer/carousel/contentbg_home_racecar.png?l.r2=-779130651\");\r\n}\r\n\r\n@-webkit-keyframes delta {\r\n  30% {\r\n    width: 40vh\r\n  }\r\n  60% {\r\n    width: 0\r\n  }\r\n  80% {\r\n    width: 10vh\r\n  }\r\n}\r\n\r\n@keyframes delta {\r\n  30% {\r\n    width: 40vh\r\n  }\r\n  60% {\r\n    width: 0\r\n  }\r\n  80% {\r\n    width: 10vh\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products/machinery/machinery.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bar background-image-fixed-2 no-mb color-white text-center\">\r\n  <div class=\"dark-mask\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"text-uppercase\">Maquinaria Pesada</h1>\r\n        <p class=\"lead\">Filtra por tipos de maquinaria y visualiza sus defectos facilmente.</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"bar background-gray no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h2 class=\"text-uppercase\">Por donde la desees mirar! </h2>\r\n        <p class=\"lead mb-small\">Presiona la imagen <span class=\"glyphicon glyphicon glyphicon-hand-right\"></span></p>\r\n        <p class=\"mb-small\">Te enviaremos a tu correo un render muy similar como este para que puedas visualizar el producto por cualquier lugar.</p>\r\n        <p class=\"lead mb small\">Ademas podras escuchar el vehiculo encendido</p>\r\n        <div class=\"text-center\">\r\n          <audio id=\"audio-player\" src=\"https://trello-attachments.s3.amazonaws.com/59c180c9df975fa33b73f7aa/59f98e6c05380dffe055dd02/c73cf8d6ba9c75976d1ff969ca5759e3/tractor.mp3\" controls loop>\r\n               Your browser does not support the <code class=\"player\" >audio</code> element.\r\n             </audio>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"col-md-6 text-center\">\r\n\r\n        <div class=\"embed-container\">\r\n          <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7addfbb05269b83d32?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n<hr class=\"style-two\">\r\n\r\n<section class=\"bar background-gray  no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <h2>Detecta daños en partes de la maquinaria </h2>\r\n        <p class=\"lead mb-small\">Interactua con la imagen <span class=\"glyphicon glyphicon glyphicon-hand-right\"></span></p>\r\n        <p class=\"mb-small\">Recibiras en tu correo un modelo para que visualices la maquinaria de manera correcta y tambien otro modelo en el que se resaltan las partes dañadas.</p>\r\n      </div>\r\n      <div class=\"col-md-6 text-center\">\r\n        <h1>Mueve el icono de la imagen  <span class=\"glyphicon glyphicon-resize-horizontal\"></span> </h1>\r\n        <div class='alfa' title='Primavera' alt=\"https://codepen.io/solipsistacp/pen/Gpmaq/\">\r\n          <div class='bravo' title='Otoño'>\r\n            <textarea readonly cols='0' rows='0' class='charly'></textarea>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-3 text-center\">\r\n        <h1>Todo en una sola cotización</h1> Los modelos que recibes contienen medidas exactas de los modelos reales ,informacion de las partes que se encuentran dañadas asi como tambien distribuidores con los cuales puedes obtener los repuestos para dichas maquinaria.\r\n        <hr>\r\n        <br>\r\n        <button (click)=\"goToQuotation()\" type=\"button\" class=\"btn btn-lg btn-template-main\">Cotizar Ahora!</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<hr _ngcontent-c5=\"\" class=\"style-two\">\r\n<section class=\"bar background-gray  no-mb padding-big text-center-sm\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"heading text-justify\">\r\n        <h1>Otros Modelos</h1>\r\n      </div>\r\n      <div class=\"embed-container col-md-4\">\r\n        <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7aaeccc90fc5d4c177?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n      </div>\r\n      <div class=\"embed-container col-md-4\">\r\n        <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7a10f418dec0bab929?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n      </div>\r\n      <div class=\"embed-container col-md-4\">\r\n        <iframe src=\"https://myhub.autodesk360.com/ue2a9b90d/shares/public/SHabee1QT1a327cf2b7ab32f8be077ecd742?mode=embed\" width=\"580\" height=\"326\" allowfullscreen scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/products/machinery/machinery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachineryComponent = (function () {
    function MachineryComponent(router) {
        this.router = router;
    }
    MachineryComponent.prototype.ngOnInit = function () {
    };
    MachineryComponent.prototype.goToQuotation = function () {
        this.router.navigateByUrl('quotation');
    };
    return MachineryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hola'),
    __metadata("design:type", Object)
], MachineryComponent.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('img'),
    __metadata("design:type", Object)
], MachineryComponent.prototype, "imagen", void 0);
MachineryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-machinery',
        template: __webpack_require__("../../../../../src/app/pages/products/machinery/machinery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/products/machinery/machinery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MachineryComponent);

var _a;
//# sourceMappingURL=machinery.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h1>Abrigo para muelle de carga </h1>\n        <ngvas [width]=\"canvasWidth\" [height]=\"canvasHeight\" >\n\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"topX\" [y]=\"topY\" [width]=\"topWidth\" [height]=\"topHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineLeftX\" [y]=\"outlineLeftY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineRightX\" [y]=\"outlineRightY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n            <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"aletaFill\" [x]=\"centerOutlineLeftX\" [y]=\"centerOutlineLeftY\" [width]=\"centerOutlineWidth\" [height]=\"centerOutlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"aletaFill\" [x]=\"centerOutlineRightX\" [y]=\"centerOutlineRightY\" [width]=\"centerOutlineWidth\" [height]=\"centerOutlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n    </ngvas>"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawAbrigoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas__ = __webpack_require__("../../../../ngvas/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawAbrigoComponent = (function () {
    function DrawAbrigoComponent() {
        this.colors = [
            0xFCAC2F,
            0x37375B,
            0x2B4F8D,
            0x1D1B1E
        ];
        this.sizefactor = 5;
        this.lonaWidth = 3400 / this.sizefactor;
        this.lonaHeight = 3400 / this.sizefactor;
        this.lonaFill = 0x666666;
        this.outlineFill = this.colors[3];
        this.dividerFill = 0xffffff;
        this.aletaFill = 0xFCAC2F;
        this.outlineWidth = 600 / this.sizefactor;
        this.outlineHeight = (1000 / this.sizefactor);
        this.topWidth = this.lonaHeight + ((600 / this.sizefactor) * 2) + this.outlineWidth;
        this.topHeight = 1000 / this.sizefactor;
        this.centerOutlineWidth = (this.outlineWidth / 3);
        this.centerOutlineHeight = this.outlineHeight;
        this.canvasWidth = this.topWidth;
        this.canvasHeight = this.lonaHeight + this.topHeight;
        this.topX = this.canvasWidth / 2;
        this.topY = this.topHeight / 2;
        this.lonaX = this.canvasWidth / 2;
        this.lonaY = (this.lonaHeight / 2) + (this.topHeight);
        this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (600 / this.sizefactor);
        this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight);
        this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (600 / this.sizefactor);
        this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight);
        this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + (this.centerOutlineWidth / 2) - 10;
        this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (2400 / this.sizefactor);
        this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - (this.centerOutlineWidth / 2) + 10;
        this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (2400 / this.sizefactor);
        this.strokeColor = 0x000000;
        this.strokeWidth = 1;
        this.pixelHitArea = __WEBPACK_IMPORTED_MODULE_1_ngvas__["hitAreas"].PixelHitArea;
        this.changeSize(1);
    }
    DrawAbrigoComponent.prototype.ngOnInit = function () {
        //console.log('componente inicializado...');
    };
    DrawAbrigoComponent.prototype.updateColor = function (value) {
        //console.log("lona color: " + value );
        if (value >= 1 && value <= 4) {
            this.outlineFill = this.colors[value - 1];
        }
    };
    DrawAbrigoComponent.prototype.changeSize = function (option) {
        var width;
        var height;
        switch (option) {
            case 1:
                width = 3200 / this.sizefactor;
                height = 3200 / this.sizefactor;
                var extraSpace = 100 / this.sizefactor;
                this.lonaWidth = width;
                this.lonaHeight = height;
                this.topWidth = width;
                this.outlineHeight = this.lonaHeight;
                this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
                this.topHeight = 1000 / this.sizefactor;
                this.topY = this.topHeight / 2 + extraSpace;
                this.lonaY = (this.lonaHeight / 2) + (this.topHeight) + extraSpace;
                this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
                this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;
                this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
                this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;
                this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + (this.centerOutlineWidth / 2) - 7;
                this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - (this.centerOutlineWidth / 2) + 7;
                this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                break;
            case 2:
                width = 3200 / this.sizefactor;
                height = 3400 / this.sizefactor;
                var extraSpace = 100;
                this.lonaWidth = width;
                this.lonaHeight = height;
                this.outlineWidth = 600 / this.sizefactor;
                this.outlineHeight = this.lonaHeight;
                this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
                this.topHeight = 1000 / this.sizefactor;
                this.topX = this.canvasWidth / 2;
                this.topY = this.topHeight / 2;
                this.lonaX = this.canvasWidth / 2;
                this.lonaY = (this.lonaHeight / 2) + (this.topHeight);
                this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
                this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight);
                this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
                this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight);
                this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + (this.centerOutlineWidth / 2) - 7;
                this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - (this.centerOutlineWidth / 2) + 7;
                this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                break;
            case 3:
                width = 3400 / this.sizefactor;
                height = 3400 / this.sizefactor;
                var extraSpace = 0;
                this.lonaWidth = width;
                this.lonaHeight = height;
                this.topWidth = width;
                this.outlineHeight = this.lonaHeight;
                this.topWidth = this.lonaWidth + ((600 / this.sizefactor) * 2) + this.outlineWidth;
                this.topHeight = 1000 / this.sizefactor;
                this.topY = this.topHeight / 2 + extraSpace;
                this.lonaY = (this.lonaHeight / 2) + (this.topHeight) + extraSpace;
                this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + 10;
                this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;
                this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - 10;
                this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight) + extraSpace;
                this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (this.outlineWidth / 2) + (this.centerOutlineWidth / 2) - 10;
                this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (this.outlineWidth / 2) - (this.centerOutlineWidth / 2) + 10;
                this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight) + (1200 / this.sizefactor);
                break;
        }
    };
    return DrawAbrigoComponent;
}());
DrawAbrigoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-draw-abrigo',
        template: __webpack_require__("../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DrawAbrigoComponent);

//# sourceMappingURL=draw-abrigo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-door/draw-door.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\r\n  .vertical_center_col {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n}\r\n\r\n.vertical_center_col {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.img-responsive{\r\n\tmargin:0 auto;\r\n\twidth:80%;\r\n}\r\n\r\n\r\n\r\ncanvas{\r\n\twidth: 100% !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-door/draw-door.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h1>Puerta rápida</h1>\n<div class=\"row vertical_center_col\">\n<div class=\"col-sm-3 text-center\">\n\n    \t\t<h6>Mando a Distancia</h6>\n         <img src=\"assets/img/puerta_rapida_enrollable/Mando a Distancia.gif\" alt=\"\" class=\"img-responsive\">\n  \n    \t<h6>Interruptor de Tirador</h6>\t\n         <img src=\"assets/img/puerta_rapida_enrollable/Interruptor de Tirador.gif\" alt=\"\" class=\"img-responsive\">\n\n    \t\t<h6>Lazo Magnético</h6>\n         <img src=\"assets/img/puerta_rapida_enrollable/Lazo Magnético.gif\" alt=\"\" class=\"img-responsive\">\n \n\n\n</div>\n<div class=\"col-sm-3 text-center\">\n\n \n    \t\t<h6>Luces de Aviso</h6>\n         <img src=\"assets/img/puerta_rapida_enrollable/Luces de Aviso.jpg\" alt=\"\" class=\"img-responsive\">\n\n    \t\t<h6>Señal Acústica</h6>\n         <img src=\"assets/img/puerta_rapida_enrollable/Señal Acústica.png\" alt=\"\" class=\"img-responsive\">\n\n\n</div>\n<div class=\"col-sm-6 text-center\">\n    <ngvas [width]=\"canvasWidth\" [height]=\"canvasHeight\" >\n\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"topX\" [y]=\"topY\" [width]=\"topWidth\" [height]=\"topHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineLeftX\" [y]=\"outlineLeftY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineRightX\" [y]=\"outlineRightY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"lonaFill\" [x]=\"lonaX\" [y]=\"lonaY\" [width]=\"lonaWidth\" [height]=\"lonaHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_1_X\" [y]=\"divider_1_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_2_X\" [y]=\"divider_2_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_3_X\" [y]=\"divider_3_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n    </ngvas>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-door/draw-door.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawDoorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas__ = __webpack_require__("../../../../ngvas/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawDoorComponent = (function () {
    function DrawDoorComponent() {
        /*
      
      0
      :
      {id: 1, name: "Ancho", typefeature: "integer", range: "1000,4500"}
      1
      :
      {id: 2, name: "Alto", typefeature: "integer", range: "1000,4500"}
      2
      :
      {id: 3, name: "Color_Lona", typefeature: "integer", range: "1,11"}
      3
      :
      {id: 4, name: "Color_Perfiles", typefeature: "integer", range: "1,11"}
      
      */
        this.sizefactor = 5;
        this.lonaWidth = 4500 / this.sizefactor;
        this.lonaHeight = 4500 / this.sizefactor;
        this.outlineWidth = 100 / this.sizefactor;
        this.outlineHeight = this.lonaHeight;
        this.topWidth = this.lonaHeight + ((60 / this.sizefactor) * 2) + this.outlineWidth;
        this.topHeight = 270 / this.sizefactor;
        this.dividerWidth = this.lonaWidth;
        this.dividerHeight = 5;
        this.canvasWidth = this.topWidth;
        this.canvasHeight = this.lonaHeight + this.topHeight;
        this.topX = this.canvasWidth / 2;
        this.topY = this.topHeight / 2;
        this.lonaX = this.canvasWidth / 2;
        this.lonaY = (this.lonaHeight / 2) + (this.topHeight);
        this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (60 / this.sizefactor);
        this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight);
        this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (60 / this.sizefactor);
        this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight);
        this.divider_1_X = this.lonaX;
        this.divider_1_Y = this.lonaY - ((this.lonaY / 6));
        this.divider_2_X = this.lonaX;
        this.divider_2_Y = this.lonaY + ((this.lonaY / 7));
        this.divider_3_X = this.lonaX;
        this.divider_3_Y = this.lonaY + ((this.lonaY / 7) * 3);
        this.strokeColor = 0x000000;
        this.strokeWidth = 0.5;
        this.pixelHitArea = __WEBPACK_IMPORTED_MODULE_1_ngvas__["hitAreas"].PixelHitArea;
        this.colors = [
            0xFCAC2F,
            0x37375B,
            0x2B4F8D,
            0xF0F7EF,
            0xECD9BB,
            0x86979E,
            0xF2673C,
            0x1D1B1E,
            0xDC2F35,
            0x1A2F28,
            0x179785
        ];
        this.outlineFill = this.colors[5];
        this.lonaFill = this.colors[1];
        this.dividerFill = 0xffffff;
        this.initSizeDoor();
    }
    DrawDoorComponent.prototype.ngOnInit = function () {
        //console.log('componente inicializado...');
    };
    DrawDoorComponent.prototype.initSizeDoor = function () {
        this.updateHeight(4400);
        this.updateWidth(3500);
    };
    DrawDoorComponent.prototype.updateWidth = function (value) {
        //console.log("width: " + value );
        var width = (value / this.sizefactor) - this.lonaWidth;
        if (this.lonaWidth + width >= 1000 / this.sizefactor && this.lonaWidth + width <= 4500 / this.sizefactor) {
            this.lonaWidth += width;
            this.topWidth += width;
            this.outlineRightX += (width / 2);
            this.outlineLeftX -= (width / 2);
            this.dividerWidth = this.lonaWidth;
        }
    };
    DrawDoorComponent.prototype.updateHeight = function (value) {
        //console.log("height: " + value );
        var height = (value / this.sizefactor) - this.lonaHeight;
        if (this.lonaHeight + height >= 1000 / this.sizefactor && this.lonaHeight + height <= 4500 / this.sizefactor) {
            var currentLonaHeight = this.lonaHeight;
            this.lonaHeight += height;
            this.outlineHeight += height;
            this.topY -= (height / 2);
            this.divider_1_Y = this.divider_1_Y - (height / 20);
            this.divider_2_Y = this.divider_2_Y + (height / 10);
            this.divider_3_Y = this.divider_3_Y + (height / 4.2);
        }
    };
    DrawDoorComponent.prototype.updateLonaColor = function (value) {
        //console.log("lona color: " + value );
        if (value >= 1 && value <= 11) {
            this.lonaFill = this.colors[value - 1];
        }
    };
    DrawDoorComponent.prototype.updateOutlineColor = function (value) {
        //console.log("outline color: " + value );
        if (value >= 1 && value <= 11) {
            this.outlineFill = this.colors[value - 1];
        }
    };
    return DrawDoorComponent;
}());
DrawDoorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-draw-door',
        template: __webpack_require__("../../../../../src/app/pages/quotation/draw-door/draw-door.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/draw-door/draw-door.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DrawDoorComponent);

//# sourceMappingURL=draw-door.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 992px) {\r\n  .vertical_center_col {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n}\r\n\r\n.vertical_center_col{\r\n  text-align: center;\r\n  margin:0 auto;\r\n}\r\n\r\n.last_col{\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.image_center{\r\n  max-width: 50%;\r\n  margin:0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row vertical_center_col\">\n\n    <div class=\"col-sm-6 center-text\" *ngIf=\"accesorioDelantero == true\" >\n    \t<h4 >Accesorio Delantero</h4> \n    \t<img class = \"img-responsive image_center\"height=\"{{imageHeight}}\" width=\"{{imageWidth}}\" [src]=\"accesorioDelanteroSrc\" (error)=\"setDefaultPic('accesorioDelantero')\" >    \t  \n    </div>\n\n    <div class=\"col-sm-6 center-text\" *ngIf=\"accesorioTrasero == true\" >\n    \t<h4 >Accesorio Trasero</h4> \n    \t<img class = \"img-responsive image_center\"height=\"{{imageHeight}}\" width=\"{{imageWidth}}\" [src]=\"accesorioTraseroSrc\" (error)=\"setDefaultPic('accesorioTrasero')\" >    \t  \n    </div>\n\n</div>\n<div class=\"row vertical_center_col last_col\">\n\n    <div class=\"col-sm-6 text-center\"  *ngIf=\"cabina == true\" >\n    <h4 >Cabina</h4>\t\n        <img class = \"img-responsive image_center\"height=\"{{imageHeight}}\" width=\"{{imageWidth}}\" [src]=\"cabinaSrc\" (error)=\"setDefaultPic('cabina')\" >\n    </div>\n\n    <div class=\"col-sm-6 center-text\" *ngIf=\"inferior == true\" >\n    \t<h4 >Inferior</h4>  \n    \t<img class = \"img-responsive image_center\"height=\"{{imageHeight}}\" width=\"{{imageWidth}}\" [src]=\"inferiorSrc\" (error)=\"setDefaultPic('inferior')\" >\n    </div>\n\n</div>\n\n\n\t\n\t"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawLegoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrawLegoComponent = (function () {
    function DrawLegoComponent() {
        this.dirSrc = "assets/img/legos/";
        this.imageWidth = 500;
        this.imageHeight = 500;
        this.imageX = 2;
        this.imageY = 2;
        this.canvasWidth = this.imageWidth - this.imageX;
        this.canvasHeight = this.imageHeight - this.imageY;
        this.initialImage = this.dirSrc + "Ninguno.png";
        this.notFoundSrc = this.dirSrc + "notFound.png";
        this.initialVisibilityState = true;
        this.cabina = this.initialVisibilityState;
        this.cabinaSrc = this.initialImage;
        this.accesorioDelantero = this.initialVisibilityState;
        this.accesorioDelanteroSrc = this.initialImage;
        this.accesorioTrasero = this.initialVisibilityState;
        this.accesorioTraseroSrc = this.initialImage;
        this.inferior = this.initialVisibilityState;
        this.inferiorSrc = this.initialImage;
        this.initSizeDoor();
    }
    DrawLegoComponent.prototype.ngOnInit = function () {
        //console.log('componente inicializado...');
    };
    DrawLegoComponent.prototype.initSizeDoor = function () {
    };
    DrawLegoComponent.prototype.changeCabinaSrc = function (nameSrc) {
        nameSrc = this.dirSrc + nameSrc + ".png";
        console.log("cabina: " + nameSrc);
        this.cabinaSrc = nameSrc;
    };
    DrawLegoComponent.prototype.changeAccesorioDelanteroSrc = function (nameSrc) {
        nameSrc = this.dirSrc + nameSrc + ".png";
        console.log("delantero: " + nameSrc);
        this.accesorioDelanteroSrc = nameSrc;
    };
    DrawLegoComponent.prototype.changeAccesorioTraseroSrc = function (nameSrc) {
        nameSrc = this.dirSrc + nameSrc + ".png";
        console.log("trasero: " + nameSrc);
        this.accesorioTraseroSrc = nameSrc;
    };
    DrawLegoComponent.prototype.changeInferiorSrc = function (nameSrc) {
        nameSrc = this.dirSrc + nameSrc + ".png";
        console.log("inferior: " + nameSrc);
        this.inferiorSrc = nameSrc;
    };
    DrawLegoComponent.prototype.setDefaultPic = function (image) {
        switch (image) {
            case "cabina":
                this.cabinaSrc = this.notFoundSrc;
                break;
            case "accesorioDelantero":
                this.accesorioDelanteroSrc = this.notFoundSrc;
                break;
            case "accesorioTrasero":
                this.accesorioTraseroSrc = this.notFoundSrc;
                break;
            case "inferior":
                this.inferiorSrc = this.notFoundSrc;
                break;
        }
    };
    return DrawLegoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DrawLegoComponent.prototype, "src", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DrawLegoComponent.prototype, "default", void 0);
DrawLegoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-draw-lego',
        template: __webpack_require__("../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'img[default]',
        host: {
            '(error)': 'setDefaultPic()',
            '[src]': 'src'
        }
    }),
    __metadata("design:paramtypes", [])
], DrawLegoComponent);

//# sourceMappingURL=draw-lego.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<h1>Sello para muelle de carga </h1>\n    <ngvas [width]=\"canvasWidth\" [height]=\"canvasHeight\" >\n\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"topX\" [y]=\"topY\" [width]=\"topWidth\" [height]=\"topHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineLeftX\" [y]=\"outlineLeftY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"outlineFill\" [x]=\"outlineRightX\" [y]=\"outlineRightY\" [width]=\"outlineWidth\" [height]=\"outlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"aletaFill\" [x]=\"centerOutlineLeftX\" [y]=\"centerOutlineLeftY\" [width]=\"centerOutlineWidth\" [height]=\"centerOutlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"aletaFill\" [x]=\"centerOutlineRightX\" [y]=\"centerOutlineRightY\" [width]=\"centerOutlineWidth\" [height]=\"centerOutlineHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n\n\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_0_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_1_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_2_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_3_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_4_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_5_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_6_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_7_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_8_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_9_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_10_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_11_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_12_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_13_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_14_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_15_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>  \n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_16_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_17_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_18_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_19_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_20_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-rectangle [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [fill]=\"dividerFill\" [x]=\"divider_0_X\" [y]=\"divider_21_Y\" [width]=\"dividerWidth\" [height]=\"dividerHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>  \n\n\n      <ngvas-rectangle  [fill]=\"lonaFill\" [x]=\"lonaX\" [y]=\"lonaY\" [width]=\"lonaWidth\" [height]=\"lonaHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle> \n      <ngvas-rectangle  [fill]=\"lonaFill\" [x]=\"extraLonaX\" [y]=\"extraLonaY\" [width]=\"extraLonaWidth\" [height]=\"extraLonaHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle> \n\n\n\n\n\n      <ngvas-image fill=\"rgba(0,0,0,0)\" [x]=\"imageAngle_no_10_X\" [y]=\"imageAngle_no_10_Y\" [width]=\"imageAngleWidth\" [height]=\"imageAngleHeight\" src=\"assets/img/sellos_para_muelles_de_carga/sello_angulo_no_10.png\"></ngvas-image>\n      <ngvas-image [visible]=\"imageAngle_0_visibility\" fill=\"rgba(0,0,0,0)\" [x]=\"imageAngle_0_X\" [y]=\"imageAngle_0_Y\" [width]=\"imageAngleWidth\" [height]=\"imageAngleHeight\" src=\"assets/img/sellos_para_muelles_de_carga/sello_angulo_0.png\"></ngvas-image>\n      <ngvas-image fill=\"rgba(0,0,0,0)\" [x]=\"imageAngle_10_X\" [y]=\"imageAngle_10_Y\" [width]=\"imageAngleWidth\" [height]=\"imageAngleHeight\" src=\"assets/img/sellos_para_muelles_de_carga/sello_angulo_10.png\"></ngvas-image>\n\n      <ngvas-rectangle  [stroke]=\"{ width: strokeWidth, style: strokeColor }\" [rotation]=\"angleShapeRotation\" [fill]=\"outlineFill\" [x]=\"angleShapeX\" [y]=\"angleShapeY\" [width]=\"angleShapeWidth\" [height]=\"angleShapeHeight\" origin=\"center\" [hitArea]=\"pixelHitArea\"></ngvas-rectangle>\n      <ngvas-text [fill]=\"textFill\" [textStyle]=\"{ font: '30px Arial' }\"    [x]=\"textAngleX\" [y]=\"textAngleY\" [text]=\"angleShapeText\"></ngvas-text>\n\n    </ngvas>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawMuelleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas__ = __webpack_require__("../../../../ngvas/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawMuelleComponent = (function () {
    function DrawMuelleComponent() {
        this.colors = [
            0xFCAC2F,
            0x37375B,
            0x2B4F8D,
            0x1D1B1E
        ];
        this.sizefactor = 5;
        this.lonaWidth = 3000 / this.sizefactor;
        this.lonaHeight = 3000 / this.sizefactor + 2;
        this.lonaFill = 0xffffff;
        this.aletaFill = 0xFCAC2F;
        this.outlineFill = this.colors[2];
        this.dividerFill = 0x000000;
        this.textFill = 0x000000;
        this.angleShapeFill = 0xff0000;
        this.outlineWidth = 250 / this.sizefactor;
        this.outlineHeight = this.lonaHeight;
        this.centerOutlineWidth = (this.outlineWidth / 3);
        this.centerOutlineHeight = this.outlineHeight;
        this.topWidth = this.lonaWidth + ((200 / this.sizefactor) * 2) + this.outlineWidth;
        this.topHeight = 270 / this.sizefactor;
        this.dividerWidth = this.lonaWidth + this.outlineWidth * 2;
        this.dividerHeight = 1;
        this.canvasWidth = this.topWidth;
        this.canvasHeight = this.lonaHeight + this.topHeight;
        this.topX = this.canvasWidth / 2;
        this.topY = this.topHeight / 2;
        this.lonaX = this.canvasWidth / 2;
        this.lonaY = (this.lonaHeight / 2) + (this.topHeight) + 1;
        this.text1X = this.lonaX;
        this.text1Y = this.lonaY;
        this.outlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (200 / this.sizefactor);
        this.outlineLeftY = (this.outlineHeight / 2) + (this.topHeight);
        this.outlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (200 / this.sizefactor);
        this.outlineRightY = (this.outlineHeight / 2) + (this.topHeight);
        this.centerOutlineLeftX = (this.canvasWidth / 2) - (this.topWidth / 2) + (200 / this.sizefactor);
        this.centerOutlineLeftY = (this.outlineHeight / 2) + (this.topHeight);
        this.centerOutlineRightX = (this.canvasWidth / 2) + (this.topWidth / 2) - (200 / this.sizefactor);
        this.centerOutlineRightY = (this.outlineHeight / 2) + (this.topHeight);
        this.angleShapeWidth = 25;
        this.angleShapeHeight = 150;
        this.angleShapeX = (this.canvasWidth / 2);
        this.angleShapeY = this.topY + (this.topHeight / 2) + (this.angleShapeHeight / 2) + 20;
        this.angleShapeRotation = 0;
        this.angleShapeText = "0°";
        //public textAngleY = this.angleShapeY  + (this.angleShapeHeight / 2) + 35;
        this.textAngleY = this.angleShapeY + 10;
        this.textAngleX = this.angleShapeX + this.angleShapeWidth;
        //public textAngleX =   (this.canvasWidth / 2) - (this.angleShapeWidth / 2);
        this.imageAngleWidth = 285;
        this.imageAngleHeight = 145;
        this.imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
        this.imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
        this.imageAngle_10_Y = this.imageAngle_0_Y + this.imageAngleHeight;
        this.imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
        this.imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
        this.imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
        this.imageAngle_0_visibility = true;
        this.extraLonaHeight = this.canvasHeight;
        this.extraLonaWidth = this.canvasWidth - 2;
        this.extraLonaX = this.canvasWidth / 2;
        this.extraLonaY = (this.canvasHeight / 2) + (this.topHeight) + this.lonaHeight;
        this.aleta10cm = (130 / this.sizefactor);
        this.aleta15cm = (195 / this.sizefactor);
        this.aleta20cm = (260 / this.sizefactor);
        this.currentAletaHeight = this.aleta10cm;
        this.aletaSpace = this.aleta10cm;
        this.divider_0_X = this.lonaX;
        this.divider_0_Y = (this.topY * 2) + this.aletaSpace;
        this.divider_1_Y = this.divider_0_Y + this.aletaSpace;
        this.divider_2_Y = this.divider_1_Y + this.aletaSpace;
        this.divider_3_Y = this.divider_2_Y + this.aletaSpace;
        this.divider_4_Y = this.divider_3_Y + this.aletaSpace;
        this.divider_5_Y = this.divider_4_Y + this.aletaSpace;
        this.divider_6_Y = this.divider_5_Y + this.aletaSpace;
        this.divider_7_Y = this.divider_6_Y + this.aletaSpace;
        this.divider_8_Y = this.divider_7_Y + this.aletaSpace;
        this.divider_9_Y = this.divider_8_Y + this.aletaSpace;
        this.divider_10_Y = this.divider_9_Y + this.aletaSpace;
        this.divider_11_Y = this.divider_10_Y + this.aletaSpace;
        this.divider_12_Y = this.divider_11_Y + this.aletaSpace;
        this.divider_13_Y = this.divider_12_Y + this.aletaSpace;
        this.divider_14_Y = this.divider_13_Y + this.aletaSpace;
        this.divider_15_Y = this.divider_14_Y + this.aletaSpace;
        this.divider_16_Y = this.divider_15_Y + this.aletaSpace;
        this.divider_17_Y = this.divider_16_Y + this.aletaSpace;
        this.divider_18_Y = this.divider_17_Y + this.aletaSpace;
        this.divider_19_Y = this.divider_18_Y + this.aletaSpace;
        this.divider_20_Y = this.divider_19_Y + this.aletaSpace;
        this.divider_21_Y = this.divider_20_Y + this.aletaSpace;
        this.strokeColor = 0x000000;
        this.strokeWidth = 1;
        this.pixelHitArea = __WEBPACK_IMPORTED_MODULE_1_ngvas__["hitAreas"].PixelHitArea;
        this.initSizeMuelle();
    }
    DrawMuelleComponent.prototype.ngOnInit = function () {
        //console.log('componente inicializado...');
    };
    DrawMuelleComponent.prototype.initSizeMuelle = function () {
        this.updateHeight(3000);
        this.updateWidth(2000);
    };
    DrawMuelleComponent.prototype.updateColor = function (value) {
        //console.log("lona color: " + value );
        if (value >= 1 && value <= 4) {
            this.outlineFill = this.colors[value - 1];
        }
    };
    ;
    DrawMuelleComponent.prototype.changeAngleShapeRotation = function (value) {
        var angle = value - this.angleShapeRotation;
        if (angle >= -30 && angle <= 30) {
            this.angleShapeRotation += angle;
            this.angleShapeText = value + "°";
        }
    };
    DrawMuelleComponent.prototype.changeAletaHeight = function (option) {
        switch (option) {
            case 1:
                this.changeDividers_Y(this.aleta10cm - this.currentAletaHeight);
                this.currentAletaHeight = this.aleta10cm;
                break;
            case 2:
                this.changeDividers_Y(this.aleta15cm - this.currentAletaHeight);
                this.currentAletaHeight = this.aleta15cm;
                break;
            case 3:
                this.changeDividers_Y(this.aleta20cm - this.currentAletaHeight);
                this.currentAletaHeight = this.aleta20cm;
                break;
        }
    };
    DrawMuelleComponent.prototype.changeDividers_Y = function (extraHeight) {
        console.log("cambiando tamaño");
        this.divider_0_Y += extraHeight;
        this.divider_1_Y += extraHeight * 2;
        this.divider_2_Y += extraHeight * 3;
        this.divider_3_Y += extraHeight * 4;
        this.divider_4_Y += extraHeight * 5;
        this.divider_5_Y += extraHeight * 6;
        this.divider_6_Y += extraHeight * 7;
        this.divider_7_Y += extraHeight * 8;
        this.divider_8_Y += extraHeight * 9;
        this.divider_9_Y += extraHeight * 10;
        this.divider_10_Y += extraHeight * 11;
        this.divider_11_Y += extraHeight * 12;
        this.divider_12_Y += extraHeight * 13;
        this.divider_13_Y += extraHeight * 14;
        this.divider_14_Y += extraHeight * 15;
        this.divider_15_Y += extraHeight * 16;
        this.divider_16_Y += extraHeight * 17;
        this.divider_17_Y += extraHeight * 18;
        this.divider_18_Y += extraHeight * 19;
        this.divider_19_Y += extraHeight * 20;
        this.divider_20_Y += extraHeight * 21;
        this.divider_21_Y += extraHeight * 22;
    };
    DrawMuelleComponent.prototype.updateWidth = function (value) {
        //console.log("width: " + value );
        var width = (value / this.sizefactor) - this.lonaWidth;
        if (this.lonaWidth + width >= 1000 / this.sizefactor && this.lonaWidth + width <= 3000 / this.sizefactor) {
            this.lonaWidth += width;
            this.topWidth += width;
            this.outlineRightX += (width / 2);
            this.outlineLeftX -= (width / 2);
            this.centerOutlineLeftX -= (width / 2);
            this.centerOutlineRightX += (width / 2);
            this.dividerWidth = this.lonaWidth + this.outlineWidth * 2;
            if (this.lonaWidth * this.sizefactor <= 1500) {
                this.imageAngleWidth = 190;
                //decrement height equal to width
                this.imageAngleHeight = 97.5;
                this.imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
                this.imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
                this.imageAngle_10_Y = this.imageAngle_0_Y + this.imageAngleHeight;
                this.imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
                this.imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
                this.imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
            }
            else {
                this.updateHeight(this.lonaHeight * this.sizefactor);
            }
        }
    };
    DrawMuelleComponent.prototype.updateHeight = function (value) {
        var height = (value / this.sizefactor) - this.lonaHeight;
        if (this.lonaHeight + height >= 2000 / this.sizefactor && this.lonaHeight + height <= 3000 / this.sizefactor) {
            var currentLonaHeight = this.lonaHeight;
            this.lonaHeight += height;
            this.outlineHeight += height;
            this.centerOutlineHeight += height;
            this.topY -= (height / 2);
            this.angleShapeY -= (height / 2);
            this.textAngleY -= (height / 2);
            this.divider_0_Y -= (height / 2);
            this.divider_1_Y -= (height / 2);
            this.divider_2_Y -= (height / 2);
            this.divider_3_Y -= (height / 2);
            this.divider_4_Y -= (height / 2);
            this.divider_5_Y -= (height / 2);
            this.divider_6_Y -= (height / 2);
            this.divider_7_Y -= (height / 2);
            this.divider_8_Y -= (height / 2);
            this.divider_9_Y -= (height / 2);
            this.divider_10_Y -= (height / 2);
            this.divider_11_Y -= (height / 2);
            this.divider_12_Y -= (height / 2);
            this.divider_13_Y -= (height / 2);
            this.divider_14_Y -= (height / 2);
            this.divider_15_Y -= (height / 2);
            this.divider_16_Y -= (height / 2);
            this.divider_17_Y -= (height / 2);
            this.divider_18_Y -= (height / 2);
            this.divider_19_Y -= (height / 2);
            this.divider_20_Y -= (height / 2);
            this.divider_21_Y -= (height / 2);
            this.extraLonaY += (height / 2);
            this.angleShapeHeight = value * 150 / 3000;
            this.angleShapeY = this.topY + (this.topHeight / 2) + (this.angleShapeHeight / 2) + 20;
            this.textAngleY = this.angleShapeY + 10;
            if (this.lonaWidth * this.sizefactor <= 1500) {
                this.imageAngleWidth = 190;
                //decrement height equal to width
                this.imageAngleHeight = 97.5;
            }
            else {
                this.imageAngleWidth = (value * 285 / 3000);
                //decrement height equal to width
                this.imageAngleHeight = 145 - ((285 - this.imageAngleWidth) / 2);
            }
            this.imageAngle_no_10_Y = this.angleShapeY + (this.angleShapeHeight / 2);
            this.imageAngle_0_Y = this.imageAngle_no_10_Y + this.imageAngleHeight;
            this.imageAngle_10_Y = this.imageAngle_0_Y + this.imageAngleHeight;
            this.imageAngle_0_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
            this.imageAngle_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
            this.imageAngle_no_10_X = (this.canvasWidth / 2) - (this.imageAngleWidth / 2);
        }
    };
    return DrawMuelleComponent;
}());
DrawMuelleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-draw-muelle',
        template: __webpack_require__("../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DrawMuelleComponent);

//# sourceMappingURL=draw-muelle.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" [formGroup]=\"quotationForm\" (ngSubmit)=\"registerQuotation(quotationForm)\" novalidate>\r\n  <div *ngFor=\"let property of product.properties\">\r\n    <div class=\"clearfix\" *ngIf=\"property.type === 'bool'\"></div>\r\n    <div class=\"col-xs-12 col-sm-6\">\r\n      <mat-form-field class=\"full-width\" *ngIf=\"property.type === 'integer' || property.type === 'list'\">\r\n        <input matInput class=\"full-width\" *ngIf=\"property.type === 'integer'\" type=\"number\" [placeholder]=\"property.name\" [(value)]=\"property.value\" [required]=\"true\" [min]=\"property.values[0]\" [max]=\"property.values[1]\" />\r\n        <mat-select *ngIf=\"property.type === 'list'\" placeholder=\"property.name\" [(value)]=\"property.value\" [required]=\"true\">\r\n          <mat-option *ngFor=\"let option of property.values\" [value]=\"option\">\r\n            {{ option.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-slide-toggle class=\"full-width\" *ngIf=\"property.type === 'bool'\" [required]=\"true\">\r\n        {{ property.name }}\r\n      </mat-slide-toggle>\r\n    </div>\r\n  </div>\r\n</form>\r\n<div class=\"clearfix\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotationFormComponent = (function () {
    function QuotationFormComponent() {
    }
    QuotationFormComponent.prototype.ngOnInit = function () {
        var controls = {};
        this.product.properties.forEach(function (property) {
            var control = null;
            var validations = [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required];
            switch (property.type) {
                case 'integer':
                    control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', validations);
                    break;
                case 'list':
                    control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', validations);
                    break;
                case 'bool':
                    control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', validations);
                    break;
            }
            controls[property.name] = control;
        });
        this.quotationForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](controls);
    };
    QuotationFormComponent.prototype.registerQuotation = function (quotationForm) {
    };
    return QuotationFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]) === "function" && _a || Object)
], QuotationFormComponent.prototype, "product", void 0);
QuotationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quotation-form',
        template: __webpack_require__("../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/quotation-form/quotation-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuotationFormComponent);

var _a;
//# sourceMappingURL=quotation-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quotation-jumbotron {\r\n  background: #467fbf;\r\n  padding: 10px 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.ul-with-border {\r\n  border: 1px solid #467fbf;\r\n}\r\n\r\n.stepper-box {\r\n  margin-top: 5px;\r\n  padding-bottom: 10px;\r\n  border: 1px dashed #467fbf;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.map {\r\n  height: 300px !important;\r\n}\r\n\r\n\r\n.form-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1\">\r\n  <h1 class=\"page-header\">Formulario De Cotización  </h1>\r\n  <p class=\"lead mb-small\">Llegaste al lugar correcto!</p>\r\n  <p class=\"text-justify\">\r\n    Ahora podras personalizar como desees tu producto,rellena el formulario a tu gusto el y al finalizar enviaremos el producto con sus planos personalizados al correo que nos has provisto.Solo se permite un producto por cotización,debido a esto cada vez\r\n    que presiónes en el boton de cotizar al finalizar el formulario empezaremos a procesar tu solicitud y en cuanto termine te sera entregada en tu correo.</p>\r\n  <div class=\"clearfix\"></div>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-3\">\r\n      <ul class=\"nav nav-pills nav-stacked ul-with-border\">\r\n        <li *ngFor=\"let productType of productTypes\" [ngClass]=\"{active: productType == selectedProductType }\">\r\n          <a href=\"javascript: void(0);\" (click)=\"selectProductType(productType)\">{{ productType.name }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-9\">\r\n      <div *ngIf=\"!selectedProductType\">\r\n        <div class=\"alert alert-info\">\r\n          <p class=\"text-strong\">Seleccione un Tipo de Producto</p>\r\n          <p>Para continuar con la cotización debe primero seleccionar un tipo de producto que desee cotizar.</p>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"selectedProductType\">\r\n        <h2>{{ selectedProductType.name }} <br><small>{{ selectedProductType.description }}</small></h2>\r\n\r\n        <mat-horizontal-stepper linear>\r\n          <mat-step [stepControl]=\"productForm\" label=\"Información de Producto\">\r\n            <div class=\"stepper-box\">\r\n              <div class=\"col-xs-12\">\r\n                <h3 class=\"text-center\">Información de Producto</h3>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <mat-select placeholder=\"Producto\" [(value)]=\"selectedProduct\" (change)=\"selectProduct($event.value)\" [required]=\"true\">\r\n                    <mat-option *ngFor=\"let product of selectedProductType.products\" [value]=\"product\">\r\n                      {{ product.name }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-6\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput class=\"full-width\" [(ngModel)]=\"productQuantity\" type=\"number\" placeholder=\"Cantidad\" min=\"1\" />\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <h4 *ngIf=\"selectedProduct !== null && showProductForm\" >Características de Producto</h4>\r\n              </div>\r\n              <div class=\"quotation-form-box\" *ngIf=\"selectedProduct !== null && showProductForm\">\r\n                <div class=\"col-xs-12\" *ngIf=\"selectedProduct.name === 'Maquinaria'\">\r\n                  <div class=\"col-xs-12\">\r\n                    <mat-slide-toggle color=\"primary\" class=\"full-width\" [(ngModel)]=\"showAllMachinery\">\r\n                      Mostrar toda la maquinaria\r\n                    </mat-slide-toggle>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <hr>\r\n                  <div class=\"col-xs-12\" [hidden]=\"showAllMachinery\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-sm-6\">\r\n                        <label class=\"control-label\">Modelo de Maquinaria</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"machinerySearch.isModelEnabled\">\r\n                          </span>\r\n                          <select class=\"form-control\" [(ngModel)]=\"machinerySearch.model\" [disabled]=\"!machinerySearch.isModelEnabled\">\r\n                            <option value=\"1\">Máquina: Cargadora frontal</option>\r\n                            <option value=\"2\">Máquina: Retroexcavadora</option>\r\n                            <option value=\"3\">Máquina: Montacargas</option>\r\n                            <option value=\"4\">Máquina: Camioneta</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <div class=\"col-xs-12 col-sm-6\">\r\n                        <label class=\"control-label\">¿Maquinaria nueva?</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"machinerySearch.isNewEnabled\">\r\n                          </span>\r\n                          <select class=\"form-control\" [(ngModel)]=\"machinerySearch.isNew\" [disabled]=\"!machinerySearch.isNewEnabled\">\r\n                            <option value=\"1\">Si</option>\r\n                            <option value=\"0\">No</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-sm-6\">\r\n                        <label class=\"control-label\">¿Maquinaria en buen estado?</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"machinerySearch.isStateEnabled\">\r\n                          </span>\r\n                          <select class=\"form-control\" [(ngModel)]=\"machinerySearch.state\" [disabled]=\"!machinerySearch.isStateEnabled\">\r\n                            <option value=\"1\">Si</option>\r\n                            <option value=\"0\">No</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <div class=\"col-xs-12 col-sm-6\">\r\n                        <label class=\"control-label\">¿Necesita reparación?</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"machinerySearch.isRepairableEnabled\">\r\n                          </span>\r\n                          <select class=\"form-control\" [(ngModel)]=\"machinerySearch.repairable\" [disabled]=\"!machinerySearch.isRepairableEnabled\">\r\n                            <option value=\"1\">Si</option>\r\n                            <option value=\"0\">No</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-sm-6\">\r\n                        <label class=\"control-label\">Tipo de documentación</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"machinerySearch.isDocumentationEnabled\">\r\n                          </span>\r\n                          <select class=\"form-control\" [(ngModel)]=\"machinerySearch.documentation\" [disabled]=\"!machinerySearch.isDocumentationEnabled\">\r\n                            <option [value]=\"idx\" *ngFor=\"let idx of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">Documentación {{ idx }}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <hr *ngIf=\"!showAllMachinery\">\r\n                  <div class=\"col-xs-12\">\r\n                    <agm-map class=\"map\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n                      <agm-marker [latitude]=\"machine.latitude\" [longitude]=\"machine.longitude\" *ngFor=\"let machine of filterMachinery()\" (markerClick)=\"selectMachinery(machine)\"></agm-marker>\r\n                    </agm-map>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <hr *ngIf=\"selectedMachine\">\r\n                  <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-9 text-left\" *ngIf=\"selectedMachine\">\r\n                    <h3>Datos de Maquinaria Seleccionada</h3>\r\n                    <table class=\"table table-striped table-condensed\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Caracteristica</th>\r\n                          <th>Valor</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let prop of selectedMachine.toArray()\">\r\n                          <td>{{ prop.key }}</td>\r\n                          <td>{{ prop.value}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <form class=\"form\" [formGroup]=\"productForm\" novalidate [hidden]=\"selectedProduct.name === 'Maquinaria'\">\r\n                  <div class=\"col-xs-12 text-center\" *ngIf=\"selectedProduct.name === 'Puerta rápida'\">\r\n                    <app-draw-door></app-draw-door>\r\n                  </div>\r\n                  <div class=\"col-xs-12 text-center\" *ngIf=\"selectedProduct.name === 'Sellos'\">\r\n                    <app-draw-muelle></app-draw-muelle>\r\n                  </div>\r\n                  <div class=\"col-xs-12 text-center\" *ngIf=\"selectedProduct.name === 'Abrigos'\">\r\n                    <app-draw-abrigo></app-draw-abrigo>\r\n                  </div>\r\n\r\n                  <div class=\"col-xs-12 text-center\" *ngIf=\"selectedProductType.name== 'Lego'\">\r\n                    <app-draw-lego (ready)=\"showCanvasInLegos(selectedProduct)\"></app-draw-lego>\r\n                  </div>\r\n\r\n                  <div *ngFor=\"let property of selectedProduct.properties\">\r\n                    <div class=\"clearfix\" *ngIf=\"property.type === 'bool'\"></div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"form-container\">\r\n                      <mat-form-field class=\"full-width\" *ngIf=\"property.type === 'integer' || property.type === 'list'\">\r\n\r\n                        <input class=\"example-right-align\" matInput class=\"full-width\" *ngIf=\"property.type === 'integer'\" [formControlName]=\"property.name\" type=\"number\" [placeholder]=\"formatPlaceHolderForm(property)\" [min]=\"property.values[0]\" [max]=\"property.values[1]\" (change)=\"updateDraw(selectedProduct.name, property.name)\" \r\n                        />\r\n                        <span matSuffix *ngIf=\"property.type === 'integer' && property.name != 'Exposicion_Aletas'\">\r\n                        {{formatSuffixForm(property)}}\r\n                        </span>\r\n                        <mat-select *ngIf=\"property.type === 'list'\" [formControlName]=\"property.name\" [placeholder]=\"formatPropertyName(property.name)\" [(value)]=\"property.value\" (change)=\"updateDraw(selectedProduct.name, property.name)\">\r\n                          <mat-option *ngFor=\"let option of property.values\" [value]=\"option\">\r\n                            {{ option.name }}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n\r\n                    </div>\r\n\r\n\r\n                      <mat-slide-toggle color=\"primary\" class=\"full-width\" [formControlName]=\"property.name\" *ngIf=\"property.type === 'bool'\">\r\n                        {{ formatPropertyName(property.name) }}\r\n                      </mat-slide-toggle>\r\n                      <mat-error style=\"margin-bottom: 10px;\" *ngIf=\"property.type === 'integer' && productForm.controls[property.name].hasError('min')\">\r\n                           <span class=\"fa fa-exclamation-triangle\"></span> El valor mínimo es: {{property.values[0]}}{{formatSuffixForm(property)}}\r\n                       </mat-error>\r\n                      <mat-error style=\"margin-bottom: 10px;\" *ngIf=\"property.type === 'integer' && productForm.controls[property.name].hasError('max')\">\r\n                           <span class=\"fa fa-exclamation-triangle\"></span> El valor máximo es: {{property.values[1]}}{{formatSuffixForm(property)}}\r\n                       </mat-error>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <div class=\"col-xs-12\">\r\n                  <button mat-raised-button matStepperNext color=\"primary\" [disabled]=\"productForm.invalid\" class=\"pull-right\">Siguiente</button>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n          </mat-step>\r\n          <mat-step label=\"Información de Cotización\" [stepControl]=\"quotationForm\">\r\n            <div class=\"stepper-box\">\r\n              <div class=\"quotation-form-box\">\r\n                <form class=\"form\" [formGroup]=\"quotationForm\" novalidate>\r\n                  <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-12\">\r\n                      <h3 class=\"text-center\">Información de Cotización</h3>\r\n                      <h4>Información General</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"firstName\" type=\"text\" placeholder=\"Nombres\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"lastName\" type=\"text\" placeholder=\"Apellidos\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"document\" type=\"text\" placeholder=\"Documento de Identidad\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"address\" type=\"text\" placeholder=\"Dirección\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"phone\" type=\"text\" placeholder=\"Teléfono\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-12\" *ngIf=\"!user\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                          <mat-form-field class=\"full-width\">\r\n                            <input matInput class=\"full-width\" id=\"password\" formControlName=\"password\" type=\"password\" placeholder='Contraseña*' />\r\n                          </mat-form-field>\r\n                          <mat-chip class=\"mat-primary\" *ngIf=\"quotationForm.controls.password.dirty && quotationForm.controls.password.errors\">\r\n                            <ul class=\"list-unstyled\">\r\n                              <li *ngIf=\"quotationForm.controls.password.hasError('required')\">\r\n                                <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                              </li>\r\n                              <li *ngIf=\"!quotationForm.controls.password.hasError('required') && quotationForm.controls.password.hasError('minlength')\">\r\n                                <span class=\"fa fa-exclamation\"></span> Oops, este campo debe contener minimo 8 caracteres!\r\n                              </li>\r\n                            </ul>\r\n                          </mat-chip>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                          <mat-form-field class=\"full-width\">\r\n                            <input matInput class=\"full-width\" id=\"confirmpassword\" formControlName=\"confirmPassword\" type=\"password\" placeholder='Confirmar contraseña*' />\r\n                          </mat-form-field>\r\n                          <mat-chip class=\"mat-primary\" *ngIf=\"quotationForm.controls.confirmPassword.dirty && quotationForm.controls.confirmPassword.errors\">\r\n                            <ul class=\"list-unstyled\">\r\n                              <li *ngIf=\"quotationForm.controls.confirmPassword.hasError('required')\">\r\n                                <span class=\"fa fa-exclamation\"></span> Oops, este campo es requerido!\r\n                              </li>\r\n                              <li *ngIf=\"!quotationForm.controls.confirmPassword.hasError('required') && quotationForm.value.password != quotationForm.value.confirmPassword\">\r\n                                <span class=\"fa fa-exclamation\"></span> Oops, los campos de contraseña deben coincidir!\r\n                              </li>\r\n                            </ul>\r\n                          </mat-chip>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                    </div>\r\n\r\n                    <div class=\"col-xs-12\">\r\n                      <h4>Información de Empresa</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"enterprise\" type=\"text\" placeholder=\"Empresa\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"nit\" type=\"text\" placeholder=\"NIT\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-6\">\r\n                      <mat-form-field class=\"full-width\">\r\n                        <input matInput class=\"full-width\" formControlName=\"role\" type=\"text\" placeholder=\"Rol en la compañia\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"col-xs-12\">\r\n                    <button mat-raised-button matStepperPrevious>Anterior</button>\r\n                    <button mat-raised-button matStepperNext color=\"primary\" [disabled]=\"quotationForm.invalid\" class=\"pull-right\">Siguiente</button>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </mat-step>\r\n          <mat-step label=\"Completar Cotización\">\r\n            <div class=\"stepper-box\">\r\n              <div class=\"quotation-form-box\">\r\n                <div class=\"col-xs-12\">\r\n                  <h3>Completar Cotización</h3>\r\n                  <p>Para completar el proceso de cotización, haga clic en el botón \"Procesar Cotización\" de la parte inferior.</p>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n                <br><br>\r\n                <div class=\"col-xs-12\">\r\n                  <button mat-raised-button matStepperPrevious>Anterior</button>\r\n                  <button mat-raised-button matStepperNext color=\"primary\" [disabled]=\"false\" class=\"pull-right\" (click)=\"saveQuotation(productForm, quotationForm)\">Procesar Cotización</button>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n            </div>\r\n          </mat-step>\r\n        </mat-horizontal-stepper>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n<br><br>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/quotation/quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__ = __webpack_require__("../../../../@yaga/leaflet-ng2/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_machinery_service__ = __webpack_require__("../../../../../src/app/services/machinery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_quotation_service__ = __webpack_require__("../../../../../src/app/services/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_product_property__ = __webpack_require__("../../../../../src/app/models/product-property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_quotation__ = __webpack_require__("../../../../../src/app/models/quotation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_machinery__ = __webpack_require__("../../../../../src/app/models/machinery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__draw_door_draw_door_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-door/draw-door.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__draw_lego_draw_lego_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-lego/draw-lego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__draw_muelle_draw_muelle_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-muelle/draw-muelle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__draw_abrigo_draw_abrigo_component__ = __webpack_require__("../../../../../src/app/pages/quotation/draw-abrigo/draw-abrigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_user_register__ = __webpack_require__("../../../../../src/app/models/user-register.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var QuotationComponent = (function () {
    function QuotationComponent(logger, notificationsService, authService, productService, quotationService, machineryService, router) {
        this.logger = logger;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.productService = productService;
        this.quotationService = quotationService;
        this.machineryService = machineryService;
        this.router = router;
        this.productTypes = [];
        this.selectedProductType = null;
        this.selectedProduct = null;
        this.productQuantity = 1;
        this.tileLayerUrl = __WEBPACK_IMPORTED_MODULE_5__yaga_leaflet_ng2__["OSM_TILE_LAYER_URL"];
        this.lat = 4.6260243;
        this.lng = -74.1624076;
        this.zoom = 11;
        this.user = null;
    }
    QuotationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allMachinery = null;
        this.machinerySearch = null;
        this.selectedMachine = null;
        this.showProductForm = false;
        var toast = this.notificationsService.info('Cargando', 'Cargando información...', { timeOut: 0 });
        this.productService.getProductTypes()
            .subscribe(function (result) {
            _this.notificationsService.remove(toast.id);
            _this.productTypes = result;
        }, function (error) {
            _this.logger.debug('Error: ', error);
        });
        this.user = this.authService.getUser();
        if (this.user) {
            this.quotationForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.firstName : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.lastName : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.address : '', []),
                phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.phone : '', []),
                document: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.document : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.email : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email]),
                enterprise: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.enterprise : '', []),
                nit: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.nit : '', []),
                role: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.role : '', []),
            });
            //register:
        }
        else {
            this.savingUser = false;
            var password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)]);
            var confirmPassword = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_18_ng2_validation__["CustomValidators"].equalTo(password)]);
            this.quotationForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.firstName : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.lastName : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.address : '', []),
                phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.phone : '', []),
                document: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.document : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
                email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.email : '', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email]),
                enterprise: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.enterprise : '', []),
                nit: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.nit : '', []),
                role: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.user ? this.user.role : '', []),
                password: password,
                confirmPassword: confirmPassword,
            });
        }
    };
    QuotationComponent.prototype.selectProductType = function (productType) {
        var _this = this;
        var toast = this.notificationsService.info('Cargando', 'Cargando información...', { timeOut: 0 });
        this.productService.getProducts(productType.id)
            .subscribe(function (result) {
            _this.notificationsService.remove(toast.id);
            productType.products = result;
            _this.selectedProduct = null;
            _this.selectedProductType = productType;
        }, function (error) {
            if (error.status === 401) {
                var responseData = JSON.parse(error.error);
                if (responseData.errors) {
                    var toast_1 = _this.notificationsService.error('Error en Formulario', responseData.errors[0]);
                }
                else {
                    var toast_2 = _this.notificationsService.error('Error en Formulario', 'Parece que han habido un error. Vuelva a intentarlo');
                }
            }
            else {
                var toast_3 = _this.notificationsService.error('Error ' + error.status, error.statusText);
            }
        });
    };
    QuotationComponent.prototype.selectProduct = function (product) {
        var _this = this;
        this.showProductForm = false;
        var toast = this.notificationsService.info('Cargando', 'Cargando información...', { timeOut: 0 });
        this.productService.getProductProperties(product.id)
            .subscribe(function (result) {
            _this.notificationsService.remove(toast.id);
            product.properties = result;
            _this.initProductForm(product);
            _this.selectedProduct = product;
            _this.showProductForm = true;
            if (product.name === 'Maquinaria') {
                _this.machinerySearch = new __WEBPACK_IMPORTED_MODULE_13__models_machinery__["a" /* Machinery */](null);
                _this.showAllMachinery = true;
                _this.selectedMachine = null;
                _this.machineryService.getAll()
                    .subscribe(function (result) {
                    _this.allMachinery = result;
                });
            }
        }, function (error) {
            if (error.status === 401) {
                var responseData = JSON.parse(error.error);
                if (responseData.errors) {
                    var toast_4 = _this.notificationsService.error('Error en Formulario', responseData.errors[0]);
                }
                else {
                    var toast_5 = _this.notificationsService.error('Error en Formulario', 'Parece que han habido un error. Vuelva a intentarlo');
                }
            }
            else {
                var toast_6 = _this.notificationsService.error('Error ' + error.status, error.statusText);
            }
        });
    };
    QuotationComponent.prototype.initProductForm = function (product) {
        var controls = {};
        product.properties.forEach(function (property) {
            var control = null;
            var validations = [];
            switch (property.type) {
                case 'integer':
                case 'float':
                case 'string':
                    validations.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
                    validations.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(property.values[0]));
                    validations.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].max(property.values[1]));
                    control = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', validations);
                    // set the medium value option for default
                    // control.setValue(Math.floor(((property.values[1] - property.values[0])/2) + property.values[0]));
                    break;
                case 'list':
                    validations.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
                    control = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', validations);
                    break;
                case 'bool':
                    control = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', validations);
                    break;
            }
            controls[property.name] = control;
        });
        this.productForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"](controls);
    };
    QuotationComponent.prototype.saveQuotation = function (productForm, quotationForm) {
        this.makeQuotation(productForm, quotationForm);
    };
    QuotationComponent.prototype.updateDraw = function (productName, propertyName) {
        if (productName == 'Puerta rápida') {
            var value = this.productForm.get(propertyName).value;
            switch (propertyName) {
                case 'Ancho':
                    this.drawDoorComponent.updateWidth(value);
                    break;
                case 'Alto':
                    this.drawDoorComponent.updateHeight(value);
                    break;
                case 'Color_Lona':
                    this.drawDoorComponent.updateLonaColor(value.value);
                    break;
                case 'Color_Perfiles':
                    this.drawDoorComponent.updateOutlineColor(value.value);
                    break;
            }
        }
        else if (productName == 'Sellos') {
            var value = this.productForm.get(propertyName).value;
            switch (propertyName) {
                case 'Ancho':
                    this.drawMuelleComponent.updateWidth(value);
                    break;
                case 'Alto':
                    this.drawMuelleComponent.updateHeight(value);
                    break;
                case 'Color':
                    this.drawMuelleComponent.updateColor(value.value);
                    break;
                case 'Exposicion_Aletas':
                    this.drawMuelleComponent.changeAletaHeight(value.value);
                    break;
                case 'Inclinacion':
                    this.drawMuelleComponent.changeAngleShapeRotation(value);
                    break;
            }
        }
        else if (productName == 'Abrigos') {
            var value = this.productForm.get(propertyName).value;
            switch (propertyName) {
                case 'Dimensiones':
                    this.drawAbrigoComponent.changeSize(value.value);
                    break;
                case 'Color':
                    this.drawAbrigoComponent.updateColor(value.value);
                    break;
            }
        }
        else if (this.selectedProductType.name == 'Lego') {
            var value = this.productForm.get(propertyName).value.value;
            switch (propertyName) {
                case 'Cabina':
                    this.drawLegoComponent.changeCabinaSrc(value);
                    break;
                case 'Accesorio_Delantero':
                    this.drawLegoComponent.changeAccesorioDelanteroSrc(value);
                    break;
                case 'Accesorio_Trasero':
                    this.drawLegoComponent.changeAccesorioTraseroSrc(value);
                    break;
                case 'Inferior':
                    this.drawLegoComponent.changeInferiorSrc(value);
                    break;
            }
        }
    };
    QuotationComponent.prototype.formatPropertyName = function (name) {
        var re = /_/gi;
        name = name.replace(re, " ");
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.substr(1);
        var words = name.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].length >= 4) {
                switch (words[i].substr(words[i].length - 4)) {
                    case "cion":
                        words[i] = words[i].substr(0, words[i].length - 4) + "ción";
                        break;
                    case "sion":
                        words[i] = words[i].substr(0, words[i].length - 4) + "sión";
                        break;
                }
            }
        }
        name = "";
        for (var i = 0; i < words.length; i++) {
            name += words[i];
            if (i < words.length - 1) {
                name += " ";
            }
        }
        return name;
    };
    QuotationComponent.prototype.formatSuffixForm = function (property) {
        var suffix = '';
        if (property.name == 'Ancho' || property.name == 'Alto') {
            suffix = ' mm';
        }
        else if (property.name == 'Inclinacion') {
            suffix = '°';
        }
        return suffix;
    };
    QuotationComponent.prototype.formatPlaceHolderForm = function (property) {
        var name = '';
        var type = this.formatSuffixForm(property);
        name += this.formatPropertyName(property.name) + ' (' + property.values[0] + type + ' a ' + property.values[1] + type + ')';
        return name;
    };
    QuotationComponent.prototype.makeQuotation = function (productForm, quotationForm) {
        var _this = this;
        var productData = productForm.value;
        var quotationData = quotationForm.value;
        __WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"](productData, function (value, property) {
            var productProperty = _this.selectedProduct.properties.find(function (prop) { return prop.name === property; });
            if (productProperty instanceof __WEBPACK_IMPORTED_MODULE_11__models_product_property__["a" /* ProductProperty */]) {
                if (productProperty.type === 'list') {
                    productProperty.value = productProperty.value.value;
                }
                else if (productProperty.type === 'bool' && _this.selectedProduct.name != 'Maquinaria') {
                    if (value) {
                        productProperty.value = 1;
                    }
                    else {
                        productProperty.value = 0;
                    }
                }
                else if (productProperty.name == 'Exposicion_Aletas') {
                    switch (value) {
                        case '1':
                            productProperty.value = 1;
                            break;
                        case '2':
                            productProperty.value = 2;
                            break;
                        case '3':
                            productProperty.value = 3;
                            break;
                    }
                }
                else {
                    productProperty.value = value;
                }
            }
        });
        quotationData.quantity = this.productQuantity;
        quotationData.date = new Date();
        var quotation = new __WEBPACK_IMPORTED_MODULE_12__models_quotation__["a" /* Quotation */](quotationData, this.authService.getUser(), this.selectedProduct);
        this.quotationService.create(quotation)
            .subscribe(function (result) {
            if (result.statusText === 'Created') {
                if (_this.selectedProduct.name == "Maquinaria") {
                    _this.quotationService.activeMachienaryScript().subscribe(function (result) {
                        if (result.statusText == 'OK') {
                            console.log("Script de maquinaria Activado!!! ");
                            //console.log(result);
                        }
                    }, function (error) {
                        //console.log("ERROR activando script de maquinaria: ")
                        //console.log(error);
                    });
                }
                var toast = _this.notificationsService.success('Cotización Guardada', 'La cotización ha sido guardada correctamente', { timeOut: 5000 });
                if (quotation.user) {
                    _this.router.navigateByUrl('/auth/profile');
                }
                else {
                    _this.router.navigateByUrl('');
                }
            }
        }, function (error) {
            var toast = _this.notificationsService.error('Error Guardando Cotización', 'No se ha podido guardar la cotización');
        });
    };
    QuotationComponent.prototype.filterMachinery = function () {
        var _this = this;
        if (!this.allMachinery) {
            return [];
        }
        if (this.showAllMachinery) {
            return this.allMachinery;
        }
        else {
            return this.allMachinery.filter(function (machinery) {
                var valid = true;
                if (_this.machinerySearch.isModelEnabled) {
                    valid = valid && machinery.model == _this.machinerySearch.model;
                }
                if (_this.machinerySearch.isNewEnabled) {
                    valid = valid && machinery.isNew == _this.machinerySearch.isNew;
                }
                if (_this.machinerySearch.isStateEnabled) {
                    valid = valid && machinery.state == _this.machinerySearch.state;
                }
                if (_this.machinerySearch.isRepairableEnabled) {
                    valid = valid && machinery.repairable == _this.machinerySearch.repairable;
                }
                if (_this.machinerySearch.isDocumentationEnabled) {
                    valid = valid && machinery.documentation == _this.machinerySearch.documentation;
                }
                return valid;
            });
        }
    };
    QuotationComponent.prototype.selectMachinery = function (machine) {
        var _this = this;
        this.selectedMachine = machine;
        __WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"](machine.originalData, function (value, key) {
            _this.productForm.controls[key].setValue(value);
        });
        console.log(this.productForm);
    };
    QuotationComponent.prototype.registerUser = function (productForm, quotationForm) {
        var _this = this;
        this.logger.info('Registering user:', quotationForm.value);
        this.savingUser = true;
        var registerData = new __WEBPACK_IMPORTED_MODULE_19__models_user_register__["a" /* UserRegister */](quotationForm.value);
        this.authService.register(registerData)
            .subscribe(function (result) {
            if (result.status === 'success') {
                _this.savingUser = false;
                var toast = _this.notificationsService.success('Usuario Creado', 'El usuario ha sido creado correctamente');
                _this.makeQuotation(productForm, quotationForm);
            }
        }, function (error) {
            _this.savingUser = false;
            if (error.status === 422) {
                var responseData = JSON.parse(error.error);
                if (responseData.errors.email) {
                    var toast = _this.notificationsService.error('Error en Formulario', responseData.errors['full_messages'][0]);
                }
                else {
                    var toast = _this.notificationsService.error('Error en Formulario', 'Parece que han habido un error. Vuelva a intentarlo');
                }
            }
            else {
                var toast = _this.notificationsService.error('Error ' + error.status, error.statusText);
            }
        });
    };
    return QuotationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_14__draw_door_draw_door_component__["a" /* DrawDoorComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14__draw_door_draw_door_component__["a" /* DrawDoorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__draw_door_draw_door_component__["a" /* DrawDoorComponent */]) === "function" && _a || Object)
], QuotationComponent.prototype, "drawDoorComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_15__draw_lego_draw_lego_component__["a" /* DrawLegoComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_15__draw_lego_draw_lego_component__["a" /* DrawLegoComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__draw_lego_draw_lego_component__["a" /* DrawLegoComponent */]) === "function" && _b || Object)
], QuotationComponent.prototype, "drawLegoComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_16__draw_muelle_draw_muelle_component__["a" /* DrawMuelleComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_16__draw_muelle_draw_muelle_component__["a" /* DrawMuelleComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__draw_muelle_draw_muelle_component__["a" /* DrawMuelleComponent */]) === "function" && _c || Object)
], QuotationComponent.prototype, "drawMuelleComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_17__draw_abrigo_draw_abrigo_component__["a" /* DrawAbrigoComponent */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_17__draw_abrigo_draw_abrigo_component__["a" /* DrawAbrigoComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__draw_abrigo_draw_abrigo_component__["a" /* DrawAbrigoComponent */]) === "function" && _d || Object)
], QuotationComponent.prototype, "drawAbrigoComponent", void 0);
QuotationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quotation',
        template: __webpack_require__("../../../../../src/app/pages/quotation/quotation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/quotation/quotation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_product_service__["a" /* ProductService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__services_quotation_service__["a" /* QuotationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_quotation_service__["a" /* QuotationService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_machinery_service__["a" /* MachineryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_machinery_service__["a" /* MachineryService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _l || Object])
], QuotationComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=quotation.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <h4>Acerca de Nosotros</h4>\r\n      <p>\r\n        Somos un Startup nacido de la materia Computación Gráfica en la Universidad Nacional de Colombia. Brindamos soluciones tecnológicas al alcance de las personas y las empresas.\r\n      </p>\r\n      <hr>\r\n      <h4>Suscribase a nuestro boletín mensual</h4>\r\n\r\n\r\n \r\n    <form>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su e-mail\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-send\"></i></button>\r\n          </span>\r\n        </div>\r\n        <!-- /input-group -->\r\n    </form> \r\n\r\n\r\n      <hr class=\"hidden-md hidden-lg hidden-sm\">\r\n    </div>\r\n    <!-- /.col-md-3 -->\r\n\r\n    <div class=\"col-sm-6 col-sm-offset-0 col-md-4 col-md-offset-4\">\r\n      <h4>Contacto</h4>\r\n      <p>\r\n        <strong>Computación Gráfica Ltd.</strong>\r\n        <br>Universidad Nacional de Colombia\r\n        <br>Sede Bogotá\r\n        <br>Carrera 45 # 26-85\r\n        <br>Bogotá D.C.\r\n        <br>\r\n        <strong>Colombia</strong>\r\n      </p>\r\n\r\n      <a href=\"javascript: void(0);\" routerLink=\"contact/\" class=\"btn btn-small btn-template-main\">Contáctese con Nosotros</a>\r\n      <hr class=\"hidden-md hidden-lg hidden-sm\">\r\n    </div>\r\n    <!-- /.col-md-3 -->\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n<!-- /#footer -->\r\n\r\n<!-- *** FOOTER END *** -->\r\n\r\n<!-- *** COPYRIGHT ***\r\n_________________________________________________________ -->\r\n\r\n<div id=\"copyright\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n      <p class=\"pull-left\">&copy; 2017. Computación Gráfica</p>\r\n      <p class=\"pull-right\">Diseñado por <Strong>Web Team</Strong></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/partials/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n  <!-- *** TOP ***\r\n  _________________________________________________________ -->\r\n  <div id=\"top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-5 contact\">\r\n          <p class=\"hidden-sm hidden-xs\">Contactenos al +57 322 942 25 67 o contact@cg2017-2.com.</p>\r\n          <p class=\"hidden-md hidden-lg\">\r\n            <a href=\"#\" data-animate-hover=\"pulse\"><i class=\"fa fa-phone\"></i></a>\r\n            <a href=\"#\" data-animate-hover=\"pulse\"><i class=\"fa fa-envelope\"></i></a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-xs-7\">\r\n          <div class=\"social\">\r\n            <a href=\"http://www.facebook.com\" class=\"externa  l facebook\" data-animate-hover=\"pulse\" title=\"Siguenos en Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            <a href=\"http://www.gmail.com\" class=\"external gplus\" data-animate-hover=\"pulse\" title=\"Siguenos en Google+\"><i class=\"fa fa-google-plus\"></i></a>\r\n            <a href=\"http://www.twitter.com\" class=\"external twitter\" data-animate-hover=\"pulse\" title=\"Siguenos en Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            <a href=\"https://login.unal.edu.co\" class=\"email\" data-animate-hover=\"pulse\" title=\"Envianos un email\"><i class=\"fa fa-envelope\"></i></a>\r\n          </div>\r\n\r\n          <div class=\"login\">\r\n            <a href=\"#\" routerLink=\"auth/login\" *ngIf=\"authService.isGuest()\">\r\n              <i class=\"fa fa-sign-in\"></i> <span class=\"hidden-xs text-uppercase\">Acceder</span>\r\n            </a>\r\n            <a href=\"#\" routerLink=\"auth/register\" *ngIf=\"authService.isGuest()\">\r\n              <i class=\"fa fa-user\"></i> <span class=\"hidden-xs text-uppercase\">Registrese!</span>\r\n            </a>\r\n            <a href=\"#\" routerLink=\"auth/profile\" *ngIf=\"authService.isAuth()\">\r\n              <i class=\"fa fa-user\"></i> <span class=\"hidden-xs text-uppercase\">Mi Perfil</span>\r\n            </a>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- *** TOP END *** -->\r\n\r\n  <!-- *** NAVBAR ***\r\n  _________________________________________________________ -->\r\n  <div class=\"navbar-affixed-top\" data-spy=\"affix\" data-offset-top=\"200\">\r\n    <div class=\"navbar navbar-default\" role=\"navigation\" id=\"navbar\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand home\" href=\"javascript: void(0);\" routerLink=\"/\">\r\n            <img src=\"assets/img/logoEnd.png\" alt=\"Universal logo\" class=\"hidden-xs hidden-sm\">\r\n            <img src=\"assets/img/logoEnd.png\" alt=\"Universal logo\" class=\"visible-xs visible-sm\"><span class=\"sr-only\">Universal - go to homepage</span>\r\n          </a>\r\n          <div class=\"navbar-buttons\">\r\n            <button type=\"button\" class=\"navbar-toggle btn-template-main\" data-toggle=\"collapse\" data-target=\"#navigation\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!--/.navbar-header -->\r\n\r\n        <div class=\"navbar-collapse collapse\" id=\"navigation\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <a href=\"javascript: void(0);\">Inicio</a>\r\n            </li>\r\n            <li class=\"dropdown\" routerLinkActive=\"active\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">Productos <b class=\"caret\"></b></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a routerLink=\"products/doors\" href=\"javascript: void(0);\">Puertas Rápidas</a></li>\r\n                <li><a routerLink=\"products/machinery\" href=\"javascript: void(0);\">Maquinaria Pesada</a></li>\r\n                <li><a routerLink=\"products/legos\" href=\"javascript: void(0);\">Fichas de Legos</a></li>\r\n              </ul>\r\n            </li>\r\n            <li routerLink=\"quotation/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <a href=\"javascript: void(0);\">Cotizar</a>\r\n            </li>\r\n            <li routerLink=\"contact/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <a href=\"javascript: void(0);\">Contacto</a>\r\n            </li>\r\n            <li routerLink=\"auth/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" *ngIf=\"authService.isGuest()\">\r\n              <a href=\"javascript: void(0);\">Iniciar Sesión</a>\r\n            </li>\r\n            <li class=\"dropdown\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: false}\" *ngIf=\"authService.isAuth()\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"200\">{{ authService.getUser().firstName }} <b class=\"caret\"></b></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a routerLink=\"auth/profile\" href=\"javascript: void(0);\">Mi Perfil</a></li>\r\n                <li><a (click)=\"logoutUser()\" href=\"javascript: void(0);\">Cerrar Sesión</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n      </div>\r\n    </div>\r\n    <!-- /#navbar -->\r\n  </div>\r\n  <!-- *** NAVBAR END *** -->\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(router, authService, logger, notificationsService) {
        this.router = router;
        this.authService = authService;
        this.logger = logger;
        this.notificationsService = notificationsService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logoutUser = function () {
        var _this = this;
        this.authService.logOut()
            .subscribe(function (response) {
            if (response.success === true) {
                var toast = _this.notificationsService.success('Sesión Cerrada', 'La sesión ha sido cerrada correctamente');
                _this.router.navigateByUrl('/');
            }
        }, function (error) {
            var toast = _this.notificationsService.error('Error Cerrando Sesión', 'No sé ha podido cerrar sesión');
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/partials/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_auth__ = __webpack_require__("../../../../../src/app/models/auth.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.url = 'https://cgstore-back2017.herokuapp.com/auth';
        var authData = JSON.parse(window.localStorage.getItem('auth'));
        if (authData) {
            this.auth = new __WEBPACK_IMPORTED_MODULE_4__models_auth__["a" /* Auth */](authData.uid, authData.client, authData.token, new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](authData.user));
        }
    }
    AuthService.prototype.logIn = function (credentials) {
        var _this = this;
        return this.http.post(this.url + '/sign_in', credentials, { observe: 'response' })
            .map(function (response) {
            var uid = response.body['data'].uid;
            var client = response.headers.get('Client');
            var token = response.headers.get('Access-Token');
            var user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](response.body['data']);
            _this.auth = new __WEBPACK_IMPORTED_MODULE_4__models_auth__["a" /* Auth */](uid, client, token, user);
            window.localStorage.setItem('auth', JSON.stringify(_this.auth));
            return response.body;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    AuthService.prototype.logOut = function () {
        var _this = this;
        if (this.isAuth()) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](this.auth.getLogoutData());
            return this.http.delete(this.url + '/sign_out', { headers: headers, observe: 'response' })
                .map(function (response) {
                if (response.status === 200 && response.body['success'] === true) {
                    window.localStorage.removeItem('auth');
                    _this.auth = null;
                }
                return response.body;
            })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
        }
    };
    AuthService.prototype.register = function (register) {
        var _this = this;
        return this.http.post(this.url, register.toJSON(), { observe: 'response' })
            .map(function (response) {
            var uid = response.body['data'].uid;
            var client = response.headers.get('Client');
            var token = response.headers.get('Access-Token');
            var user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](response.body['data']);
            _this.auth = new __WEBPACK_IMPORTED_MODULE_4__models_auth__["a" /* Auth */](uid, client, token, user);
            window.localStorage.setItem('auth', JSON.stringify(_this.auth));
            return response.body;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    AuthService.prototype.isAuth = function () {
        return this.auth && this.auth.check();
    };
    AuthService.prototype.isGuest = function () {
        return !this.auth || (this.auth && !this.auth.check());
    };
    AuthService.prototype.getUser = function () {
        if (this.auth) {
            return this.auth.getUser();
        }
        return null;
    };
    AuthService.prototype.updateUser = function () {
    };
    AuthService.prototype.updatePassword = function () {
    };
    AuthService.prototype.setRedirectMessage = function (message) {
        this.redirectMessage = message;
    };
    AuthService.prototype.getRedirectMessage = function () {
        return this.redirectMessage;
    };
    AuthService.prototype.unsetRedirectMessage = function () {
        this.redirectMessage = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/machinery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_machinery__ = __webpack_require__("../../../../../src/app/models/machinery.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MachineryService = (function () {
    function MachineryService(http) {
        this.http = http;
        this.url = 'https://cgstore-back2017.herokuapp.com/heavyequipments';
    }
    MachineryService.prototype.getAll = function () {
        return this.http.post(this.url, { parametro1: 1 })
            .map(function (result) {
            var listMachinery = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](result, function (machinery) {
                listMachinery.push(new __WEBPACK_IMPORTED_MODULE_4__models_machinery__["a" /* Machinery */](machinery));
            });
            return listMachinery;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    return MachineryService;
}());
MachineryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MachineryService);

var _a;
//# sourceMappingURL=machinery.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__ = __webpack_require__("../../../../angular2-logger/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_product_type__ = __webpack_require__("../../../../../src/app/models/product-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_product_property__ = __webpack_require__("../../../../../src/app/models/product-property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductService = (function () {
    function ProductService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.url = 'https://cgstore-back2017.herokuapp.com/consultproducts';
    }
    ProductService.prototype.getProductTypes = function () {
        return this.http.post(this.url, { parametro1: 1 })
            .map(function (response) {
            var productTypes = [];
            __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](response, function (productType) {
                productTypes.push(new __WEBPACK_IMPORTED_MODULE_5__models_product_type__["a" /* ProductType */](productType));
            });
            return productTypes;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    ProductService.prototype.getProducts = function (productTypeId) {
        return this.http.post(this.url, { parametro1: 2, parametro2: productTypeId })
            .map(function (response) {
            var products = [];
            __WEBPACK_IMPORTED_MODULE_4_lodash__["forEach"](response, function (product) {
                products.push(new __WEBPACK_IMPORTED_MODULE_7__models_product__["a" /* Product */](product));
            });
            return products;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    ProductService.prototype.getProductProperties = function (productId) {
        return this.http.post(this.url, { parametro1: 3, parametro2: productId })
            .map(function (response) { return response.map(function (property) {
            property = new __WEBPACK_IMPORTED_MODULE_6__models_product_property__["a" /* ProductProperty */](property);
            if (property.type === 'integer' || property.type == 'bool') {
                property.values = property.values.split(',').map(function (val) { return parseInt(val); });
            }
            else if (property.type === 'list') {
                var items_1 = [];
                property.values.split(',').map(function (item) {
                    var data = item.split('-');
                    //console.log(data.length);
                    //console.log(data[0]);
                    if (data.length == 2) {
                        data[0] = parseInt(data[0]);
                        items_1.push({
                            value: data[0],
                            name: data[1]
                        });
                    }
                    else if (data.length == 1) {
                        items_1.push({
                            value: data[0],
                            name: data[0]
                        });
                    }
                });
                property.values = items_1;
            }
            return property;
        }).sort(function (a, b) { return a.type < b.type ? 1 : -1; }); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'ServerError'); });
        ;
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_logger_core__["Logger"]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/quotation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_quotation__ = __webpack_require__("../../../../../src/app/models/quotation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**/
var QuotationService = (function () {
    function QuotationService(http) {
        this.http = http;
        this.url = 'https://cgstore-back2017.herokuapp.com/';
        this.urlMachienary = 'https://script.google.com/macros/s/AKfycbxTTi1hkoAUzJCADQcw4wRZnFBo8J0OqRIxfiC-iEgy6ymW1Ncw/exec';
    }
    QuotationService.prototype.getQuotations = function (userId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(10000)
            .flatMap(function () { return _this.http.post(_this.url + 'user_quote', { user_id: userId }, { observe: 'response' })
            .map(function (response) {
            var quotations = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](response.body, function (quote) {
                var quotation = new __WEBPACK_IMPORTED_MODULE_4__models_quotation__["a" /* Quotation */](quote);
                quotation.originalData = quote;
                quotations.push(quotation);
            });
            return quotations;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'ServerError'); }); });
    };
    QuotationService.prototype.create = function (quotation) {
        return this.http.post(this.url + 'new_quote', quotation.toJSON(), { observe: 'response' })
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    QuotationService.prototype.activeMachienaryScript = function () {
        console.log("Activando maquinaria...");
        return this.http.get(this.urlMachienary, { observe: 'response', responseType: 'text' })
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || 'ServerError'); });
    };
    return QuotationService;
}());
QuotationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], QuotationService);

var _a;
//# sourceMappingURL=quotation.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map