import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ivrController } from './ivrController';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp  {
  public rootPage: any  = HomePage;
  public showToolbar: boolean = false;

  audioFile: string = "1.mp3";
  ivrController = new ivrController(this.audioFile);
  viewCtrl = new ViewController();

  constructor(platform: Platform) {
    platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();
      this.viewCtrl.showBackButton(false);

      // ivrController Code Block
      this.ivrController.playAudio();


    });

  }

}
