'use client';
import { useContext, createContext, useState } from 'react';
import { source_Serif_4 } from '@/app/fonts';
import { testimonialItems } from '@/app/content';

const PtfContext = createContext();

export const PtfProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [activeIndex, setActiveIndex] = useState(0);

  //Updating the carousel index
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= testimonialItems.length) {
      newIndex = testimonialItems.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <PtfContext.Provider
      value={{
        theme,
        setTheme,
        activeIndex,
        setActiveIndex,
        testimonialItems,
        updateIndex,
        source_Serif_4,
      }}
    >
      {children}
    </PtfContext.Provider>
  );
};

export const usePtfContext = () => useContext(PtfContext);
