import { Component } from '@angular/core';
import { ivrController } from '../../app/ivrController';
import { QuestionPage } from '../question/question';
import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  ivrController = new ivrController();
  platform;
  questionList;

  constructor(public alert: AlertController, public navCtrl: NavController, public navParams: NavParams , platform: Platform) {
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
