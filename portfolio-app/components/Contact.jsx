import Link from 'next/link';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';

const Contact = ({ source_Serif_4 }) => {
  return (
    <>
      {/* Contact me section */}

      <section
        id='contact'
        className='ptf-pri-section flex flex-col items-center relative bg-slate-50 dark:bg-gray-800 '
      >
        <div className='flex justify-between w-full items-center absolute -top-8 sm:-top-10'>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
          <div className='text-center py-4 text-2xl sm:text-4xl md:text-5xl font-bold w-fit p-2'>
            <h2 className={source_Serif_4.className}>Contact Me</h2>
          </div>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
        </div>

        {/* THe contact me info */}
        <div className='w-full h-auto sm:w-3/5 sm:h-fit flex flex-col sm:flex-row gap-3 sm:flex-wrap items-center justify-center'>
          <button className='px-4 py-3 w-full sm:w-fit  bg-gradient-to-br from-green-500 dark:from-slate-900 to-blue-500 dark:to-gray-950 rounded-lg flex gap-2 text-white items-center'>
            <HiMail className='text-lg dark:text-orange-400' /> mymail@gmail.com{' '}
          </button>
          <button className='px-4 py-3 w-full sm:w-fit  bg-gradient-to-br from-green-500 dark:from-slate-900 to-blue-500 dark:to-gray-950 rounded-lg flex gap-2 text-white items-center'>
            <HiPhone className='text-lg dark:text-orange-400' />
            +2347069782561
          </button>
          <button className='px-4 py-3 w-full sm:w-fit  bg-gradient-to-br from-green-500 dark:from-slate-900 to-blue-500 dark:to-gray-950 rounded-lg flex gap-2 text-white items-center'>
            <HiLocationMarker className='text-lg dark:text-orange-400' />
            <p>Ilorin, Nigeria</p>
          </button>
        </div>

        {/* The Social Icons */}
        <div className='flex justify-between w-full items-center absolute -bottom-2 sm:-bottom-2'>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
          <div className='flex items-center justify-center gap-3'>
            <Link href='#' target='_blank'>
              <BsGithub className='text-lg' />
            </Link>
            <Link href='#' target='_blank'>
              <BsTwitter className='text-lg' />
            </Link>
            <Link href='#' target='_blank'>
              <BsLinkedin className='text-lg' />
            </Link>
            <Link href='#' target='_blank'>
              <BsWhatsapp className='text-lg' />
            </Link>
          </div>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
        </div>
      </section>
    </>
  );
};

export default Contact;
