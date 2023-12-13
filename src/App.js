import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Questions } from './features/questions/Questions';
import { selectCurrentUser, selectUsers } from './features/users/usersSlice';
import './App.css';
import { NewPoll } from './features/questions/NewQuestion';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { selectQuestions } from './features/questions/questionsSlice';
import { filterMine, filterUnanswered } from './utils/questionFilter';
import { NotFound } from './components/NotFound';
import { Leaderboard } from './components/Leaderboard';
import { useDispatch } from 'react-redux';
import { getInitialData } from './utils/api';
import { setUsers } from './features/users/usersSlice';
import { setQuestions } from './features/questions/questionsSlice';
import { RoutedQuestion } from './features/questions/RoutedQuestion';

function App() {  
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const users = useSelector(selectUsers);
  let questions = useSelector(selectQuestions);

  useEffect(() => {
    getInitialData().then(({ users, questions }) => {
      dispatch(setUsers(users));
      dispatch(setQuestions(questions));
    });
  }, [dispatch]);

  if(!users)
    return <div>Loading...</div>

  // if current user is null, show login screen
  if (!currentUser) {
    return <Login />;
  }

  const myQuestions = filterMine(questions, currentUser.id);
  const unansweredQuestions = filterUnanswered(questions, currentUser.id);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Questions questions={questions} />} />
        <Route
          path='/mine'
          element={<Questions questions={myQuestions} />}
        />
        <Route
          path='/unanswered'
          element={
            <Questions questions={unansweredQuestions} />
          }
        />
        <Route path='/add' element={<NewPoll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/leaderboard' element={<Leaderboard users={users} />} />
        <Route path='/questions/:questionId' element={<RoutedQuestion />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
