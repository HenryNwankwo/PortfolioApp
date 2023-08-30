'use client';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';

const ContactInfo = () => {
  const phoneNumber = '+2347069782561';
  const recipentEmail = 'nwankwohenry29@gmail.com';

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${recipentEmail}`;
  };
  return (
    <>
      <div className='w-full h-auto sm:h-fit flex flex-col sm:flex-row md:flex-col sm:ptf-alt-left-gap-3 gap-3 items-center justify-center md:mr-7 '>
        {/* The email group */}
        <div className='flex flex-col w-full md:items-end'>
          <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
            Email Me
          </p>
          <button className='ptf-contact-me-button' onClick={handleEmail}>
            <HiMail className='text-lg dark:text-orange-400' /> mymail@gmail.com
            <HiMiniArrowTopRightOnSquare className='text-lg dark:text-orange-400' />
          </button>
        </div>

        {/* The phone group */}

        <div className='flex flex-col w-full md:items-end'>
          <p className='dark:text-orange-400 text-left text-sm my-1 font-medium'>
            Prefer Calling?
          </p>
          <button className='ptf-contact-me-button' onClick={handlePhoneCall}>
            <HiPhone className='text-lg dark:text-orange-400' />
            +2347069782561
            <HiMiniArrowTopRightOnSquare className='text-lg dark:text-orange-400' />
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
    </>
  );
};

export default ContactInfo;
