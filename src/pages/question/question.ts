import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivrController } from '../../app/ivrController';
import { ivrQuestion } from '../../app/ivr/ivrQuestion';

import { HomePage } from '../home/home';
import {CongratulationPage} from '../congratulation/congratulation';


@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  ivrQuestion = new ivrQuestion();
  ivrController = new ivrController();
  displayQuestionID: number;
  pushPageCongrat;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.displayQuestionID = navParams.get("e_id");
    this.pushPageCongrat = CongratulationPage;

  }

  ionViewDidEnter() {
    this.ivrController.playAudio(this.displayQuestionID+'.mp3');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }
  ionViewWillLeave() {
    this.ivrController.stopAudio();
  }

}
