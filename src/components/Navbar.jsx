import { Bell, HelpCircle, ChevronDown, Calendar as CalendarIcon, Search, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [range, setRange] = useState("Last 90 days");
  const ranges = ["Last 30 days", "Last 90 days", "Quarter to date", "Year to date", "All time"];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-teal-500 text-white grid place-items-center font-bold shadow-sm">S</div>
            <span className="text-slate-900 font-semibold tracking-tight">Sharakahub</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-slate-200" />
          <h1 className="text-slate-800 font-semibold">Partnerships Dashboard</h1>
        </div>

        {/* Center/Right: Search + Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-slate-100 focus-within:ring-2 focus-within:ring-teal-500/50 rounded-xl px-3 h-10 w-[360px]">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-slate-500"
              placeholder="Search partners, projects, assets…"
            />
          </div>

          {/* Global date range */}
          <div className="relative">
            <button className="inline-flex items-center gap-2 h-10 rounded-xl px-3 text-sm border border-slate-200 hover:bg-slate-50">
              <CalendarIcon className="h-4 w-4 text-slate-600" />
              <span className="text-slate-700">{range}</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
            {/* simple dropdown */}
            {/* This is a non-blocking mock: reveal on focus within for demo */}
            <div className="absolute mt-2 right-0 bg-white border border-slate-200 rounded-xl shadow-lg p-1 w-48 invisible group-focus-within:visible" />
          </div>

          <button className="relative h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50 grid place-items-center">
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-teal-500 text-white text-[10px] grid place-items-center">3</span>
          </button>
          <button className="h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50 grid place-items-center">
            <HelpCircle className="h-5 w-5 text-slate-700" />
          </button>
          <button className="inline-flex items-center gap-2 h-10 rounded-xl border border-slate-200 hover:bg-slate-50 pl-1 pr-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white grid place-items-center"><User className="h-4 w-4" /></div>
            <span className="text-sm text-slate-800">Admin</span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
