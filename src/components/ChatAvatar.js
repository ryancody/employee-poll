import React from 'react';

export function ChatAvatar(props) {
  let user = props.user;

  if(!user) {
    user = {
      name: 'not logged in',
      icon: '👤'
    }
  }

  return (
    <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
        <img alt={user.name} src={user.icon} />
      </div>
    </div>
  );
}
