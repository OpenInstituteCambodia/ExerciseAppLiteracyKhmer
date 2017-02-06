import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.displayQuestionID = navParams.get("a_result");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  public button_action_one(): void {

  }

  public button_action_cancel(): void {
    
  }

}
