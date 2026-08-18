"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SCENARIOS, ScenarioOption } from "@/data/scenarios";
import { ScenarioIllustration } from "@/components/EditorialIllustrations";
import { ArrowRight, CheckCircle2, RotateCcw, Share2, ShieldAlert, ArrowLeft } from "lucide-react";

export default function ChallengePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ scenarioTitle: string; option: ScenarioOption }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState<string>("");
  const [pledged, setPledged] = useState(false);

  const currentScenario = SCENARIOS[currentIndex];

  const handleSelect = (option: ScenarioOption) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setScore((prev) => prev + option.points);
    setAnswers((prev) => [...prev, { scenarioTitle: currentScenario.title, option }]);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (currentIndex + 1 < SCENARIOS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setAnswers([]);
    setIsCompleted(false);
    setSelectedHabit("");
    setPledged(false);
  };

  const handleShare = () => {
    const text = `I took the Civic India Challenge and pledged: "${selectedHabit}". How do you behave when nobody is watching? #CivicIndia #ThinkBeforeYouAct`;
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: "Civic India", text, url: window.location.origin }).catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Pledge commitment copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 antialiased py-8 px-4 md:px-8">
      {/* Header Navigation */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8 border-b border-slate-200/80">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
        <span className="font-black text-sm tracking-tight text-slate-900">
          CIVIC INDIA
        </span>
      </div>

      <div className="max-w-3xl mx-auto pt-8">
        {!isCompleted ? (
          <div className="space-y-8">
            {/* Step Counter & Category Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-widest bg-slate-900 text-white px-3 py-1 rounded-md">
                {currentScenario.domainName}
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">
                0{currentIndex + 1} / 0{SCENARIOS.length}
              </span>
            </div>

            {/* Scenario Illustration */}
            <ScenarioIllustration type={currentScenario.illustrationType} />

            {/* Scenario Narrative */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentScenario.title}
              </h1>
              <p className="text-base text-slate-700 leading-relaxed">
                {currentScenario.situation}
              </p>
              <p className="text-sm font-bold text-slate-950 pt-2">
                {currentScenario.question}
              </p>
            </div>

            {/* Decision Options */}
            <div className="space-y-3">
              {currentScenario.options.map((opt) => {
                const isSelected = selectedOption?.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    disabled={!!selectedOption}
                    onClick={() => handleSelect(opt)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl border text-sm transition-all flex items-start gap-4 ${
                      isSelected
                        ? "border-slate-900 bg-slate-900 text-white shadow-md"
                        : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                    }`}
                  >
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                      isSelected ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-700"
                    }`}>
                      {opt.id}
                    </span>
                    <span className="flex-1 leading-snug font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Consequence Reveal & Principle */}
            {selectedOption && (
              <div className="bg-amber-50/60 border border-amber-200 rounded-3xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                      The Real-Life Consequence: {selectedOption.consequenceTitle}
                    </span>
                    <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
                      {selectedOption.consequenceDescription}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-amber-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Impact on {selectedOption.perspectiveImpact.target}:</span>
                  <span className="font-bold text-slate-900">{selectedOption.perspectiveImpact.impact}</span>
                </div>

                <div className="pt-3 border-t border-amber-200/60 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Civic Principle
                  </span>
                  <p className="text-sm font-bold text-slate-900">"{currentScenario.principle}"</p>
                  <p className="text-xs text-slate-600">{currentScenario.takeaway}</p>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition"
                >
                  Continue to Next Situation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Scoring & Reflection View */
          <div className="space-y-10 pb-16">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full">
                Your Civic Snapshot
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                {score} <span className="text-2xl font-normal text-slate-400">/ 100</span>
              </h1>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                This isn't a moral judgment. It is simply an honest snapshot of how you responded to five everyday situations.
              </p>
            </div>

            {/* Dimension Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {answers.map((item, idx) => (
                <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-800">{item.scenarioTitle}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.option.points === 20 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {item.option.points} / 20 pts
                  </span>
                </div>
              ))}
            </div>

            {/* One Small Change */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 space-y-4">
              <h2 className="text-lg font-bold text-slate-900">One Small Change</h2>
              <p className="text-xs text-slate-600">
                You don't need to change everything today. Choose one thing you can do differently:
              </p>

              <div className="space-y-2">
                {[
                  "I will never park on or block pedestrian footpaths.",
                  "I will keep my phone on silent in quiet and solemn spaces.",
                  "I will take moderate portions at shared buffet counters.",
                  "I will stop at red lights even when streets seem empty.",
                  "I will actively clear corridors for emergency ambulances."
                ].map((habit, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHabit(habit)}
                    className={`w-full text-left p-4 rounded-xl border text-xs md:text-sm font-medium transition ${
                      selectedHabit === habit
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {habit}
                  </button>
                ))}
              </div>
            </div>

            {/* Pledge Screen */}
            <div className="text-center space-y-4">
              {!pledged ? (
                <button
                  disabled={!selectedHabit}
                  onClick={() => setPledged(true)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm disabled:opacity-40 hover:bg-slate-800 transition"
                >
                  I Take The Civic Pledge
                </button>
              ) : (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-950">You're part of Civic India</h3>
                  <p className="text-sm font-semibold text-emerald-900 italic">"{selectedHabit}"</p>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    "I will try to make my convenience less important than another person's safety, comfort and dignity."
                  </p>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 bg-emerald-800 text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-emerald-900 transition"
                  >
                    <Share2 className="w-4 h-4" /> Share My Commitment
                  </button>
                </div>
              )}

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition pt-4"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake The Challenge
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}