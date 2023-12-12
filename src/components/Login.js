import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setCurrentUser, selectFrom } from '../features/users/usersSlice';
import { Avatar } from './Avatar';
import { useNavigate } from 'react-router-dom';
import { LeaderItem } from './LeaderItem';

export function Login() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useSelector(selectFrom);
  const login = (user) => {
    dispatch(setCurrentUser(user));
    console.log('using path', path);
    navigate(path);
  };
  let [selectedUser, setSelectedUser] = useState(null);

  // console.log('users', users);
  // console.log('selectedUser', selectedUser)

  return (
    <div className='grid justify-items-center'>
      <div>
        {selectedUser !== null ? (
            <LeaderItem user={selectedUser} handleLogin={() => {
                login(selectedUser);
              }} />
        ) : null}
      </div>
      <details className='dropdown'>
        <summary className='m-1 btn'>Select User</summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
          {users.map((user) => (
            <li key={user.name}>
              <a
                onClick={() => {
                  setSelectedUser(user);
                }}
              >
                <Avatar user={user} />
                <span>{user.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
