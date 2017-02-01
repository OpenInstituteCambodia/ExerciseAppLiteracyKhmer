import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ivrQuestion } from '../../app/ivr/ivrQuestion';
import { HomePage } from '../home/home';

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  ivrQuestion = new ivrQuestion();
  BackHome;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BackHome = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
