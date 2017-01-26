import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CongratulationPage} from '../congratulation/congratulation';

/*
  Generated class for the QuestionType2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question-type2',
  templateUrl: 'question-type2.html'
})
export class QuestionType2Page {
  pushPageCongrat;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPageCongrat = CongratulationPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionType2Page');
  }

}
