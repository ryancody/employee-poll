import React from 'react';
import { Question } from './Question';

export function Questions(props) {
  const { questions, currentUser } = props;
  const sortedQuestions = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <div>
      {sortedQuestions?.map((q) => (
        <Question key={q.id} question={q} currentUser={currentUser} />
      ))}
    </div>
  );
}

export default Questions;
