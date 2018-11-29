import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListinhaPage } from '../pages/listinha/listinha';
import { AddItemPage } from '../pages/add-item/add-item';
import { DetalheItemPage } from '../pages/detalhe-item/detalhe-item';
import { SonoPage } from '../pages/sono/sono';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { IonicStorageModule } from '@ionic/storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Data } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ListinhaPage,
    HomePage,
    TabsPage,
    AddItemPage,
    DetalheItemPage,
    SonoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ListinhaPage,
    HomePage,
    TabsPage,
    AddItemPage,
    DetalheItemPage,
    SonoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    Data, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
