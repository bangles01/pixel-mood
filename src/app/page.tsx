'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import domtoimage from 'dom-to-image';
import Sims1Needs from '@/components/sims1/Sims1Needs';
import MoodSlider from '@/components/MoodSlider';
import Sims2Needs from '@/components/sims2/Sims2Needs';
import Sims3Needs from '@/components/sims3/Sims3Needs';
import Sims4Needs from '@/components/sims4/Sims4Needs';
import ShareBtn from "@/components/ShareBtn";
import LanguageToggle from '@/components/LanguageToggle';

const allMoods = ['hunger', 'energy', 'comfort', 'fun', 'hygiene', 'social', 'bladder', 'room'];
const sims3Moods = ['hunger', 'social', 'bladder', 'hygiene', 'energy', 'fun'];
const sims4Moods = ['bladder', 'fun', 'hunger', 'social', 'energy', 'hygiene'];

export default function Home() {
  const { t } = useLanguage();
  const [values, setValues] = useState(
    Object.fromEntries(allMoods.map(m => [m, 50]))
  );
  const [version, setVersion] = useState(1);
  const [isSharing, setIsSharing] = useState(false);
  const [activeFilters, setActiveFilters] = useState(allMoods);
  const gameNeedsRef = useRef<HTMLDivElement>(null);

  const handleChange = (mood: string, value: number) => {
    setValues(prev => ({ ...prev, [mood]: value }));
  };

  const handleVersionChange = (newVersion: number) => {
    setVersion(newVersion);
    if (newVersion === 2) {
      setActiveFilters(sims3Moods);
    } else if (newVersion === 3) {
      setActiveFilters(sims4Moods);
    } else {
      setActiveFilters(allMoods);
    }
  }

  const handleShare = async () => {
    if (!gameNeedsRef.current) return;

    const activeGameNeeds = gameNeedsRef.current.querySelector('.game-needs-wrapper.flex .game-needs') as HTMLElement;
    if (!activeGameNeeds) return;

    setIsSharing(true);

    try {
      await prepareForCapture();
      await generateAndShareImage(activeGameNeeds);
    } catch (error) {
      console.error("Error during capture:", error);
    } finally {
      setIsSharing(false);
    }
  };

  const prepareForCapture = async () => {
    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 50));
  };

  const createImageOptions = () => ({
    quality: 1,
    bgcolor: undefined,
    width: 800,
    height: 500,
    style: {
      transform: 'scale(1)',
      transformOrigin: 'top left',
      width: '800px',
      height: '500px'
    }
  });

  const generateAndShareImage = async (element: HTMLElement) => {
    const options = createImageOptions();
    await domtoimage.toPng(element, options);

    // Need double generation to fix domtoimage bug on images
    // https://github.com/tsayen/dom-to-image/issues/343
    const dataUrl = await domtoimage.toPng(element, options);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await shareOrDownloadImage(dataUrl);
  };

  const shareOrDownloadImage = async (dataUrl: string) => {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], `sims-mood-${Date.now()}.png`, { type: 'image/png' });

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          files: [file]
        });
        return;
      } catch (error) {
        console.error("Error when sharing:", error);
      }
    }

    // Fallback: classic download
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `sims-mood-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <LanguageToggle />
      <h1 className="text-4xl font-bold mt-10 mb-2 text-center text-slate-700">{t('title')}</h1>
      <h2 className="subtitle text-lg font-semibold text-center text-slate-700">{t('subtitle')}</h2>
      <div className="filters grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-24 mt-20 mx-auto bg-white px-8 md:px-16 py-12 rounded-4xl shadow-lg">
        {activeFilters.map((mood, index) => (
          <div key={mood} className={`${index === activeFilters.length / 2 ? 'pt-12 md:pt-0' : ''}`}>
            <MoodSlider label={mood} value={values[mood]} version={version} onChange={(value) => handleChange(mood, value)}/>
          </div>
        ))}
      </div>

      <div ref={gameNeedsRef} className="pt-10 flex justify-center">
        <div className={`game-needs-wrapper ${version === 0 ? 'flex' : 'hidden'}`}>
          <div className="game-needs">
            <Sims1Needs moods={values}/>
          </div>
        </div>
        <div className={`game-needs-wrapper ${version === 1 ? 'flex' : 'hidden'}`}>
          <div className="game-needs">
            <Sims2Needs moods={values}/>
          </div>
        </div>
        <div className={`game-needs-wrapper ${version === 2 ? 'flex' : 'hidden'}`}>
          <div className="game-needs">
            <Sims3Needs moods={values}/>
          </div>
        </div>
        <div className={`game-needs-wrapper ${version === 3 ? 'flex' : 'hidden'}`}>
          <div className="game-needs">
            <Sims4Needs moods={values}/>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <ShareBtn onClick={handleShare} isLoading={isSharing} />
      </div>

      <div className="text-center text-slate-500 mt-20">
        <p>{t('gameVersion')}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {[0, 1, 2, 3].map((v) => (
            <button
              key={v}
              onClick={() => handleVersionChange(v)}
              className="px-1 py-2 rounded cursor-pointer"
            >
              <img
                src={`/assets/sims${v + 1}/logo.png`}
                alt={`Sims ${v + 1}`}
                className={`mx-3 w-14 inline-block mr-2 transition duration-300 ${version === v ? 'grayscale-0' : 'grayscale opacity-40'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <footer className="text-center text-sm text-slate-400 mt-14 pt-4 border-t border-slate-200">
        <p>
          {t('contact')}{' '}
          <a href="mailto:contact@pixelmood.fr" className="text-slate-500 hover:text-slate-700 underline">
            contact@pixelmood.fr
          </a>
        </p>
      </footer>
    </main>
  );
}
