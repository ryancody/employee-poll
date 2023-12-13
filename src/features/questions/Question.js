import React from 'react';
import { ChatAvatar } from '../../components/ChatAvatar';
import { suffix, prefix } from './spice';
import { useNavigate } from 'react-router-dom';
import { NotFound } from '../../components/NotFound';
import { useDispatch } from 'react-redux';
import { handleVote } from '../../utils/api';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectUsers } from '../users/usersSlice';
import { Results } from '../../components/Results';

export function Question(props) {
  const getOptions = () => {
    if (allowVoting) {
      return (
        <div>
          <button
            className='btn btn-outline btn-accent'
            onClick={() =>
              dispatch(handleVote(currentUser.id, question.id, 'optionOne'))
            }
          >
            {question.optionOne.text}
          </button>
          <div>or</div>
          <button
            className='btn btn-outline btn-secondary'
            onClick={() =>
              dispatch(handleVote(currentUser.id, question.id, 'optionTwo'))
            }
          >
            {question.optionTwo.text}?
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className='text-accent font-bold'>{question.optionOne.text}</div>
          <div>or</div>
          <div className='text-secondary font-bold'>
            {question.optionTwo.text}?
          </div>
        </div>
      );
    }
  };

  const handleViewResults = (e) => {
    const path = e.currentTarget.getAttribute('href') + '/' + question.id;
    navigate(path);
    e.preventDefault();
  };

  const { question } = props;
  let { showResponses } = props;
  const currentUser = useSelector(selectCurrentUser);
  const users = useSelector(selectUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let i = 0;

  if (!question) return <NotFound />;

  const responses = [
    ...(question.optionOne.votes || []),
    ...(question.optionTwo.votes || [])
  ].sort((a, b) => a.timestamp - b.timestamp);

  const mappedOptionOne = [...(question.optionOne.votes || [])].map((id) => {
    return { option: question.optionOne.text, user: users[id] };
  });
  const mappedOptionTwo = [...(question.optionTwo.votes || [])].map((id) => {
    return { option: question.optionTwo.text, user: users[id] };
  });

  const mappedResponses = [...mappedOptionOne, ...mappedOptionTwo];

  const allowVoting = !responses
    .map((response) => response)
    .includes(currentUser.id);

  const author = users[question.author];

  return (
    <div className='mockup-window border border-base-300 m-4 p-4'>
      <Results question={question} />
      <div className='chat chat-start ml-4 mr-4'>
        <ChatAvatar user={author} />
        <div className='chat-header'>{author.name}</div>
        <div className='chat-bubble'>
          Would you rather...
          <br />
          {getOptions()}
        </div>
        <div className='chat-footer opacity-50'>Delivered</div>
      </div>

      {showResponses &&
        mappedResponses.map((r) => {
          return (
            <div key={i++} className='chat chat-end ml-4 mr-4'>
              <ChatAvatar user={r.user} />
              <div className='chat-header'>{r.user.name}</div>
              <div className='chat-bubble'>
                {prefix(r.user.id === 'amy')}
                <span
                  className={
                    r.option === question.optionOne.text
                      ? 'text-accent font-bold'
                      : 'text-secondary font-bold'
                  }
                >
                  {r.option}
                </span>
                {suffix(r.user.id === 'amy')}
              </div>
              <div className='chat-footer opacity-50'>Viewed</div>
            </div>
          );
        })}
      {!showResponses && (
        <div>
          <a
            href='/questions'
            className='btn btn-default'
            onClick={(e) => handleViewResults(e, question.id)}
          >
            View Results
          </a>
        </div>
      )}
    </div>
  );
}
