import React from 'react';
import { useSelector } from 'react-redux';
import { Polls } from './features/polls/Polls';
import { selectCurrentUser } from './features/users/usersSlice';
import './App.css';
import { NewPoll } from './features/polls/NewPoll';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { selectPolls } from './features/polls/pollsSlice';
import { filterMine, filterUnanswered } from './utils/pollFilter';
import { NotFound } from './components/NotFound';
import { Leaderboard } from './components/Leaderboard';
import { Poll } from './features/polls/Poll';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const polls = useSelector(selectPolls);

  // if current user is null, show login screen
  if (!currentUser) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Polls polls={polls} />} />
        <Route
          path='/mine'
          element={<Polls polls={filterMine(polls, currentUser.name)} />}
        />
        <Route
          path='/unanswered'
          element={<Polls polls={filterUnanswered(polls, currentUser.name)} />}
        />
        <Route path='/add' element={<NewPoll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/questions/1' element={<Poll />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
