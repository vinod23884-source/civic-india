"use client";

import React from "react";
import Link from "next/link";
import { Language } from "@/data/translations";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function MovementHeader({ lang, setLang }: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-black text-black text-xs shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
            CI
          </div>
          <div>
            <span className="font-black tracking-widest text-sm text-white block leading-none">
              CIVIC INDIA
            </span>
            <span className="text-[9px] font-mono tracking-wider text-amber-400/80 block mt-1 uppercase">
              BEHAVIOUR LAB
            </span>
          </div>
        </Link>

        {/* Live Active Citizens */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[11px] text-slate-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white font-bold">54,120+</span> citizens reflected this week
        </div>

        {/* Action & Language */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl text-xs font-semibold">
            {(['en', 'hi', 'mr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-lg transition text-[11px] font-bold ${
                  lang === l
                    ? "bg-amber-400 text-black shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {l === 'en' ? 'EN' : l === 'hi' ? 'हिन्दी' : 'मराठी'}
              </button>
            ))}
          </div>

          <Link
            href="/challenge"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold text-xs hover:bg-amber-400 transition"
          >
            Take Challenge <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}