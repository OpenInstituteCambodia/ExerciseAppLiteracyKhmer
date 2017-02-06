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
  result: number;
  next_question: number;

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _navParams: NavParams ) {
    this.result = _navParams.get("a_result");
    this.next_question = _navParams.get("q_next");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  public button_action_confirm(): void {
    this._route.route(
      QuestionPage,
      this.next_question
    );
  }

  public button_action_cancel(): void {

  }

}
