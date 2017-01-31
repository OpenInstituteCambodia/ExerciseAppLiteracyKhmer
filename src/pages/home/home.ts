import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuestionType1Page} from '../question-type1/question-type1';
import {QuestionType2Page} from '../question-type2/question-type2';
import {QuestionType3Page} from '../question-type3/question-type3';
import {QuestionType4Page} from '../question-type4/question-type4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage1;
  pushPage2;
  pushPage3;
  pushPage4;

  constructor(public navCtrl: NavController) {
    this.pushPage1 = QuestionType1Page;
    this.pushPage2 = QuestionType2Page;
    this.pushPage3 = QuestionType3Page;
    this.pushPage4 = QuestionType4Page;

  }
}
