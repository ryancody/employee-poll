import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setCurrentUser, selectFrom } from '../features/users/usersSlice';
import { Avatar } from './Avatar';
import { useNavigate } from 'react-router-dom';
import { LeaderItem } from './LeaderItem';

export function Login() {
  const users = Object.values(useSelector(selectUsers));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useSelector(selectFrom);
  let [selectedUser, setSelectedUser] = useState(null);

  const login = (user) => {
    dispatch(setCurrentUser(user));
    navigate(path);
  };

  return (
    <div className='grid justify-items-center mt-10'>
      <div>
        {selectedUser ? (
            <LeaderItem user={selectedUser} handleLogin={() => {
                login(selectedUser);
              }} />
        ) : null}
      </div>
      <details className='dropdown'>
        <summary className='m-1 btn'>Select User</summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
          {users?.map((user) => (
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
