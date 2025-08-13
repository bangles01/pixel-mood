'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="bg-white/80 py-2 px-2 rounded-3xl shadow-sm flex cursor-pointer"
      >
        <span className="mx-2 block pt-1">{language === 'fr' ? '🇺🇸' : '🇫🇷'}</span>
        <span className="font-bold text-sm mr-2 pt-1">{language === 'fr' ? 'EN' : 'FR'}</span>
      </button>
    </div>
  );
}