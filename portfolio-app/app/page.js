import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import { source_Serif_4 } from './fonts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl bg-slate-100 dark:bg-slate-900 dark:text-white transition-all transform-gpu'>
      <header className='w-full h-20 sm:px-24 px-8 flex items-center justify-between dark:text-slate-400 dark:bg-slate-800'>
        <div>
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

      <section id='about' className='sm:px-24 px-8 sm:py-16 py-11 w-full '>
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

      <section
        id='skills'
        className='w-full sm:px-24 px-8 flex flex-wrap gap-6 justify-center items-center'
      >
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
      </section>

      {/* The Portfolio section */}

      <section id='portfolio' className='my-4'>
        <div className='text-center py-4 text-2xl'>
          <h2 className={source_Serif_4.className}>Portfolio</h2>
        </div>
        <div className='flex flex-wrap justify-center items-center md:grid md:grid-cols-3 gap-5 m-2'>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group'>
            <div className='w-full h-full rounded-md bg-gray-400 bg-opacity-20 flex-col justify-center items-center gap-2 p-2 hidden group-hover:flex'>
              <h3 className='text-xl'>Project Name</h3>
              <p className='text-xs text-center'>
                Project description Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. At ea atque harum accusantium distinctio?
                Dolorum alias aliquam ratione eius labore! Esse aliquid sunt
                provident adipisci ab soluta laborum nihil dolorum?
              </p>
              <button className='py-2 px-4 rounded-full bg-orange-400 text-black text-sm'>
                See more!{' '}
              </button>
            </div>
          </div>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 shadow-md shadow-gray-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer'></div>
        </div>
      </section>

      {/* The Experience section */}

      <section id='experience'></section>

      {/* The Testimonials section */}

      <section id='testimonials'></section>

      <footer>
        <section id='contact'></section>
      </footer>
    </main>
  );
}
