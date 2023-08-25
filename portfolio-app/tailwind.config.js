/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    scrollbar: (theme) => ({
      DEFAULT: {
        size: theme('spacing.2'),
        track: {
          background: theme('colors.green.100'),
          darkBackground: theme('colors.gray.200'),
        },
        thumb: {
          background: theme('colors.green.400'),
          darkBackground: theme('colors.orange.400'),
          borderRadius: '40px',
        },
        hover: {
          background: theme('colors.green.500'),
          darkBackground: theme('colors.orange.300'),
        },
      },
      thin: {
        size: '3px',
        track: {
          background: theme('colors.green.100'),
          darkBackground: theme('colors.gray.200'),
        },
        thumb: {
          background: theme('colors.green.400'),
          darkBackground: theme('colors.orange.400'),
        },
        hover: {
          background: theme('colors.green.500'),
          darkBackground: theme('colors.orange.300'),
        },
      },
    }),
    extend: {
      /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
 */
      minHeight: {
        6: '24px',
        20: '80px',
        30: '120px',
        90: '360px',
        120: '480px',
        130: '520px',
        135: '540px',
        140: '560px',
        150: '600px',
      },
    },
  },
  plugins: [require('@gradin/tailwindcss-scrollbar')],
};
