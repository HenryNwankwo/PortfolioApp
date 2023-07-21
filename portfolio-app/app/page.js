import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import { source_Serif_4 } from './fonts';
import {
  HiLocationMarker,
  HiMail,
  HiOutlineExternalLink,
  HiPhone,
} from 'react-icons/hi';
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl bg-slate-100 dark:bg-slate-900 dark:text-white transition-all transform-gpu relative mx-auto'>
      <header className='w-full h-20 sm:px-24 px-8 flex items-center justify-between dark:text-slate-400 bg-slate-50 dark:bg-slate-800 sticky top-0 right-0 left-0 z-50 shadow-lg shadow-transparent'>
        <div className=''>
          <Link href='/'>
            <Image alt='Logo'></Image>
          </Link>
        </div>
        <nav>
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

      {/* The About section */}

      <section id='about' className='ptf-pri-section'>
        <div className={source_Serif_4.className}>
          <h1 className='dark:text-white text-3xl sm:text-5xl font-bold'>
            About
          </h1>
        </div>
        <div className='mt-4 flex flex-row w-full'>
          <span className='block border-t-4 border-solid border-green-500 dark:border-orange-400 sm:w-12 w-32 mt-2 mr-2'></span>
          <p className='pa_aboutText '>
            I like to craft solid and scalable frontend products with great user
            experiences. I build accessible, inclusive products and digital
            experiences for the web.
          </p>
        </div>
      </section>

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
          <p className='text-center text-3xl dark:text-yellow-400'>
            <q>Thanks for Scrolling</q>
          </p>
        </div>
        <div className='w-full flex flex-col sm:flex-row gap-3 items-center justify-center py-10'>
          <div className=''>
            <Link href='/'>
              <Image alt='Logo'></Image>
            </Link>
          </div>
          <p className='text-sm dark:text-slate-300'>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
