export class ivrQuestion {
  questions: any = [
    1,
    2,
    3,
    4,
    5
  ];
  _numberOfQuestion: number = Object.keys(this.questions).length;

  constructor(){
    console.log(
      "typeof this.questions " +
      typeof this.questions
    )
    console.log(
      "length this.questions " +
      this._numberOfQuestion
    )
  }

  // TODO
  get getQuestions(): number {
    return this.questions;
  }

}
