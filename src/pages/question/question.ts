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

  q_id_long: any;

  // Question Type Filename
  private _M1: string = 'M1.mp3';
  private _M2: string = 'M2.mp3';
  private _M3: string = 'M3.mp3';
  private _M4: string = 'M4.mp3';
  private _YES: string = "Yes.mp3";
  private _NO: string = "No.mp3";

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

    this.q_id_long = "L"+this.l_id+"P"+this.p_id+"Q"+this.q_id;
    console.log("QuestionPage: this.q_id_long -> ", this.q_id_long);
    // if(this.q_id == 9) {
    //   this._route.popToRoot();
    // }
  }

  ionViewDidEnter() {
    this._xela.play_audio("M"+this.q_type+'.mp3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  public answer(a_id: number): void {

    let opt = {
      r_id: a_id,
      next_question: this.q_id
    };
    this._route.result(
      ResultPage,
      opt
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
