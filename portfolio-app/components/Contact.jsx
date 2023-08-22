import Link from 'next/link';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import {
  BsGithub,
  BsSendFill,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';

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
          <button className='ptf-contact-me-button'>
            <HiMail className='text-lg dark:text-orange-400' /> mymail@gmail.com{' '}
          </button>
          <button className='ptf-contact-me-button'>
            <HiPhone className='text-lg dark:text-orange-400' />
            +2347069782561
          </button>
          <button className='ptf-contact-me-button '>
            <HiLocationMarker className='text-lg dark:text-orange-400' />
            <p>Ilorin, Nigeria</p>
          </button>
        </div>

        <form className='w-screen sm:w-1/2 flex flex-col items-center justify-center py-4 px-6'>
          <div className='my-1.5'>
            <input
              type='text'
              placeholder='Name'
              className='px-4 py-2 rounded-full'
            />
          </div>
          <div className='my-1.5'>
            <input
              type='email'
              placeholder='Email'
              className='px-4 py-2 rounded-full'
            />
          </div>
          <div className='my-1.5 w-full'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='px-4 py-2 rounded-2xl w-full'
            ></textarea>
          </div>
          <div className='w-full'>
            <button className='mx-auto text-white py-3 px-4 dark:text-black rounded-full bg-gradient-to-br from-green-500 dark:from-orange-500 dark:hover:from-orange-400 to-blue-400 dark:to-yellow-300 dark:hover:to-yellow-200 hover:from-blue-400 hover:to-blue-300 w-full sm:w-fit flex justify-center items-center dark:text-medium'>
              Send Message <BsSendFill className='ml-2 text-xl' />
            </button>
          </div>
        </form>

        {/* The Social Icons */}
        <div className='flex justify-between w-full items-center absolute -bottom-2 sm:-bottom-2'>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
          <div className='flex items-center justify-center gap-3'>
            <Link href='#' target='_blank'>
              <BsGithub className='text-xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
            </Link>
            <Link href='#' target='_blank'>
              <BsTwitter className='text-xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
            </Link>
            <Link href='#' target='_blank'>
              <BsLinkedin className='text-xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
            </Link>
            <Link href='#' target='_blank'>
              <BsWhatsapp className='text-xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
            </Link>
          </div>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
        </div>
      </section>
    </>
  );
};

export default Contact;
