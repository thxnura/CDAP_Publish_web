import { ErrorBoundaryHandler } from 'next/dist/client/components/error-boundary';
import Image from 'next/image';
import Banner from './components/banner';
import Literature from './components/Literature';
import Objectives from './components/Objectives';

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
      </div>
    </main>
  );
}
