import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPolls, voteA, voteB } from './pollsSlice';
import { selectUsers } from '../users/usersSlice';
import { ChatAvatar } from '../../components/ChatAvatar';

export function Poll(props) {  
  const getOptions = () => {
    if (allowVoting) {
      return (
        <div>
          <button className='btn' onClick={() => dispatch(voteA(payload))}>
            {poll.optionA}
          </button>
          <div>or</div>
          <button className='btn' onClick={() => dispatch(voteB(payload))}>
          {poll.optionB}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div>{poll.optionA}</div>
          <div>or</div>
          <div>{poll.optionB}</div>
        </div>
      );
    }
  }

  const polls = useSelector(selectPolls);
  const poll = polls.find((poll) => poll.id === props.id);
  const users = useSelector(selectUsers);
  const author = users.find((user) => user.name === poll.authorName);
  const { currentUser } = props;
  const dispatch = useDispatch();
  const responses = [...poll.votesA, ...poll.votesB].sort((a, b) => a.timestamp - b.timestamp);
  const payload = {
    user: currentUser,
    id: poll.id
  };
  const allowVoting = !responses.map((response) => response.user.name).includes(currentUser.name);
  let i = 0;

  console.log('respones', responses);

  return (
    <div>
      <div className='chat chat-start'>
        <ChatAvatar user={author} />
        <div className='chat-header'>
          {author.name}
          {/* <time className='text-xs opacity-50'>12:45</time> */}
        </div>
        <div className='chat-bubble'>
          Would you rather...<br/>
          {getOptions()}
        </div>
        <div className='chat-footer opacity-50'>Delivered</div>
      </div>

      {
        responses.map((response) => (
          <div id={i++} className='chat chat-end'>
            <ChatAvatar user={response.user} />
            <div className='chat-header'>
              {response.user.name}
              {/* <time className='text-xs opacity-50'>12:46</time> */}
            </div>
            <div className='chat-bubble'>{response.option}</div>
            <div className='chat-footer opacity-50'>Viewed</div>
          </div>
        ))
      }
    </div>
  );
}
