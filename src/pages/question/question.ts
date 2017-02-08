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
  q_type: any;
  l_id: any;
  p_id: any;
  q_id: any;
  c_id: any;

  q_id_long: any;

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _toolbar: xelaToolbar,
    private _param: NavParams
  ) {
    this.q_type = this._param.get("q_type");
    this.l_id = this._param.get("l_id");
    this.p_id = this._param.get("p_id");
    this.q_id = this._param.get("q_id");
    this.c_id = this._param.get("c_id");

    this.q_id_long = "L"+this.l_id+"P"+this.p_id+"Q"+this.q_id;
    console.log("QuestionPage: this.q_id_long -> ", this.q_id_long);
    console.log("QuestionPage: this.c_id -> ", this.c_id);
    // if(this.q_id == 9) {
    //   this._route.popToRoot();
    // }
  }

  ionViewDidEnter() {
    let opt = {
      q_type: this.q_type,
      l_id: this.l_id,
      p_id: this.p_id,
      q_id: this.q_id,
      c_id: this.c_id
    };
    console.log("QuestoinPage: let opt = ", opt);
    this._xela.play_audio(opt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  public answer(a_id: number): void {

    let result;
    if (a_id === 1) {
      result = "Yes";
    }else if(a_id === 0) {
      result = "No";
    }

    let opt = {
      q_type: this.q_type,
      l_id: this.l_id,
      p_id: this.p_id,
      q_id: this.q_id,
      c_id: this.c_id
    };

    console.log("xelaController: validate_answer(): The result is -> ", result);

    this._xela.play_result(opt, result);

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
    this._xela.replay_audio(this.q_id+'.mp3');
  }

  public button_exit_application(): void {
    console.log("exit app");
    this._toolbar.exit();
  }

}
