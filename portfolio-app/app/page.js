import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import { source_Serif_4 } from './fonts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl dark:bg-slate-900 dark:text-white'>
      <header className='w-full h-20'>
        <nav>
          <Link href='#about'>About</Link>
          <Link href='#portfolio'>Portfolio</Link>
          <Link href='#contact'>Contact</Link>
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
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200 dark:hover:bg-orange-400'>
          <Image alt='Skill Image'></Image>
          <p className='font-medium'>Skill Name</p>
        </div>
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200  dark:hover:bg-orange-400'>
          <Image alt='Skill Image'></Image>
          <p className='font-medium'>Skill Name</p>
        </div>
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200  dark:hover:bg-orange-400'>
          <Image alt='Skill Image'></Image>
          <p className='font-medium'>Skill Name</p>
        </div>
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200  dark:hover:bg-orange-400'>
          <Image alt='Skill Image'></Image>
          <p className='font-medium'>Skill Name</p>
        </div>
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200  dark:hover:bg-orange-400'>
          <Image alt='Skill Image'></Image>
          <p className='font-medium'>Skill Name</p>
        </div>
        <div className='rounded-md w-44 h-44 shadow-md shadow-gray-200 dark:shadow-none bg-gray-100 dark:bg-gray-800 flex justify-center items-center flex-col hover:cursor-pointer hover:text-black hover:bg-green-200  dark:hover:bg-orange-400'>
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
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
          <div className='w-60 h-60 outline outline-1 outline-red-500 rounded-md hover:cursor-pointer'></div>
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
