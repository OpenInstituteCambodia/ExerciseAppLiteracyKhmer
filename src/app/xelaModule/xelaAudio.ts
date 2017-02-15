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
  private _platform = Device.platform
  constructor() {

  }

  get isFinishedPlaying() {
    return this.isFinished;
  }

  public play(options: any): boolean {
    // Inspecting Platform for linking asset file
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


  }

}
