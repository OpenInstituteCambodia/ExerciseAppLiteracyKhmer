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
  public _media_player: any;
  private _platform = Device.platform;

  // Question Type Filename
  private _YES: string = "Yes.mp3";
  private _NO: string = "No.mp3";

  constructor( ) {
    console.log("xelaController: xelaAudio: Active!");
  }

  public static main(): void {

  }

  public play(_audio: any): boolean {
    if (_audio === '') { // Do Nothing if No File is provided
      console.log("xelaController: xelaAudio: play() -> NO FILENAME PROVIDED");
      return false;
    }

    let _M = "/android_asset/www/assets/audio/general/M"+_audio["q_type"]+".mp3";


    // Inspecting Platform for linking asset file
    // if (this._platform === 'Android') {
    //   _audio = '/android_asset/www/assets/audio/general/' + _audio;
    // }else {
    //   console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
    //   console.log("xelaController: xelaAudio: playDebug() -> ", _audio);
    //   return false;
    // }

    // New
    if(_audio["q_type"] === 2) {
      console.log("xelaController: xelaAudio: playDebug() -> Question Type is M2", _audio);

      // Playing Main M2 Audio
      // --------------------------------
      const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
      this._media_player = new MediaPlugin( _M, onStatusUpdate );
      this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _audio + ", Message: " + err.message); });

      console.log("xelaController: xelaAudio: play() -> ", _M);
      this._media_player.play();

      console.log("xelaController: xelaAudio: play() M2 Duration ->", this._media_player.getDuration());

      setTimeout(function(){
        // Then Playing the Secondary Audio
        // --------------------------------
        let audio_filename = "L"+_audio["l_id"]+"P"+_audio["p_id"]+"_"+_audio["q_id"]+".mp3";
        audio_filename = "/android_asset/www/assets/audio/lessons/"+audio_filename;
        console.log("xelaController: xelaAudio: play() -> let audio_filename", audio_filename);
        this._media_player = new MediaPlugin( audio_filename, onStatusUpdate );
        this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _audio + ", Message: " + err.message); });

        console.log("xelaController: xelaAudio: play() -> ", audio_filename);
        this._media_player.play();
      }, 2500);

    } else {
      // Playing Main M1, M3, M4 Audio
      // --------------------------------
      const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
      this._media_player = new MediaPlugin( _M, onStatusUpdate );
      this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _audio + ", Message: " + err.message); });

      console.log("xelaController: xelaAudio: play() -> ", _M);
      this._media_player.play();
    }

    return true;
  }
  // public play(_audio_filename: string): boolean {
  //   if (_audio_filename === '') { // Do Nothing if No File is provided
  //     console.log("xelaController: xelaAudio: play() -> NO FILENAME PROVIDED");
  //     return false;
  //   }
  //
  //   // Inspecting Platform for linking asset file
  //   if (this._platform === 'Android') {
  //     _audio_filename = '/android_asset/www/assets/audio/general/' + _audio_filename;
  //   }else {
  //     console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
  //     console.log("xelaController: xelaAudio: playDebug() -> ", _audio_filename);
  //     return false;
  //   }
  //
  //   const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
  //   this._media_player = new MediaPlugin( _audio_filename, onStatusUpdate );
  //
  //   this._media_player.init.then((suc) => {
  //     console.log("xelaController: xelaAudio: _media_player: Init -> ", suc);
  //   }, (err) => {
  //     console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _audio_filename + ", Message: " + err.message);
  //   });
  //
  //   console.log("xelaController: xelaAudio: play() -> ", _audio_filename);
  //   this._media_player.play();
  //   return true;
  // }

  public stop(): void {
    if (this._platform === 'Android' || this._platform === 'iOS') {
      if (typeof this._media_player !== "undefined") {
        this._media_player.stop();
        console.log("xelaController: xelaAudio: stop() -> success");
        this._media_player.release();
        console.log("xelaController: xelaAudio: stop() -> release() -> success");
      }
    }
  }

  public replay(_audio_filename: string): void {
    console.log("xelaController: xelaAudio: replay() -> Stopping Current Playback");
    this.stop();
    console.log("xelaController: xelaAudio: replay() -> Replaying Audio -> ", _audio_filename);
    this.play(_audio_filename);
  }

}
