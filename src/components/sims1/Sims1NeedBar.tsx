// src/components/Sims1NeedBar.tsx
import '../styles/sims1.css';
import { useLanguage } from '@/contexts/LanguageContext';

type Sims1NeedsProps = {
    label: string;
    value: number;
};

export default function Sims1NeedBar({ label, value }: Sims1NeedsProps) {
    const { getVersionTranslation } = useLanguage();
    return (
        <div className="text-center sims1-need-bar">
            <div>
                <span>{getVersionTranslation(0, label)}</span>
            </div>
            <div className={`w-full sims1-need-progressbar overflow-hidden 
                ${value > 70 ? 'sims1-70-min' :
                    value > 50 ? 'sims1-50-min' :
                        value > 30 ? 'sims1-30-min' :
                            value > 10 ? 'sims1-10-min' :
                                'sims1-0-min'}`}>
                <div
                    className="h-full subbar"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div >
    );
}
