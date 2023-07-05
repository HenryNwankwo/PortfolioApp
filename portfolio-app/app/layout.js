import './globals.css';
import { Poppins } from 'next/font/google';
import Providers from './provider';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ifunanya Henry Nwankwo Portfolio',
  description:
    "A portfolio containing the track records of Nwankwo Henry Ifunanya's works",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
