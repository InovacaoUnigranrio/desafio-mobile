webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizar_visualizar__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastrarPage = (function () {
    function CadastrarPage(navCtrl, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.service = service;
        this.cadastro = {};
        this.cadastro = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descricao: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dataInicio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dataFim: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    CadastrarPage.prototype.postDados = function () {
        var _this = this;
        this.service.postData(this.cadastro.value).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__visualizar_visualizar__["a" /* VisualizarPage */]);
        }, function (err) { return console.log(err); });
    };
    CadastrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\cadastrar\cadastrar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastrar Tarefa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h3 style="text-align: center">Cadastre Uma Nova Tarefa</h3>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 style="margin-left:30%">\n          <img src="../assets/imgs/tarefas.png">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card-content>\n      <form [formGroup]="cadastro" (ngSubmit)="postDados()">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Nome</ion-label>\n            <ion-input type="text" name="nome" formControlName="nome"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Descrição</ion-label>\n            <ion-input type="text" name="descricao" formControlName="descricao"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Data De Início</ion-label>\n            <ion-input class="textbox-n" name="dataInicio" formControlName="dataInicio" type="text" onfocus="(this.type=\'datetime-local\')" onblur="(this.type=\'text\')"  id="date"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Data Final</ion-label>\n            <ion-input class="textbox-n" name="dataFim" formControlName="dataFim" type="text" onfocus="(this.type=\'datetime-local\')" onblur="(this.type=\'text\')"  id="date"></ion-input>\n          </ion-item>\n          <ion-item>\n            <button [disabled]="cadastro.invalid" ion-button full block color="danger">Cadastrar</button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\cadastrar\cadastrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], CadastrarPage);
    return CadastrarPage;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\sobre\sobre.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n      <img src="../assets/imgs/Alerson.jpg">\n    \n      <ion-card-content>\n        <p>Aplicativo desenvolvido por Alerson Martins, aluno da Unigranrio, com o objetivo de conseguir um estágio \n          <strong>(Obs: faço um ótimo café)</strong> u.u kk.</p>\n      </ion-card-content>\n    \n      </ion-card>\n        \n    <ion-card>\n      <ion-card-header>\n        Sobre Mim\n      </ion-card-header>\n      <ion-card-content>\n        Tenho 18 anos, hobbie preferido é programar, principalmente em PHP, adoro aventuras e novos desafios, gosto de conhecer pessoas novas\n        e fazer amigos, bem sociável porém um pouco tímido no início.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n          Detalhes do Desenvolvimento\n        </ion-card-header>\n        <ion-card-content>\n          <strong>Aplicativo feito utilizando Ionic 3.</strong><br>\n          <strong>WebService feito em PHP por já ter conhecimento.</strong><br>\n          <strong>O Endereço do WebService é www.livrariamercury.16mb.com/apiUnigranrio/</strong><br>\n          <strong>Hospedei online de forma gratuita em um site que eu já possuía.</strong>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar/cadastrar.module": [
		279,
		3
	],
	"../pages/exibir/exibir.module": [
		280,
		2
	],
	"../pages/sobre/sobre.module": [
		281,
		1
	],
	"../pages/visualizar/visualizar.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_cadastrar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizar_visualizar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exibir_exibir__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsPage = (function () {
    function TabsPage() {
        this.sobrePage = __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__["a" /* SobrePage */];
        this.cadastrarPage = __WEBPACK_IMPORTED_MODULE_2__cadastrar_cadastrar__["a" /* CadastrarPage */];
        this.visualizarPage = __WEBPACK_IMPORTED_MODULE_3__visualizar_visualizar__["a" /* VisualizarPage */];
        this.exibirPage = __WEBPACK_IMPORTED_MODULE_4__exibir_exibir__["a" /* ExibirPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\tabs\tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="cadastrarPage" tabTitle="Cadastrar Tarefa" tabIcon="add-circle"></ion-tab>\n	<ion-tab [root]="visualizarPage" tabTitle="Visualizar Tarefas" tabIcon="list-box"></ion-tab>\n	<ion-tab [root]="sobrePage" tabTitle="Sobre" tabIcon="star"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visualizar_visualizar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_exibir_exibir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualizar_visualizar__["a" /* VisualizarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_exibir_exibir__["a" /* ExibirPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastrar/cadastrar.module#CadastrarPageModule', name: 'CadastrarPage', segment: 'cadastrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exibir/exibir.module#ExibirPageModule', name: 'ExibirPage', segment: 'exibir', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizar/visualizar.module#VisualizarPageModule', name: 'VisualizarPage', segment: 'visualizar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_cadastrar__["a" /* CadastrarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_visualizar_visualizar__["a" /* VisualizarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_exibir_exibir__["a" /* ExibirPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */], useClass: __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\home\home.html"*/'\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exibir_exibir__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisualizarPage = (function () {
    function VisualizarPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.tarefaAtualizada = false;
        this.tarefaAtualizada = navParams.get('tarefaAtualizada');
    }
    VisualizarPage.prototype.ionViewDidEnter = function () {
        this.getDados(); // Inicio da requisição    
    };
    VisualizarPage.prototype.abrirTarefa = function (status, nome, descricao, datainicio, datafim, id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exibir_exibir__["a" /* ExibirPage */], {
            status: status,
            nome: nome,
            descricao: descricao,
            datainicio: datainicio,
            datafim: datafim,
            id: id
        });
    };
    VisualizarPage.prototype.deletarTarefa = function (tarefa) {
        var _this = this;
        this.service.excluirTarefa(tarefa.id).subscribe(function (data) {
            console.log(data.mensage);
            _this.getDados();
        }, function (err) { return console.log(err); });
    };
    VisualizarPage.prototype.editarTarefa = function (tarefa) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Editar Tarefa',
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'nome',
                    value: tarefa.nome
                },
                {
                    name: 'descricao',
                    placeholder: 'descricao',
                    value: tarefa.descricao
                },
                {
                    name: 'datainicio',
                    placeholder: 'datainicio',
                    value: tarefa.datainicio
                },
                {
                    name: 'datafim',
                    placeholder: 'datafim',
                    value: tarefa.datafim
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) { }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        var params = {
                            nome: data.nome,
                            descricao: data.descricao,
                            datafim: data.datafim,
                            datainicio: data.datainicio,
                            status: tarefa.status,
                            id: tarefa.id
                        };
                        console.log(data);
                        _this.service.atualizarTarefa(params).subscribe(function (data) {
                            console.log(data.mensage),
                                _this.getDados();
                        }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        prompt.present();
    };
    VisualizarPage.prototype.getDados = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) { return _this.tarefas = data; }, function (err) { return console.log(err); });
    };
    VisualizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualizar',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\visualizar\visualizar.html"*/'<!--\n  Generated template for the VisualizarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Suas Tarefas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        \n      <ion-card-header>\n        Observação\n      </ion-card-header>\n    \n      <ion-card-content>\n        Pressione para visualizar os detalhes das tarefas, role para a direita para mais opções.\n      </ion-card-content>\n    \n    </ion-card>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 style="margin-left:30%">\n          <img src="../assets/imgs/tarefasLista.png">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card *ngIf="tarefas == null || tarefas == 0">  \n      <ion-card-content>\n        Você ainda não adicionou nenhuma tarefa.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor="let tarefa of tarefas" (press)="abrirTarefa(tarefa.status, tarefa.nome, tarefa.descricao, tarefa.datainicio, tarefa.datafim, tarefa.id)">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-avatar item-start>\n              <img *ngIf="tarefa.status == 0" src="../assets/imgs/nconc.png">\n              <img *ngIf="tarefa.status == 1" src="../assets/imgs/conc.png">\n          </ion-avatar>\n          <h2>{{ tarefa.nome }}</h2>\n          <p>{{ tarefa.descricao }}</p>\n        </ion-item>\n        <ion-item-options side="right">\n            <button ion-button color="blue" (click)="editarTarefa(tarefa)">\n              <ion-icon name="ios-cog-outline"></ion-icon>  \n              Editar\n            </button>\n            <button ion-button color="danger" (click)="deletarTarefa(tarefa)">\n              <ion-icon name="ios-trash"></ion-icon>\n              Deletar\n            </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\visualizar\visualizar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], VisualizarPage);
    return VisualizarPage;
}());

