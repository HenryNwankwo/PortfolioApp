import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';
import { source_Serif_4 } from './fonts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center w-full h-auto'>
      <header>
        <nav>
          <Link href='#about'>About</Link>
          <Link href='#portfolio'>Portfolio</Link>
          <Link href='#contact'>Contact</Link>
        </nav>
        <ThemeSwitcher />
      </header>
      <section id='about' className='sm:px-24 px-8 sm:py-16 py-11 w-full '>
        <div className={source_Serif_4.className}>
          <h1 className='text-white text-3xl'>About</h1>
        </div>
        <div className='mt-4 flex flex-row w-full outline-1 outline-red-600 outline'>
          <span className='block border-t-4 border-solid border-orange-400 sm:w-12 w-32 mt-2 mr-2'></span>
          <p className='pa_aboutText '>
            I like to craft solid and scalable frontend products with great user
            experiences. I build accessible, inclusive products and digital
            experiences for the web.
          </p>
        </div>
      </section>
      <section id='skills'></section>
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
      <section id='experience'></section>
      <section id='testimonials'></section>
      <footer>
        <section id='contact'></section>
      </footer>
    </main>
  );
}
