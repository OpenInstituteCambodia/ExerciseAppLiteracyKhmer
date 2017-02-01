import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ivrController } from '../../app/ivrController';
import { QuestionType1Page } from '../question-type1/question-type1';
import { QuestionType2Page } from '../question-type2/question-type2';
import { QuestionType3Page } from '../question-type3/question-type3';
import { QuestionType4Page } from '../question-type4/question-type4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  _navCtl;
  ivrController = new ivrController();

  routeAdr: any = [
    QuestionType1Page,
    QuestionType2Page,
    QuestionType3Page,
    QuestionType4Page,
  ];

  constructor(public navCtrl: NavController) {
    this._navCtl = navCtrl;

    // ivrController Code Block
    this.ivrController.playAudio('1.mp3');
  }

  public showToolbar() {
    this.ivrController.toolbarToggle = true;
    console.log(this.ivrController.toolbarToggle);
  }

  route(url: any): any {
    console.log("HomePage: route(): " + this.routeAdr[url]);
    this.ivrController.playAudio(url+'.mp3');
    this._navCtl.push(this.routeAdr[url]);
  }
}
