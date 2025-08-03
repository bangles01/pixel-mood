export default function ShareBtn({ onClick }: { onClick: () => void }) {

  return (
      <button
          className="m-auto flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-full hover:bg-slate-700 transition-colors cursor-pointer"
          onClick={onClick}>
          <span>Partager</span>
          <img src={`/assets/icons/send.svg`} alt="Send" className="h-5"/>
      </button>
  );
}