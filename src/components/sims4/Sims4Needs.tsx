// src/components/Sims4Needs.tsx
import Sims4NeedBar from './Sims4NeedBar';
import '../styles/sims4.css';

type Sims4NeedsProps = {
    moods: Record<string, number>;
};

export default function Sims4Needs({ moods }: Sims4NeedsProps) {
    const getMoodValue = (label: string) => {
        return moods[label.toLowerCase()] || 0;
    };

    return (
        <div className="sims4-needs-container">
            <img src={`/assets/sims4/logo.png`} alt="sims4" className="rounded-tl-xl rounded-tr-xl h-6 mb-6" />
            <div className="sims4-needs">
                <div className="sims4-needs-content grid grid-cols-2 mt-4">
                    <Sims4NeedBar label="bladder" value={getMoodValue('bladder')} />
                    <Sims4NeedBar label="fun" value={getMoodValue('fun')} />
                    <Sims4NeedBar label="hunger" value={getMoodValue('hunger')} />
                    <Sims4NeedBar label="social" value={getMoodValue('social')} />
                    <Sims4NeedBar label="energy" value={getMoodValue('energy')} />
                    <Sims4NeedBar label="hygiene" value={getMoodValue('hygiene')} />
                </div>
            </div>
        </div >
    );
}
