webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<!-- <app-chat></app-chat> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ballons_ballons_component__ = __webpack_require__("../../../../../src/app/components/ballons/ballons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chat_settings_toneAnalyzer_settings_component_tone__ = __webpack_require__("../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_error_user_error_user_component__ = __webpack_require__("../../../../../src/app/components/error-user/error-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_UserService_user_service__ = __webpack_require__("../../../../../src/app/services/UserService/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_ConversationService_conversation_service__ = __webpack_require__("../../../../../src/app/services/ConversationService/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_ToneService_tone_service__ = __webpack_require__("../../../../../src/app/services/ToneService/tone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guards__ = __webpack_require__("../../../../../src/app/guards/auth.guards.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_9__components_chat_chat_component__["a" /* ChatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guards__["a" /* AuthGuard */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_ballons_ballons_component__["a" /* BallonsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_error_user_error_user_component__["a" /* ErrorUserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_chat_settings_toneAnalyzer_settings_component_tone__["a" /* SettingsToneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__components_ballons_ballons_component__["a" /* BallonsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_error_user_error_user_component__["a" /* ErrorUserComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_ConversationService_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_17__guards_auth_guards__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_UserService_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__services_ToneService_tone_service__["a" /* ToneService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/ballons/ballons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divBallon {\r\n    min-width: 20%;\r\n    max-width: 60%;\r\n    border-radius: 1rem;\r\n    margin: 1vh auto;\r\n    padding: .4rem;\r\n    -webkit-user-select: text;\r\n       -moz-user-select: text;\r\n        -ms-user-select: text;\r\n            user-select: text;\r\n    cursor: text;\r\n}\r\n\r\n.logo {\r\n    width: 5%;\r\n}\r\n\r\n.ballon {\r\n    width: 92%;\r\n    padding: 0;\r\n}\r\n\r\n.ballonLeft {\r\n    float: left;\r\n    background-color: #00b0ff;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n    border-top-left-radius: 0;\r\n    color: #fff;\r\n    margin-left: 8vw;\r\n}\r\n\r\n.ballonRight {\r\n    float: right;\r\n    background-color: #eceff1;\r\n    box-shadow: 0 1px 1px rgba(97, 18, 18, 0.5);\r\n    border-top-right-radius: 0;\r\n    word-wrap: break-word;\r\n    margin-right: 5vw;\r\n}\r\n\r\n.imgWatson {\r\n    border-radius: 5px;\r\n    width: 3rem;\r\n    height: 2rem;\r\n    margin-top: 1.5vh;\r\n    padding: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .divBallon {\r\n        border-radius: 2rem;\r\n        margin: 2vh auto;\r\n        padding: .5rem;\r\n    }\r\n\r\n    .logo {\r\n        padding-right: 0;\r\n    }\r\n\r\n    .imgWatson {\r\n        width: 4rem;\r\n        height: 3rem;\r\n    }\r\n\r\n    .ballon {\r\n        width: 100%;\r\n    }\r\n\r\n    .ballonLeft {\r\n        border-top-left-radius: 0;\r\n        margin-left: 0;\r\n    }\r\n\r\n    .ballonRight {\r\n        border-top-right-radius: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ballons/ballons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-1 col-sm-1 logo\">\n      <div *ngIf=\"isSara\">\n          <img class=\"imgWatson\" src=\"./assets/img/watson-logo.png\" />\n      </div>\n  </div>\n  <div class=\"col-md-10 col-sm-10 ballon\">\n      <div [ngClass]=\"getBallowClass()\">\n          <div #divContentBallon></div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/ballons/ballons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallonsComponent; });
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

var BallonsComponent = (function () {
    function BallonsComponent() {
    }
    BallonsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BallonsComponent.prototype, "setIsLeft", {
        //Propriedade para informar se o balão deve ficar a direita ou a esquerda do diálogo
        set: function (value) {
            this.elementSideValue = (value == false ? "RIGHT" : "LEFT");
            this.isSara = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BallonsComponent.prototype, "setMessage", {
        //Informa pela propriedade o valor a ser exibido no balão
        set: function (value) {
            this.divContentBallon.nativeElement.innerHTML = value;
        },
        enumerable: true,
        configurable: true
    });
    //Função responsável por verificar se aplicará o css do balão de diálogo
    //do Watson (lado esquerdo) ou do usuário logado (lado direito)
    BallonsComponent.prototype.getBallowClass = function () {
        if (this.elementSideValue == undefined ||
            this.elementSideValue == null ||
            this.elementSideValue == "LEFT") {
            return "divBallon ballonLeft";
        }
        return "divBallon ballonRight";
    };
    return BallonsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('divContentBallon'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], BallonsComponent.prototype, "divContentBallon", void 0);
BallonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ballons',
        template: __webpack_require__("../../../../../src/app/components/ballons/ballons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ballons/ballons.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BallonsComponent);

var _a;
//# sourceMappingURL=ballons.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n    min-width: 95vw;\r\n    min-height: 85vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.panelChat {\r\n    margin-top: 5vh;\r\n    min-height: 70vh;\r\n    border: 1px solid rgba(30,30,120,.7);\r\n    border-radius: 5px;\r\n    max-height: 70vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    min-width: 95vw;\r\n}\r\n\r\n.panelChat::-webkit-scrollbar-track {\r\n    background-color: #1A94C4;\r\n}\r\n\r\n.panelChat::-webkit-scrollbar {\r\n    width: 6px;\r\n    background: #1A94C4;\r\n}\r\n\r\n.panelChat::-webkit-scrollbar-thumb {\r\n    background: rgba(11, 237, 114, .8);\r\n}\r\n\r\n.example-form {\r\n    min-width: 95vw;\r\n    width: 95vw;\r\n    min-height: 10vh;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.settings {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    max-width: 90vw;\r\n    min-width: 90vw;\r\n    height: auto;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    margin: 4vh auto;\r\n}\r\n\r\n.panel {\r\n    margin: 2vh auto;\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n    \r\n    .chat {\r\n        min-width: 80vw;\r\n    }\r\n\r\n    .form {\r\n        min-width: 80vw;\r\n    }\r\n\r\n    .panelChat {\r\n        min-width: 80vw;\r\n    }\r\n\r\n    .example-form {\r\n        min-width: 80vw;\r\n        width: 80vw;\r\n    }\r\n\r\n    .settings {\r\n        max-width: 80vw;\r\n        min-width: 80vw;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row wrap;\r\n                flex-flow: row wrap;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n\r\n    .panel {\r\n        max-width: 35vw;\r\n        margin: 1vh auto;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n  <md-tab label=\"Settings\" *ngIf=\"isAdmin\">\n    <div class=\"settings\">\n      <div class=\"panel\">\n        <app-settings-tone></app-settings-tone>\n      </div>\n\n      <div class=\"panel\">\n        <app-settings-tone></app-settings-tone>\n      </div>\n    </div>\n  </md-tab>\n  <md-tab label=\"Chat\">\n    <div class=\"chat\">\n      <div class=\"form\">\n        <div id=\"divOverflow\" class=\"panel-body panelChat\">\n          <div #divBallons></div>\n        </div>\n    \n        <form class=\"example-form\">\n          <md-form-field class=\"example-full-width\">\n            <input mdInput #message maxlength=\"50\" autofocus [(ngModel)]=\"dialogMessage\" class=\"form-control\"\n            name=\"message\" placeholder=\"Message\" (keypress)=\"eventKeyHandler($event, message.value)\">\n            <md-hint align=\"start\"><strong>Tecle ENTER para enviar a mensagem</strong> </md-hint>\n            <md-hint align=\"end\">{{message.value.length}} / 50</md-hint>\n          </md-form-field>\n        </form>\n      </div>\n    </div>\n  </md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ConversationService_conversation_service__ = __webpack_require__("../../../../../src/app/services/ConversationService/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ballons_ballons_component__ = __webpack_require__("../../../../../src/app/components/ballons/ballons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_model__ = __webpack_require__("../../../../../src/app/components/chat/chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(conversationService, cdr, componentFactoryResolver) {
        this.conversationService = conversationService;
        this.cdr = cdr;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogMessage = '';
        this.isAdmin = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__services_ConversationService_conversation_service__["a" /* ConversationService */].getLogin()[0].admin)
            this.isAdmin = true;
        var chatData = new __WEBPACK_IMPORTED_MODULE_3__chat_model__["a" /* ChatModel */]();
        chatData.setContext = {};
        chatData.setText = '';
        this.conversationService.sendMessage(chatData)
            .subscribe(function (res) {
            var msg = res.output.text;
            var factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__ballons_ballons_component__["a" /* BallonsComponent */]);
            //Insere a mensagem do usuário no balão
            var ref = _this.divBallons.createComponent(factory);
            ref.instance.setIsLeft = true;
            ref.instance.setMessage = msg;
            ref.changeDetectorRef.detectChanges();
        });
    };
    ChatComponent.prototype.eventKeyHandler = function (event, inputValue) {
        if (event.keyCode == 13) {
            //Chama a função responsável por tratar as mensagens enviadas
            this.sendMsg(inputValue);
        }
    };
    ChatComponent.prototype.sendMsg = function (msg) {
        var _this = this;
        var chatData = new __WEBPACK_IMPORTED_MODULE_3__chat_model__["a" /* ChatModel */]();
        chatData.setText = msg;
        var factory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__ballons_ballons_component__["a" /* BallonsComponent */]);
        //Insere a mensagem do usuário no balão
        var ref = this.divBallons.createComponent(factory);
        ref.instance.setIsLeft = false;
        ref.instance.setMessage = msg;
        ref.changeDetectorRef.detectChanges();
        this.conversationService.sendMessage(chatData)
            .subscribe(function (res) {
            var msg = res.output.text;
            var factory = _this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__ballons_ballons_component__["a" /* BallonsComponent */]);
            //Insere a mensagem do usuário no balão
            var ref = _this.divBallons.createComponent(factory);
            ref.instance.setIsLeft = true;
            ref.instance.setMessage = msg;
            ref.changeDetectorRef.detectChanges();
            _this.updateScrollBar();
        });
        this.dialogMessage = null;
        this.updateScrollBar();
    };
    //Função responsável por colocar a barra de rolagem exibindo a última mensagem
    ChatComponent.prototype.updateScrollBar = function () {
        //Deixa a div posicionada com a barra de rolagem em baixo
        if (document.querySelector("#divOverflow") != undefined) {
            document.querySelector("#divOverflow").scrollTop = document.querySelector("#divOverflow").scrollHeight;
        }
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('divBallons', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", Object)
], ChatComponent.prototype, "divBallons", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ConversationService_conversation_service__["a" /* ConversationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ConversationService_conversation_service__["a" /* ConversationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModel; });
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

var ChatModel = (function () {
    function ChatModel() {
    }
    Object.defineProperty(ChatModel.prototype, "setText", {
        //Define qual o valor do texto a ser enviado para o Conversation
        set: function (text) {
            this.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatModel.prototype, "setContext", {
        //Define o objeto de contexto do Conversation
        set: function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatModel.prototype, "getText", {
        //Obtém o valor definido a ser enviado para o Conversation
        get: function () {
            return this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatModel.prototype, "getContext", {
        //Obtém o objeto de contexto definido para ser enviado ao Conversation
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    return ChatModel;
}());
ChatModel = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatModel);

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.spinner {\r\n    max-height: 5vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.html":
/***/ (function(module, exports) {

module.exports = "<md-expansion-panel>\n  <md-expansion-panel-header>\n    <md-panel-title>\n      Tone Analyzer\n    </md-panel-title>\n    <md-panel-description>\n      Coloque os seus credenciais\n    </md-panel-description>\n  </md-expansion-panel-header>\n  \n  <form [formGroup]=\"myForm\" (ngSubmit)=\"enviarCredenciais(myForm.value, myForm.valid)\">\n    <md-form-field>\n      <input mdInput placeholder=\"username\" formControlName=\"username\" \n      class=\"form-control\" >\n      <md-error *ngIf=\"myForm.controls.username.invalid\">\n        username é <strong>obrigatório</strong>\n      </md-error>\n    </md-form-field>\n    \n    <md-form-field>\n      <input mdInput placeholder=\"password\" formControlName=\"password\" \n      class=\"form-control\" >\n      <md-error *ngIf=\"myForm.controls.password.invalid\">\n        password é <strong>obrigatório</strong>\n      </md-error>\n    </md-form-field>\n\n    <md-action-row class=\"action\">\n      <!-- <md-checkbox>Salvar</md-checkbox> -->\n      <md-slide-toggle color=\"primary\" (click)=\"saveOrNot()\">{{ isSave ? 'Save!' : 'Not save' }}</md-slide-toggle>\n      <button md-button color=\"primary\" *ngIf=\"!enviando\">ENVIAR</button>\n      <md-spinner class=\"spinner\" *ngIf=\"enviando\"></md-spinner>\n    </md-action-row>\n  </form>\n</md-expansion-panel>"

/***/ }),

/***/ "../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsToneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ToneService_tone_service__ = __webpack_require__("../../../../../src/app/services/ToneService/tone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsToneComponent = (function () {
    function SettingsToneComponent(fb, toneService) {
        this.fb = fb;
        this.toneService = toneService;
        this.username = '';
        this.password = '';
        this.isSave = false;
        this.enviando = false;
        this.myForm = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    SettingsToneComponent.prototype.ngOnInit = function () {
    };
    SettingsToneComponent.prototype.saveOrNot = function () {
        this.isSave = !this.isSave;
    };
    SettingsToneComponent.prototype.enviarCredenciais = function (post, isValid) {
        if (isValid) {
            this.enviando = true;
            this.username = post.username;
            this.password = post.password;
            var credenciais = {
                username: this.username,
                password: this.password
            };
            this.toneService.enviarCredenciais(credenciais)
                .subscribe(function (res) { return console.log(res); });
        }
    };
    return SettingsToneComponent;
}());
SettingsToneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings-tone',
        template: __webpack_require__("../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/settings/toneAnalyzer/settings.component.tone.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ToneService_tone_service__["a" /* ToneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ToneService_tone_service__["a" /* ToneService */]) === "function" && _b || Object])
], SettingsToneComponent);

var _a, _b;
//# sourceMappingURL=settings.component.tone.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-user/error-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-user/error-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-dialog-content>\n    <strong>{{data}}</strong>\n  </md-dialog-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/error-user/error-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorUserComponent = (function () {
    function ErrorUserComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    ErrorUserComponent.prototype.ngOnInit = function () {
    };
    ErrorUserComponent.prototype.onNoClick = function () {
        this.thisDialogRef.close();
    };
    return ErrorUserComponent;
}());
ErrorUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error-user',
        template: __webpack_require__("../../../../../src/app/components/error-user/error-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/error-user/error-user.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, String])
], ErrorUserComponent);

var _a;
//# sourceMappingURL=error-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n    min-width: 100vw;\r\n    min-height: 85vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.progress {\r\n    min-width: 90vw;\r\n    max-width: 90vw;\r\n}\r\n\r\n.example-form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-width: 90%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.form {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .chat {\r\n        min-width: 80vw;\r\n    }\r\n\r\n    .progress {\r\n        min-width: 40vw;\r\n        max-width: 40vw;\r\n    }\r\n\r\n    .example-full-width {\r\n        width: 40%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>Bluehack</span>\n</md-toolbar>\n\n<div class=\"chat\">\n  <div class=\"example-form\" *ngIf=\"!inProgress\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"enviarDados(myForm.value, myForm.valid)\" class=\"form\">\n      <md-form-field class=\"example-full-width\">\n        <input mdInput #login autofocus formControlName=\"login\" \n        class=\"form-control\"\n        placeholder=\"Digite o seu CPF '000.000.000-00'\" >\n        <md-icon mdSuffix>mode_edit</md-icon>\n        <md-error *ngIf=\"myForm.controls.login.invalid\">\n          CPF é <strong>obrigatório</strong> no formato '000.000.000-00'\n        </md-error>\n      </md-form-field>\n    </form>\n  </div>\n  <div class=\"progress\">\n    <md-progress-bar mode=\"indeterminate\" *ngIf=\"inProgress\"></md-progress-bar>\n  </div>\n</div>\n<!-- (keypress)=\"eventKeyHandler($event, login.value)\" -->\n<!-- *ngIf=\"loginFormControl.hasError('required')\" -->"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_UserService_user_service__ = __webpack_require__("../../../../../src/app/services/UserService/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ConversationService_conversation_service__ = __webpack_require__("../../../../../src/app/services/ConversationService/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_user_error_user_component__ = __webpack_require__("../../../../../src/app/components/error-user/error-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CPF_REGEX = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
var LoginComponent = (function () {
    function LoginComponent(router, userService, dialog, fb) {
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.fb = fb;
        this.inProgress = false;
        this.login = '';
        this.myForm = fb.group({
            'login': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern(CPF_REGEX)]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_user_error_user_component__["a" /* ErrorUserComponent */], {
            width: 'auto',
            data: msg
        });
    };
    LoginComponent.prototype.enviarDados = function (post, isValid) {
        var _this = this;
        if (isValid) {
            this.login = post.login;
            this.inProgress = true;
            this.userService.findUser(this.login)
                .subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_5__services_ConversationService_conversation_service__["a" /* ConversationService */].setLogin(res);
                _this.router.navigate(['/chat']);
            }, function (err) {
                _this.inProgress = false;
                _this.openDialog(err.json().msg);
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_UserService_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_UserService_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ConversationService_conversation_service__ = __webpack_require__("../../../../../src/app/services/ConversationService/conversation.service.ts");
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var login = __WEBPACK_IMPORTED_MODULE_2__services_ConversationService_conversation_service__["a" /* ConversationService */].getLogin();
        if (login !== null) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guards.js.map

/***/ }),

/***/ "../../../../../src/app/services/ConversationService/conversation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationService = ConversationService_1 = (function () {
    function ConversationService(_http) {
        this._http = _http;
        this.url = "http://localhost:3004/conversation";
        // private url: string = `/conversation`
        this.context = {};
    }
    ConversationService.setLogin = function (login) {
        this.login = login;
    };
    ConversationService.getLogin = function () {
        return this.login;
    };
    ConversationService.prototype.sendMessage = function (content) {
        var _this = this;
        content.setContext = this.context;
        // let body = JSON.stringify(data)
        var body = JSON.stringify({
            input: {
                text: content.getText
            },
            context: content.getContext,
            login: ConversationService_1.getLogin()
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.post(this.url, body, { headers: headers })
            .map(function (res) {
            _this.context = res.json().context;
            return res.json();
        });
    };
    return ConversationService;
}());
ConversationService.login = null;
ConversationService = ConversationService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConversationService);

var ConversationService_1, _a;
//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ToneService/tone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToneService = (function () {
    // private url: string = `/apiswatson/tone`
    function ToneService(_http) {
        this._http = _http;
        this.url = "http://localhost:3004/apiswatson/tone";
    }
    ToneService.prototype.enviarCredenciais = function (credenciais) {
        var body = JSON.stringify({
            username: credenciais.username,
            password: credenciais.password,
            text: 'Estou muito feliz'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.post(this.url, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return ToneService;
}());
ToneService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ToneService);

var _a;
//# sourceMappingURL=tone.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/UserService/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    // private url: string = `/users/user`
    function UserService(_http) {
        this._http = _http;
        this.url = "http://localhost:3004/users/user";
    }
    UserService.prototype.findUser = function (login) {
        var body = JSON.stringify({
            login: login,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this._http.post(this.url, body, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map