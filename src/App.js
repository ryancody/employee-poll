import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from './features/users/Users';
import { Polls } from './features/polls/Polls';
import { selectCurrentUser } from './features/users/usersSlice';
import './App.css';
import { NewPoll } from './features/polls/NewPoll';

function App() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="App">
        <Users />
        {
          currentUser &&
            <Polls />
        }
        {
          currentUser &&
            <NewPoll />
        }
    </div>
  );
}

export default App;
