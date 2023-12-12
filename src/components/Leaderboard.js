import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features/users/usersSlice';
import { LeaderItem } from './LeaderItem';
import { selectPolls } from '../features/polls/pollsSlice';
import { filterAnswered, filterMine } from '../utils/pollFilter';

export function Leaderboard() {
  const users = useSelector(selectUsers);
  const polls = useSelector(selectPolls);
  let usersWithCount = users.map((user) => ({
    ...user,
    posted: filterMine(polls, user.name).length,
    answered: filterAnswered(polls, user.name).length,
  }));

  const [sortByPosted, setSortByPosted] = useState(true);

  usersWithCount = usersWithCount.sort((a, b) => {
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
      {usersWithCount.map((u) => (
          <LeaderItem key={u.name} user={u} />
      ))}
    </>
  );
}
