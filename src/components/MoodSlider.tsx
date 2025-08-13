// src/components/MoodSlider.tsx
import './styles/sims1.css';

type MoodSliderProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

export default function MoodSlider({ label, value, onChange }: MoodSliderProps) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold capitalize text-gray-800 mb-0">{label}</h2>
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
