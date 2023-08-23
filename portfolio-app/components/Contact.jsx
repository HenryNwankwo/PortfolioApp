import Link from 'next/link';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import ContactForm from './ContactForm';

const Contact = ({ source_Serif_4 }) => {
  return (
    <>
      {/* Contact me section */}

      <section
        id='contact'
        className='ptf-pri-section flex flex-col items-center relative bg-slate-50 dark:bg-gray-800 '
      >
        <div className='flex justify-between w-full items-center absolute -top-10 sm:-top-12'>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
          <div className='text-center py-4 text-2xl sm:text-4xl md:text-5xl font-bold w-fit p-2'>
            <h2 className={source_Serif_4.className}>Contact Me</h2>
            <p className='text-sm font-medium dark:text-orange-400 text-green-500'>
              Get in touch
            </p>
          </div>

          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
        </div>

        {/* Contact info group */}

        <div className='w-full h-auto flex flex-col md:flex-row sm:w-11/12 md:w-full lg:w-5/6 items-center justify-center md:mt-10'>
          {/* The contact me info */}
          <div className='w-full h-auto sm:h-fit flex flex-col sm:flex-row md:flex-col gap-3 items-center justify-center md:mr-7 '>
            {/* The email group */}
            <div className='flex flex-col w-full md:items-end'>
              <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
                Email Me
              </p>
              <button className='ptf-contact-me-button'>
                <HiMail className='text-lg dark:text-orange-400' />{' '}
                mymail@gmail.com{' '}
              </button>
            </div>

            {/* The phone group */}

            <div className='flex flex-col w-full md:items-end'>
              <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
                Prefer Calling?
              </p>
              <button className='ptf-contact-me-button'>
                <HiPhone className='text-lg dark:text-orange-400' />
                +2347069782561
              </button>
            </div>

            {/* The location group */}

            <div className='flex flex-col w-full md:items-end'>
              <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
                Location
              </p>
              <button className='ptf-contact-me-button min-w-[180px] '>
                <HiLocationMarker className='text-lg dark:text-orange-400' />
                <p>Ilorin, Nigeria</p>
              </button>
            </div>
          </div>

          {/* OR group */}
          <div className='w-full p-0.5 mt-4 flex items-center justify-center md:h-40 md:w-0.5 md:rounded-full md:mx-3 dark:md:bg-orange-400 md:bg-green-500'>
            <p className='p-2 rounded-full text-2xl md:text-lg text-green-500 dark:text-orange-400 text-center mb-3 sm:dark:bg-gray-800 sm:bg-slate-50 '>
              OR
            </p>
          </div>

          {/* contact form */}
          <ContactForm />
        </div>

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
