import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestions } from '../features/questions/questionsSlice';
import {
  selectCurrentUser,
  setCurrentUser,
  setFrom,
} from '../features/users/usersSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterMine, filterUnanswered } from '../utils/questionFilter';

export function Header() {
  const handleLogout = (e) => {
    e.preventDefault();
    const path = location.pathname + location.search;
    dispatch(setCurrentUser(null));
    dispatch(setFrom(path));
    navigate('/login');
  };

  const handleRoute = (e) => {
    const href = e.currentTarget.getAttribute('href');
    e.preventDefault();
    navigate(href);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const questions = Object.values(useSelector(selectQuestions));
  const user = useSelector(selectCurrentUser);
  const unanswered = filterUnanswered(questions, user.id).length;
  const mine = filterMine(questions, user.id).length;
  const all = questions.length;

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        {/* <a className='btn btn-ghost text-xl'>Planet Express Employee Polls</a> */}
        <a href='/' onClick={(e) => handleRoute(e)}>
          <img src='/logo.svg' alt='logo' className='w-20' />
        </a>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <a
            href='/add'
            onClick={(e) => handleRoute(e)}
            className='btn btn-secondary btn-block'
          >
            ➕
          </a>
        </div>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator text-xl'>
              📋
              {unanswered > 0 ? (
                <span className='badge badge-secondary badge-sm indicator-item'>
                  {unanswered}
                </span>
              ) : null}
            </div>
          </div>
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div className='card-body'>
              <div className='card-actions'>
                <a
                  href='/unanswered'
                  onClick={(e) => handleRoute(e)}
                  className='btn btn-secondary btn-block'
                >
                  Unanswered ({unanswered})
                </a>
              </div>
              <div className='card-actions'>
                <a
                  href='/mine'
                  onClick={(e) => handleRoute(e)}
                  className='btn btn-secondary btn-block'
                >
                  My Polls ({mine})
                </a>
              </div>
              <div className='card-actions'>
                <a
                  href='/'
                  onClick={(e) => handleRoute(e)}
                  className='btn btn-secondary btn-block'
                >
                  All ({all})
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle text-xl'
            href='/leaderboard'
            onClick={(e) => handleRoute(e)}
          >
            🏆
          </div>
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            {user ? (
              <div className='w-10 rounded-full'>
                <img alt={user.name} src={`/${user.avatarURL}.png`} />
              </div>
            ) : (
              <div className='w-10 rounded-full text-xl'>👤</div>
            )}
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <button className='btn btn-secondary' onClick={(e) => handleLogout(e)}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
