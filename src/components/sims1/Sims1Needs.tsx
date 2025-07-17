// src/components/Sims1Needs.tsx
import Sims1NeedBar from './Sims1NeedBar';
import '../styles/sims1.css';

type Sims1NeedsProps = {
    moods: Record<string, number>;
};

export default function Sims1Needs({ moods }: Sims1NeedsProps) {
    const getMoodValue = (label: string) => {
        return moods[label.toLowerCase()] || 0;
    };

    return (
        <div className="sims1-needs-container">
            <img src={`/assets/sims1/logo.png`} alt="sims1" className="rounded-tl-xl rounded-tr-xl h-12 mb-6" />
            <div className="flex sims1-needs m-auto">
                <div className="illustration flex items-center">
                    <img src={`/assets/sims1/illustration.png`} alt="Sims1 Needs" className="rounded-tl-xl rounded-bl-xl" />
                </div>
                <div className="flex-1 pl-5 pt-2">
                    <h2 className="text-2xl font-medium p-0 m-0">Needs</h2>
                    <div className="flex">
                        <div className="need-bars-col">
                            <Sims1NeedBar label="Hunger" value={getMoodValue('hunger')} />
                            <Sims1NeedBar label="Comfort" value={getMoodValue('comfort')} />
                            <Sims1NeedBar label="Hygiene" value={getMoodValue('hygiene')} />
                            <Sims1NeedBar label="Bladder" value={getMoodValue('bladder')} />
                        </div>
                        <div className="need-bars-col">
                            <Sims1NeedBar label="Energy" value={getMoodValue('energy')} />
                            <Sims1NeedBar label="Fun" value={getMoodValue('fun')} />
                            <Sims1NeedBar label="Social" value={getMoodValue('social')} />
                            <Sims1NeedBar label="Room" value={getMoodValue('room')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
