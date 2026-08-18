"use client";

import React, { useState } from "react";
import { Download, Sparkles, Check, Share2 } from "lucide-react";

export default function CitizenBadge() {
  const [name, setName] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6">
      <div className="max-w-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Wear Your Integrity
        </div>
        <h3 className="text-2xl sm:text-3xl font-black">Get Your Verified Civic India Badge</h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Enter your name to generate a shareable movement card for your WhatsApp Status & Instagram Story.
        </p>
      </div>

      {!generated ? (
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
          />
          <button
            disabled={!name.trim()}
            onClick={() => setGenerated(true)}
            className="bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-300 transition disabled:opacity-40"
          >
            Generate Card
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in">
          {/* Card Preview */}
          <div className="max-w-sm bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-amber-400/60 rounded-2xl p-6 text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-80" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400">
              OFFICIAL CIVIC INDIA CITIZEN PLEDGE
            </span>
            <div className="py-2">
              <h4 className="text-xl font-black text-white">{name}</h4>
              <p className="text-[11px] text-slate-300 mt-1">
                "I choose awareness over shortcut convenience."
              </p>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-700 text-[11px] text-slate-400 flex items-center justify-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Committed to Zero Footpath Parking & Emergency Corridors
            </div>
            <div className="text-[9px] text-slate-400 font-mono">
              civicindia.org • #ThinkBeforeYouAct
            </div>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "My Civic India Pledge",
                  text: `I just generated my Civic India badge. Join the movement at:`,
                  url: window.location.origin,
                });
              } else {
                navigator.clipboard.writeText(`I just took the Civic India Challenge! Check yours: ${window.location.origin}`);
                alert("Share link copied to clipboard!");
              }
            }}
            className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3 rounded-xl text-xs hover:bg-slate-200 transition"
          >
            <Share2 className="w-4 h-4" /> Share on WhatsApp / Social
          </button>
        </div>
      )}
    </div>
  );
}