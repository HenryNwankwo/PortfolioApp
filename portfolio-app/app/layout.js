import './globals.css';
import { poppins } from './fonts';
import { PtfProvider } from '@/utils/PtfContext';
import { ToastContainer } from '@/components/PtfToastifier';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'H.I.N. - A Portfolio containing the works of Nwankwo Henry Ifunanya',
  description:
    "A portfolio containing the track records of Nwankwo Henry Ifunanya's works",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark !scroll-smooth'>
      <PtfProvider>
        <body className={`${poppins.className}`}>
          {children}
          <ToastContainer />
        </body>
      </PtfProvider>
    </html>
  );
}
