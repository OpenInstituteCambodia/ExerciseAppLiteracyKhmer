import { Device, MediaPlugin } from 'ionic-native';

export class ivrAudio {
  // Pre-defined var
  osPlatform: string = Device.platform;

  // Variable
  file: any;
  audioFile: string;

  constructor() { }

  // Start Block Function
  playAudio(audiofile: string): void {
    if (this.osPlatform === "Android") {
      console.log("ivrController: playAudio(): Play");
      const onStatusUpdate = (status) => console.log("ivrController: playAudio(): onStatusUpdate" , status);
      this.file = new MediaPlugin('/android_asset/www/assets/audio/' + audiofile, onStatusUpdate);
      if (audiofile != '') {
        this.file.init.then(() => {
          console.log('ivrController: playAudio(): Playback Finished');
        }, (err) => {
          console.log('ivrController: playAudio(): Somthing went wrong! Error code: ' + err.code + ' Filename: ' + audiofile + ' Message: ' + err.message);
        });
        this.file.play();
      }
    } // if Android
  } // playAudio()

  stopAudio(): void {
    if (this.osPlatform === "Android") {
      // this.plt.is('ios')
      console.log('ivrController: stopAudio(): Playback Released');
      this.file.release();
      console.log('ivrController: stopAudio(): Playback Stoped');
      this.file.stop();
    }
  } // stopAudio()

  replayAudio(audio_id: string): void {
    if (this.osPlatform === "Android") {
      let currentPlaybackPosition;
      this.file.getCurrentPosition().then((position) => {
        currentPlaybackPosition = position;
        if (currentPlaybackPosition > 0 || currentPlaybackPosition < 0) {
          this.stopAudio();
          this.playAudio(audio_id);
        }
        console.log("ivrController: replayAudio() = ", currentPlaybackPosition);
      });
    }
  }
}
