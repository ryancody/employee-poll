import React from 'react';

export function NotFound() {
  return (
    <div className='mockup-browser border border-base-300'>
      <div className='mockup-browser-toolbar'>
        <div className='input border border-base-300'>404</div>
      </div>
      <div className='flex justify-center px-4 py-16 border-t border-base-300'>
        <img alt='404' src='/404.png' />
      </div>
    </div>
  );
}
