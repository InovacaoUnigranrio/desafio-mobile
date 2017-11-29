webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\about\about.html"*/'<!-- Página sobre o aplicativo -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre Agenda Virtual\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding align="justify">\n\n		<p> O aplicativo agenda virtual foi desenvolvido com o objetivo de facilitar a vida dos usuários eletrônicos. </p>\n		\n		<p>Com esse aplicativo, você tem uma agenda na palma da sua mão, onde poderá visualizar todos os seus eventos em uma lista \n		simples, objetiva e intuitiva.</p>\n\n		<p>Nosso intuito é fazer com que você tenha a melhor experiência possível, e não esqueça nada na correria diária.\n		Muito obrigado por nos conhecer.</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\contact\contact.html"*/'<!-- Página com informações de contato -->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contato\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Redes sociais e telefone</ion-list-header>\n    <!-- Twitter -->\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      @EdnaldoSantos\n    </ion-item>\n    <!-- Facebook -->\n    <ion-item>\n      <ion-icon name="logo-facebook" item-start></ion-icon>\n      www.facebook.com/ednaldo5\n    </ion-item>\n    <!-- Telefone e whatsapp -->\n    <ion-item>\n      <ion-icon name="logo-whatsapp" item-start></ion-icon>\n      <ion-icon name="call" item-start></ion-icon>\n      (21)99293-5846\n    </ion-item>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventos_eventos__ = __webpack_require__(199);
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
    HomePage.prototype.navigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__eventos_eventos__["a" /* EventosPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\home\home.html"*/'<!-- Tela inicial -->\n<ion-header >\n  <ion-navbar color="dark">\n    <ion-title align="center">Agenda virtual</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- Conteúdo -->\n<ion-content padding>\n  <h2 align="center">Bem-vindo a sua agenda virtual.</h2>\n  <p align="justify">\n    Essa é uma agenda virtual, criada com o propósito de facilitar a sua vida. \n  </p>\n  <p align="justify">  \n    Ela serve para que você possa consultar seus compromissos quando quiser, na palma da sua mão.\n  </p>\n                 <!-- Login e senha --> \n                <div>\n                \n                  <ion-list>\n                     \n                   <ion-item class="item-text-wrap">\n                        <ion-label floating> Nome de usuário ou e-mail <ion-icon name="ios-contact"> </ion-icon></ion-label>\n                        <ion-input type="text"> </ion-input>\n                   </ion-item>\n\n\n                    <ion-item>\n                        <ion-label floating> Senha <ion-icon name="key"> </ion-icon></ion-label>\n                        <ion-input type="password"> </ion-input>\n                    </ion-item>\n\n                  </ion-list>\n \n                 <button ion-button color="dark" (click)="navigate()">Enviar dados </button>\n               \n               </div>\n\n\n              <ion-item class="check">\n\n                  <ion-label>Manter-me logado</ion-label>\n\n                    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n\n              </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_eventos_new_eventos__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_eventos_lista_eventos__ = __webpack_require__(201);
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
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventosPage = (function () {
    function EventosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventosPage');
    };
    EventosPage.prototype.novoEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_eventos_new_eventos__["a" /* NewEventosPage */]);
    };
    EventosPage.prototype.listaEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lista_eventos_lista_eventos__["a" /* ListaEventosPage */]);
    };
    EventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\eventos\eventos.html"*/'<!-- Tela onde se decide a ação do usuário -->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">Agenda virtual</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding align="center">\n  <h4> Olá, agora que você veio, nos diga, o que deseja fazer ? </h4>\n  <div class="btns">\n  <button ion-button color="dark" (click)="novoEvents()"> Adicionar novos eventos </button>\n  <button ion-button color="dark" (click)="listaEvents()"> Visualizar lista de eventos </button>\n  </div>\n\n  <div class="baixo">\n  	<ion-label> Visualizar calendário <ion-icon name="calendar"></ion-icon> </ion-label>\n  </div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\eventos\eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventosPage);
    return EventosPage;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventosPage; });
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



