import React from 'react';
import { useSelector } from 'react-redux';
import { selectPolls } from './pollsSlice';
import { Poll } from './Poll';
import { selectCurrentUser } from '../users/usersSlice';

export function Polls() {
    const polls = useSelector(selectPolls);
    const currentUser = useSelector(selectCurrentUser);

    console.log('polls', polls);

    return (
        <div>
            <p>Polls</p>
            {polls?.map(poll => (
                <Poll key={poll.id} id={poll.id} currentUser={currentUser} />
            ))}
        </div>
    );
}
