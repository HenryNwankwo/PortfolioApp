'use client';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}

export default Providers;
