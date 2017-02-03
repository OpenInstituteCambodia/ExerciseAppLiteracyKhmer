import { Component } from '@angular/core';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';

import { ivrController } from '../../app/ivrController';
import { ivrQuestion } from '../../app/ivr/ivrQuestion';
import {CongratulationPage} from '../congratulation/congratulation';
import {WrongAnswerPage} from '../wrong-answer/wrong-answer';


@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  ivrQuestion = new ivrQuestion();
  ivrController = new ivrController();
  displayQuestionID: number;
  pushPageCongrat;
  pushPageWrong;
  platform;
  poproot;

  constructor( public alert: AlertController, public navCtrl: NavController, public navParams: NavParams , platform: Platform) {
    this.displayQuestionID = navParams.get("e_id");
    this.pushPageCongrat = CongratulationPage;
    this.pushPageWrong = WrongAnswerPage;
    this.platform = platform;
    this.poproot = navCtrl;

    if (navParams.get("e_id") > 8) {
        navCtrl.popToRoot();
    }
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

  answerCorrect() {
    this.navCtrl.push(
      CongratulationPage, {
        e_id: this.displayQuestionID
      }
    );
  }

  backBtn(){
    this.poproot.popToRoot();
  }

  replayBtn(){
    this.ivrController.replayAudio(this.displayQuestionID+".mp3");
  }

  exitBtn(){
    let alert = this.alert.create({
      title: 'Confirm',
      message: 'Do you want to exit?',
      buttons: [{
        text: "Yes",
        handler: () => {
          console.log("ivrController: QuestionPage: exit(): Exit Application!")
          this.platform.exitApp();
        }
      }, {
        text: "No",
        role: 'cancel'
      }]
    })
    alert.present();
  }

}
