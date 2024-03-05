import '@styles/globals.css';
import Nav from 'src/components/Nav';

export const metadata = {
  title: 'Masjid At-Taqwa',
  description: 'Masjid in Malden Massachusetts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
