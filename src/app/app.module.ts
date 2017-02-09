import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { xelaController } from './xelaController';
import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';

import { QPage } from '../pages/q/q';

/*
  NOTHING TO EDIT HERE !!!
  GO AWAY!!!
*/

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    QPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    QPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, xelaController]
})
export class AppModule {}
