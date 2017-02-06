import { Injectable } from '@angular/core';
import { Device, MediaPlugin } from 'ionic-native';

/*
  name: "xelaAudio"
  description: "Self Audio Introduction System, Used for children, literacy or disabled people to help navigate on using the application."
  author: ""
  developers: [
    "Socheat Sok (socheatsok78@gmail.com)",
    "Sinat Heum (heumsinatgic25@gmail.com)",
    "Sorya Phoeun (soryaphoeun08@gmail.com)"
  ]
  licenses: "GNU GPL"
*/

@Injectable()
export class xelaAudio {
  private _media_player: any;
  private _platform = Device.platform;

  constructor( ) {
    console.log("xelaController: xelaAudio: Active!");
  }

  public static main(): void {

  }

  public play(_audio_filename: string): boolean {
    if (_audio_filename === '') { // Do Nothing if No File is provided
      console.log("xelaController: xelaAudio: play() -> NO FILENAME PROVIDED");
      return false;
    }

    // Inspecting Platform for linking asset file
    if (this._platform === 'Android') {
      _audio_filename = '/android_asset/www/assets/audio/' + _audio_filename;
    }else {
      console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
      return false;
    }

    const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
    this._media_player = new MediaPlugin( _audio_filename, onStatusUpdate );

    this._media_player.init.then((suc) => {
      console.log("xelaController: xelaAudio: _media_player: Init -> ", suc);
    }, (err) => {
      console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + "Filename: " + _audio_filename + "Message: " + err.message);
    });

    console.log("xelaController: xelaAudio: play() -> ", _audio_filename);
    this._media_player.play();
    return true;
  }

}
