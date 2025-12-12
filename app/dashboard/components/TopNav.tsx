import Image from "next/image";
import Link from "next/link";

const tabs = ["Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Vision", "Portfolio", "Rewards"];

export function TopNav() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-white/5 px-4 py-3 sm:px-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
            <Image src="/axiom-logo-mark.svg" alt="Axiom" width={18} height={18} className="invert" />
          </div>
          <span className="text-lg font-semibold text-white">AXIOM Pro</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold text-white/70 lg:flex">
          {tabs.map((tab) => (
            <a key={tab} className="cursor-pointer transition hover:text-white" href="#">
              {tab}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <input
          className="hidden rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 outline-none ring-1 ring-white/10 focus:ring-white/30 sm:block"
          placeholder="Search by token or CA..."
        />
        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/30">
          Deposit
        </button>
        <button className="hidden rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-white/80 hover:border-white/30 sm:inline-block">
          SOL
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 hover:border-white/40">
          ⚙
        </button>
      </div>
    </header>
  );
}

