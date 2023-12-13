import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LeaderItem } from './LeaderItem';
import { selectQuestions } from '../features/questions/questionsSlice';
import { filterAnswered, filterMine } from '../utils/questionFilter';

export function Leaderboard(props) {
  const users = Object.values(props.users);
  // const users = useSelector(selectUsers);
  const questions = useSelector(selectQuestions);
  let usersWithCount = users?.map((user) => ({
    ...user,
    posted: filterMine(questions, user.id).length,
    answered: filterAnswered(questions, user.id).length,
  }));

  const [sortByPosted, setSortByPosted] = useState(true);

  usersWithCount = usersWithCount?.sort((a, b) => {
    if (sortByPosted) {
      return b.posted - a.posted;
    } else {
      return b.answered - a.answered;
    }
  });

  return (
    <>
    <div>
        <button className='btn btn-secondary glass' 
            onClick={() => setSortByPosted(!sortByPosted)}>
                {!sortByPosted ? 'Sort by Posted' : 'Sort by Answered'}
        </button>
    </div>
      {usersWithCount?.map((u) => (
          <LeaderItem key={u.name} user={u} />
      ))}
    </>
  );
}
