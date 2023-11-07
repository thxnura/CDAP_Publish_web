import React from 'react';

function Teammember({ name, src ,post}) {
  return (
    <div data-aos="fade-up" className='w-60 h-72  bg-neutral-500 bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${src})` }}>
      <div className='w-full h-full flex items-end justify-center '>
        <div className='text-center bg-yellow-400 w-full mx-2 rounded-lg translate-y-5 py-1'>
          <h1>{name}</h1>
          <h2 data-aos="fade-up" className='text-xs font-semibold -mt-1'>
            {post}
          </h2>
          <h2 className='text-xs font-semibold -mt-1'>
            SLIIT
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Teammember;
