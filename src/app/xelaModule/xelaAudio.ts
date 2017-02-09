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

  constructor( ) {
    console.log("xelaController: xelaAudio: Active!");
  }

  public play(_file) {
    const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
    this._media_player = new MediaPlugin( _file, onStatusUpdate );
    this._media_player.init.then((suc) => {
      console.log("xelaController: xelaAudio: _media_player: Init -> ", suc);
    }, (err) => {
      console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _file + ", Message: " + err.message);
    });
    this._media_player.play();
  }

}


/*

public init(file: string): void {
  // Inspecting Platform for linking asset file
  // if (this._platform === 'Android') {
  //   _audio = '/android_asset/www/assets/audio/general/' + _audio;
  // }else {
  //   console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
  //   console.log("xelaController: xelaAudio: playDebug() -> ", _audio);
  //   return false;
  // }
  const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
  this._media_player = new MediaPlugin( file, onStatusUpdate );
  this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + file + ", Message: " + err.message); });
}

public play(_audio: any): boolean {
  if (_audio === '' || typeof _audio === 'undefined' ) { // Do Nothing if No File is provided
    console.log("xelaController: xelaAudio: play() -> NO FILENAME PROVIDED");
    return false;
  }
  // Inspecting Platform for linking asset file
  if (this._platform !== 'Android') {
    console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
    console.log("xelaController: xelaAudio: playDebug() -> ", _audio);
    return false;
  }

  let _M = "/android_asset/www/assets/audio/general/M"+_audio["q_type"]+".mp3";

  if(_audio["q_type"] === 2) {
    console.log("xelaController: xelaAudio: playDebug() -> Question Type is M2", _audio);
    const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
    this._media_player = new MediaPlugin( _M, onStatusUpdate );
    this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _M + ", Message: " + err.message); });
    this._media_player.play();

    setTimeout(function(_audio, onStatusUpdate, _media_player){
      let _M = "/android_asset/www/assets/audio/lessons/"+_audio["q_id"]+"_"+_audio["init_sound"]+".mp3";

      onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
      _media_player = new MediaPlugin( _M, onStatusUpdate );
      _media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _M + ", Message: " + err.message); });
      _media_player.play();
    },
      2500,
      _audio,
      onStatusUpdate,
      this._media_player
    );

  } else {
    const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
    this._media_player = new MediaPlugin( _M, onStatusUpdate );
    this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _M + ", Message: " + err.message); });
    this._media_player.play();
  }

  return true;
}

public correct(_audio: any, _result: any): boolean {
  if (_audio === '') { // Do Nothing if No File is provided
    console.log("xelaController: xelaAudio: play() -> NO FILENAME PROVIDED");
    return false;
  }
  // Inspecting Platform for linking asset file
  if (this._platform !== 'Android') {
    console.log("xelaController: xelaAudio: play() -> PLATFORM NOT SUPPORTED");
    console.log("xelaController: xelaAudio: playDebug() -> ", _audio);
    return false;
  }


  console.log("xelaController: xelaAudio: playDebug() -> Question Type is M2", _audio);

  let _M = "/android_asset/www/assets/audio/lessons/"+_audio["q_id"]+"_"+_audio["init_sound"]+".mp3";
  const onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
  this._media_player = new MediaPlugin( _M, onStatusUpdate );
  this._media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _M + ", Message: " + err.message); });
  this._media_player.play();

  setTimeout(function(onStatusUpdate, _media_player, _result){
    let _M = "/android_asset/www/assets/audio/general/"+_result+".mp3";
    onStatusUpdate = (status) => console.log("xelaController: xelaAudio: play(): onStatusUpdate" , status);
    _media_player = new MediaPlugin( _M, onStatusUpdate );
    _media_player.init.then((suc) => { console.log("xelaController: xelaAudio: _media_player: Init -> ", suc); }, (err) => { console.log("xelaController: xelaAudio: _media_player: Init -> Somthing went wrong! Error code: " + err.code + ", Filename: " + _M + ", Message: " + err.message); });
    _media_player.play();
  },
    1200,
    onStatusUpdate,
    this._media_player,
    _result
  );


  return true;
}

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

*/
