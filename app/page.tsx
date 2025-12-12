"use client";
import Image from "next/image";
import Link from "next/link";

const featureCards = [
  { title: "Instant Settlement", copy: "Execute trades with sub-second finality across major chains." },
  { title: "Deep Liquidity", copy: "Tap aggregated liquidity from top venues with smart routing." },
  { title: "Enterprise Security", copy: "Institutional-grade custody, monitoring, and compliance tooling." },
];

const faqItems = [
  {
    question: "What is Axiom?",
    answer:
      "Axiom is a decentralized trading platform that aggregates liquidity, offers advanced execution, and provides yield opportunities across chains.",
  },
  {
    question: "How secure is Axiom?",
    answer:
      "We integrate directly with audited protocols, enforce non-custodial access, and monitor transactions for anomalies to keep funds secure.",
  },
  {
    question: "Can I buy crypto on Axiom?",
    answer:
      "Yes. You can on-ramp, swap, or trade perpetuals through our unified interface with smart routing for best price execution.",
  },
  {
    question: "How does Axiom offer yield?",
    answer:
      "We route capital to vetted yield sources and structured strategies, letting you earn with transparent onchain positions.",
  },
  {
    question: "Is Axiom decentralized?",
    answer:
      "Axiom is decentralized. We integrate directly with protocols and applications; your funds and transactions stay onchain and in your control.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04060c] text-white">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="gradient-orb top-[-30%] left-[-10%] opacity-70" />
        <div className="gradient-orb top-[10%] right-[-20%] scale-150 opacity-60" />
        <div className="gradient-orb bottom-[-25%] left-[20%] scale-125 opacity-60" />
      </div>

      <div className="relative flex min-h-screen w-full flex-col pb-20 pt-10 px-6 sm:px-10">
        {/* nav */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
              <Image src="/axiom-logo-mark.svg" alt="Axiom" width={20} height={20} className="invert" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AXIOM Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full bg-[#4a63ff] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#4a63ff]/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4a63ff]/50"
            >
              Sign up
            </Link>
          </div>
        </header>

        <main className="mt-20 flex flex-1 flex-col items-center text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
              <div className="h-6 w-6 rotate-180 border-b-[10px] border-l-[10px] border-r-[10px] border-b-white/80 border-l-transparent border-r-transparent" />
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              The Gateway to DeFi
            </h1>
            <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
              Axiom is the only trading platform you’ll ever need.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/dashboard"
                className="rounded-full bg-[#4a63ff] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[#4a63ff]/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4a63ff]/50"
              >
                Start Trading
              </Link>
              <span className="text-sm font-medium text-white/60">Backed by</span>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm font-semibold text-white/90">
                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#f65a3a] text-xs font-bold text-white">
                  Y
                </div>
                Combinator
              </div>
            </div>

            {/* hero video */}
            <div className="mt-6 flex w-full justify-center">
              <video
                className="hero-video"
                src="/video/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* stepped cards section stays the same */}
          {/* <section className="relative mt-16 w-full max-w-4xl">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="glass-card absolute left-0 right-0 mx-auto h-24 max-w-3xl rounded-2xl border border-white/[0.04] bg-white/[0.02] shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]"
                style={{ top: `${i * 44}px`, zIndex: 3 - i, transform: `scale(${1 - i * 0.06})` }}
              />
            ))}
            <div className="relative z-10 mt-[140px] grid gap-4 sm:grid-cols-3">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="glass-card h-full rounded-2xl border border-white/5 bg-white/5 px-5 py-6 text-left shadow-lg shadow-black/40"
                >
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{card.copy}</p>
                </div>
              ))}
            </div>
          </section> */}

          {/* advanced features section */}
          <section className="mt-28 w-full max-w-6xl text-left">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Advanced Features to videline Your Trading.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                From wallet tracking to real-time analytics, we&apos;ve got you covered.
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr]">
              <div className="flex flex-wrap items-start justify-center gap-10 text-center sm:text-left">
                {[
                  { title: "Order Execution Engine", desc: "Trade with confidence." },
                  { title: "Wallet and Twitter Tracker", desc: "Trade and track all in one place." },
                  { title: "Hyperliquid Perpetuals", desc: "Trade leveraged Perps." },
                  { title: "Yield", desc: "Earn while you sleep." },
                ].map((tab) => (
                  <div key={tab.title} className="flex min-w-[180px] flex-col gap-1">
                    <div className="h-[2px] w-full max-w-[180px] bg-white/40" />
                    <h3 className="text-lg font-semibold">{tab.title}</h3>
                    <p className="text-sm text-white/70">{tab.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 rounded-2xl bg-white/[0.02] p-6 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.9)] lg:flex-row lg:items-stretch lg:gap-8">
                <div className="flex w-full flex-col gap-6 lg:max-w-[36%]">
                  <div className="rounded-xl border border-white/10 bg-black/50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="text-base">⬢</span>
                      <span>Land in &lt;= 1 Block</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white/90">
                      Our limit order execution engine is the fastest in the market.
                    </p>
                    <p className="mt-4 text-sm text-white/70">
                      With our proprietary order execution engine and colocated nodes, our limit orders land in &lt;= 1 block.
                    </p>
                  </div>

                  <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/50">
                    {["Migration Sniper", "No MEV Triggers", "Auto-Strategies"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-t border-white/5 px-4 py-4 first:border-t-0"
                      >
                        <span className="text-lg text-white/80">⛭</span>
                        <p className="text-sm font-semibold text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex w-full items-center justify-center lg:max-w-[64%]">
                  <video
                    className="w-full rounded-xl border border-white/10 object-cover shadow-[0_25px_80px_-50px_rgba(0,0,0,0.9)]"
                    src="/video/land-on-two-blocks.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </section>

          {/* rewards section */}
          <section className="mt-24 w-full">
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#2c3b73] via-[#1a2240] to-[#0c0f1c] p-[1px] shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)]">
              <div className="relative h-full rounded-[22px] bg-[#05070f]/95 px-6 py-12 sm:px-10">
                <div className="flex flex-col items-center text-center">
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Rewards</h2>
                  <p className="mt-2 text-sm text-white/70">Get paid to trade.</p>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-2">
                  <div className="flex flex-col gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Rewards</h3>
                      <p className="text-sm text-white/70">Earn SOL from trading.</p>
                    </div>

                    <div className="glass-card rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                      <div className="flex items-center justify-between text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🎁</span>
                          <span>0.12 SOL Received!</span>
                        </div>
                        <span className="text-xs text-white/60">Now</span>
                      </div>
                      <p className="mt-3 text-sm text-white/70">Congratulations! Trade more to earn more!</p>
                  <Link
                    href="/dashboard"
                    className="mt-5 inline-flex w-full justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Buy Trump 12 ⛭
                  </Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Progress through the Ranks</h3>
                      <p className="text-sm text-white/70">Earn higher reward rates.</p>
                    </div>
                    <div className="grid grid-cols-3 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                      {[
                        { title: "Wood", sub: "1x Rewards" },
                        { title: "Silver", sub: "3x Rewards" },
                        { title: "Champion", sub: "5x Rewards" },
                      ].map((rank) => (
                        <div key={rank.title} className="flex flex-col items-center gap-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">◈</div>
                          <div className="text-sm font-semibold text-white">{rank.title}</div>
                          <div className="text-xs text-white/60">{rank.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-2">
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Referrals</h3>
                      <p className="text-sm text-white/70">Earn points and SOL from your friends.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/80">
                      <p>Invite friends to stack rewards across levels.</p>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/65 sm:grid-cols-3">
                        {[
                          "+100 Points",
                          "+0.01 SOL",
                          "Level 1: 30%+",
                          "Level 2: 3%+",
                          "Level 3: 2%+",
                          "Level 4: 1%",
                        ].map((item) => (
                          <div key={item} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-center">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Axiom Points</h3>
                      <p className="text-sm text-white/70">Earn points through trading, referrals, and quests.</p>
                    </div>
                    <div className="space-y-3 text-sm text-white/85">
                      {[
                        { label: "Refer 3 people", reward: "+1,500 Points" },
                        { label: "Share 1 PnL card", reward: "+50 Points" },
                        { label: "Trade 1 SOL in Volume", reward: "+500 Points" },
                      ].map((quest) => (
                        <div
                          key={quest.label}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base text-white/70">⟳</span>
                            <span>{quest.label}</span>
                          </div>
                          <span className="text-xs text-white/60">{quest.reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-24 w-full text-left">
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Architecture</h2>
              <div className="flex w-full justify-center">
                <div className="w-[90%] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_25px_90px_-60px_rgba(0,0,0,0.9)]">
                  <Image
                    src="/Architecture.png"
                    alt="Architecture diagram"
                    width={3000}
                    height={2500}
                    className="mx-auto h-auto w-full object-contain"
                    priority  
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          {/* <section className="mt-24 w-full">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="flex items-start justify-start">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">FAQ</h2>
              </div> */}

              {/* <div className="space-y-3">
                {faqItems.map((item, idx) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-[#111318] text-left text-white transition hover:border-white/20"
                    open={idx === faqItems.length - 1}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-lg font-semibold leading-6">
                      <span>{item.question}</span>
                      <span className="text-white/70 transition group-open:rotate-180">⌄</span>
                    </summary>
                    <div className="border-t border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white/75">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* footer */}
          <footer className="mt-24 w-full">
            {/* CTA banner */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#0f162a] via-[#0b1020] to-[#0a0c16] p-[1px] shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)]">
              <div className="relative flex flex-col items-center justify-center gap-8 rounded-[27px] bg-gradient-to-br from-[#0e1428] via-[#0b0f1f] to-[#0a0c15] px-6 py-16 sm:px-10">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="gradient-orb top-[-40%] left-[-10%] scale-75" />
                  <div className="gradient-orb bottom-[-50%] right-[-20%] scale-125" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Optimize Your Trades with the Right Tools
                  </h2>
                  <Link
                    href="/dashboard"
                    className="mt-4 rounded-full bg-[#4a63ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4a63ff]/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4a63ff]/60"
                  >
                    Launch Axiom
                  </Link>
                </div>
              </div>
            </div>

            {/* bottom bar */}
            <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-[#0a0c12] px-4 py-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
                  <Image src="/axiom-logo-mark.svg" alt="Axiom" width={18} height={20} className="invert" />
                </div>
                <span className="text-base font-semibold text-white">AXIOM Pro</span>
              </div>

              <div className="text-xs text-white/60">© {new Date().getFullYear()} Axiom. All rights reserved.</div>

              <div className="flex items-center gap-4 text-xs font-semibold text-white/80 sm:text-sm">
                <a className="hover:text-white" href="#">Contact</a>
                <a className="hover:text-white" href="#">Docs</a>
                <a className="hover:text-white" href="#">Status</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}