// src/components/Sims3NeedBar.tsx
import '../styles/sims3.css';

type Sims3NeedsProps = {
    label: string;
    value: number;
};

export default function Sims3NeedBar({ label, value }: Sims3NeedsProps) {
    return (
        <div className="text-center sims3-need-bar">
            <div>
                <span>{label}</span>
            </div>
            <div className={`w-full sims3-need-progressbar overflow-hidden 
                ${value > 85 ? 'sims3-85-min' :
                    value > 50 ? 'sims3-50-min' :
                        value > 35 ? 'sims3-35-min' :
                            value > 25 ? 'sims3-25-min' :
                                value > 15 ? 'sims3-15-min' :
                                    value > 5 ? 'sims3-5-min' :
                                        'sims3-0-min'}`}>
                <div
                    className={`h-full subbar ${value > 95 || value < 5 ? 'sims3-80-min remove-end-border' : ''}`}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div >
    );
}
