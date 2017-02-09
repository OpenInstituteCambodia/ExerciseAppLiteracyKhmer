import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Q page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-q',
  templateUrl: 'q.html'
})
export class QPage {
  public id;
  public question_id;
  public question_type;
  public question_content;
  public choice_1;
  public choice_1_audio;
  public choice_2;
  public choice_2_audio;
  public choice_3;
  public choice_3_audio;
  public choice_4;
  public choice_4_audio;
  public correct_answer;
  public next_question;
  public menu_id;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._question(this.navParams.get("_id"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QPage');
  }

  private _question(_id): void {
    let questions: Array<any> = [
      {
        id: 1,
        question_id: "L3P36Q1",
        question_type: 1,
        question_content: "assets/img/P36/L3.3P36.jpg",
        choice_1: "ផែ",
        choice_1_audio: "L3P36_1.mp3",
        choice_2: "ផៃ",
        choice_2_audio: "L3P36_2.mp3",
        choice_3: "ផេះ",
        choice_3_audio: "L3P36_3.mp3",
        choice_4: "ថែ",
        choice_4_audio: "L3P36_4.mp3",
        correct_answer: 3,
        next_question: "L3P36Q2",
        menu_id: 1,
      },
      {
        id: 2,
        question_id: "L3P36Q2",
        question_type: 2,
        question_content: "L3P36_5.mp3",
        choice_1: "ដំបៅ",
        choice_1_audio: "L3P36_6.mp3",
        choice_2: "បបរ",
        choice_2_audio: "L3P36_7.mp3",
        choice_3: "សរសរ",
        choice_3_audio: "L3P36_8.mp3",
        choice_4: "ថៅកែ",
        choice_4_audio: "L3P36_5.mp3",
        correct_answer: 4,
        next_question: "L3P36Q3",
        menu_id: 1,
      },
    ];

    console.log(questions[_id]);
    this.id = questions[_id]["id"];
    this.question_id = questions[_id]["question_id"];
    this.question_type = questions[_id]["question_type"];
    this.question_content = questions[_id]["question_content"];
    this.choice_1 = questions[_id]["choice_1"];
    this.choice_1_audio = questions[_id]["choice_1_audio"];
    this.choice_2 = questions[_id]["choice_2"];
    this.choice_2_audio = questions[_id]["choice_2_audio"];
    this.choice_3 = questions[_id]["choice_3"];
    this.choice_3_audio = questions[_id]["choice_3_audio"];
    this.choice_4 = questions[_id]["choice_4"];
    this.choice_4_audio = questions[_id]["choice_4_audio"];
    this.correct_answer = questions[_id]["correct_answer"];
    this.next_question = questions[_id]["next_question"];
    this.menu_id = questions[_id]["menu_id"];
  }

}

// let questions: Array<any> = [
//   {
//     id: 1,
//     question_id: "L3P36Q1",
//     question_type: 1,
//     question_content: "assets/img/P36/L3.3P36.jpg",
//     choice_1: "ផែ",
//     choice_1_audio: "L3P36_1.mp3",
//     choice_2: "ផៃ",
//     choice_2_audio: "L3P36_2.mp3",
//     choice_3: "ផេះ",
//     choice_3_audio: "L3P36_3.mp3",
//     choice_4: "ថែ",
//     choice_4_audio: "L3P36_4.mp3",
//     correct_answer: 3,
//     next_question: "L3P36Q2",
//     menu_id: 1,
//   },
// ];