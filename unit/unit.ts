import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DatabaseController } from '../../app/database';

@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {
  public unit;

  private _path_images: string;
  private _path_sounds: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private _db: DatabaseController) {
    this.unit = this.navParams.get('data');

    this._path_images = window.localStorage.getItem('path_images');
    this._path_sounds = window.localStorage.getItem('path_sounds');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

  private navigate(uri) {
    let pending = this.loadingCtrl.create({
      spinner: 'dots'
    });
    pending.present();
www
    this._db.executeSQL("SELECT * FROM units WHERE unit_id == '"+uri+"'", []).then((unitData) => {
      console.log(unitData.rows.item(0));
      this.navCtrl.push(
        UnitPage, {
          data: unitData.rows.item(0)
        }
      );
      pending.dismiss();
    });

  }

  private backButtonClick() {
    this.navCtrl.popToRoot();
  }

}
