import React from 'react';
import Image from 'next/image'; // Note the capital 'I' in 'Image'

function Banner() {
  return (
    <div className='w-full rounded-lg bg-[url("/banner.jpg")] bg-cover min-h-[70vh] flex items-center'>
      <div className='h-full bg-black bg-opacity-80 w-full flex justify-center'>
        <div className='grid lg:grid-cols-2 h-full items-center w-full p-10 max-w-7xl justify-center'>
          <div className='md:order-1 order-2'>
            <div>
              <Image className='w-24 mb-2' src='/logo.png' width={200} height={200} alt='logo' />
            </div>
            <h1 className='text-6xl font-semibold text-white'>
              Apex<span className='text-yellow-400 font-bold'>Shield</span>
            </h1>
            <h3 className='text-sm max-w-lg mb-2 text-neutral-400 mt-2'>
              AI-Powered Financial Liquidity Management System for 
              <b className='text-neutral-300 font-semibold'> SME Apparel Businesses in Sri Lanka</b>
            </h3>

            <div className='mt-10'>
              <button className='flex items-center bg-yellow-500 text-black px-4 py-1.5 rounded-lg gap-2 text-sm font-semibold'>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                </svg>
                Documents
              </button>
            </div>
          </div>
          <div className='md:order-2 order-1 flex justify-end md:justify-center'>
            <Image className='w-96 hidden lg:block w-50' src='/banner-r.png' width={775} height={952} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
