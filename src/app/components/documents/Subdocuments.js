import React from 'react'

function Subdocuments({title,date,status,link}) {
  return (
    <div className='bg-white p-3 h-56 rounded-lg text-black flex items-center justify-center text-center'>
        <div>
            <div>
                <img className='w-10 mx-auto mb-3' src="/pdf.svg" alt="" />
            </div>
            <h1 className='font-semibold'>
                {title}
            </h1>
            <h2 className='text-neutral-500'>
                {date}
            </h2>
            <h3 className='text-sm text-orange-600'>
                {status}
            </h3>
            <div className='mt-2'>
                <button className='bg-red-500 px-4 font-semibold py-1 rounded-lg text-white'>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Download
                    </a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Subdocuments