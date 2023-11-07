import React from 'react'

function Subobjectives({title, description}) {
  return (
    <div>

        <div className='flex items-center gap-2'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM6 13.25V3.5h8v9.75a.75.75 0 01-1.064.681L10 12.576l-2.936 1.355A.75.75 0 016 13.25z" clipRule="evenodd" />
                </svg>

            </div>

            <h1 className='font-semibold text-neutral-900 leading-5'>
                {title}
            </h1>
        </div>
        <p className='text-sm text-neutral-600'>
            {description}
        </p>
    </div>
  )
}

export default Subobjectives