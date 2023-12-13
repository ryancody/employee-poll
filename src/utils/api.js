import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from './_DATA.js';
import { add, vote } from '../features/questions/questionsSlice.js';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then((q) => dispatch(add(q)));
  };
}

export function handleVote(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then((q) => dispatch(vote({authedUser, qid, answer})));
  };
}
