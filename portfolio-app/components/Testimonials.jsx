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
        className='w-full max-w-full h-auto sm:py-16 pt-14 sm:pt-20 flex flex-col relative overflow-hidden justify-center'
      >
        <h2
          className={`sm:px-24 px-8 text-3xl sm:text-5xl font-bold dark:text-white ${source_Serif_4.className} -mt-8 sm:-mt-0 py-4 sm:p-0 z-10 mb-4 `}
        >
          Testimonial
        </h2>

        {/* The testimonials */}

        <TestimonialCard />

        {/* Previous and Next buttons */}
        <div className='w-screen max-w-screen-xl flex justify-between absolute left-0 top-1/2 px-2 sm:px-8'>
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
