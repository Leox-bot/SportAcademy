import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

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
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                <Link 
                  to="/" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  to="/classes" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/classes') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.classes')}
                </Link>
                <Link 
                  to="/schedule" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/schedule') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.schedule')}
                </Link>
                <Link 
                  to="/coaches" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/coaches') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.coaches')}
                </Link>
                <Link 
                  to="/membership" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/membership') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.membership')}
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors font-medium tracking-wide uppercase text-sm ${
                    isActive('/contact') ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {t('nav.contact')}
                </Link>
              </div>
              <LanguageSelector />
            </div>
            
            <div className="md:hidden flex items-center gap-3">
              <LanguageSelector />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors p-1"
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
                {t('nav.home')}
              </Link>
              <Link 
                to="/classes" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/classes') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.classes')}
              </Link>
              <Link 
                to="/schedule" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/schedule') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.schedule')}
              </Link>
              <Link 
                to="/coaches" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/coaches') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.coaches')}
              </Link>
              <Link 
                to="/membership" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/membership') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.membership')}
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded transition-colors font-medium tracking-wide uppercase text-sm ${
                  isActive('/contact') ? 'text-yellow-400 bg-gray-800' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
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
              {t('footer.tagline')}
            </p>
            <p className="text-yellow-400 mb-6 italic tracking-wide font-light">
              {t('footer.subtitle')}
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">{t('nav.home')}</Link>
              <Link to="/classes" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">{t('nav.classes')}</Link>
              <Link to="/schedule" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">{t('nav.schedule')}</Link>
              <Link to="/coaches" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">{t('nav.coaches')}</Link>
              <Link to="/membership" className="text-gray-400 hover:text-yellow-400 transition-colors tracking-wide uppercase text-sm">{t('nav.membership')}</Link>
            </div>
            <p className="text-gray-500 text-sm tracking-wide">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}