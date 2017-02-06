import { Component } from '@angular/core';
import { xelaController } from '../../app/xelaController';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ xelaController ]
})
export class HomePage {

  constructor(
    private xela: xelaController ) {
    // TODO
    /*
      - Re route function from ivrController in to xelaController
    */
  }

  ionViewWillLeave() {

  }

  ionViewDidEnter() {
    this.xela.media_play("index.mp3");
  }


}





















// Old Code
//
// import { Component } from '@angular/core';
// import { Platform, NavController, NavParams, AlertController } from 'ionic-angular';
// import { ivrController } from '../../app/ivrController';
// import { ivrToolbar } from '../../app/ivr/ivrToolbar';
// import { QuestionPage } from '../question/question';
// export class HomePage {
//   ivrController = new ivrController();
//   platform;
//   questionList;
//
//   constructor(
//     private xela: xelaController,
//     public alert: AlertController,
//     public navCtrl: NavController,
//     public navParams: NavParams ,
//     platform: Platform,
//     private ivrToolbar: ivrToolbar
//   ) {
//     this.questionList = this.ivrController.getQuestions;
//     this.platform = platform;
//   }
//
//   ionViewWillLeave() {
//     this.ivrController.stopAudio();
//   }
//
//   ionViewDidEnter() {
//
//   }
//
//   route(url: any): any {
//     console.log("HomePage: route(): " + url);
//
//     this.ivrController.setQuestion(url);
//
//     this.navCtrl.push(
//       QuestionPage, {
//         e_id: url
//       }
//     );
//   }
//
//   playSound() {
//     // ivrController Code Block
//     this.ivrController.playAudio('0.mp3');
//   }
//
//   exitBtn(){
//     this.ivrToolbar.exitBtn();
//   }
