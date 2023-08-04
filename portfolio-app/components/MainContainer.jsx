import React from 'react';
import PageUp from './PageUp';

const MainContainer = ({ children }) => {
  return (
    <>
      <main
        id='main-body'
        className='flex min-h-screen flex-col items-center w-full h-auto max-w-7xl bg-slate-100 dark:bg-slate-900 dark:text-white transition-all transform-gpu relative mx-auto'
      >
        {children}
        <PageUp></PageUp>
      </main>
    </>
  );
};

export default MainContainer;
