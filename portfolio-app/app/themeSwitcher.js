'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const themeSwitchHandler = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <button
      className='w-12 h-12 flex justify-center items-center'
      onClick={themeSwitchHandler}
    >
      {theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          size='lg'
          className='dark:text-orange-400'
        />
      ) : (
        <FontAwesomeIcon icon={faMoon} size='lg' />
      )}
    </button>
  );
}
