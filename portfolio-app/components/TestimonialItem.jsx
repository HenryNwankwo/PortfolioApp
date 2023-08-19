import Image from 'next/image';

const TestimonialItem = ({ item, source_Serif_4 }) => {
  const { photo, description, position, name } = item;
  return (
    <div className='inline-flex w-screen max-w-screen-xl items-center justify-center h-56 whitespace-normal px-0 sm:px-8 pt-8 pb-20 sm:py-0 sm:pb-0'>
      {/* Testimonial image group */}
      <div className='w-full sm:w-2/5 order-2 sm:ml-8 -mt-16 h-auto flex flex-col items-center justify-center relative overflow-hidden'>
        <div className=' w-20 sm:w-44 h-72 bg-gradient-to-tr from-green-500 to-blue-400 dark:from-orange-400 dark:to-yellow-200 rounded-b-3xl -mt-8 '></div>
        <div className='w-32 h-32 sm:w-52 sm:h-52 rounded-full border-8 border-slate-100 dark:border-slate-900 flex items-center justify-center absolute bottom-4 sm:-bottom-3 left-4 sm:left-8'>
          <Image alt='' height={100} width={100} />
        </div>
      </div>

      {/* Testimonial writing */}
      <div className='w-full sm:w-3/5'>
        <div className='mt-14 flex'>
          <span className='block w-32 sm:w-20 h-0.5 bg-green-500 dark:bg-orange-400 mr-1.5'></span>
          <div className='-mt-1.5'>
            <p className='sm:text-sm text-xs mb-4'>{description}</p>
            <h6 className={`font-bold text-xl ${source_Serif_4.className}`}>
              {name}
            </h6>
            <div className='flex items-center mt-1'>
              <span className='block w-4 h-0.5 bg-green-500 dark:bg-orange-400 mr-1.5'></span>
              <p className='text-sm text-red-400  dark:text-yellow-200'>
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
