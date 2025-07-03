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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="block">
                <img src="/sport academy.jpg" alt="Sport Academy" className="h-10 w-auto brightness-110" />
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/classes" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/classes') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Classes
                </Link>
                <Link 
                  to="/schedule" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/schedule') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Schedule
                </Link>
                <Link 
                  to="/coaches" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/coaches') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Coaches
                </Link>
                <Link 
                  to="/membership" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/membership') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Membership
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/contact') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/classes" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/classes') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Classes
              </Link>
              <Link 
                to="/schedule" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/schedule') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link 
                to="/coaches" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/coaches') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Coaches
              </Link>
              <Link 
                to="/membership" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/membership') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/contact') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
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
      <footer className="bg-gradient-dark border-t border-yellow-500/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="block">
              <img src="/sport academy.jpg" alt="Sport Academy" className="h-12 w-auto mx-auto mb-6 brightness-110" />
            </Link>
            <p className="text-gray-300 mb-2 font-medium tracking-wide">
              Elite MMA, BJJ & Grappling Training in South Tyrol
            </p>
            <p className="text-yellow-400 mb-6 italic tracking-wide font-light">
              Forging fighters since 2017
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">Home</Link>
              <Link to="/classes" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">Classes</Link>
              <Link to="/schedule" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">Schedule</Link>
              <Link to="/coaches" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">Coaches</Link>
              <Link to="/membership" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">Membership</Link>
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