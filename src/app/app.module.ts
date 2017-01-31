import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { ivrController } from './ivrController';
import { HomePage } from '../pages/home/home';
import {QuestionType1Page} from '../pages/question-type1/question-type1';
import {QuestionType2Page} from '../pages/question-type2/question-type2';
import {QuestionType3Page} from '../pages/question-type3/question-type3';
import {QuestionType4Page} from '../pages/question-type4/question-type4';
import {CongratulationPage} from '../pages/congratulation/congratulation';


@NgModule({
  declarations: [
    MyApp,
    // ivrController,
    HomePage,
    QuestionType1Page,
    QuestionType2Page,
    QuestionType3Page,
    QuestionType4Page,
   CongratulationPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ivrController,
    HomePage,
    QuestionType1Page,
    QuestionType2Page,
    QuestionType3Page,
    QuestionType4Page,
    CongratulationPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
