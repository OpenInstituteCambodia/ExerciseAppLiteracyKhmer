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
  public _id: number;
  q_id_long: any;
  init_sound: number;


  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _toolbar: xelaToolbar,
    private _param: NavParams
  ) {
    this._id = this._param.get("_id");

    // if(this.q_id == 9) {
    //   this._route.popToRoot();
    // }
  }

  ionViewDidEnter() {
    // let opt = {
    //
    // };
    // console.log("QuestoinPage: let opt = ", opt);
    // this._xela.play_audio(opt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  public answer(a_id: number): void {
    this._xela.stop_audio();

    let result;
    if (a_id === 1) {
      result = "Yes";
    }else if(a_id === 0) {
      result = "No";
    }

    let opt = {

    };

    console.log("xelaController: validate_answer(): The result is -> ", result);

    this._xela.play_result(opt, result);

    // let opt_page = {
    //   q_type: this.q_type,
    //   l_id: this.l_id,
    //   p_id: this.p_id,
    //   q_id: this.q_id,
    //   c_id: this.c_id
    // };
    //
    // setTimeout(function() {
    //   this._route.question(
    //     QuestionPage,
    //     opt_page
    //   );
    // }, 2000);

    // let opt = {
    //   r_id: a_id,
    //   next_question: this.q_id
    // };
    // this._route.result(
    //   ResultPage,
    //   opt
    // );
  }

  public button_push_root(): void {
    this._route.popToRoot();
  }

  public button_replay_question(): void {
    // this._xela.replay_audio(this.q_id+'.mp3');
  }

  public button_exit_application(): void {
    console.log("exit app");
    this._toolbar.exit();
  }

}
