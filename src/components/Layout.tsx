import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white text-black font-oswald">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img src="/sport-academy-logo.png" alt="Sport Academy" className="h-10 w-auto" />
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/classes" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/classes') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Classes
                </Link>
                <Link 
                  to="/schedule" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/schedule') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Schedule
                </Link>
                <Link 
                  to="/coaches" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/coaches') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Coaches
                </Link>
                <Link 
                  to="/membership" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/membership') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Membership
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors font-medium tracking-wide ${
                    isActive('/contact') ? 'text-black' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-gray-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/classes" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/classes') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Classes
              </Link>
              <Link 
                to="/schedule" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/schedule') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link 
                to="/coaches" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/coaches') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Coaches
              </Link>
              <Link 
                to="/membership" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/membership') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide ${
                  isActive('/contact') ? 'text-black bg-gray-50' : 'text-gray-700 hover:text-black hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/">
              <img src="/sport-academy-logo.png" alt="Sport Academy" className="h-12 w-auto mx-auto mb-6" />
            </Link>
            <p className="text-gray-700 mb-2 font-medium tracking-wide">
              Elite MMA, BJJ & Grappling Training in South Tyrol
            </p>
            <p className="text-gray-600 mb-6 italic tracking-wide">
              Forging fighters since 2017
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors tracking-wide">Home</Link>
              <Link to="/classes" className="text-gray-600 hover:text-black transition-colors tracking-wide">Classes</Link>
              <Link to="/schedule" className="text-gray-600 hover:text-black transition-colors tracking-wide">Schedule</Link>
              <Link to="/coaches" className="text-gray-600 hover:text-black transition-colors tracking-wide">Coaches</Link>
              <Link to="/membership" className="text-gray-600 hover:text-black transition-colors tracking-wide">Membership</Link>
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              © 2025 Sport Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}