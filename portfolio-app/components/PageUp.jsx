import Link from 'next/link';
import { BsCaretUpFill } from 'react-icons/bs';

const PageUp = () => {
  return (
    <>
      {/* A page up button */}

      <Link
        className='h-8 w-8 rounded-full shadow-md bg-green-500 hover:cursor-pointer hover:bg-green-400 dark:bg-orange-400 dark:hover:bg-orange-300 sticky bottom-10 self-end mr-6 flex items-center justify-center'
        href='#main-body'
      >
        <BsCaretUpFill className='text-sm text-white dark:text-slate-900' />
      </Link>
    </>
  );
};

export default PageUp;
