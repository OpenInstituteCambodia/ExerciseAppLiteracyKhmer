import { Device, MediaPlugin } from 'ionic-native';
import { ivrQuestion } from './ivr/ivrQuestion';

export class ivrController {
  // Pre-defined var
  osPlatform: string = Device.platform;
  ivrQuestion = new ivrQuestion();

  // Variable
  file: any;
  audioFile: string;

  // Constructor
  constructor() {
    console.log("ivrController: Active");
  }

  // TODO
  get getQuestions() {
    return this.ivrQuestion.getQuestions;
  }

  setQuestion(questionID: number): void {
    console.log("ivrQuestion: setQuestion(): " + questionID);
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
      console.log('ivrController: stopAudio(): Playback Finished');
      // Stop Playback
      this.file.stop();
    }
  } // stopAudio()

}
