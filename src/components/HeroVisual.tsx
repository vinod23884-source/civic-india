"use client";

import React, { useState } from "react";
import { Footprints, Bike, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<'convenience' | 'awareness'>('awareness');

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.02] p-[1px] glow-saffron">
      <div className="rounded-[23px] bg-[#0C1017] p-6 sm:p-10 noise-bg relative overflow-hidden">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/60 border border-white/10 p-1.5 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setActiveTab('convenience')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'convenience'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5" /> Shortcut Choice (2 Min)
            </button>

            <button
              onClick={() => setActiveTab('awareness')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'awareness'
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Civic Awareness Choice
            </button>
          </div>
        </div>

        {/* Visual Stage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-md">
              {activeTab === 'convenience' ? 'Unseen Domino Effect' : 'Shared Civic Dignity'}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {activeTab === 'convenience'
                ? '"I just parked on the sidewalk for 2 minutes."'
                : '"I parked 100m away so the footpath remains open."'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activeTab === 'convenience'
                ? "Those 2 minutes force a senior citizen with a walking stick and a parent with a stroller off the kerb directly into 50 km/h vehicular traffic."
                : "Wheelchair users, elders, and children navigate safely without stepping into blind vehicular lanes. The city functions as intended."}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono">
              <div className="text-slate-400">
                Impact: <span className={activeTab === 'convenience' ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {activeTab === 'convenience' ? 'High Risk for 40+ Pedestrians' : 'Barrier-Free Safe Transit'}
                </span>
              </div>
            </div>
          </div>

          {/* Minimalist Graphic Card */}
          <div className="md:col-span-5">
            <div className={`p-6 rounded-2xl border transition-all duration-500 ${
              activeTab === 'convenience'
                ? 'bg-rose-950/20 border-rose-500/30'
                : 'bg-amber-950/20 border-amber-400/30'
            }`}>
              <div className="flex items-center justify-between text-xs font-bold mb-4">
                <span className="text-slate-400">STREET REALITY</span>
                <span className={activeTab === 'convenience' ? 'text-rose-400' : 'text-amber-400'}>
                  {activeTab === 'convenience' ? 'OBSTRUCTED' : 'FLOWING'}
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Footpath Status</span>
                  <span className="font-bold text-white">
                    {activeTab === 'convenience' ? '❌ Blocked by 2-Wheeler' : '✅ 100% Barrier-Free'}
                  </span>
                </div>
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Elder & Stroller Safety</span>
                  <span className="font-bold text-white">
                    {activeTab === 'convenience' ? '⚠️ Forced onto road' : '🛡️ Safe on walkway'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}