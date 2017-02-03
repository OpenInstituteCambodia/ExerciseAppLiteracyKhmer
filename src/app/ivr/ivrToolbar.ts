import { Platform, AlertController } from 'ionic-angular';
export class ivrToolbarCtl {
  public status: boolean = false;

  constructor( public alert: AlertController, platform: Platform ){

  }

  exitBtn(){
      let alert = this.alert.create({
        title: 'Confirm',
        message: 'Do you want to exit?',
        buttons: [{
          text: "Yes",
          handler: () => {
            console.log("ivrController: QuestionPage: exit(): Exit Application!")
            this.platform.exitApp();
          }
        }, {
          text: "No",
          role: 'cancel'
        }]
      })
      alert.present();
  }
}
