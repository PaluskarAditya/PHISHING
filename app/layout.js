import './globals.css';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Phishing Awareness',
  description: 'Cyberpunk-style phishing awareness simulation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.className}`}>{children}</body>
    </html>
  );
}
