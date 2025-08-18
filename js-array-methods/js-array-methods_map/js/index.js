console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];
/*Version to check:
const lowerCaseAnswers{
  const newAnswer = card.answer.toLowerCase();
  console.log("New Answer: " + newAnswer);
  return newAnswer;
});*/
const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase()); // ['as often as you like.', ...]
console.log(lowerCaseAnswers);
/*Version to check:
const questionsAndAnswersTogether = cards.map((card) => {
  const questionAndAnswer = card.question + " - " + card.answer;
  console.log("Question and Answer together: ", questionAndAnswer);
  return questionAndAnswer;
}); */
const questionsAndAnswersTogether = cards.map(
  (card) => card.question + " - " + card.answer
);
console.log(questionsAndAnswersTogether);
// ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map(
  (card) => `question: '${card.question}', answer: '${card.answer}'`
);
console.log("QuestionAndAnswer: " + questionAndAnswer);
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
