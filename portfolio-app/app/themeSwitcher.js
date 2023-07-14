'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSunBright, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('dark');

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme == 'light' ? (
        <FontAwesomeIcon icon={faMoon} size='2x' border />
      ) : (
        <FontAwesomeIcon icon={faSunBright} size='2x' />
      )}
    </>
  );
}