var NewEventosPage = (function () {
    function NewEventosPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    //Chamando a função de alerta sucesso
    NewEventosPage.prototype.sucessoEvento = function () {
        var alert = this.alertCtrl.create({
            title: 'Evento adicionado',
            subTitle: 'Parabéns, o seu evento foi adicionado com sucesso',
            buttons: ['OK']
        });
        alert.present();
    };
    NewEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-eventos',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\new-eventos\new-eventos.html"*/'<!-- Tela para adicionar novos eventos -->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title align="justify">Agenda Virtual <br>Novo evento</ion-title>\n  	\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n     <!-- Lista com as opções para preenchimento -->\n	<div>\n\n		<ion-list>\n                   <!-- Item data de inicio -->  \n                   <ion-item class="item-text-wrap">\n                        <ion-label floating> Data de início :  <ion-icon name="calendar"> </ion-icon></ion-label>\n                        <ion-input type="text"> </ion-input>\n                   </ion-item>\n\n                    <!-- Item data de término -->\n                    <ion-item>\n                        <ion-label floating> Data de término : <ion-icon name="calendar"> </ion-icon></ion-label>\n                        <ion-input type="text"> </ion-input>\n                    </ion-item>\n                    <!-- Ítem descrição --> \n					<ion-item>\n                        <ion-label floating> Descrição :  <ion-icon name="create"> </ion-icon></ion-label>\n                        <ion-input type="text"> </ion-input>\n                    </ion-item>\n                    <!-- Ítem nome do Evento -->\n                    <ion-item>\n                        <ion-label floating> Nome do evento: <ion-icon name="create"> </ion-icon></ion-label>\n                        <ion-input type="text"> </ion-input>\n                    </ion-item>	\n\n        </ion-list>\n\n                 <button ion-button color="dark" (click)="sucessoEvento()">Enviar dados </button>\n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\new-eventos\new-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], NewEventosPage);
    return NewEventosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=new-eventos.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaEventosPage = (function () {
    function ListaEventosPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
    }
    ListaEventosPage.prototype.listarEventos = function () {
        this.userProvider.listarEventos().subscribe(function (data) {
            console.log(data);
        }, function (Error) {
            console.log(Error);
        });
        this.toast.create({ message: 'Listagem realizada com sucesso', position: 'botton', duration: 3000 });
    };
    ListaEventosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-eventos',template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\pages\lista-eventos\lista-eventos.html"*/'<!-- Tela com uma lista de eventos do usuário -->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title align="center">Agenda virtual<br> Lista de eventos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding align="center">\n<!-- Listagem de eventos, evento 1 -->\n<ion-card>\n  \n  <img src="http://www.lance.com.br/files/article_main/uploads/2017/10/25/59f12cac1ad55.jpeg" height="200px" background-size="cover"/>\n  <ion-card-content>\n    <ion-card-title>\n      Jogo do Fluminense\n </ion-card-title>\n    <p>\n      <b>Data de início :</b> 23/02/2018 19:00h<br>\n      <b>Data de término :</b> 23/02/2018 21:00h <br>\n      <b>Descricao :</b> Assistir a uma partida de futebol <br>\n      <b>Nome do evento :</b> Fluminense x Flamengo <br>\n    </p>\n  </ion-card-content>\n</ion-card>\n\n<!-- Evento 2 -->\n<ion-card>\n  <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Avenged-sevenfold.jpg" height="200px" background-size="cover"/>\n  <ion-card-content>\n    <ion-card-title>\n      Show do Avenged Sevenfold\n      </ion-card-title>\n    <p>\n      <b>Data de início :</b> 27/11/2017 19:00h <br>\n      <b>Data de término :</b> 27/11/2017 21:00h <br>\n      <b>Descricao :</b> Assistir ao show da banda Avenged Sevenfold <br>\n      <b>Nome do evento :</b> Avenged Sevenfold - Live in Maracanã Stadium <br>\n    </p>\n  </ion-card-content>\n</ion-card>\n\n\n<!-- Evento 3-->\n<ion-card>\n  <img src="https://newlandofwelinton.files.wordpress.com/2015/10/trivium-live-in-2015.jpg" height="200px" background-size="cover"/>\n  <ion-card-content>\n    <ion-card-title>\n      Show do Trivium\n      </ion-card-title>\n    <p>\n      <b>Data de início :</b> 27/11/2017 19:00h <br>\n      <b>Data de término :</b> 27/11/2017 21:00h <br>\n      <b>Descricao :</b> Assistir ao show da banda Trivium <br>\n      <b>Nome do evento :</b> Trivium - Live in Morumbi Stadium <br>\n    </p>\n  </ion-card-content>\n</ion-card>\n\n<!-- Evento 4 -->\n<ion-card>\n  <img src="http://blogmalasprontas.com.br/uploads/usuario/image/Quinta%20da%20Boa%20Vista.jpg" height="200px" background-size="cover"/>\n  <ion-card-content>\n    <ion-card-title>\n      Passeio a quinta da Boa Vista\n      </ion-card-title>\n    <p>\n      <b>Data de início :</b> 27/11/2017 10:00h <br>\n      <b>Data de término :</b> 27/11/2017 20:00h <br>\n      <b>Descricao :</b> Passear na Quinta da Boa Vista <br>\n      <b>Nome do evento :</b> Passeio - Quinta da Boa Vista <br>\n    </p>\n  </ion-card-content>\n</ion-card>\n</ion-content> \n\n\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\pages\lista-eventos\lista-eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], ListaEventosPage);
    return ListaEventosPage;
}());

//# sourceMappingURL=lista-eventos.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(279);
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



var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        this.URL = '//localhost:8080/agenda';
    }
    UsersProvider.prototype.listarEventos = function (dataInicio, dataFim, descricao, nomeEvento) {
        return this.http.get(this.URL)
            .map(function (res) { return res.json(); });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_eventos_eventos__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_eventos_new_eventos__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lista_eventos_lista_eventos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_users_users__ = __webpack_require__(202);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_eventos_new_eventos__["a" /* NewEventosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_eventos_lista_eventos__["a" /* ListaEventosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_eventos_eventos__["a" /* EventosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_eventos_new_eventos__["a" /* NewEventosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lista_eventos_lista_eventos__["a" /* ListaEventosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_users_users__["a" /* UsersProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Windows\System32\projetoAgenda\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Windows\System32\projetoAgenda\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map