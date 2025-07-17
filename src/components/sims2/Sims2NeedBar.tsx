// src/components/Sims2NeedBar.tsx
import '../styles/sims2.css';

type Sims2NeedsProps = {
    label: string;
    value: number;
};

export default function Sims2NeedBar({ label, value }: Sims2NeedsProps) {
    return (
        <div className="text-center sims2-need-bar">
            <div>
                <span>{label}</span>
            </div>
            <div className={`w-full sims2-need-progressbar overflow-hidden 
                ${value > 80 ? 'sims2-80-min' :
                    value > 65 ? 'sims2-65-min' :
                        value > 50 ? 'sims2-50-min' :
                            value > 35 ? 'sims2-35-min' :
                                value > 20 ? 'sims2-20-min' :
                                    value > 10 ? 'sims2-10-min' :
                                        'sims2-0-min'}`}>
                <div
                    className={`h-full subbar ${value > 95 || value < 5 ? 'sims2-80-min remove-end-border' : ''}`}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div >
    );
}
