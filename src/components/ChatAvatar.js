import React from 'react';

export function ChatAvatar(props) {
  const user = props.user;

  return (
    <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
        <img alt={user.name} src={user.icon} />
      </div>
    </div>
  );
}
