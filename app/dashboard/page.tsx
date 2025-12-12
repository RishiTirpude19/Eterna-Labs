"use client";

import { FiltersBar } from "./components/FiltersBar";
import { PairTable } from "./components/PairTable";
import { StatusBar } from "./components/StatusBar";
import { TopNav } from "./components/TopNav";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-[#05070d] text-white">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 pb-12">
        <TopNav />
        <FiltersBar />
        <PairTable />
        <StatusBar />
      </div>
    </div>
  );
}

