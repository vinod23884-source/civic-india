import Link from "next/link";
import { CIVIC_DOMAINS } from "@/data/scenarios";
import { HeroIllustration } from "@/components/EditorialIllustrations";
import { ArrowRight, Globe, Layers, ArrowUpRight, Compass } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* 1. Header Wordmark */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-200/70">
        <div className="font-black text-xl tracking-tight text-slate-950">
          CIVIC INDIA
        </div>
        <div className="flex items-center gap-6 text-xs font-bold tracking-wide">
          <a href="#why-it-matters" className="text-slate-500 hover:text-slate-900 transition">WHY IT MATTERS</a>
          <a href="#domains" className="text-slate-500 hover:text-slate-900 transition">THE 10 DOMAINS</a>
          <Link
            href="/challenge"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition"
          >
            TAKE THE CHALLENGE
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-full">
          <Compass className="w-3.5 h-3.5 text-slate-700" /> Everyday Behaviour Platform
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
          How do you behave when <br />
          <span className="text-slate-900 underline decoration-amber-400 decoration-4 underline-offset-8">
            nobody is watching?
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Civic sense isn't about being perfect. It's about noticing how your everyday choices affect the people around you.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/challenge"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-800 transition shadow-sm"
          >
            TAKE THE CIVIC CHALLENGE <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#why-it-matters"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm text-slate-700 hover:text-slate-950 transition"
          >
            WHY CIVIC SENSE MATTERS
          </a>
        </div>

        {/* Hero Visual */}
        <div className="pt-8">
          <HeroIllustration />
        </div>
      </section>

      {/* 3. Challenge Teaser Banner */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
              5 Minutes • 5 Scenarios
            </span>
            <h2 className="text-2xl font-bold">One honest look at your everyday behaviour.</h2>
          </div>
          <Link
            href="/challenge"
            className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold text-xs hover:bg-slate-100 transition shrink-0"
          >
            START CHALLENGE
          </Link>
        </div>
      </section>

      {/* 4. Why Civic Sense Matters (Chain Reaction Storytelling) */}
      <section id="why-it-matters" className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Foundational Principle</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            A country is not built only by its infrastructure.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Flyovers, metro lines, and highways are only half the equation. The other half is how we treat the people sharing them.
          </p>
        </div>

        {/* The Chain Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 font-mono">01</span>
            <h3 className="font-bold text-slate-900">One Small Shortcut</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Parking on a curb for 5 minutes or jumping a light feels harmless in isolation.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 font-mono">02</span>
            <h3 className="font-bold text-slate-900">Repeated by Thousands</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When everyone assumes an individual exemption, the shared system collapses into gridlock and friction.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-2">
            <span className="text-xs font-bold text-slate-400 font-mono">03</span>
            <h3 className="font-bold text-slate-900">Collective Consequence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wasted time, increased road rage, compromised safety, and reduced quality of life for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Civic Sense is Bigger Than Traffic: The 10 Domains */}
      <section id="domains" className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Scope & Breadth</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Civic sense is bigger than traffic rules.</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              It touches every shared space, quiet moment, digital interaction, and neighborhood decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {CIVIC_DOMAINS.map((domain) => (
              <div key={domain.id} className="p-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400">{domain.id}</span>
                <h3 className="font-bold text-xs text-slate-100">{domain.name}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{domain.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. India & The World */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Globe className="w-4 h-4" /> Global Perspectives
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950">
            What can India learn from the world?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Different countries developed distinct approaches. We don't need to copy them—we can learn from them to shape our own culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-3">
            <span className="text-2xl">🇯🇵</span>
            <h3 className="font-bold text-sm text-slate-900">Japan</h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase">Build Habits Early</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Everyday discipline, early cleanliness habits (*o-soji*), and experiential consideration for others.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-3">
            <span className="text-2xl">🇺🇸</span>
            <h3 className="font-bold text-sm text-slate-900">United States</h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase">Participation Matters</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Civic participation, neighborhood volunteering, knowing individual rights paired with community duties.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-3">
            <span className="text-2xl">🇨🇳</span>
            <h3 className="font-bold text-sm text-slate-900">China</h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase">Collective Responsibility</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Public space discipline, community-first orderliness, and rule awareness in high-density areas.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-3">
            <span className="text-2xl">🇸🇬</span>
            <h3 className="font-bold text-sm text-slate-900">Singapore</h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase">Rules & Enforcement</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rigorous cleanliness standards, swift enforcement, and high baseline public hygiene.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-100 rounded-2xl text-center">
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            India doesn't need to copy another country. India needs to build its own rooted civic culture.
          </p>
        </div>
      </section>

      {/* 7. About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-200">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">About Civic India</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            We don't believe Indians lack civic sense. We believe everyday civic behaviour is rarely discussed, practiced, or consciously examined. Civic India exists to make us pause, notice, and reflect on the choices we make every day.
          </p>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        Civic India — An independent public-awareness platform • #ThinkBeforeYouAct
      </footer>
    </main>
  );
}