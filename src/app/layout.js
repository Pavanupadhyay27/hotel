import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kingsukh Guest House',
  description: 'Experience luxury and comfort at Kingsukh Guest House',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
