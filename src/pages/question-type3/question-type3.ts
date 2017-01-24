import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CongratulationPage} from '../congratulation/congratulation';

/*
  Generated class for the QuestionType3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question-type3',
  templateUrl: 'question-type3.html'
})
export class QuestionType3Page {
  pushPageCongrat;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPageCongrat = CongratulationPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionType3Page');
  }

}
