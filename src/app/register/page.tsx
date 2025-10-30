'use client'
import ErrorBoundary from "../components/error";
import Nav from "../components/nav";
import Regclose from "../components/regclose";
import Reg from "../components/register";

export default function Register() {
  return ( 
    <ErrorBoundary>
      <div style={{ backgroundColor: '#0D002B' }} className="relative overflow-hidden min-h-screen">
        {/* Background circles */}
        <div className="absolute inset-0 z-0">
          <img
            src="/circle.png"
            alt="bg-circle-1"
            className="absolute left-1/2"
          />
          <img
            src="/circle.png"
            alt="bg-circle-2"
            className="absolute top-[50vh] right-1/2"
          />
          <img
            src="/circle.png"
            alt="bg-circle-3"
            className="absolute top-[350vh] left-1/2"
          />
        </div>

        {/* Page Content */}
        <div style={{ backgroundColor: '#0D002B' }} className="relative z-10">
          <Nav />
          <Regclose/>
        </div>
      </div>
    </ErrorBoundary>
  );
}
