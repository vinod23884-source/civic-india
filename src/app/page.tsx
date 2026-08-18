import ChallengeEngine from "@/components/ChallengeEngine";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-gray-900 antialiased">
      {/* Top Bar */}
      <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-100">
        <div className="font-bold text-lg tracking-tight text-gray-900 flex items-center gap-2">
          Civic India 🇮🇳
        </div>
        <a 
          href="#challenge" 
          className="text-xs font-semibold bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Take Challenge
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center space-y-5">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          Public Awareness Initiative
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          How do you behave when <span className="text-indigo-600">nobody is watching?</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto font-normal">
          Civic sense isn't about being perfect. It's about being aware of how everyday individual actions affect everyone around us.
        </p>
      </section>

      {/* Why Civic Sense Section */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Why Infrastructure Alone Isn't Enough</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A country is not built only by its roads, buildings, and transport networks. It is built by how people use them together. One small individual shortcut repeated by thousands creates everyday congestion, danger, and stress.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="max-w-3xl mx-auto px-6 pb-20">
        <ChallengeEngine />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        Civic India — An independent public-awareness platform • #ThinkBeforeYouAct
      </footer>
    </main>
  );
}