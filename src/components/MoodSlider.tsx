// src/components/MoodSlider.tsx
import './styles/sims1.css';
import { useLanguage } from '@/contexts/LanguageContext';

type MoodSliderProps = {
    label: string;
    value: number;
    version: number;
    onChange: (value: number) => void;
};

export default function MoodSlider({ label, value, version, onChange }: MoodSliderProps) {
    const { getVersionTranslation } = useLanguage();
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold capitalize text-gray-800 mb-0">{getVersionTranslation(version, label)}</h2>
                <span className='block'>{value}</span>
            </div>
            <div className="relative w-full">
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={value}
                    onChange={(e) => onChange(parseInt(e.target.value))}
                    className="w-full h-3 md:h-2 rounded-lg appearance-none bg-slate-200 accent-blue-500 focus:outline-none cursor-pointer slider-mobile"
                />
            </div>
        </div>
    );
}
