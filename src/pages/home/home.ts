import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ivrController } from '../../app/ivrController';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  _navCtl;
  ivrController = new ivrController();

  questionList;

  constructor(public navCtrl: NavController) {
    this._navCtl = navCtrl;

    this.questionList = this.ivrController.getQuestions;
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
    this._navCtl.push(
      QuestionPage, {
        e_id: url
      }
    );
  }
}
