import { Device, MediaPlugin } from 'ionic-native';

export class ivrController {
  // Pre-defined var
  osPlatform: string = Device.platform;

  // Variable
  audioFile: string;

  // Constructor
  constructor(audiofile: string) {
    console.log("ivrController: Active");

    this.audioFile = audiofile;
  }

  // Start Block Function
  playAudio(): any {
    if (this.osPlatform === "Android") {
      console.log("ivrController: playAudio(): Play");
      const onStatusUpdate = (status) => console.log(status);
      const file = new MediaPlugin('/android_asset/www/assets/audio/'+this.audioFile, onStatusUpdate);

      file.init.then(() => {
        console.log('ivrController: playAudio(): Playback Finished');
      }, (err) => {
        console.log('ivrController: playAudio(): Somthing went wrong! Error code: ' + err.code + ' Message: ' + err.message);
      });

      // play the file
      file.play();
    } // if Android
  }

}
