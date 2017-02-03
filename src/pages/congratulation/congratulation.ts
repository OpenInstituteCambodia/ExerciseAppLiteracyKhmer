import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { ivrController } from '../../app/ivrController';
/*
  Generated class for the Congratulation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-congratulation',
  templateUrl: 'congratulation.html'
})
export class CongratulationPage {
  poproot;
  ivrController = new ivrController();
  displayQuestionID: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.poproot = navCtrl;
    this.displayQuestionID = navParams.get("e_id");
  }

  // TODO
  continueQuestion() {
    this.navCtrl.push(
      QuestionPage, {
        e_id: this.displayQuestionID+1
      }
    );
  }

  back(){
    this.ivrController.stopAudio();
    this.poproot.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongratulationPage');
  }

}
