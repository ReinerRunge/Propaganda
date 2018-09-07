(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <div class=\"page-container\">\n        <div class=\"content-container\">\n    \n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n    \n                <div *ngIf=\"loggingIn\" class=\"init-spinner\">\n                  <p class=\"loading-text\">{{loadingText}}</p>\n                  <ion-spinner></ion-spinner>\n                </div>\n    \n                <div *ngIf=\"!loggingIn\">\n                  <ion-list class=\"form-dark\">\n                    <ion-item no-lines>\n                      <ion-icon name='md-contact' item-left></ion-icon>\n                      <ion-label stacked>Email Address</ion-label>\n                      <ion-input autocomplete=\"false\" type=\"email\" autocapitalize=off placeholder=\"Enter your Email Address\"></ion-input>\n                    </ion-item>\n                    <ion-item no-lines>\n                      <ion-icon name='md-lock' item-left></ion-icon>\n                      <ion-label stacked>Password</ion-label>\n                      <ion-input autocomple=\"false\" type=\"password\" placeholder=\"Enter your Password\" (keypress)=\"keyPress($event.keyCode)\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n    \n                  <button class=\"btn-large\" ion-button (click)=\"login()\" color=\"primary\" [disabled]=\"!loginForm.valid\">LOGIN</button>\n                  <a (click)=\"forgotPasword()\" class=\"password__link\">Forgot your password?</a>\n                </div>\n    \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n\n  <!-- <div class=\"login-container\">\n    <ion-label>Propaganda</ion-label>\n    <ion-item>\n      <ion-icon slot='start' name='contact'></ion-icon>\n      <ion-input placeholder='username' type='text'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon slot='start' name='lock'></ion-icon>\n        <ion-input placeholder='password' type='password'></ion-input>\n    </ion-item>\n      <ion-button class=\"login-button\">Login</ion-button>\n  </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-login ion-content .page-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%; }\n  page-login ion-content .page-container .content-container {\n    display: flex;\n    width: 70%;\n    padding: 4rem;\n    background: red;\n    box-shadow: 0 0 116px -6px rgba(0, 0, 0, 0.4);\n    border-radius: 2px; }\n  page-login ion-content .page-container .content-container ion-grid,\n    page-login ion-content .page-container .content-container ion-row {\n      height: 100%; }\n  page-login ion-content .page-container .content-container ion-list {\n      margin-bottom: 4rem !important; }\n  page-login ion-content .page-container .content-container img {\n      width: 100%;\n      margin-bottom: 4rem !important; }\n  page-login ion-content .page-container .content-container ion-list {\n      margin-bottom: 4rem; }\n  page-login ion-content .page-container .content-container a.password__link {\n      margin: 2rem 0 0 !important;\n      display: block;\n      text-align: center;\n      text-transform: uppercase;\n      color: red; }\n  page-login ion-content .init-spinner {\n  text-align: center;\n  position: relative;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: grey; }\n  page-login ion-content .init-spinner img {\n    max-width: 400px;\n    display: block;\n    margin: 0 auto 3rem; }\n  page-login ion-content .init-spinner ion-spinner * {\n    stroke: red; }\n  page-login ion-content .init-spinner .loading-text {\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 2rem;\n    color: #fff;\n    font-size: 2rem;\n    text-transform: uppercase; }\n  page-login ion-content .init-spinner .loading-text:after {\n      content: '...';\n      color: red;\n      letter-spacing: .3rem;\n      margin-left: .3rem; }\n  page-login ion-content .spinner-crescent circle {\n  stroke: grey; }\n"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.loggingIn = false;
        this.loadingText = 'Logging you in..';
        this.loginForm = this.formBuilder.group({
            emailaddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map