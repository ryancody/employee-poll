import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../users/usersSlice';
import { ChatAvatar } from '../../components/ChatAvatar';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../../utils/api';

export function NewPoll() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  let optionOneText = '';
  let optionTwoText = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOneText, optionTwoText, currentUser.id));
    navigate('/');
  }

  const updateA = (e) => {
    optionOneText = e.target.value;
  };

  const updateB = (e) => {
    optionTwoText = e.target.value;
  };

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
        <button className='btn' onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
      <div className='chat-footer opacity-50'>Delivered</div>
    </div>
  );
}
