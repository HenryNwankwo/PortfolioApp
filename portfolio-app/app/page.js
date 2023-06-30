import Image from 'next/image';
import ThemeSwitcher from './themeSwitcher';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ThemeSwitcher />
      <p className='dark:bg-red-700 bg-green-900'>
        Welcome to my portfolio App
      </p>
    </main>
  );
}
