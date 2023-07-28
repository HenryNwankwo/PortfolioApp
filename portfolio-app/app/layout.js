import './globals.css';
import { poppins } from './fonts';

export const metadata = {
  title: 'Ifunanya Henry Nwankwo Portfolio',
  description:
    "A portfolio containing the track records of Nwankwo Henry Ifunanya's works",
  icons: {
    icon: './favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
