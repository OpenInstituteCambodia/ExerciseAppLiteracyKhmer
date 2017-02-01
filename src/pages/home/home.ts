import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ivrController } from './ivrController';
import {QuestionType1Page} from '../question-type1/question-type1';
import {QuestionType2Page} from '../question-type2/question-type2';
import {QuestionType3Page} from '../question-type3/question-type3';
import {QuestionType4Page} from '../question-type4/question-type4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  _navCtl;
  routeAdr: any = [
    QuestionType1Page,
    QuestionType2Page,
    QuestionType3Page,
    QuestionType4Page,
  ];

  constructor(public navCtrl: NavController) {
    this._navCtl = navCtrl;
  }

  route(url: any): any {
    // console.log(this.routeAdr[url]);
    this._navCtl.push(this.routeAdr[url]);
  }
}
