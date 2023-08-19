'use client';
import TestimonialCard from './TestimonialCard';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { usePtfContext } from '@/utils/PtfContext';

const Testimonials = () => {
  const { source_Serif_4, activeIndex, updateIndex } = usePtfContext();
  return (
    <>
      {/* Testimonial section */}
      <section
        id='testimonials'
        className='ptf-pri-section h-auto flex flex-col relative py-0 overflow-hidden'
      >
        <h2
          className={`text-3xl sm:text-5xl font-bold dark:text-white ${source_Serif_4.className} -mt-8 sm:-mt-0 bg-slate-100 dark:bg-slate-900 rounded-3xl py-4 sm:bg-transparent sm:dark:bg-transparent sm:p-0 z-10`}
        >
          Testimonial
        </h2>

        {/* The testimonials */}

        <TestimonialCard />

        {/* Previous and Next buttons */}
        <div className='w-screen flex justify-between absolute left-0 top-1/2 px-8'>
          <button
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-2xl shadow-transparent'
            onClick={() => updateIndex(activeIndex - 1)}
          >
            <BsChevronCompactLeft className='text-2xl'></BsChevronCompactLeft>
          </button>
          <button
            className='w-12 h-12 rounded-full  flex items-center justify-center shadow-2xl shadow-transparent'
            onClick={() => updateIndex(activeIndex + 1)}
          >
            <BsChevronCompactRight className='text-2xl '></BsChevronCompactRight>
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
