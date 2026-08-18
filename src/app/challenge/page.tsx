"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS, Language } from "@/data/translations";
import { CIVIC_DOMAINS } from "@/data/scenarios";
import MovementHeader from "@/components/MovementHeader";
import HeroVisual from "@/components/HeroVisual";
import CitizenBadge from "@/components/CitizenBadge";
import { ArrowRight, Sparkles, Globe, Compass, ShieldCheck, Flame } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<Language>('hi');
  const t = TRANSLATIONS[lang];

  return (
    <main className="min-h-screen bg-[#07090E] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
      {/* Header */}
      <MovementHeader lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
          <Flame className="w-3.5 h-3.5" /> {t.heroTag}
        </div>

        <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          {t.heroTitle} <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            {t.heroHighlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          {t.heroSub}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/challenge"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-black px-8 py-4 rounded-xl font-black text-sm hover:bg-amber-300 transition shadow-xl shadow-amber-400/20"
          >
            {t.takeChallenge} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#badge"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
          >
            {t.movementPledge}
          </a>
        </div>

        {/* Interactive Visual Experience */}
        <div className="pt-8">
          <HeroVisual />
        </div>
      </section>

      {/* Core Principle Contrast Banner */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-[1px]">
          <div className="bg-[#0C1017] rounded-[23px] p-8 sm:p-12 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                CORE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Infrastructure alone cannot build a great nation.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Smart cities, expressways, and new train lines only work when the people using them respect each other's presence.
              </p>
            </div>

            {/* 3 Steps Chain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold">01 — The Individual Choice</span>
                <h3 className="font-bold text-sm text-white">One Brief Shortcut</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Honking at an ambulance, pushing at a buffet, or cutting a red light feels small in isolation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold">02 — The Multiplier</span>
                <h3 className="font-bold text-sm text-white">Multiplied by Millions</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When 10,000 drivers take the same shortcut, the entire city grinds to an unbearable standstill.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-amber-400 font-mono text-xs font-bold">03 — The Fix</span>
                <h3 className="font-bold text-sm text-white">Quiet Personal Discipline</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real civic pride begins when you choose not to be an obstacle even when nobody is watching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Core Domains */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            SCOPE & HORIZONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Civic sense is bigger than traffic rules.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {CIVIC_DOMAINS.map((d) => (
            <div key={d.id} className="p-5 rounded-2xl bg-[#0C1017] border border-white/5 hover:border-amber-400/40 transition group">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-2">{d.id}</span>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition">{d.name}</h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">{d.question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Learning Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#0C1017] rounded-3xl border border-white/5 p-8 sm:p-12 space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              GLOBAL PERSPECTIVES
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              What can India learn from the world?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              No need to blindly copy. We observe what works globally and build our own rooted civic culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-2xl block">🇯🇵</span>
              <h4 className="text-sm font-bold text-white">Japan</h4>
              <p className="text-[10px] font-mono text-amber-400 uppercase">Habit Early</p>
              <p className="text-xs text-slate-400">Early experiential cleanliness (O-Soji) and mutual consideration.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-2xl block">🇺🇸</span>
              <h4 className="text-sm font-bold text-white">United States</h4>
              <p className="text-[10px] font-mono text-amber-400 uppercase">Active Participation</p>
              <p className="text-xs text-slate-400">Community volunteering paired with high awareness of civic duty.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-2xl block">🇨🇳</span>
              <h4 className="text-sm font-bold text-white">China</h4>
              <p className="text-[10px] font-mono text-amber-400 uppercase">Collective Order</p>
              <p className="text-xs text-slate-400">High-density public space discipline and community orderliness.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <span className="text-2xl block">🇸🇬</span>
              <h4 className="text-sm font-bold text-white">Singapore</h4>
              <p className="text-[10px] font-mono text-amber-400 uppercase">Enforcement</p>
              <p className="text-xs text-slate-400">High baseline public hygiene backed by unwavering rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Section */}
      <section id="badge" className="max-w-4xl mx-auto px-6 py-16">
        <CitizenBadge />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-xs text-slate-500 space-y-2">
        <div className="font-bold text-slate-300">CIVIC INDIA 🇮🇳</div>
        <p>An independent, people-driven civic awareness platform • #ThinkBeforeYouAct</p>
      </footer>
    </main>
  );
}