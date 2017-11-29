import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventosPage } from '../pages/eventos/eventos' ;
import { NewEventosPage } from '../pages/new-eventos/new-eventos' ;
import { ListaEventosPage } from '../pages/lista-eventos/lista-eventos' ;
import { HttpModule } from '@angular/http' ;
import { AlertController } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventosPage,
    NewEventosPage,
    ListaEventosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpClientModule,
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventosPage,
    NewEventosPage,
    ListaEventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
