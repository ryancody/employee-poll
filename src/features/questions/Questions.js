import React from 'react';
import { useSelector } from 'react-redux';
import { Question } from './Question';
import { selectCurrentUser } from '../users/usersSlice';

export function Questions(props) {
    const { questions } = props;
    const currentUser = useSelector(selectCurrentUser);
    const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);

    return (
        <div>
            {sortedQuestions?.map(q => (
                <Question key={q.id} question={q} currentUser={currentUser} />
            ))}
        </div>
    );
}
