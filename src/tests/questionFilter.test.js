import { filterUnanswered, filterAnswered, filterMine } from '../utils/questionFilter';

describe('questionFilter', () => {
  const questions = {
    q1: { optionOne: { votes: ['amy'] }, optionTwo: { votes: [] }, author: 'amy' },
    q2: { optionOne: { votes: [] }, optionTwo: { votes: ['bender'] }, author: 'bender' },
    q3: { optionOne: { votes: [] }, optionTwo: { votes: [] }, author: 'farns' },
  };

  it('filterUnanswered should return unanswered questions', () => {
    const result = filterUnanswered(questions, 'amy');
    expect(result).toEqual([questions.q2, questions.q3]);
  });

  it('filterAnswered should return answered questions', () => {
    const result = filterAnswered(questions, 'amy');
    expect(result).toEqual([questions.q1]);
  });

  it('filterMine should return user\'s questions', () => {
    const result = filterMine(questions, 'amy');
    expect(result).toEqual([questions.q1]);
  });
});
