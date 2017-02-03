import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { ivrController } from './ivrController';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';
import {CongratulationPage} from '../pages/congratulation/congratulation';
import {WrongAnswerPage} from '../pages/wrong-answer/wrong-answer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CongratulationPage,
    QuestionPage,
    WrongAnswerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CongratulationPage,
    QuestionPage,
    WrongAnswerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
