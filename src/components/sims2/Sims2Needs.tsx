// src/components/Sims2Needs.tsx
import Sims2NeedBar from './Sims2NeedBar';
import '../styles/sims2.css';

type Sims2NeedsProps = {
    moods: Record<string, number>;
};

export default function Sims2Needs({ moods }: Sims2NeedsProps) {
    const getMoodValue = (label: string) => {
        return moods[label.toLowerCase()] || 0;
    };

    return (
        <div className="sims2-needs-container">
            <img src={`/assets/sims2/logo.png`} alt="sims2" className="rounded-tl-xl rounded-tr-xl h-12 mb-6" />
            <div className="sims2-layout">
                <div className="flex sims2-needs">
                    <div className="shadow-top-saver"></div>
                    <div className="illustration flex items-center">
                        <img src={`/assets/sims2/illustration.png`} alt="Sims2 Needs" className="rounded-tl-xl rounded-bl-xl" />
                    </div>
                    <div className="flex-1 flex pt-2 sims2-needs-content">
                        <div>
                            <h2 className="text-2xl font-medium p-0 m-0">Needs</h2>
                            <div className="flex items-center justify-center">
                                <div className="need-bars-col">
                                    <Sims2NeedBar label="hunger" value={getMoodValue('hunger')} />
                                    <Sims2NeedBar label="comfort" value={getMoodValue('comfort')} />
                                    <Sims2NeedBar label="hygiene" value={getMoodValue('hygiene')} />
                                    <Sims2NeedBar label="bladder" value={getMoodValue('bladder')} />
                                </div>
                                <div className="need-bars-col">
                                    <Sims2NeedBar label="energy" value={getMoodValue('energy')} />
                                    <Sims2NeedBar label="fun" value={getMoodValue('fun')} />
                                    <Sims2NeedBar label="social" value={getMoodValue('social')} />
                                    <Sims2NeedBar label="room" value={getMoodValue('room')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-bottom-saver"></div>
                </div>
            </div>
        </div >
    );
}
