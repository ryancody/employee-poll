import React, { useState } from 'react';
import { LeaderItem } from './LeaderItem';
import { filterAnswered, filterMine } from '../utils/questionFilter';

export function Leaderboard(props) {
  const users = Object.values(props.users);
  const questions = Object.values(props.questions);
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
