import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import { source_Serif_4 } from './fonts';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl bg-slate-100 dark:bg-slate-900 dark:text-white transition-all transform-gpu relative'>
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
          <h1 className='dark:text-white text-3xl'>About</h1>
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
        <div className='text-center py-4 text-2xl'>
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
        <div className='text-center py-4 text-2xl'>
          <h2 className={source_Serif_4.className}>Portfolio</h2>
        </div>
        <div className='w-fit flex flex-wrap justify-center items-center md:grid md:grid-cols-3 md:justify-items-center md:content-center gap-5 m-2'>
          <div className='w-60 h-60 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group transition-all transform duration-300'>
            {/* Contains the info about a portfolio project */}
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
        className='ptf-pri-section bg-slate-50 dark:bg-gray-800'
      >
        <div className={source_Serif_4.className}>
          <h1 className='dark:text-white text-3xl'>Experience</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full h-auto min-h-fit flex flex-col items-center justify-center'>
            <div className='bg-green-500 dark:bg-orange-400 py-1 px-3 text-white shadow-lg shadow-transparent'>
              <p>2023</p>
            </div>
            <div className='flex flex-col w-4 h-auto bg-red-200'>
              <span className='block w-3 h-3 rounded-full bg-green-500 dark:bg-orange-400'></span>
              <span className='block border-l-2 border-solid border-green-500 dark:border-orange-400'></span>
            </div>
            <div>
              <h3>Senior Software Developer</h3>
              <p>Toronto, Canada</p>
              <p>
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

      <footer>
        <section id='contact'></section>
      </footer>
    </main>
  );
}
