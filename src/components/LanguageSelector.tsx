import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
        <Globe size={20} />
        <span className="hidden md:inline tracking-wide uppercase text-sm font-medium">
          {languages.find(lang => lang.code === language)?.name}
        </span>
        <span className="md:hidden text-lg">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-sm border border-yellow-500/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-yellow-400/10 transition-colors ${
                language === lang.code ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="tracking-wide text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}