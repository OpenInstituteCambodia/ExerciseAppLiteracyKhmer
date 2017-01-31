import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Device, StatusBar, Splashscreen } from 'ionic-native';

import { ivrController } from './ivrController';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp  {
  rootPage = HomePage;
  ivrController = new ivrController();

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // ivrController Code Block


      this.ivrController.playAudio();


    });

  }


}
