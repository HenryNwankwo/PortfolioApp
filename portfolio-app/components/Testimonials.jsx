'use client';
import TestimonialCard from './TestimonialCard';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { usePtfContext } from '@/utils/PtfContext';

const Testimonials = () => {
  const { source_Serif_4, activeIndex, updateIndex, testimonialItems } =
    usePtfContext();
  return (
    <>
      {/* Testimonial section */}
      <section
        id='testimonials'
        className='w-full max-w-full h-auto py-16 pt-14 sm:pt-20 flex flex-col relative overflow-hidden justify-center'
      >
        <div className='sm:px-24 px-8 -mt-8 sm:-mt-0 py-4 sm:p-0 z-10 mb-4 '>
          <h2
            className={`text-3xl sm:text-5xl font-bold dark:text-white ${source_Serif_4.className}`}
          >
            Testimonial
          </h2>
          <p className='text-sm font-medium dark:text-orange-400 text-green-500 py-1'>
            What others say
          </p>
        </div>

        {/* The testimonials */}

        <TestimonialCard />

        {/* Previous and Next buttons */}
        <div className='w-screen max-w-screen-xl flex justify-between absolute left-0 top-1/2 px-2 sm:px-8'>
          <button
            className='w-12 h-12 rounded-full flex items-center justify-center shadow-2xl shadow-transparent hover:bg-white hover:bg-opacity-50 dark:bg-opacity-10'
            onClick={() => updateIndex(activeIndex - 1)}
          >
            <BsChevronCompactLeft className='text-2xl'></BsChevronCompactLeft>
          </button>
          <button
            className='w-12 h-12 rounded-full  flex items-center justify-center shadow-2xl shadow-transparent hover:bg-white hover:bg-opacity-50 dark:bg-opacity-10'
            onClick={() => updateIndex(activeIndex + 1)}
          >
            <BsChevronCompactRight className='text-2xl '></BsChevronCompactRight>
          </button>
        </div>
        {/* The indicator buttons */}

        <div className='flex justify-center items-center w-full'>
          {testimonialItems.map((item, index) => (
            <button
              onClick={() => updateIndex(index)}
              key={item.id}
              className='border-none cursor-pointer mx-1 px-1 py-2'
            >
              <span
                className={`w-5 h-2 rounded-3xl block ${
                  index === activeIndex
                    ? 'p-1 bg-green-500 dark:bg-orange-400 scale-x-150'
                    : 'bg-slate-400'
                }`}
              ></span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
