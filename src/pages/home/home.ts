import { Component, Injectable } from '@angular/core';
import { ivrController } from '../../app/ivrController';
import { ivrToolbar } from '../../app/ivr/ivrToolbar';
import { QuestionPage } from '../question/question';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ivrToolbar ]
})
export class HomePage {
  ivrController = new ivrController();
  platform;
  questionList;

  constructor(public alert: AlertController, public navCtrl: NavController, public navParams: NavParams , platform: Platform, private ivrToolbar: ivrToolbar) {
    this.questionList = this.ivrController.getQuestions;
    this.platform = platform;
  }

  ionViewWillLeave() {
    this.ivrController.stopAudio();
  }

  ionViewDidEnter() {
    // ivrController Code Block
    this.ivrController.playAudio('0.mp3');
  }

  route(url: any): any {
    console.log("HomePage: route(): " + url);

    this.ivrController.setQuestion(url);

    this.navCtrl.push(
      QuestionPage, {
        e_id: url
      }
    );
  }

  exitBtn(){
    this.ivrToolbar.exitBtn();
  }
}
