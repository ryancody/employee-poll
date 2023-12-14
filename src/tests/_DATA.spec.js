import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

const question = {
  optionOneText: 'bite my',
  optionTwoText: 'shiny metal ass',
  author: 'bender'
};
const answer = {
  authedUser: 'bender',
  qid: 'xj352vofupe1dqz9emx13r',
  answer: 'optionOne'
};

describe('_saveQuestion', () => {
  it('should save question', async () => {
    const format = await _saveQuestion(question);
    expect(format.author).toEqual('bender');
    expect(format.optionOne.text).toEqual('bite my');
    expect(format.optionTwo.text).toEqual('shiny metal ass');
  });

  it('should reject invalid data', async () => {
    await expect(_saveQuestion({qid: 'foo'})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
  });
});

describe('_saveQuestionAnswer', () => {
  it('should save question answer', async () => {
    const result = await _saveQuestionAnswer(answer);
    expect(result).toBeTruthy();
  });

  it('should reject invalid data', async () => {
    await expect(_saveQuestionAnswer({qid: 'foo'})).rejects.toEqual("Please provide authedUser, qid, and answer")
  });
});
