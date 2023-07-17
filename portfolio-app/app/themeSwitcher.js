'use client';
import { useState, useEffect } from 'react';
import { HiMiniSun } from 'react-icons/hi2';
import { BsMoonStarsFill } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Switches the theme from the previous theme to the selected theme
  const themeSwitchHandler = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      className='p-2 flex justify-center items-center'
      onClick={themeSwitchHandler}
    >
      {theme === 'dark' ? (
        <BsMoonStarsFill className='dark:text-orange-400 text-xl dark:hover:text-orange-300' />
      ) : (
        <HiMiniSun className='text-green-500 dark:text-orange-400 text-2xl hover:text-gray-500' />
      )}
    </button>
  );
}
