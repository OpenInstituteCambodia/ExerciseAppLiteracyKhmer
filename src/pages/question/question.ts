import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { xelaToolbar } from '../../app/xelaModule/xelaToolbar';

import { ResultPage } from '../result/result';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
  providers: [ xelaController, xelaRoute, xelaToolbar ]
})
export class QuestionPage {
  q_id: any;
  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _toolbar: xelaToolbar,
    private _param: NavParams
  ) {
    this.q_id = this._param.get("q_id");
  }

  ionViewDidEnter() {
    this._xela.play_audio(this.q_id+'.mp3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  public answer(a_id: number): void {
    a_id = 1;
    this._route.result(
      ResultPage,
      a_id
    );
  }

  public button_push_root(): void {
    this._route.popToRoot();
  }

  public button_replay_question(): void {
    this._xela.replay_audio(this.q_id+'.mp3');
  }

  public button_exit_application(): void {
    console.log("exit app");
    this._toolbar.exit();
  }

}










// Old
// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
//
// import { ivrController } from '../../app/ivrController';
// import { ivrQuestion } from '../../app/ivr/ivrQuestion';
// import { ivrToolbar } from '../../app/ivr/ivrToolbar';
// import {CongratulationPage} from '../congratulation/congratulation';
// import {WrongAnswerPage} from '../wrong-answer/wrong-answer';
//
//
// @Component({
//   selector: 'page-question',
//   templateUrl: 'question.html',
//   providers: [ivrToolbar]
// })
// export class QuestionPage {
//   ivrQuestion = new ivrQuestion();
//   ivrController = new ivrController();
//   displayQuestionID: number;
//
//   pushPageCongrat;
//   pushPageWrong;
//   poproot;
//
//   constructor( public navCtrl: NavController, public navParams: NavParams, private ivrToolbar: ivrToolbar) {
//     this.displayQuestionID = navParams.get("q_id");
//     this.pushPageCongrat = CongratulationPage;
//     this.pushPageWrong = WrongAnswerPage;
//     this.poproot = navCtrl;
//
//     if (navParams.get("q_id") > 8) {
//         navCtrl.popToRoot();
//     }
//
//   }
//
//   ionViewDidEnter() {
//     this.ivrController.playAudio(this.displayQuestionID+'.mp3');
//   }
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad QuestionPage');
//   }
//
//   ionViewWillLeave() {
//     this.ivrController.stopAudio();
//   }
//
//   answerCorrect() {
//     this.navCtrl.push(
//       CongratulationPage, {
//         q_id: this.displayQuestionID
//       }
//     );
//   }
//
//   backBtn(){
//     this.poproot.popToRoot();
//   }
//
//   replayBtn(){
//     this.ivrController.replayAudio(this.displayQuestionID+".mp3");
//   }
//
//   exitBtn(){
//     this.ivrToolbar.exitBtn();
//   }
//
// }
