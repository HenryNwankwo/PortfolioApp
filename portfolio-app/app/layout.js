import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ifunanya Henry Nwankwo Portfolio',
  description:
    "A portfolio containing the track records of Nwankwo Henry Ifunanya's works",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
