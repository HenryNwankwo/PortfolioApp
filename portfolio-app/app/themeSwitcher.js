'use client';
import { useEffect } from 'react';
import { HiMiniSun } from 'react-icons/hi2';
import { BsMoonStarsFill } from 'react-icons/bs';
import { usePtfContext } from '@/utils/PtfContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = usePtfContext();

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
      className='p-2 flex justify-center items-center -mr-4 sm:-mr-0'
      onClick={themeSwitchHandler}
    >
      {theme === 'dark' ? (
        <HiMiniSun className='dark:text-orange-400 text-xl dark:hover:text-orange-300' />
      ) : (
        <BsMoonStarsFill className='text-green-500 dark:text-orange-400 text-lg hover:text-gray-500' />
      )}
    </button>
  );
}
