import React from 'react';

export function Avatar(props) {
  const user = props.user;

  return (
    <div className='avatar'>
      <div className='w-10 rounded-full'>
        <img alt={user.name} src={`/${user.avatarURL}.png`} />
      </div>
    </div>
  );
}
