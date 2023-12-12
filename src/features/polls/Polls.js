import React from 'react';
import { useSelector } from 'react-redux';
import { Poll } from './Poll';
import { selectCurrentUser } from '../users/usersSlice';

export function Polls(props) {
    const {polls} = props
    const currentUser = useSelector(selectCurrentUser);

    // console.log('polls', polls);

    return (
        <div>
            {polls?.map(poll => (
                <Poll key={poll.id} id={poll.id} currentUser={currentUser} />
            ))}
        </div>
    );
}
