import { Component, ViewChild, Input, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-debug',
  templateUrl: 'debug.html',
  providers: [ xelaRoute ]
})
export class DebugPage {
  public mode;
  public content = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private _route: xelaRoute) {
    this.mode = this.navParams.get('mode');
    if (this.navParams.get('content') != 'undefined') {
        this.content = this.navParams.get('content');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebugPage');
  }

  public route(routeID) {
    this._route.go(
      QuestionPage, {
        _id: routeID.value
      }
    );
  }

}