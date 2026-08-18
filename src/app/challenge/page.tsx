"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TRANSLATIONS, Language } from "@/data/translations";
import { CIVIC_DOMAINS } from "@/data/scenarios";
import { HeroIllustration } from "@/components/EditorialIllustrations";
import MovementHeader from "@/components/MovementHeader";
import CitizenBadge from "@/components/CitizenBadge";
import { ArrowRight, Compass, Users, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<Language>('hi');
  const t = TRANSLATIONS[lang];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* Sticky Interactive Movement Header */}
      <MovementHeader lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200 px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> {t.heroTag}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
          {t.heroTitle} <br />
          <span className="text-slate-900 underline decoration-amber-400 decoration-4 underline-offset-8">
            {t.heroHighlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          {t.heroSub}
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/challenge"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-800 transition shadow-lg"
          >
            {t.takeChallenge} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#badge"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition"
          >
            {t.movementPledge}
          </a>
        </div>

        {/* Live Citizen Impact Bar */}
        <div className="pt-2 text-xs font-semibold text-slate-500 flex items-center justify-center gap-2">
          <Users className="w-4 h-4 text-indigo-600" />
          <span><strong>52,400+</strong> {t.liveCounter}</span>
        </div>

        {/* Hero Visual Artwork */}
        <div className="pt-6">
          <HeroIllustration />
        </div>
      </section>

      {/* Urban vs Rural Contextual Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Contextual Reality</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.urbanRuralTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-600">{t.urbanRuralSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
                <MapPin className="w-4 h-4 text-indigo-600" /> Urban Context (शहरी)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {t.urbanContext}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <MapPin className="w-4 h-4 text-amber-600" /> Semi-Urban / Rural Context (ग्रामीण)
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {t.ruralContext}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Domains Grid */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">10 Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Civic sense is bigger than traffic rules.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {CIVIC_DOMAINS.map((domain) => (
              <div key={domain.id} className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-1.5">
                <span className="text-xs font-mono font-bold text-amber-400">{domain.id}</span>
                <h3 className="font-bold text-xs text-slate-100">{domain.name}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{domain.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Badge Generator Section */}
      <section id="badge" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <CitizenBadge />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        Civic India — A Grassroots Public-Awareness Platform • #ThinkBeforeYouAct
      </footer>
    </main>
  );
}