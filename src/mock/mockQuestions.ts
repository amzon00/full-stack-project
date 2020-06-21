import { Question } from "../models/question.model";

export default [
  new Question(
    "What year was the very first model of the iPhone released?",
    {
      answerOne: `${2007} <- correct`,
      answerTwo: 2005,
      answerThree: 2010,
      answerFour: 1998,
    },
    "Bill"
  ),
  new Question(
    "Which planet has the most gravity?",
    {
      answerOne: "Mars",
      answerTwo: "Saturn",
      answerThree: "Earth",
      answerFour: "Jupiter <- correct",
    },
    "Stephen"
  ),
  new Question(
    "Is cereal soup?",
    {
      answerOne: "No",
      answerTwo: "Yes",
      answerThree: "Maybe",
      answerFour: "It Depends <- correct",
    },
    "Tony the Tiger"
  ),
  new Question(
    "Which country produces the most coffee in the world?",
    {
      answerOne: "Morocco",
      answerTwo: "Spain",
      answerThree: "Brazil <- correct",
      answerFour: "Cuba",
    },
    "Pablo"
  ),
  new Question(
    "Why is Europe like a frying pan?",
    {
      answerOne: "Because it is a continent",
      answerTwo: "Because it is surrounded by water",
      answerThree: "Because it has Greece at the bottom <- correct",
      answerFour: "Because it is old and rusty",
    },
    "Nicolas"
  ),
];
