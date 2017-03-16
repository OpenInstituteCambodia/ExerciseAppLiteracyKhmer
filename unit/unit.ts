import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Unit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {
  public unit;

  private _path_images: string;
  private _path_sounds: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.unit = this.navParams.get('data');

    this._path_images = window.localStorage.getItem('path_images');
    this._path_sounds = window.localStorage.getItem('path_sounds');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitPage');
  }

}
