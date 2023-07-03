import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <header>
        <nav></nav>
        <ThemeSwitcher />
      </header>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  );
}
