import Link from 'next/link';
import Image from 'next/image';
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { TbClick } from 'react-icons/tb';
import ImageBlob from './ImageBlob';
import SkillsLogoGroup from './SkillsLogoGroup';

const Hero = ({ source_Serif_4 }) => {
  return (
    <>
      {/* Hero Section */}

      <section
        id='hero-section'
        className='ptf-pri-section relative min-h-screen sm:min-h-135 flex flex-col sm:flex-row items-center justify-center sm:justify-normal bg-slate-50 dark:bg-gray-800 md:bg-[url("/assets/img/hero-image.png")] bg-[length:494px_536px] bg-right-bottom bg-no-repeat overflow-hidden'
      >
        {/* Skills logos */}
        <SkillsLogoGroup></SkillsLogoGroup>
        {/* Hero Image on small devices */}
        <div className='h-5/6 w-5/6 md:hidden sm:order-2 flex items-center justify-center mb-12 relative'>
          <ImageBlob classnames='absolute opacity-30 dark:opacity-70 bottom-25'></ImageBlob>
          <Image
            src={`/assets/img/hero-image.png`}
            alt="Nwankwo Henry's photo"
            width={200}
            height={200}
            className='rounded-full z-10'
          />
        </div>
        <div className='sm:justify-start flex flex-col justify-center items-center'>
          <h5 className='text-xl text-center'>
            Hi, I am{' '}
            <span className='text-5xl bg-gradient-to-tr  from-green-500 to-blue-400 dark:from-orange-400 dark:to-yellow-300 text-transparent bg-clip-text py-3 font-bold'>
              Henry
            </span>
          </h5>
          <p className='text-sm text-center my-1 dark:text-slate-300'>
            A software developer and Data Analyst
          </p>
          <button className='flex items-center justify-center mt-3 rounded-full text-center w-full py-3 sm:w-56 sm:py-2 sm:px-10 bg-gradient-to-tr outline outline-green-500 dark:outline-none  dark:from-orange-500 dark:to-yellow-300 hover:from-green-500 hover:to-blue-300 hover:outline-none hover:text-white dark:hover:from-orange-400 dark:hover:to-yellow-200  dark:text-black transition-all duration-200'>
            Hire Me <TbClick className='ml-2 text-2xl' />
          </button>
        </div>
        {/* Social links */}
        <div className='flex sm:flex-col relative mt-4 sm:mt-0 gap-2.5 h-fit w-fit justify-center items-center text-lg sm:absolute before:hidden sm:before:flex sm:right-10 before:absolute before:-top-20 before:mb-2 before:h-20 before:w-0.5 before:bg-green-500 dark:before:bg-orange-400'>
          <Link href='#'>
            <BsGithub className='text-2xl sm:mt-2 hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
          </Link>
          <Link href='#'>
            <BsLinkedin className='text-2xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
          </Link>
          <Link href='#'>
            <BsTwitter className='text-2xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
          </Link>
          <Link href='#'>
            <BsWhatsapp className='text-2xl hover:text-gray-600 dark:hover:text-yellow-300 transition-all duration-200' />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
