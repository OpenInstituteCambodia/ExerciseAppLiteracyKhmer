import { Injectable } from '@angular/core';

@Injectable()
export class ivrQuestion {
  // Set Static Question in an Array
  questions: any = [

  ];
  // Pre-defined var


  // Variable
  _numberOfQuestion: number = Object.keys(this.questions).length;


  // Constructor


  private _viewQuestionNumber: number;

  constructor(){

  }

  // TODO
  get getQuestions() {
    return this.questions;
  }

  set setViewQuestionNumber(id: number) {
    console.log("ivrQuestion: setViewQuestionNumber(): Assigned = " +  id);
    this._viewQuestionNumber = id;
  }

  get getViewQuestionNumber(): number {
    console.log("ivrQuestion: setViewQuestionNumber(): Passing = " +  this._viewQuestionNumber);
    return this._viewQuestionNumber;
  }

}
