const timeframes = ["1m", "5m", "30m", "1h"];
const tabs = ["Trending", "Surge", "DEX Screener", "Pump Live"];

export function FiltersBar() {
  return (
    <div className="flex flex-col gap-4 border-b border-white/5 px-4 py-3 sm:px-6">
      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-white">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 transition ${
              idx === 0 ? "bg-white text-black" : "bg-white/0 text-white/70 hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
        <div className="flex items-center gap-2">
          {timeframes.map((tf, idx) => (
            <button
              key={tf}
              className={`rounded-full px-3 py-1 transition ${
                idx === timeframes.length - 1 ? "bg-white text-black font-semibold" : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        <button className="rounded-full border border-white/10 px-4 py-2 font-semibold text-white hover:border-white/30">
          Filter
        </button>
        <button className="rounded-full border border-white/10 px-4 py-2 font-semibold text-white hover:border-white/30">
          Quick Buy
        </button>
      </div>
    </div>
  );
}

