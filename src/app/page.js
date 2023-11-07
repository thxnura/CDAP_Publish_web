

import { ErrorBoundaryHandler } from 'next/dist/client/components/error-boundary';
import Image from 'next/image';

import Banner from './components/banner';
import Literature from './components/Literature';
import Objectives from './components/Objectives';
import Methodology from './components/Methodology';
import Technologies from './components/Technologies';
import Problem from './components/Problem';
import Team from './components/Team';
import RDocuments from './components/RDocuments';
import Subtitle from './components/Subtitle';

export default function Home() {
  return (
    <main className='space-y-5'>
      <ErrorBoundaryHandler />

      <div className='flex justify-center mb-10'>
        <Banner />
      </div>

      <div className='max-w-6xl flex flex-col justify-center mx-auto space-y-16 px-5 pb-20'>
        <div className='border-b pb-8'>
          <Literature />
        </div>
        <div className='border-b pb-8 w-full'>
          <Objectives />
        </div>
        <div className='border-b pb-8 w-full'>
          <Methodology />
        </div>
        <div className='border-b pb-8 w-full'>
          <Technologies />
        </div>
        <div className='border-b pb-8 w-full'>
          <Problem />
        </div>
        <div className='border-b pb-8 w-full'>
          <Team />
        </div>
        <div className='border-b pb-8 w-full'>
          <RDocuments />
        </div>

        <div className='hidden'>
          <Subtitle text="CONTACT US" />
        </div>

        <div>
          <h1 className='text-lg font-semibold text-center'>
            AI-Powered Financial Liquidity Management System for SME Apparel Businesses in Sri Lanka
          </h1>
          <h3 className='text-center text-sm'>
            All rights reserved. © 2023
          </h3>
        </div>
      </div>
    </main>
  );
}
