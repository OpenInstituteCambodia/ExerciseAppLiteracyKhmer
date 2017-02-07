import { Component } from '@angular/core';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { xelaToolbar } from '../../app/xelaModule/xelaToolbar';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [ xelaController, xelaRoute, xelaToolbar ]
})
export class MenuPage {

  constructor(
    private _xela: xelaController,
    private _route: xelaRoute,
    private _toolbar: xelaToolbar) {

  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  ionViewDidEnter() {

  }

  public question(q_type: number, l_id: number, p_id: number, q_id: number) {
    let opt = {
      q_type: q_type,
      l_id: l_id,
      p_id: p_id,
      q_id: q_id
    };
    this._route.question(
      QuestionPage,
      opt
    );
  }

  public button_play_audio() {
    this._xela.replay_audio("index.mp3");
  }

  public button_exit_application(): void {
    console.log("exit app");
    this._toolbar.exit();
  }

}
