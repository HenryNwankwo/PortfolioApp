import Link from 'next/link';
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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
          <ContactInfo />
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
          <div className='flex items-center justify-center ptf-alt-left-gap-2 gap-3'>
            <Link href='#' target='_blank'>
              <BsGithub className='ptf-social-links' />
            </Link>
            <Link href='#' target='_blank'>
              <BsTwitter className='ptf-social-links' />
            </Link>
            <Link href='#' target='_blank'>
              <BsLinkedin className='ptf-social-links' />
            </Link>
            <Link href='#' target='_blank'>
              <BsWhatsapp className='ptf-social-links' />
            </Link>
          </div>
          <span className='block h-0.5 w-1/5 sm:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 dark:from-red-500 dark:to-orange-400'></span>
        </div>
      </section>
    </>
  );
};

export default Contact;
