import React from 'react';

export function Results(props) {
  const { question } = props;
    const optionOneCount = question.optionOne.votes.length;
    const optionTwoCount = question.optionTwo.votes.length;
    const totalVotes = optionOneCount + optionTwoCount;

  return (
    <div className='flex w-full'>
        <div className='stats shadow'>
          <div className='stat'>
            <div className='stat-title text-accent font-bold'>{question.optionOne.text}</div>
            <div className='stat-value'>{optionOneCount}</div>
            <div className='stat-desc'>won {Math.round(optionOneCount / totalVotes * 100).toString()}% of votes</div>
          </div>
        </div>
      <div className='divider divider-horizontal'>vs</div>
        <div className='stats shadow'>
          <div className='stat'>
            <div className='stat-title text-secondary font-bold'>{question.optionTwo.text}</div>
            <div className='stat-value'>{optionTwoCount}</div>
            <div className='stat-desc'>won {Math.round(optionTwoCount / totalVotes * 100).toString()}% of votes</div>
          </div>
        </div>
    </div>
  );
}
