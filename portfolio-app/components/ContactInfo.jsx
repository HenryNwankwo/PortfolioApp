'use client';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';

const ContactInfo = () => {
  const handlePhoneCall = () => {
    window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`;
  };
  return (
    <>
      <div className='w-full h-auto flex flex-col items-center justify-center md:mr-7'>
        {/* The email group */}
        <div className='flex flex-col w-full m-1.5'>
          <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
            Email Me
          </p>
          <button className='ptf-contact-me-button' onClick={handleEmail}>
            <HiMail className='text-lg dark:text-orange-400 mr-1' />{' '}
            {process.env.NEXT_PUBLIC_EMAIL}
            <HiMiniArrowTopRightOnSquare className='text-lg dark:text-orange-400' />
          </button>
        </div>

        {/* The phone group */}

        <div className='flex flex-col w-full m-1.5'>
          <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
            Prefer Calling?
          </p>
          <button className='ptf-contact-me-button' onClick={handlePhoneCall}>
            <HiPhone className='text-lg dark:text-orange-400 mr-1' />
            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            <HiMiniArrowTopRightOnSquare className='text-lg dark:text-orange-400' />
          </button>
        </div>

        {/* The location group */}

        <div className='flex flex-col w-full m-1.5'>
          <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
            Location
          </p>
          <button className='ptf-contact-me-button min-w-[180px] '>
            <HiLocationMarker className='text-lg dark:text-orange-400 mr-1' />
            <p>{process.env.NEXT_PUBLIC_LOCATION}</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
