import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NvD3Module } from 'angular2-nvd3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DatadisplayPage } from "../pages/datadisplay/datadisplay";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DatadisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NvD3Module
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DatadisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {


}
