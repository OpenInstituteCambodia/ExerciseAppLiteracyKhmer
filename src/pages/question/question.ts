import { Component } from '@angular/core';
import { FormsModule } from '@angular/form';
import { NavParams } from 'ionic-angular';

import { xelaController } from '../../app/xelaController';
import { xelaRoute } from '../../app/xelaModule/xelaRoute';
import { xelaToolbar } from '../../app/xelaModule/xelaToolbar';

import { ResultPage } from '../result/result';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
  providers: [ xelaController, xelaRoute, xelaToolbar ]
})
export class QuestionPage {
  public _id: number;
  q_type: any;
  q_id: any;
  init_sound: any;

  public showCorrect: boolean = false;

  constructor(
    private _xela: xelaController,
    public _route: xelaRoute,
    private _toolbar: xelaToolbar,
    private _param: NavParams
  ) {
    this._id = this._param.get("_id");
    this.q_type = this._param.get("q_type");
    this.q_id = this._param.get("q_id");
    this.init_sound = this._param.get("init_sound");

    console.log("Getting Data From HTML",this.showCorrect);
    if(this._id == 7) {
      this._route.popToRoot();
    }
  }

  ionViewDidEnter() {
    let opt;

    if (this._id == 1) {
      opt = {
        _id: 1,
        q_type: 1,
        q_id: "L3P36",
        init_sound: 3
      };
    }else if (this._id == 2) {
      opt = {
        _id: 2,
        q_type: 2,
        q_id: "L3P36",
        init_sound: 5
      };
    }else if (this._id == 3) {
      opt = {
        _id: 3,
        q_type: 3,
        q_id: "L3P36",
        init_sound: 11
      };
    }else if (this._id == 4) {
      opt = {
        _id: 4,
        q_type: 1,
        q_id: "L3P36",
        init_sound: 12
      };
    }else if (this._id == 5) {
      opt = {
        _id: 5,
        q_type: 2,
        q_id: "L3P36",
        init_sound: 13
      };
    }else if (this._id == 6) {
      opt = {
        _id: 6,
        q_type: 3,
        q_id: "L3P36",
        init_sound: 1
      };
    }

    // console.log("QuestoinPage: let opt = ", opt);
    this._xela.play_audio(opt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ionViewWillLeave() {
    this._xela.stop_audio();
  }

  public answer(a_id: number, choice: number): void {
    this._xela.stop_audio();

    let result;
    if (a_id === 1) {
      result = "Yes";
    }else if(a_id === 0) {
      result = "No";
    }

    let opt;

    if (this._id == 1) {
      opt = {
        _id: 1,
        q_type: 1,
        q_id: "L3P36",
        init_sound: choice
      };
    }else if (this._id == 2) {
      opt = {
        _id: 2,
        q_type: 2,
        q_id: "L3P36",
        init_sound: choice
      };
    }else if (this._id == 3) {
      opt = {
        _id: 3,
        q_type: 3,
        q_id: "L3P36",
        init_sound: choice
      };
    }else if (this._id == 4) {
      opt = {
        _id: 4,
        q_type: 1,
        q_id: "L3P36",
        init_sound: choice
      };
    }else if (this._id == 5) {
      opt = {
        _id: 5,
        q_type: 2,
        q_id: "L3P36",
        init_sound: choice
      };
    }else if (this._id == 6) {
      opt = {
        _id: 6,
        q_type: 3,
        q_id: "L3P36",
        init_sound: choice
      };
    }

    console.log("xelaController: validate_answer(): The result is -> ", result);

    this._xela.play_result(opt, result);

    if (a_id === 1) {
      opt = {
        _id: this._id+1,
        q_type: this.q_type,
        q_id: this.q_id,
        init_sound: choice
      };
      // if (opt["_id"] == 7) {
      //   setTimeout(function(_route) {
      //     _route.popToRoot();
      //   } , 2000, this._route);
      // }else {
        // setTimeout(function(_route) {
        //   _route.result(QuestionPage, opt)
        // } , 2000, this._route);
        this.showCorrect = true;
      // }
    }

  }

  public go_to_next(): void {
    let opt = {
      _id: this._id+1,
    };

      if (opt["_id"] == 7) {
        this._route.popToRoot();
      }else {
        this._xela.stop_audio();
        this._route.result(QuestionPage, opt);
      }
  }

  public button_push_root(): void {
    this._route.popToRoot();
  }

  public button_replay_question(): void {
    let opt;

    if (this._id == 1) {
      opt = {
        _id: 1,
        q_type: 1,
        q_id: "L3P36",
        init_sound: 3
      };
    }else if (this._id == 2) {
      opt = {
        _id: 2,
        q_type: 2,
        q_id: "L3P36",
        init_sound: 5
      };
    }else if (this._id == 3) {
      opt = {
        _id: 3,
        q_type: 3,
        q_id: "L3P36",
        init_sound: 11
      };
    }else if (this._id == 4) {
      opt = {
        _id: 4,
        q_type: 1,
        q_id: "L3P36",
        init_sound: 12
      };
    }else if (this._id == 5) {
      opt = {
        _id: 5,
        q_type: 2,
        q_id: "L3P36",
        init_sound: 13
      };
    }else if (this._id == 6) {
      opt = {
        _id: 6,
        q_type: 3,
        q_id: "L3P36",
        init_sound: 1
      };
    }

    this._xela.replay_audio(opt);
  }

  set visibleNext(val) {
    this.showCorrect = val;
  }

  public button_exit_application(): void {
    console.log("exit app");
    this._toolbar.exit();
  }

}
