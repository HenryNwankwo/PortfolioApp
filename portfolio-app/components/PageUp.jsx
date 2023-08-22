'use client';
import { useEffect, useState } from 'react';
import { BsCaretUpFill } from 'react-icons/bs';

const PageUp = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setBackToTop((prev) => (prev === false ? true : prev));
      } else {
        setBackToTop((prev) => (prev === true ? false : prev));
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // A function that determines the scroll position to stop at

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };
  return (
    <>
      {/* A page up button */}
      {backToTop && (
        <button
          className='h-8 w-8 rounded-full shadow-md bg-green-500 hover:cursor-pointer hover:bg-green-400 dark:bg-orange-400 dark:hover:bg-orange-300 sticky bottom-10 self-end mr-6 flex items-center justify-center'
          onClick={scrollUp}
        >
          <BsCaretUpFill className='text-sm text-white dark:text-slate-900' />
        </button>
      )}
    </>
  );
};

export default PageUp;
