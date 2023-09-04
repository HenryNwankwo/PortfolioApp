import React from 'react';

const QualificationCard = ({ key, year, description, title, location }) => {
  return (
    <>
      {/* Qualification Card group */}

      <div
        className='w-full h-auto min-h-fit flex justify-center my-4 '
        key={key}
      >
        <div className='bg-gradient-to-b from-green-500 to-blue-500 dark:from-orange-400 dark:to-yellow-400 py-0.5 px-1.5 sm:py-1 sm:px-3 h-fit text-white dark:text-black dark:font-medium shadow-lg shadow-transparent relative rounded-full mr-1 sm:mr-2 ptf-year-tagTriangle'>
          <p className='text-sm sm:text-base'>{year}</p>
        </div>
        <div className='flex flex-col p-1 h-full mx-1 sm:mx-2 items-center'>
          <span className='block w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-green-500 dark:bg-orange-400 shadow-xl shadow-green-500 dark:shadow-orange-400'></span>
          <span className='block w-0.5 min-h-20 h-auto mt-1 mx-auto rounded bg-gradient-to-b from-green-500 dark:from-yellow-500 to-red-500 dark:bg-gray-300'></span>
        </div>
        <div className='ml-2 relative'>
          <h3 className='font-medium text-xl sm:text-2xl text-green-400 dark:text-white'>
            {title}
          </h3>
          <p className='text-red-400 text-sm sm:text-base dark:text-yellow-200'>
            {location}
          </p>
          <p className='mt-3 text-xs dark:text-gray-300'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default QualificationCard;
