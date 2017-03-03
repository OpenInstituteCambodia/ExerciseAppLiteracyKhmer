import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Device, IsDebug } from 'ionic-native';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { xelaToolbar } from '../../app/xelaModule/xelaToolbar';
import { QuestionPage } from '../question/question';
import { DebugPage } from '../debug/debug';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [ xelaController, xelaRoute, xelaToolbar ]
})
export class MenuPage {
  public menuID; // 1 is for root menu
  private _platform = Device.platform;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private _xela: xelaController,
    private _route: xelaRoute,
    private _toolbar: xelaToolbar) {
      console.log(this.navParams.get("_id"));
      if (typeof this.navParams.get("_id") == 'undefined') {
        this.menuID = 'root';
      }else {
        this.menuID = this.navParams.get("_id");
      }


  }

  public question(_id) {
    this._route.go(
      QuestionPage, {
        _id: _id
      }
    );
  }
  public menu(_id) {
    this._route.go(
      MenuPage, {
        _id: _id
      }
    );
  }

  private debug(state) {
    // if (this._platform == 'Android') {
    //   IsDebug.getIsDebug()
    //   .then((isDebug: boolean) => {
    //       console.log('Is debug:', isDebug);
    //
    //     })
    //   .catch(
    //     (error: any) => console.error(error)
    //   );
    // }

    let debugModal = this.modalCtrl.create(DebugPage);
    debugModal.present();
  }

  public exit() {
    this._toolbar.exit();
  }

}
