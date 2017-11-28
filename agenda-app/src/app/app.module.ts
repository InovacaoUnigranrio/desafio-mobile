import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectedTaskPage } from "../pages/selected-task/selected-task";
import { NewTaskPage } from '../pages/new-task/new-task';

import { TaskService } from "../providers/task-service";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectedTaskPage,
    NewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectedTaskPage,
    NewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
