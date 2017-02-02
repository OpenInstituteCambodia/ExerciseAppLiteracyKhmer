import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivrController } from '../../app/ivrController';
import { ivrQuestion } from '../../app/ivr/ivrQuestion';

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  ivrQuestion = new ivrQuestion();
  ivrController = new ivrController();
  displayQuestionID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.displayQuestionID = navParams.get("e_id");

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

}
