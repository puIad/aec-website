'use client';
import Aboutus from './components/about';
import Aec from './components/Aec';
import Bottom from './components/bottom';
import ErrorBoundary from './components/error';
import FAQ from './components/faq';
import Navbar from './components/navbar';
import './globals.css';
import Fisrt from './components/home';

export default function Home() {


  return (
    <ErrorBoundary>
      <div style={{ backgroundColor: '#0D002B' }} className="relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute inset-0 z-0">
          <img
            src="/circle.png"
            alt="bg-circle-1"
            className="absolute top-[100vh] left-1/2 "
          />
          <img
            src="/circle.png"
            alt="bg-circle-2"
            className="absolute top-[160vh] right-1/2 "
          />
          <img
            src="/circle.png"
            alt="bg-circle-3"
            className="absolute top-[350vh] left-1/2 "
          />
        </div>

        {/* Page Content */}
        <div className="flex flex-col gap-10">
          <Navbar />
          <Fisrt />
          <Aec />
          <FAQ />
          <Aboutus />
          <Bottom />
        </div>
      </div>
    </ErrorBoundary>
  );
}
