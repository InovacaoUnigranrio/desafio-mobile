import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SobrePage } from '../pages/sobre/sobre';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { VisualizarPage } from '../pages/visualizar/visualizar';
import { ExibirPage } from '../pages/exibir/exibir';
import { TabsPage } from '../pages/tabs/tabs';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    CadastrarPage,
    VisualizarPage,
    ExibirPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    CadastrarPage,
    VisualizarPage,
    ExibirPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ServiceProvider, useClass: ServiceProvider}
  ]
})
export class AppModule {}
