export function StatusBar() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-white/5 bg-[#080b12] px-4 py-3 text-xs text-white/70 sm:px-6">
      <span className="font-semibold text-white/80">Connection is stable</span>
      <span className="hidden sm:inline">Global</span>
      <span className="hidden sm:inline">Wallet: Ready</span>
      <span className="hidden sm:inline">Docs</span>
    </div>
  );
}

