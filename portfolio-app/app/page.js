import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <header>
        <nav>
          <Link href='#about'>About</Link>
          <Link href='#portfolio'>Portfolio</Link>
          <Link href='contact'>Contact</Link>
        </nav>
        <ThemeSwitcher />
      </header>
      <section id='about'></section>
      <section id='skills'></section>
      <section id='portfolio'></section>
      <section id='experience'></section>
      <section id='testimonials'></section>
      <footer>
        <section id='contact'></section>
      </footer>
    </main>
  );
}
