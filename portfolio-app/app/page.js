import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import About from '@/components/About';
import { source_Serif_4, dancing_script } from './fonts';
import {
  HiArrowUp,
  HiLocationMarker,
  HiMail,
  HiOutlineExternalLink,
  HiPhone,
} from 'react-icons/hi';
import {
  BsCaretUpFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';

export default function Home() {
  return (
    <main
      id='main-body'
      className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl bg-slate-100 dark:bg-slate-900 dark:text-white transition-all transform-gpu relative mx-auto'
    >
      <header className='w-full h-20 sm:px-10 px-5 flex items-center justify-between dark:text-slate-400 bg-slate-50 dark:bg-slate-800 sticky top-0 right-0 left-0 z-50 shadow-lg shadow-transparent'>
        <div className='flex'>
          <Link href='/' className='flex '>
            <Image alt='Logo'></Image>
            <p className='text-green-500 font-medium text-lg hover:text-slate-800 dark:hover:text-white dark:text-orange-400 ml-1'>
              &lt;&gt; Henry &lt;/&gt;
            </p>
          </Link>
        </div>
        <input
          type='checkbox'
          name='menu-burger'
          id='menu-burger'
          className='ptf-menu-burger peer sm:hidden order-3 checked:mr-5'
        />
        <nav className='absolute hidden w-screen top-20  left-0 shadow-lg shadow-transparent flex-col items-center py-2 bg-slate-50 dark:bg-slate-800 h-auto peer-checked:flex sm:py-0 sm:flex sm:flex-row sm:relative sm:top-0 sm:w-fit '>
          <Link href='#about' className='ptf-nav-links'>
            About
          </Link>
          <Link href='#portfolio' className='ptf-nav-links'>
            Portfolio
          </Link>
          <Link href='#contact' className='ptf-nav-links'>
            Contact
          </Link>
        </nav>
        <ThemeSwitcher />
      </header>

      {/* Hero Section */}

      <section
        id='hero-section'
        className='ptf-pri-section relative min-h-screen flex flex-col sm:flex-row items-center justify-center sm:justify-normal bg-slate-50 dark:bg-gray-800 '
      >
        <div className='sm:justify-start'>
          <h5 className='text-xl'>
            Hi, I am{' '}
            <span className='text-3xl text-green-500 dark:text-orange-400 py-3 font-medium'>
              Henry
            </span>
          </h5>
          <p className='text-sm my-1 dark:text-slate-300'>
            A software developer and Data Analyst
          </p>
          <button className='mt-3 rounded-full text-center w-full py-3 sm:w-48 sm:py-2 sm:px-10 bg-gradient-to-tr outline outline-green-500 dark:outline-none  dark:from-orange-500 dark:to-yellow-300 hover:from-green-500 hover:to-blue-300 hover:outline-none hover:text-white dark:hover:from-orange-400 dark:hover:to-yellow-200  dark:text-black transition-all duration-200'>
            Hire Me
          </button>
        </div>
        <div className='flex sm:flex-col relative mt-4 sm:mt-0 gap-2.5 h-fit w-fit justify-center items-center text-lg sm:absolute before:hidden sm:before:flex sm:right-10 before:absolute before:-top-20 before:mb-2 before:h-20 before:w-0.5 before:bg-green-500 dark:before:bg-orange-400'>
          <Link href='#'>
            <BsGithub className='text-2xl sm:mt-2' />
          </Link>
          <Link href='#'>
            <BsLinkedin className='text-2xl' />
          </Link>
          <Link href='#'>
            <BsTwitter className='text-2xl' />
          </Link>
          <Link href='#'>
            <BsWhatsapp className='text-2xl' />
          </Link>
        </div>
      </section>

      {/* The About section */}

      <About></About>

      {/* The Skills section */}

      <section id='skills' className='py-4'>
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>My Skills</h2>
        </div>
        <div className='w-full sm:px-24 px-8 flex flex-wrap gap-6 justify-center items-center my-2'>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
        </div>
      </section>

      {/* The Portfolio section */}

      <section
        id='portfolio'
        className='w-full h-auto py-20 flex flex-col items-center'
      >
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>Portfolio</h2>
        </div>
        <div className='w-fit flex flex-wrap justify-center items-center md:grid md:grid-cols-3 md:justify-items-center md:content-center gap-5 m-2'>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group transition-all transform duration-300'>
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
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
        </div>
      </section>

      {/* The Experience section */}

      <section
        id='experience'
        className='ptf-pri-section bg-slate-50 dark:bg-gray-800 shadow-xl shadow-transparent'
      >
        <div className={source_Serif_4.className}>
          <h1 className='dark:text-white text-3xl sm:text-5xl font-bold'>
            Experience
          </h1>
        </div>

        {/* Experience Container */}

        <div className='w-full sm:w-2/3 flex flex-col items-center justify-center mx-auto my-4'>
          {/* Experience Card group */}

          <div className='w-full h-auto min-h-fit flex justify-center my-4 '>
            <div className='bg-gradient-to-b from-green-500 to-blue-500 dark:from-orange-400 dark:to-yellow-400 py-0.5 px-1.5 sm:py-1 sm:px-3 h-fit text-white dark:text-black dark:font-medium shadow-lg shadow-transparent relative rounded-full mr-1 sm:mr-2 ptf-year-tagTriangle'>
              <p className='text-sm sm:text-base'>2023</p>
            </div>
            <div className='flex flex-col p-1 h-full mx-1 sm:mx-2 items-center'>
              <span className='block w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-green-500 dark:bg-orange-400 shadow-xl shadow-green-500 dark:shadow-orange-400'></span>
              <span className='block w-0.5 min-h-20 h-auto mt-1 mx-auto rounded bg-gradient-to-b from-green-500 dark:from-yellow-500 to-red-500 dark:bg-gray-300'></span>
            </div>
            <div className='ml-2 relative'>
              <h3 className='font-medium text-xl sm:text-2xl text-green-400 dark:text-white'>
                Senior Software Developer
              </h3>
              <p className='text-red-400 text-sm sm:text-base dark:text-yellow-200'>
                Toronto, Canada
              </p>
              <p className='mt-3 text-xs dark:text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                accusamus magni dignissimos, accusantium quae unde quis, sed
                quaerat laudantium tempora quas reiciendis quia est saepe eos
                aliquid harum corrupti molestias.
              </p>
            </div>
          </div>

          <div className='w-full h-auto min-h-fit flex justify-center my-4 '>
            <div className='bg-gradient-to-b from-green-500 to-blue-500 dark:from-orange-400 dark:to-yellow-400 py-1 px-3 h-fit text-white dark:text-black dark:font-medium shadow-lg shadow-transparent relative rounded-full mr-2 ptf-year-tagTriangle'>
              <p>2023</p>
            </div>
            <div className='flex flex-col p-1 h-full mx-2 items-center'>
              <span className='block w-6 h-6 rounded-full bg-green-500 dark:bg-orange-400 shadow-xl shadow-green-500 dark:shadow-orange-400'></span>
              <span className='block w-0.5 min-h-20 h-auto mt-1 mx-auto rounded bg-gradient-to-b from-green-500 dark:from-yellow-500 to-red-500 dark:bg-gray-300'></span>
            </div>
            <div className='ml-2 relative'>
              <h3 className='font-medium text-2xl text-green-400 dark:text-white'>
                Senior Software Developer
              </h3>
              <p className='text-red-400 dark:text-yellow-200'>
                Toronto, Canada
              </p>
              <p className='mt-3 text-xs dark:text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                accusamus magni dignissimos, accusantium quae unde quis, sed
                quaerat laudantium tempora quas reiciendis quia est saepe eos
                aliquid harum corrupti molestias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Testimonials section */}

      <section id='testimonials'></section>

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

      <footer className='w-full h-auto mt-3 text-slate-800'>
        <div className='p-10 w-full'>
          <p className='text-center text-4xl text-green-500 dark:text-yellow-400'>
            <q className={dancing_script.className}>Thanks for Scrolling</q>
          </p>
        </div>
        <div className='w-full flex flex-col sm:flex-row gap-3 items-center justify-center py-4'>
          <div className=''>
            <Link href='/'>
              <Image alt='Logo'></Image>
            </Link>
          </div>
          <p className='text-sm dark:text-slate-400'>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
      <Link
        className='h-8 w-8 rounded-full shadow-md bg-green-500 hover:cursor-pointer hover:bg-green-400 dark:bg-orange-400 dark:hover:bg-orange-300 sticky bottom-10 self-end mr-6 flex items-center justify-center'
        href='#main-body'
      >
        <BsCaretUpFill className='text-sm text-white dark:text-slate-900' />
      </Link>
    </main>
  );
}
