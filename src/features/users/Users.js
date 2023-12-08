import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setCurrentUser, selectCurrentUser } from './usersSlice';

export function Users() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser) {
    return (
      <div>
        <p>Current User</p>
        <img src={currentUser.icon} alt={currentUser.name} />
        <h5>{currentUser.name}</h5>
        <button className='btn' onClick={() => dispatch(setCurrentUser(null))}>logout</button>
      </div>
    );
  }

  return (
    <details className="dropdown">
      <summary className="m-1 btn">Select Profile</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {users.map((user) => (
          <li key={user.name}>
            <button className='btn' onClick={() => dispatch(setCurrentUser(user))}>
              <img src={user.icon} alt={user.name} />
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
