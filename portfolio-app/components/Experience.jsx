const Experience = () => {
  return (
    <>
      <section
        id='experience'
        className='ptf-pri-section bg-slate-50 dark:bg-gray-800 shadow-xl shadow-transparent'
      >
        <div className={source_Serif_4.className}>
          <h1 className='dark:text-white text-3xl sm:text-5xl font-bold'>
            Experience
          </h1>
        </div>

        {/* Experience Container */}

        <div className='w-full sm:w-2/3 flex flex-col items-center justify-center mx-auto my-4'>
          {/* Experience Card group */}

          <div className='w-full h-auto min-h-fit flex justify-center my-4 '>
            <div className='bg-gradient-to-b from-green-500 to-blue-500 dark:from-orange-400 dark:to-yellow-400 py-0.5 px-1.5 sm:py-1 sm:px-3 h-fit text-white dark:text-black dark:font-medium shadow-lg shadow-transparent relative rounded-full mr-1 sm:mr-2 ptf-year-tagTriangle'>
              <p className='text-sm sm:text-base'>2023</p>
            </div>
            <div className='flex flex-col p-1 h-full mx-1 sm:mx-2 items-center'>
              <span className='block w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-green-500 dark:bg-orange-400 shadow-xl shadow-green-500 dark:shadow-orange-400'></span>
              <span className='block w-0.5 min-h-20 h-auto mt-1 mx-auto rounded bg-gradient-to-b from-green-500 dark:from-yellow-500 to-red-500 dark:bg-gray-300'></span>
            </div>
            <div className='ml-2 relative'>
              <h3 className='font-medium text-xl sm:text-2xl text-green-400 dark:text-white'>
                Senior Software Developer
              </h3>
              <p className='text-red-400 text-sm sm:text-base dark:text-yellow-200'>
                Toronto, Canada
              </p>
              <p className='mt-3 text-xs dark:text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                accusamus magni dignissimos, accusantium quae unde quis, sed
                quaerat laudantium tempora quas reiciendis quia est saepe eos
                aliquid harum corrupti molestias.
              </p>
            </div>
          </div>

          <div className='w-full h-auto min-h-fit flex justify-center my-4 '>
            <div className='bg-gradient-to-b from-green-500 to-blue-500 dark:from-orange-400 dark:to-yellow-400 py-1 px-3 h-fit text-white dark:text-black dark:font-medium shadow-lg shadow-transparent relative rounded-full mr-2 ptf-year-tagTriangle'>
              <p>2023</p>
            </div>
            <div className='flex flex-col p-1 h-full mx-2 items-center'>
              <span className='block w-6 h-6 rounded-full bg-green-500 dark:bg-orange-400 shadow-xl shadow-green-500 dark:shadow-orange-400'></span>
              <span className='block w-0.5 min-h-20 h-auto mt-1 mx-auto rounded bg-gradient-to-b from-green-500 dark:from-yellow-500 to-red-500 dark:bg-gray-300'></span>
            </div>
            <div className='ml-2 relative'>
              <h3 className='font-medium text-2xl text-green-400 dark:text-white'>
                Senior Software Developer
              </h3>
              <p className='text-red-400 dark:text-yellow-200'>
                Toronto, Canada
              </p>
              <p className='mt-3 text-xs dark:text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                accusamus magni dignissimos, accusantium quae unde quis, sed
                quaerat laudantium tempora quas reiciendis quia est saepe eos
                aliquid harum corrupti molestias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
