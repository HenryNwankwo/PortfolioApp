import './globals.css';
import { poppins } from './fonts';
import Providers from './provider';

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
