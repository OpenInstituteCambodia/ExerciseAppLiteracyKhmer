import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, MediaPlugin } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // // Create a MediaPlugin instance.  Expects path to file or url as argument
      // // We can optionally pass a second argument to track the status of the media
      //
      // const onStatusUpdate = (status) => console.log(status);
      //
      // const file = new MediaPlugin('../assets/audio/1.mp3', onStatusUpdate);
      //
      // // Catch the Success & Error Output
      // // Platform Quirks
      // // iOS calls success on completion of playback only
      // // Android calls success on completion of playback AND on release()
      // file.init.then(() => {
      //   console.log('Playback Finished');
      // }, (err) => {
      //   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
      // });
    });
  }
}
