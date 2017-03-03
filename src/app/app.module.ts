import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { xelaController } from './xelaController';
import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { QuestionPage } from '../pages/question/question';
import { DebugPage } from '../pages/debug/debug';


/*
  NOTHING TO EDIT HERE !!!
  GO AWAY!!!
*/

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    QuestionPage,
    DebugPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    QuestionPage,
    DebugPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, xelaController],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
