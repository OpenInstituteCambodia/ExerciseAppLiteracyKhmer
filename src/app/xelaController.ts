import { Injectable } from '@angular/core';

// xelaModule
import { xelaAudio } from './xelaModule/xelaAudio';

/*
  name: "xelaController"
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
export class xelaController {
  private _media_player = new xelaAudio();

  constructor( ) {
    console.log("xelaController: Active!");
  }

  public static main(): void {
  }

  public play_audio(_file: string): void {
    console.log("xelaController: play_audio() -> xelaAudio: play()");
    this._media_player.play(_file);
  }

  public stop_audio(): void {
    console.log("xelaController: play_audio() -> xelaAudio: stop()");
    this._media_player.stop();
  }


}
