import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivrController } from '../../app/ivrController';
import { ivrQuestion } from '../../app/ivr/ivrQuestion';
import {Platform} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
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

  constructor( public alert: AlertController,public navCtrl: NavController, public navParams: NavParams , platform: Platform) {
    this.displayQuestionID = navParams.get("e_id");
    this.pushPageCongrat = CongratulationPage;
    this.pushPageWrong = WrongAnswerPage;
    this.platform = platform;

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

  replayAudio(){
    // alert("Replay Audio");
    this.ivrController.replayAudio(this.displayQuestionID+".mp3");
  }

  exitApp(){
    this.platform.exitApp();
    console.log('click exitApp');
  }
  exit(){
      let alert = this.alert.create({
        title: 'Confirm',
        message: 'Do you want to exit?',
        buttons: [{
          text: "Yes",
          handler: () => { this.exitApp() }
        }, {
          text: "No",
          role: 'cancel'
        }]
      })
      alert.present();
  }

}
