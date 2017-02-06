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

  playSound() {
    this._xela.play_audio("index.mp3");
  }

}
