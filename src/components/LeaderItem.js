import React from 'react';
import { filterAnswered, filterMine, filterUnanswered } from '../utils/questionFilter';
import { selectQuestions } from '../features/questions/questionsSlice';
import { useSelector } from 'react-redux';

export function LeaderItem(props) {
  const {user, handleLogin } = props;
  const questions = Object.values(useSelector(selectQuestions));
  const myPollCount = filterMine(questions, user.id).length;
  const myAnsweredCount = filterAnswered(questions, user.id).length;
  const myUnansweredCount = filterUnanswered(questions, user.id).length;

  if(!questions)
    throw new Error('questions is null');

  return (
    <div className='stats shadow'>
      <div className='stat'>
        <div className='stat-figure text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Posted Questions</div>
        <div className='stat-value text-primary'>{myPollCount}</div>
        {/* <div className='stat-desc'>21% more than last month</div> */}
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 10V3L4 14h7v7l9-11h-7z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Questions Answered</div>
        <div className='stat-value text-secondary'>{myAnsweredCount}</div>
        {/* <div className='stat-desc'>21% more than last month</div> */}
      </div>

      <div className='stat'>
        <div className='stat-figure text-secondary'>
          <div className='avatar online'>
            <div className='w-16 rounded-full'>
              <img src={`/${user.avatarURL}.png`} alt={user.name} />
            </div>
          </div>
        </div>
        <div className='stat-value '>{user.name}</div>
        <div className='stat-value'>{Math.round(myAnsweredCount / questions.length * 100)}%</div>
        <div className='stat-title'>Questions Complete</div>
        <div className='stat-desc text-secondary'>{myUnansweredCount} tasks remaining</div>
        {handleLogin ? <button onClick={handleLogin} className="btn btn-secondary btn-sm">Login</button> : null}
      </div>
    </div>
  );
}
