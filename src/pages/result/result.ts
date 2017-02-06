import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';

import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
  providers: [ xelaController, xelaRoute ]
})
export class ResultPage {
  r_id: number;
  next_question: number;

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _navParams: NavParams ) {
      this.r_id = this._navParams.get("r_id");
      this.next_question = this._navParams.get("next_question");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  public button_action_confirm(): void {
    this._route.question(
      QuestionPage,
      this.next_question+1
    );
  }

  public button_action_cancel(): void {

  }

}
