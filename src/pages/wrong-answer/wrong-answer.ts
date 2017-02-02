import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WrongAnswer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wrong-answer',
  templateUrl: 'wrong-answer.html'
})
export class WrongAnswerPage {
  poproot;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.poproot = navCtrl;
  }

  back(){
    this.poproot.popToRoot();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WrongAnswerPage');
  }

}
