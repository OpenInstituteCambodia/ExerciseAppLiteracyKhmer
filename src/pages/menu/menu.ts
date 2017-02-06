import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [ xelaController, xelaRoute ]
})
export class MenuPage {

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute) {

  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  ionViewDidEnter() {

  }

  public question(index: number) {
    this._route.route(QuestionPage, index);
  }

  public button_play_audio() {
    this._xela.replay_audio("index.mp3");
  }

  public button_exit_application(): void {
    console.log("exit app");
  }

}
