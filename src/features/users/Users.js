import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setCurrentUser, selectCurrentUser } from './usersSlice';

export function Users() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  console.log('userInfo', users);
  console.log('currentUser', currentUser);

  if (currentUser) {
    return (
      <div>
        <p>Current User</p>
        <img src={currentUser.icon} alt={currentUser.name} />
        <h5>{currentUser.name}</h5>
        <button onClick={() => dispatch(setCurrentUser(null))}>logout</button>
      </div>
    );
  }

  return (
    <div>
      <label for='users'>Login</label>
      <div>
        <select
          id='users'
          onChange={(e) => dispatch(setCurrentUser(users[e.target.value]))}
          defaultValue={''}
        >
          {users?.map((user, index) => (
            <option value={index}>{user?.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