//# sourceMappingURL=visualizar.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
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



var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        this.api = "http://livrariamercury.16mb.com/apiUnigranrio/";
    }
    ServiceProvider.prototype.getData = function () {
        return this.http.get(this.api + 'apiRecupera.php').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.postData = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "apiCadastro.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.atualizarTarefa = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "apiUpdate.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.excluirTarefa = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "apiDeleta.php", id, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExibirPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizar_visualizar__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExibirPage = (function () {
    function ExibirPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.nomeTarefa = navParams.get('nome');
        this.descricao = navParams.get('descricao');
        this.status = navParams.get('status');
        this.datainicio = navParams.get('datainicio');
        this.datafim = navParams.get('datafim');
        this.id = navParams.get('id');
    }
    ExibirPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde um momento...",
            duration: 1500
        });
        loader.present();
        this.concluirTarefa();
    };
    ExibirPage.prototype.concluirTarefa = function () {
        var _this = this;
        var params = {
            nome: this.nomeTarefa,
            descricao: this.descricao,
            datafim: this.datafim,
            datainicio: this.datainicio,
            status: 1,
            id: this.id
        };
        this.service.atualizarTarefa(params).subscribe(function (data) {
            console.log(data.mensage),
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualizar_visualizar__["a" /* VisualizarPage */], {
                    tarefaAtualizada: true
                });
        }, function (err) { return console.log(err); });
    };
    ExibirPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exibir',template:/*ion-inline-start:"C:\Users\Alerson Martins\app-unigranrio\src\pages\exibir\exibir.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ nomeTarefa }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        <h1>Detalhes</h1>\n      </ion-card-header>\n      <ion-card-content>\n        Nome: {{ nomeTarefa }}<br><br>\n        Descricao: {{ descricao }}<br><br>\n        Data Inicial: {{ datainicio }}<br><br>\n        Data Final: {{ datafim }}<br><br>\n        <p *ngIf="status == 0">Status: <strong>Tarefa Não Concluída</strong></p>\n        <p *ngIf="status == 1">Status: <strong>Tarefa Concluída</strong></p>\n      </ion-card-content>\n    </ion-card>\n    <button *ngIf="status == 0" ion-button block (click)="presentLoading()">Marcar Tarefa Como Concluída</button>\n    <button *ngIf="status == 1" ion-button block disabled>Tarefa Concluída</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alerson Martins\app-unigranrio\src\pages\exibir\exibir.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ExibirPage);
    return ExibirPage;
}());

//# sourceMappingURL=exibir.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map