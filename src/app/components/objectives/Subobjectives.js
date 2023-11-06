import React from 'react'

function Subobjectives({title, description}) {
  return (
    <div>

        <div className='flex items-center gap-2'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-orange-300">
                    <path fill-rule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clip-rule="evenodd" />
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