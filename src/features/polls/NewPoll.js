import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './pollsSlice';
import { selectCurrentUser } from '../users/usersSlice';

export function NewPoll() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const payload = {
        user: currentUser,
        optionA: '',
        optionB: ''
    };

    const updateA = (e) => {
        payload.optionA = e.target.value;
    }

    const updateB = (e) => {
        payload.optionB = e.target.value;
    }

    console.log('currentUser', currentUser);

    // show results
    return (
        <div>
            <h5>New Poll</h5>
            <img src={currentUser.icon} alt={currentUser.name} />
            <p>Would you rather...</p>
            <div>
                <input type="text" placeholder="Enter Option A" onChange={updateA} />
            </div>
            <div>or</div>
            <div>
                <input type="text" placeholder="Enter Option B" onChange={updateB} />
            </div>
            <button className='btn' onClick={() => dispatch(add(payload)) }>Submit</button>
        </div>
    );
}
