type PairRow = {
  name: string;
  symbol: string;
  marketCap: string;
  liquidity: string;
  volume: string;
  txns: string;
  tokenInfo: string;
  age: string;
};

const pairs: PairRow[] = [
  { name: "CONWALON", symbol: "COW", marketCap: "$860K", liquidity: "$96.2K", volume: "$1.07M", txns: "5.93K", tokenInfo: "Paid", age: "1h" },
  { name: "DISNEYFY", symbol: "DSN", marketCap: "$333K", liquidity: "$58.9K", volume: "$379K", txns: "3.99K", tokenInfo: "Paid", age: "1h" },
  { name: "Alivecoin", symbol: "ALV", marketCap: "$25.2K", liquidity: "$21K", volume: "$118K", txns: "1.63K", tokenInfo: "Unpaid", age: "15m" },
  { name: "Donald", symbol: "DCK", marketCap: "$14.8K", liquidity: "$16.3K", volume: "$86K", txns: "1.4K", tokenInfo: "Paid", age: "35m" },
  { name: "Yeeee", symbol: "YEE", marketCap: "$21.5K", liquidity: "$19.6K", volume: "$89K", txns: "1.07K", tokenInfo: "Unpaid", age: "19m" },
  { name: "PASH", symbol: "PASH", marketCap: "$37.8K", liquidity: "$25.9K", volume: "$73.8K", txns: "878", tokenInfo: "Paid", age: "1h" },
];

export function PairTable() {
  return (
    <div className="px-4 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#0a0d14]">
        <div className="grid grid-cols-[1.2fr_repeat(5,0.7fr)_0.8fr] gap-4 border-b border-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white/60">
          <span>Pair Info</span>
          <span>Market Cap</span>
          <span>Liquidity</span>
          <span>Volume</span>
          <span>Txns</span>
          <span>Token Info</span>
          <span className="text-right">Action</span>
        </div>

        <div className="divide-y divide-white/5">
          {pairs.map((pair) => (
            <div
              key={pair.name}
              className="grid grid-cols-[1.2fr_repeat(5,0.7fr)_0.8fr] items-center gap-4 px-4 py-3 text-sm text-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-white">
                  {pair.symbol}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{pair.name}</span>
                  <span className="text-xs text-white/60">{pair.age} ago</span>
                </div>
              </div>
              <span>{pair.marketCap}</span>
              <span>{pair.liquidity}</span>
              <span>{pair.volume}</span>
              <span>{pair.txns}</span>
              <span className={`text-xs font-semibold ${pair.tokenInfo === "Paid" ? "text-green-400" : "text-red-400"}`}>
                {pair.tokenInfo}
              </span>
              <div className="flex justify-end">
                <button className="rounded-full bg-[#4a63ff] px-4 py-2 text-xs font-semibold text-white shadow shadow-[#4a63ff]/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4a63ff]/50 transition">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

