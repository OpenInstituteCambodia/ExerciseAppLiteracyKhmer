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
  displayQuestionID: number;

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _navParams: NavParams ) {
    this.displayQuestionID = _navParams.get("a_result");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  public button_action_confirm(): void {

  }

  public button_action_cancel(): void {

  }

}
