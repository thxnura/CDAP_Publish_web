import React from 'react';

function Subtitle({ text, subtext }) {
  return (
    <div className='border-l-4 pl-4 border-orange-500 mb-8'>
      <h2 className="text-2xl font-semibold text-orange-700 ">
        {text}
      </h2>
      {subtext && (
        <p className="text-xs text-gray-500 -mt-0.5">
          {subtext}
        </p>
      )}
    </div>
  );
}

export default Subtitle;
