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
    this.ivrQuestion.setViewQuestionNumber = questionID;
    console.log(this.ivrQuestion);
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
      console.log('ivrController: stopAudio(): Playback Stoped');
      // Stop Playback
      this.file.stop();
    }
  } // stopAudio()

  replayAudio(audio_id: string) {
    if (this.osPlatform === "Android") {
      // get current playback position
      let currentPlaybackPosition;
      this.file.getCurrentPosition().then((position) => {
        console.log("ivrController: replayAudio() = ", position);
        currentPlaybackPosition = position;
      });
      if (currentPlaybackPosition > 0) {
        this.stopAudio();
        this.playAudio(audio_id);
      }
    }
  }

}
