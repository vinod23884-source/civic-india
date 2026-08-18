"use client";

import React from "react";
import { Language } from "@/data/translations";
import { Globe, Users, Flame } from "lucide-react";

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
}

export default function MovementHeader({ lang, setLang }: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-slate-950 text-white text-xs font-black px-2.5 py-1.5 rounded-lg tracking-widest flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            CIVIC INDIA
          </div>
          <span className="hidden md:inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            ● 48,290+ Citizens Pledged
          </span>
        </div>

        {/* Language Pills */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 p-1 rounded-full text-xs font-bold">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition ${lang === 'en' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-3 py-1 rounded-full transition ${lang === 'hi' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => setLang('mr')}
              className={`px-3 py-1 rounded-full transition ${lang === 'mr' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}