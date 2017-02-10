import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { xelaAudio } from '../../app/xelaModule/xelaAudio';


/*
  Generated class for the Q page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
  providers:  [ xelaRoute, xelaAudio ]
})
export class QuestionPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _route: xelaRoute, public _audioPlayer: xelaAudio) {
    this._question(this.navParams.get("_id")-1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QPage');
  }

  viewWillLeave() {

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
      {
        id: 3,
        question_id: "L3P36Q3",
        question_type: 3,
        question_content: "សរសេរ",
        choice_1: "assets/img/P36/L3.1P36.jpg",
        choice_1_audio: "L3P36_9.mp3",
        choice_2: "assets/img/P36/L3.3P36.jpg",
        choice_2_audio: "L3P36_3.mp3",
        choice_3: "assets/img/P36/L3.4P36.jpg",
        choice_3_audio: "L3P36_11.mp3",
        choice_4: "assets/img/P36/L3.2P36.jpg",
        choice_4_audio: "L3P36_12.mp3",
        correct_answer: 3,
        next_question: "L3P36Q4",
        menu_id: 1,
      },
      {
        id: 4,
        question_id: "L3P36Q4",
        question_type: 1,
        question_content: "assets/img/P36/L3.2P36.jpg",
        choice_1: "បបរគ្រឿង",
        choice_1_audio: "L3P36_12.mp3",
        choice_2: "សរសើរ",
        choice_2_audio: "L3P36_13.mp3",
        choice_3: "បី",
        choice_3_audio: "L3P36_14.mp3",
        choice_4: "ដំបៅ",
        choice_4_audio: "L3P36_6.mp3",
        correct_answer: 1,
        next_question: "L3P36Q5",
        menu_id: 1,
      },
      {
        id: 5,
        question_id: "L3P36Q5",
        question_type: 2,
        question_content: "L3P36_13.mp3",
        choice_1: "ថែ",
        choice_1_audio: "L3P36_4.mp3",
        choice_2: "សរសើរ",
        choice_2_audio: "L3P36_13.mp3",
        choice_3: "ថៅកែ",
        choice_3_audio: "L3P36_5.mp3",
        choice_4: "សសរ",
        choice_4_audio: "L3P36_8.mp3",
        correct_answer: 2,
        next_question: "L3P36Q6",
        menu_id: 1,
      },
      {
        id: 6,
        question_id: "L3P36Q6",
        question_type: 3,
        question_content: "ថូ",
        choice_1: "assets/img/P36/L3.1P36.jpg",
        choice_1_audio: "L3P36_9.mp3",
        choice_2: "assets/img/P36/L3.3P36.jpg",
        choice_2_audio: "L3P36_12.mp3",
        choice_3: "assets/img/P36/L3.4P36.jpg",
        choice_3_audio: "L3P36_3.mp3",
        choice_4: "assets/img/P36/L3.2P36.jpg",
        choice_4_audio: "L3P36_8.mp3",
        correct_answer: 1,
        next_question: "RootPage",
        menu_id: 1,
      },
    ];

    console.log("xelaController: QuestionPage: Displaying Question -> ", questions[_id]);
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

    this._play_question(questions[_id]);
  }

  private _play_question(options: any): boolean {

    let opt;
    if (this.question_type == 2) {
      opt = {
        u_id: 'Media1',
        path: 'assets/audio/general/M'+this.question_type+'.mp3'
      };

      this._audioPlayer.play(opt);

      setTimeout(function(_audioPlayer) {
        opt = {
          u_id: 'Media2',
          path: 'assets/audio/lessons/'+options["choice_"+options["correct_answer"]+"_audio"]
        };
        _audioPlayer.play(opt);

      }, 2500, this._audioPlayer);
      return true;
    }

    opt = {
      u_id: 'Media1',
      path: 'assets/audio/general/M'+this.question_type+'.mp3'
    };
    this._audioPlayer.play(opt);
    this.unload(3200);
    return true;
  }

  public answer(options): void {

    let question = {
      id: this.id,
      question_id: this.question_id,
      question_type: this.question_type,
      question_content: this.question_content,
      choice_1: this.choice_1,
      choice_1_audio: this.choice_1_audio,
      choice_2: this.choice_2,
      choice_2_audio: this.choice_2_audio,
      choice_3: this.choice_3,
      choice_3_audio: this.choice_3_audio,
      choice_4: this.choice_4,
      choice_4_audio: this.choice_4_audio,
      correct_answer: this.correct_answer,
      next_question: this.next_question,
      menu_id: this.menu_id,
    }

    let opt = {
      u_id: 'Media2',
      path: 'assets/audio/lessons/'+question["choice_"+options+"_audio"]
    };
    this._audioPlayer.play(opt);

    if(options == this.correct_answer){
      console.log("Answer Is Correct!");
      setTimeout(function(_audioPlayer) {
        opt = {
          u_id: 'Media1',
          path: 'assets/audio/general/Yes.mp3'
        };
        _audioPlayer.play(opt);
      }, 1200, this._audioPlayer);
    }else {
      console.log("Answer Is Incorrect!");
      setTimeout(function(_audioPlayer) {
        opt = {
          u_id: 'Media1',
          path: 'assets/audio/general/No.mp3'
        };
        _audioPlayer.play(opt);
      }, 1200, this._audioPlayer);
    }
    this.unload(2500);
  };

  public popToRoot() {
    this.unload(0);
    this._route.popToRoot();
  }

  public unload(delay): void {
    setTimeout(function(_audioPlayer){
      _audioPlayer.unload("Media1");
      _audioPlayer.unload("Media2");
    }, delay, this._audioPlayer);
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
