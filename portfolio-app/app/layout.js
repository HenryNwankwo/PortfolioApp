import './globals.css';
import { poppins } from './fonts';

export const metadata = {
  title: 'HIN - The Portfolio containing the works of Nwankwo Henry Ifunanya',
  description:
    "A portfolio containing the track records of Nwankwo Henry Ifunanya's works",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
