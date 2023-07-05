import { Poppins, Source_Serif_4 } from 'next/font/google';

export const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const source_Serif_4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});
