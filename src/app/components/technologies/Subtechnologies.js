import React from 'react';

function Subtechnologies({ src, title }) {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div>
        <img src={src} alt={title} className='w-36' />
      </div>
      <div>
        <h1 className='font-semibold text-neutral-900 leading-5'>{title}</h1>
      </div>
    </div>
  );
}

export default Subtechnologies;
