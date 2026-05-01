// WHY: Each pipeline block needs the same shape of data (label, color, icon).
// Defining a TypeScript type enforces this — if we forget a field, TS errors immediately.
type PipelineBlock = {
  label: string;
  colorClass: string; // Tailwind bg-color class
  icon: string;
};

// The 4 game stages stored as data, not hardcoded HTML.
// WHY: Using an array + .map() means we render 4 blocks with one piece of code,
// instead of copy-pasting the same JSX 4 times.
const PIPELINE_STAGES: PipelineBlock[] = [
  { label: "Source", colorClass: "bg-blue-500", icon: "📦" },
  { label: "Build", colorClass: "bg-orange-500", icon: "🔨" },
  { label: "Test", colorClass: "bg-purple-500", icon: "🧪" },
  { label: "Deploy", colorClass: "bg-green-500", icon: "🚀" },
];

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-12 px-6 font-mono">

      {/* Version badge — top of page */}
      <span className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-3 py-1">
        v0.1.0 — alpha
      </span>

      {/* Title + tagline */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Pipeline Tycoon
        </h1>
        <p className="text-zinc-400 text-lg">
          <span className="text-zinc-600">// </span>
          Build your CI/CD pipeline. Ship or die.
        </p>
      </div>

      {/* Pipeline preview — shows all 4 game blocks connected by arrows */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {PIPELINE_STAGES.map((stage, index) => (
          // WHY: React needs a unique "key" on each list item so it can track
          // which element is which when the list re-renders.
          <div key={stage.label} className="flex items-center gap-2">
            <div
              className={`${stage.colorClass} rounded-lg px-5 py-3 flex flex-col items-center gap-1 min-w-[80px] shadow-lg`}
            >
              <span className="text-2xl">{stage.icon}</span>
              <span className="text-white text-xs font-bold tracking-wide">
                {stage.label}
              </span>
            </div>

            {/* Render arrow between blocks, but NOT after the last one */}
            {index < PIPELINE_STAGES.length - 1 && (
              <span className="text-zinc-500 text-2xl">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="flex flex-col items-center gap-3">
        <button
          disabled
          className="bg-green-600 text-white font-bold px-10 py-3 rounded-lg opacity-40 cursor-not-allowed text-lg tracking-wide"
        >
          🚀 Deploy &amp; Play
        </button>
        <span className="text-zinc-600 text-sm">
          // pipeline not ready yet — check back soon
        </span>
      </div>

    </main>
  );
}

// Next.js requires a default export from page files.
// WHY: We also keep the named export (HomePage) per our code style rules,
// so other files could import it by name if needed.
export default HomePage;
