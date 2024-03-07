import { Poppins } from 'next/font/google';
import '@styles/globals.css';
import Nav from 'src/components/Nav';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Masjid At-Taqwa',
  description: 'Masjid in Malden Massachusetts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
