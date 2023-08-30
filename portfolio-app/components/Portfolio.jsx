import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Portfolio = ({ source_Serif_4 }) => {
  return (
    <>
      {/* The Portfolio section */}

      <section
        id='portfolio'
        className='w-full h-auto py-20 flex flex-col items-center'
      >
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>Portfolio</h2>
          <p className='text-sm font-medium dark:text-orange-400 text-green-500 py-1'>
            Some past works
          </p>
        </div>
        <div className='w-fit flex flex-wrap justify-center items-center md:grid md:grid-cols-3 md:justify-items-center md:content-center m-2'>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group transition-all transform duration-300'>
            {/* Contains the info about a portfolio project or card */}
            <div className='w-full h-full rounded-md bg-gray-400 bg-opacity-20 flex-col justify-center items-center gap-2 p-2 hidden group-hover:flex transition-all transform duration-300'>
              <h3 className='text-xl'>Project Name</h3>
              <p className='text-xs text-center'>
                Project description Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. At ea atque harum accusantium distinctio?
                Dolorum alias aliquam ratione eius labore! Esse aliquid sunt
                provident adipisci ab soluta laborum nihil dolorum?
              </p>
              <Link
                href='/'
                target='_blank'
                className='py-2 px-4 rounded-full bg-green-500 text-white dark:bg-orange-400 dark:text-black text-sm hover:bg-green-400 flex'
              >
                See more! <HiOutlineExternalLink className='text-lg ml-1' />
              </Link>
            </div>
          </div>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
