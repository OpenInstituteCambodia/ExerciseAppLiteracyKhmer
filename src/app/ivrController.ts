import { Injectable } from '@angular/core';
import { Device } from 'ionic-native';

import { ivrAudio } from './ivr/ivrAudio';
import { ivrToolbar } from './ivr/ivrToolbar';
import { ivrQuestion } from './ivr/ivrQuestion';

@Injectable()
export class ivrController {
  // Pre-defined var
  osPlatform: string = Device.platform;
  ivrQuestion = new ivrQuestion();
  ivrAudio = new ivrAudio();

  // Variable


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
  }

  // Start Block Function
  playAudio(audiofile: string): void {
    this.ivrAudio.playAudio(audiofile);
  } // playAudio()

  stopAudio(): void {
    this.ivrAudio.stopAudio();
  } // stopAudio()

  replayAudio(audio_id: string): void {
    this.ivrAudio.replayAudio(audio_id);
  }

}
