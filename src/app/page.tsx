'use client';

import { useState } from 'react';
import Sims1Needs from '@/components/sims1/Sims1Needs';
import MoodSlider from '@/components/MoodSlider';
import Sims2Needs from '@/components/sims2/Sims2Needs';
import Sims3Needs from '@/components/sims3/Sims3Needs';
import Sims4Needs from '@/components/sims4/Sims4Needs';

const moods = ['hunger', 'energy', 'comfort', 'fun', 'hygiene', 'social', 'bladder', 'room'];

export default function Home() {
  const [values, setValues] = useState(
    Object.fromEntries(moods.map(m => [m, 50]))
  );
  const [version, setVersion] = useState(1);

  const handleChange = (mood: string, value: number) => {
    setValues(prev => ({ ...prev, [mood]: value }));
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mt-10 mb-2 text-center text-slate-500">Sims Mood</h1>
      <h2 className="subtitle text-lg font-semibold text-center text-slate-500">Track your mood like a sim</h2>
      <div className="filters grid grid-cols-2 gap-4 gap-x-24 mt-20 mx-auto bg-white px-16 py-12 rounded-4xl shadow-lg">
        {moods.map(mood => (
          <div key={mood}>
            <MoodSlider label={mood} value={values[mood]} onChange={(value) => handleChange(mood, value)} />
          </div>
        ))}
      </div>

      <div className={`game-needs pt-20 ${version === 0 ? 'flex' : 'hidden'}`}>
        <Sims1Needs moods={values} />
      </div>
      <div className={`game-needs pt-20 ${version === 1 ? 'flex' : 'hidden'}`}>
        <Sims2Needs moods={values} />
      </div>
      <div className={`game-needs pt-20 ${version === 2 ? 'flex' : 'hidden'}`}>
        <Sims3Needs moods={values} />
      </div>
      <div className={`game-needs pt-20 ${version === 3 ? 'flex' : 'hidden'}`}>
        <Sims4Needs moods={values} />
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
