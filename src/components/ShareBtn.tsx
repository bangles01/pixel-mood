export default function ShareBtn({ onClick, isLoading }: { onClick: () => void, isLoading?: boolean }) {

  return (
      <button
          className="m-auto flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-full hover:bg-slate-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onClick}
          disabled={isLoading}>
          <span>{isLoading ? 'Génération en cours...' : 'Partager'}</span>
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <img src={`/assets/icons/send.svg`} alt="Send" className="h-5"/>
          )}
      </button>
  );
}