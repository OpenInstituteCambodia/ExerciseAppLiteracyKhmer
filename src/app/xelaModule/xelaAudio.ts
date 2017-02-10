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

  constructor() {

  }

  public play(options: any): void {
    NativeAudio.preloadSimple(options["u_id"], options["path"]).then(
      function(suc){
        NativeAudio.play(options["u_id"]).then(
          function(suc){
            console.log("xelaController: xelaAudio: play() -> NativeAudio.play() -> Playing: ", suc);
          },
          function(err){
            console.log("xelaController: xelaAudio: play() -> NativeAudio.play() -> Something went wrong, Error: ", err);
          }
        );
      },
      function(err){
        console.log("xelaController: xelaAudio: play() -> preloadSimple() -> Something went wrong, Error: ", err);
      }
    );
  }

  public unload(options: any): void {
    NativeAudio.unload(options).then(
      function(suc){
        console.log("xelaController: xelaAudio: unload() -> NativeAudio.unload() Success -> " + options, suc);
      },
      function(err){
        console.log("xelaController: xelaAudio: unload() -> NativeAudio.unload() Something went wrong, Error -> " + options, err);

      }
    );
  }
}
