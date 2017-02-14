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

  public question(_id) {
    this._route.question(
      QuestionPage, {
        _id: _id
      }
    );
  }

  public exit() {
    this._toolbar.exit();
  }

}
