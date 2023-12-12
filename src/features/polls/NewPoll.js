import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './pollsSlice';
import { selectCurrentUser } from '../users/usersSlice';
import { ChatAvatar } from '../../components/ChatAvatar';
import { useNavigate } from 'react-router-dom';

export function NewPoll() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const payload = {
    user: currentUser,
    optionA: '',
    optionB: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(payload));
    navigate('/');
  }

  const updateA = (e) => {
    payload.optionA = e.target.value;
  };

  const updateB = (e) => {
    payload.optionB = e.target.value;
  };

  console.log('currentUser', currentUser);

  // show results
  return (
    <div className='chat chat-start'>
      <ChatAvatar user={currentUser} />
      <div className='chat-header'>
        {currentUser.name}
      </div>
      <div className='chat-bubble'>
        Would you rather...
        <br />
        <div>
          <input type='text' placeholder='Enter Option A' className="input w-full max-w-xs text-black" onChange={updateA} />
        </div>
        <div>or</div>
        <div>
          <input type='text' placeholder='Enter Option B' className="input w-full max-w-xs text-black" onChange={updateB} />
        </div>
        <button className='btn' onClick={() => handleSubmit(payload)}>
          Submit
        </button>
      </div>
      <div className='chat-footer opacity-50'>Delivered</div>
    </div>
  );
}
