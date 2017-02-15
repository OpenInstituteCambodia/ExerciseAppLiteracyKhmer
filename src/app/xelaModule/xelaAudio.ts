import { Injectable } from '@angular/core';
import { Device, NativeAudio } from 'ionic-native';

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
  public isFinished: boolean = true;
  private playbackUUID: Array<any> = [];
  private _platform = Device.platform
  constructor() {

  }

  get isFinishedPlaying() {
    return this.isFinished;
  }

  private setupPlaybackUUID(options) {
    if (this.playbackUUID.indexOf(options) == -1) {
      this.playbackUUID.push(options);
    }
    console.log("Media Playback UUID", this.playbackUUID);
  }

  public play(options: any): boolean {
    // Inspecting Platform for linking asset file
    this.setupPlaybackUUID(options["u_id"]);
    if (this._platform != 'Android') {
      console.log("xelaController: xelaAudio: play() -> Platform Does Not Support");
      this.isFinished = true;
      return false;
    }
    this.isFinished = false;
    NativeAudio.preloadSimple(options["u_id"], options["path"]).then(
      (suc) => {
        // Unload Playback once Finished
        NativeAudio.play(options["u_id"], () => {
          console.log("xelaController: xelaAudio: play() -> NativeAudio.play() -> Is Done Playing");
          NativeAudio.unload(options["u_id"]).then(
            function(suc){
              console.log("xelaController: xelaAudio: unload() -> NativeAudio.unload() Success -> " + options["u_id"], suc);
            },
            function(err){
              console.log("xelaController: xelaAudio: unload() -> NativeAudio.unload() Something went wrong, Error -> " + options["u_id"], err);
            }
          );
          this.isFinished = true;
        });
      },
      (err) => {
        console.log("xelaController: xelaAudio: play() -> preloadSimple() -> Something went wrong, Error: ", err);
      }
    );
  } //play()

  public unload() {
    if (this._platform != 'Android') {
      console.log("xelaController: xelaAudio: unload() -> Platform Does Not Support");
      return false;
    }
    for (let i = 0; i < this.playbackUUID.length; i++) {
      console.log("xelaController: xelaAudio: unload() -> Unloading -> ", this.playbackUUID[i]);
        NativeAudio.unload(this.playbackUUID[i]).then((suc) => {
          console.log("xelaController: xelaAudio: unload() -> ", this.playbackUUID[i], suc);
        },(err) => {
          console.log("xelaController: xelaAudio: unload() -> ", err);
        });
    }
  }

}
