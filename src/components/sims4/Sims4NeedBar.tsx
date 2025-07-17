// src/components/Sims4NeedBar.tsx
import '../styles/sims4.css';

type Sims4NeedsProps = {
    label: string;
    value: number;
    icon: string;
};

export default function Sims4NeedBar({ label, value, icon }: Sims4NeedsProps) {
    const normalizedValue: number = 15 + (value / 100) * 85;

    return (
        <div className="sims4-need-bar flex flex-col items-center">
            <div className="sims4-need-label flex items-center justify-between px-2">
                <span>{label}</span>
            </div>
            <div className={`flex-1 w-full flex items-center px-3 relative 
                ${value > 85 ? 'sims4-85-min' :
                    value > 50 ? 'sims4-50-min' :
                        value > 35 ? 'sims4-35-min' :
                            value > 25 ? 'sims4-25-min' :
                                value > 15 ? 'sims4-15-min' :
                                    value > 5 ? 'sims4-5-min' :
                                        'sims4-0-min'}`}>
                <div className="sims4-need-progressbar-icon-container">
                    <div className="sims4-need-progressbar-icon-content">
                        <img className="sims4-need-progressbar-icon-img" src={`/assets/sims4/icons/${label.toLowerCase()}.png`} alt={label} />
                    </div>
                </div>
                <div className="w-full sims4-need-progressbar overflow-hidden">
                    <div
                        className={`h-full subbar ${value > 95 ? 'sims4-80-min' : ''}`}
                        style={{ width: `${normalizedValue}%` }}
                    />
                </div>
            </div>
        </div >
    );
}
