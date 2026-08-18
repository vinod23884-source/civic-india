import React from "react";
import { Globe2, Sparkles } from "lucide-react";

export default function GlobalPerspectives() {
  const insights = [
    {
      country: "Japan",
      tag: "Experiential Moral Education",
      description:
        "Focuses heavily on early habit building, personal responsibility for shared cleanliness (*o-soji*), and deep social consideration in public spaces.",
    },
    {
      country: "United States",
      tag: "Civic Rights & Participation",
      description:
        "Emphasizes individual civic agency, neighborhood volunteering, clear boundary awareness, and knowing both constitutional rights and shared duties.",
    },
    {
      country: "China",
      tag: "Public Order & Collective Morality",
      description:
        "Prioritizes public space discipline, community-first orderliness, and clear collective rules for high-density urban movement.",
    },
  ];

  return (
    <section className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          <Globe2 className="w-4 h-4" /> Global Perspectives
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          What Can India Learn From The World?
        </h2>
        <p className="text-xs md:text-sm text-gray-500">
          Civic culture isn't about blindly copying another nation. It is about understanding what works elsewhere and adapting it to our unique social fabric.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex flex-col justify-between space-y-3"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                {item.country}
              </span>
              <h3 className="font-semibold text-gray-900 text-sm mt-2">{item.tag}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100 flex items-start gap-3 text-xs text-indigo-950">
        <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <span>
          <strong>The Takeaway:</strong> We don't need simplistic rankings. We need to build a rooted, high-trust Indian civic culture.
        </span>
      </div>
    </section>
  );
}