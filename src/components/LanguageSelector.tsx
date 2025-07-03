import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧', shortName: 'EN' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪', shortName: 'DE' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹', shortName: 'IT' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 border border-yellow-500/30 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-200 text-gray-300 hover:text-yellow-400"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline tracking-wide uppercase text-sm font-medium">
          {currentLanguage?.shortName}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-sm border border-yellow-500/30 rounded-lg shadow-xl z-50 min-w-[140px] overflow-hidden">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-yellow-400/20 transition-all duration-200 ${
                  language === lang.code 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="tracking-wide text-sm font-medium">{lang.name}</span>
                  <span className="text-xs text-gray-500 uppercase">{lang.shortName}</span>
                </div>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}