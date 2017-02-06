import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
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
  private audio_filename: string = "miclejackson_moonwalk.mp3";
  public platform = new Platform();

  constructor( ) {
    console.log("xelaController: xelaAudio: Active!");
  }

  public static main(): void {

  }

}
