export class Question {
  static nextId = 0;
  id = Question.nextId++;
  constructor(
    public question: string,
    public answers: {
      answerOne: string | number;
      answerTwo: string | number;
      answerThree: string | number;
      answerFour: string | number;
    },
    public author: string
  ) {}
}
