'use client';

import { useState, useRef } from 'react';
import domtoimage from 'dom-to-image';
import Sims1Needs from '@/components/sims1/Sims1Needs';
import MoodSlider from '@/components/MoodSlider';
import Sims2Needs from '@/components/sims2/Sims2Needs';
import Sims3Needs from '@/components/sims3/Sims3Needs';
import Sims4Needs from '@/components/sims4/Sims4Needs';
import ShareBtn from "@/components/ShareBtn";

const moods = ['hunger', 'energy', 'comfort', 'fun', 'hygiene', 'social', 'bladder', 'room'];

export default function Home() {
  const [values, setValues] = useState(
    Object.fromEntries(moods.map(m => [m, 50]))
  );
  const [version, setVersion] = useState(1);
  const gameNeedsRef = useRef<HTMLDivElement>(null);

  const handleChange = (mood: string, value: number) => {
    setValues(prev => ({ ...prev, [mood]: value }));
  };

  const handleShare = async () => {
    if (!gameNeedsRef.current) return;

    const activeGameNeeds = gameNeedsRef.current.querySelector('.game-needs:not(.hidden)') as HTMLElement;
    if (!activeGameNeeds) return;

    try {
      await document.fonts.ready;
      await new Promise(r => setTimeout(r, 50));
      const dataUrl = await domtoimage.toPng(activeGameNeeds, {
        quality: 1,
        bgcolor: undefined,
        width: activeGameNeeds.offsetWidth * 2,
        height: activeGameNeeds.offsetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left'
        }
      });

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `sims-mood-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erreur lors de la capture:', error);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mt-10 mb-2 text-center text-slate-700">Sims Mood</h1>
      <h2 className="subtitle text-lg font-semibold text-center text-slate-700">Track your mood like a sim</h2>
      <div className="filters grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-24 mt-20 mx-auto bg-white px-8 md:px-16 py-12 rounded-4xl shadow-lg">
        {moods.map(mood => (
          <div key={mood}>
            <MoodSlider label={mood} value={values[mood]} onChange={(value) => handleChange(mood, value)}/>
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
        <ShareBtn onClick={handleShare} />
      </div>

      <div className="text-center text-slate-500 mt-20">
        <p>Choisissez votre version du jeu</p>
        <div className="flex justify-center space-x-4 mt-4">
          {[0, 1, 2, 3].map((v) => (
            <button
              key={v}
              onClick={() => setVersion(v)}
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
    </main>
  );
}
