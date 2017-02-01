import { Device, MediaPlugin } from 'ionic-native';
// import { ivrToolbarCtl } from './ivr/toolbar';

export class ivrController {
  // Pre-defined var
  osPlatform: string = Device.platform;
  _toolbarToggle: boolean = false;

  // Variable
  file: any;
  audioFile: string;

  // Constructor
  constructor() {
    console.log("ivrController: Active");
  }

  // Set / Get
  get toolbarToggle(): boolean {
    return this._toolbarToggle;
  }

  set toolbarToggle(status: boolean) {
    this._toolbarToggle = status;
  }


  // Start Block Function
  playAudio(audiofile: string): any {
    if (this.osPlatform === "Android") {
      console.log("ivrController: playAudio(): Play");
      const onStatusUpdate = (status) => console.log(status);
      this.file = new MediaPlugin('/android_asset/www/assets/audio/' + audiofile, onStatusUpdate);

      if (audiofile != '') {
        this.file.init.then(() => {
          console.log('ivrController: playAudio(): Playback Finished');
        }, (err) => {
          console.log('ivrController: playAudio(): Somthing went wrong! Error code: ' + err.code + 'Filename: ' + audiofile + ' Message: ' + err.message);
        });

        // play the file
        this.file.play();
      }
    } // if Android
  } // playAudio()

  stopAudio() {
    if (this.osPlatform === "Android") {
      // Stop Playback
      this.file.stop();
    }
  } // stopAudio()

}
