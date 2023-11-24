import { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Nav />

      {children}

      <Footer />
    </div>
  );
}
