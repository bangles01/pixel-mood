// src/components/Sims3Needs.tsx
import Sims3NeedBar from './Sims3NeedBar';
import '../styles/sims3.css';

type Sims3NeedsProps = {
    moods: Record<string, number>;
};

export default function Sims3Needs({ moods }: Sims3NeedsProps) {
    const getMoodValue = (label: string) => {
        return moods[label.toLowerCase()] || 0;
    };

    return (
        <div className="sims3-needs-container">
            <img src={`/assets/sims3/logo.png`} alt="sims3" className="rounded-tl-xl rounded-tr-xl w-16 mb-6" />
            <div>
                <div className="sims3-needs">
                    <img src={`/assets/sims3/illustration.png`} alt="Sims3 Needs" className="illustration rounded-tl-xl rounded-bl-xl" />
                    <div className="sims3-needs-content grid grid-cols-2 gap-1 mt-4">
                        <Sims3NeedBar label="Hunger" value={getMoodValue('hunger')} />
                        <Sims3NeedBar label="Social" value={getMoodValue('social')} />
                        <Sims3NeedBar label="Bladder" value={getMoodValue('bladder')} />
                        <Sims3NeedBar label="Hygiene" value={getMoodValue('hygiene')} />
                        <Sims3NeedBar label="Energy" value={getMoodValue('energy')} />
                        <Sims3NeedBar label="Fun" value={getMoodValue('fun')} />
                    </div>
                </div>
            </div>
        </div >
    );
}
