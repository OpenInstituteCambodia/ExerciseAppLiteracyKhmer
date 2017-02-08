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

  public play_audio(_audio: any): void {
    console.log("xelaController: play_audio() -> xelaAudio: play()");
    this._media_player.play(_audio);
  }

  public validate_answer(a_id: number): void {
    let result;
    if (a_id === 1) {
      result = "Yes";
    }else if(a_id === 0) {
      result = "No";
    }
    console.log("xelaController: validate_answer(): The result is -> ", result);
  }

  public stop_audio(): void {
    console.log("xelaController: play_audio() -> xelaAudio: stop()");
    this._media_player.stop();
  }

  public replay_audio(_file: string): void {
    console.log("xelaController: replay_audio() -> xelaAudio: replay()");
    this._media_player.replay(_file);
  }

}
