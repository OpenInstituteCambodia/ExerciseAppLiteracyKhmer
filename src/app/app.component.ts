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
  route = new ViewController();

  audioFile: string = "1.mp3";
  ivrController = new ivrController(this.audioFile);

  public showToolbar: boolean = this.ivrController.toolbarToggle;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();

      // ivrController Code Block
      this.ivrController.playAudio();

      console.log(this.route.willEnter);
    });
  }

  set setToolbarStatus(status: boolean){
    this.ivrController.toolbarToggle = true;
  }

}
