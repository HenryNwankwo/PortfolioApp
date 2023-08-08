'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '@/app/themeSwitcher';

const Header = () => {
  const navRef = useRef(null);
  const checkboxRef = useRef(null);

  // Closing the nav bar on mousedown outside the navbar event
  useEffect(() => {
    const navOpenHandler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        //close the nav dropdown
        checkboxRef.current.checked = false;
      }
    };

    document.addEventListener('mousedown', navOpenHandler);
    return () => {
      document.removeEventListener('mousedown', navOpenHandler);
    };
  });

  return (
    <>
      {/* Header Section */}

      <header className='w-full h-20 sm:px-10 px-5 flex items-center justify-between dark:text-slate-400 bg-slate-50 dark:bg-slate-800 sticky top-0 right-0 left-0 z-50 shadow-lg shadow-transparent'>
        <input
          type='checkbox'
          name='menu-burger'
          id='menu-burger'
          className='ptf-menu-burger peer sm:hidden checked:mr-5'
          ref={checkboxRef}
        />
        <div className='flex'>
          <Link href='/' className='flex '>
            <Image alt='Logo'></Image>
            <p className='text-green-500 font-medium text-lg hover:text-slate-800 dark:hover:text-white dark:text-orange-400 ml-1'>
              &lt;&gt; Henry &lt;/&gt;
            </p>
          </Link>
        </div>

        <nav
          ref={navRef}
          className='absolute hidden w-screen top-20  left-0 shadow-lg shadow-transparent flex-col items-center py-2 bg-slate-50 dark:bg-slate-800 h-auto peer-checked:flex sm:py-0 sm:flex sm:flex-row sm:relative sm:top-0 sm:w-fit '
        >
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
    </>
  );
};

export default Header;
