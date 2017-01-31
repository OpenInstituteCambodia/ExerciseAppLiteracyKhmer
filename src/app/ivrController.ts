import { Device, MediaPlugin } from 'ionic-native';
// import { ivrToolbarCtl } from './ivr/toolbar';

export class ivrController {
  // Pre-defined var
  osPlatform: string = Device.platform;
  _toolbarToggle: boolean = false;

  // Variable
  audioFile: string;

  // Constructor
  constructor(audiofile: string) {
    console.log("ivrController: Active");
    this.audioFile = audiofile;
  }

  // Set / Get
  get toolbarToggle(): boolean {
    return this._toolbarToggle;
  }

  set toolbarToggle(status: boolean) {
    this._toolbarToggle = status;
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
