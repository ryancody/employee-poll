import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPolls, voteA, voteB } from './pollsSlice';
import { selectUsers } from '../users/usersSlice';

export function Poll(props) {
  const polls = useSelector(selectPolls);
  const poll = polls.find((poll) => poll.id === props.id);
  const users = useSelector(selectUsers);
  const author = users.find((user) => user.name === poll.authorName);
  const { currentUser } = props;
  const dispatch = useDispatch();
  const allowVoting =
    !poll.votesA?.includes(currentUser) && !poll.votesB?.includes(currentUser);
  const payload = {
    user: currentUser,
    id: poll.id
  };

  return (
    <div>
      <img src={author.icon} alt={author.name} />
      <p>Would you rather...</p>
      {allowVoting ? (
        <div>
          <div>
            <button className='btn' onClick={() => dispatch(voteA(payload))}>
              {poll.optionA}
            </button>
          </div>
          <div>or</div>
          <div>
            <button className='btn' onClick={() => dispatch(voteB(payload))}>
              {poll.optionB}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>
            {poll.optionA} {poll.votesA.length}
          </p>
          <p>
            {poll.optionB} {poll.votesB.length}
          </p>
        </div>
      )}
      <p>by {author.name}</p>
    </div>
  );
}
