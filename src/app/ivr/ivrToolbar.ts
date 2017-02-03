import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';

@Injectable()
export class ivrToolbar {
  // Pre-defined var
  public status: boolean = false;
  _platform;

  // Variable


  // Constructor
  constructor( public alert: AlertController, platform: Platform ){
    this._platform = platform;
  }

  exitBtn(): void {
    console.log("ivrController: QuestionPage: exit(): Active");
    let alert = this.alert.create({
      title: 'Confirm',
      message: 'Do you want to exit?',
      buttons: [{
        text: "Yes",
        handler: () => {
          console.log("ivrController: QuestionPage: exit(): Exit Application!");
          this._platform.exitApp();
        }
      }, {
        text: "No",
        role: 'cancel'
      }]
    });
    alert.present();
  }
}
