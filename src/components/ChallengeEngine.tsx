"use client";

import React, { useState } from "react";
import { SCENARIOS, ScenarioOption } from "@/data/scenarios";
import { ArrowRight, CheckCircle2, RotateCcw, Share2, Award } from "lucide-react";

export default function ChallengeEngine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ scenario: string; option: ScenarioOption }[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState<string>("");
  const [pledged, setPledged] = useState(false);

  const currentScenario = SCENARIOS[currentIndex];

  const handleSelect = (option: ScenarioOption) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setScore((prev) => prev + option.points);
    setAnswers((prev) => [...prev, { scenario: currentScenario.title, option }]);
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
    if (navigator.share) {
      navigator.share({ title: "Civic India", text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert("Pledge text copied to clipboard!");
    }
  };

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Reflection Summary
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Your Civic Awareness Snapshot</h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            This score is not a judgement of who you are. It is simply a snapshot of how you responded to 5 everyday situations.
          </p>
          <div className="text-5xl font-black text-indigo-950 pt-2">{score} / 100</div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
            5 Core Dimension Insights
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {answers.map((ans, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 flex justify-between items-center">
                <span className="font-medium text-gray-800 truncate pr-2">{ans.scenario}</span>
                <span className={`px-2 py-0.5 rounded font-bold ${ans.option.points === 20 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {ans.option.points}/20
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* One Small Habit */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="text-base font-bold text-gray-900">Choose One Small Habit</h3>
          <p className="text-xs text-gray-600">You don't need to change everything at once. Choose one daily practice:</p>
          
          <div className="space-y-2">
            {[
              "I will avoid parking on or blocking footpaths.",
              "I will keep my phone on silent during quiet or sensitive gatherings.",
              "I will take moderate portions at shared food counters.",
              "I will stop at red lights even when roads appear empty.",
              "I will actively help clear space for emergency ambulances."
            ].map((habit, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHabit(habit)}
                className={`w-full text-left p-3.5 text-xs md:text-sm rounded-xl border transition ${
                  selectedHabit === habit 
                    ? "border-indigo-600 bg-indigo-50/70 text-indigo-950 font-medium shadow-sm" 
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {habit}
              </button>
            ))}
          </div>
        </div>

        {/* Civic Pledge */}
        <div className="text-center space-y-4 pt-2">
          {!pledged ? (
            <button
              disabled={!selectedHabit}
              onClick={() => setPledged(true)}
              className="w-full bg-indigo-900 text-white py-3.5 rounded-xl font-semibold text-sm disabled:opacity-40 hover:bg-indigo-800 transition"
            >
              Take The Civic Pledge
            </button>
          ) : (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-950">You're part of Civic India 🇮🇳</h4>
              <p className="text-xs md:text-sm text-emerald-900 italic font-medium">"{selectedHabit}"</p>
              <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                "I will try to make my convenience less important than another person's safety, comfort and dignity."
              </p>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-emerald-800 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-900 transition shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" /> Share My Commitment
              </button>
            </div>
          )}

          <div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition pt-3"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Reflection
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
        <span className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
          {currentScenario.domain}
        </span>
        <span>Question {currentIndex + 1} of {SCENARIOS.length}</span>
      </div>

      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / SCENARIOS.length) * 100}%` }}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">{currentScenario.title}</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
          {currentScenario.situation}
        </p>
        <p className="text-sm font-semibold text-gray-900 pt-1">{currentScenario.question}</p>
      </div>

      <div className="space-y-2.5">
        {currentScenario.options.map((opt) => {
          const isChosen = selectedOption?.id === opt.id;
          return (
            <button
              key={opt.id}
              disabled={!!selectedOption}
              onClick={() => handleSelect(opt)}
              className={`w-full text-left p-4 rounded-2xl text-xs md:text-sm border transition flex items-start gap-3 ${
                isChosen
                  ? "border-indigo-600 bg-indigo-50/70 text-indigo-950 font-medium"
                  : "border-gray-200 hover:border-gray-300 bg-white text-gray-800"
              }`}
            >
              <span className="font-bold text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                {opt.id}
              </span>
              <span className="flex-1 leading-snug">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 space-y-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block mb-1">
              Consequence
            </span>
            <p className="text-xs md:text-sm text-gray-800">{selectedOption.consequence}</p>
          </div>

          <div className="pt-2 border-t border-indigo-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Civic Principle
            </span>
            <p className="text-xs md:text-sm font-semibold text-gray-900">"{currentScenario.principle}"</p>
            <p className="text-xs text-gray-600 mt-1">{currentScenario.takeaway}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full mt-3 bg-indigo-900 text-white py-3 rounded-xl font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-indigo-800 transition"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}