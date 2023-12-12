import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPolls, voteA, voteB } from './pollsSlice';
import { selectUsers } from '../users/usersSlice';
import { ChatAvatar } from '../../components/ChatAvatar';
import { suffix, prefix } from './spice';
import { useNavigate } from 'react-router-dom';

export function Poll(props) {
  const getOptions = () => {
    if (allowVoting) {
      return (
        <div>
          <button
            className='btn btn-outline btn-secondary'
            onClick={() => dispatch(voteA(payload))}
          >
            {poll.optionA}
          </button>
          <div>or</div>
          <button
            className='btn btn-outline btn-secondary'
            onClick={() => dispatch(voteB(payload))}
          >
            {poll.optionB}?
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div>{poll.optionA}</div>
          <div>or</div>
          <div>{poll.optionB}?</div>
        </div>
      );
    }
  };

  const handleViewResults = (e) => {
    const path = e.currentTarget.getAttribute('href') + '/' + poll.id;
    navigate(path);
    e.preventDefault();

  }

  const polls = useSelector(selectPolls);
  const poll = polls.find((poll) => poll.id === props.id);
  const users = useSelector(selectUsers);
  const author = users.find((user) => user.name === poll.authorName);
  let { currentUser, showResponses } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responses = [...poll.votesA, ...poll.votesB].sort(
    (a, b) => a.timestamp - b.timestamp
  );
  const payload = {
    user: currentUser,
    id: poll.id
  };
  const allowVoting = !responses
    .map((response) => response.user.name)
    .includes(currentUser.name);
  let i = 0;

  showResponses = true;

  return (
    <div className='mockup-window border border-base-300 m-4'>
        <div className='chat chat-start ml-4 mr-4'>
          <ChatAvatar user={author} />
          <div className='chat-header'>
            {author.name}
            {/* <time className='text-xs opacity-50'>12:45</time> */}
          </div>
          <div className='chat-bubble'>
            Would you rather...
            <br />
            {getOptions()}
          </div>
          <div className='chat-footer opacity-50'>Delivered</div>
        </div>

        {showResponses &&
          responses.map((response) => (
            <div key={i++} className='chat chat-end ml-4 mr-4'>
              <ChatAvatar user={response.user} />
              <div className='chat-header'>
                {response.user.name}
                {/* <time className='text-xs opacity-50'>12:46</time> */}
              </div>
              <div className='chat-bubble'>
                {prefix(response.user.name === 'Amy Wong')}
                {response.option}
                {suffix(response.user.name === 'Amy Wong')}
              </div>
              <div className='chat-footer opacity-50'>Viewed</div>
            </div>
          ))}
          <div><a href='questions' className='btn btn-default' onClick={(e) => handleViewResults(e, poll.id)}>View Results</a></div>
    </div>
  );
}
