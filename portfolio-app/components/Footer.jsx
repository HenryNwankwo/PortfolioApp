'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePtfContext } from '@/utils/PtfContext';

const Footer = ({ dancing_script }) => {
  const { theme } = usePtfContext();
  return (
    <>
      {/* Footer Section */}

      <footer className='w-full h-auto mt-3 text-slate-800'>
        <div className='p-10 w-full'>
          <p className='text-center text-4xl text-green-500 dark:text-yellow-400'>
            <q className={dancing_script.className}>Thanks for Scrolling</q>
          </p>
          <p className='text-center text-sm mt-2 dark:text-slate-400'>
            Made with &#128151; by yours truly
          </p>
        </div>

        <div className='w-full flex flex-col sm:flex-row gap-3 items-center justify-center py-2'>
          <div className=''>
            <Link href='/'>
              <Image
                alt='Logo'
                width={28}
                height={28}
                src={
                  theme == 'light'
                    ? '/assets/img/logo-green.png'
                    : '/assets/img/logo-orange.png'
                }
              ></Image>
            </Link>
          </div>
          <p className='text-sm dark:text-slate-400'>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
