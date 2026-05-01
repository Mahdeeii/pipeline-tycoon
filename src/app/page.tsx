import Link from 'next/link';

type PipelineBlock = {
  label: string;
  colorClass: string;
  icon: string;
};

const PIPELINE_STAGES: PipelineBlock[] = [
  { label: "Source", colorClass: "bg-blue-500",   icon: "📦" },
  { label: "Build",  colorClass: "bg-orange-500",  icon: "🔨" },
  { label: "Test",   colorClass: "bg-purple-500",  icon: "🧪" },
  { label: "Deploy", colorClass: "bg-green-500",   icon: "🚀" },
];

const HOW_TO_PLAY = [
  { step: "01", text: "Drag blocks from the sidebar onto the canvas" },
  { step: "02", text: "Connect them in order: Source → Build → Test → Deploy" },
  { step: "03", text: "Hit Deploy and ship your pipeline" },
  { step: "04", text: "Score points. Climb from Intern to 10x Engineer" },
];

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-14 px-6 py-16 font-mono">

      <span className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-3 py-1">
        v0.1.0 — open beta
      </span>

      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Pipeline Tycoon
        </h1>
        <p className="text-zinc-400 text-lg">
          <span className="text-zinc-600">// </span>
          Build your CI/CD pipeline. Ship or die.
        </p>
      </div>

      {/* Pipeline preview */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {PIPELINE_STAGES.map((stage, index) => (
          <div key={stage.label} className="flex items-center gap-2">
            <div className={`${stage.colorClass} rounded-lg px-5 py-3 flex flex-col items-center gap-1 min-w-[80px] shadow-lg`}>
              <span className="text-2xl">{stage.icon}</span>
              <span className="text-white text-xs font-bold tracking-wide">{stage.label}</span>
            </div>
            {index < PIPELINE_STAGES.length - 1 && (
              <span className="text-zinc-500 text-2xl">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Play button — live now */}
      <Link
        href="/play"
        className="bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-4 rounded-lg text-lg tracking-wide transition-colors shadow-lg shadow-green-900/50"
      >
        🚀 Play Now
      </Link>

      {/* How to play */}
      <div className="flex flex-col gap-3 max-w-sm w-full">
        <span className="text-zinc-600 text-xs tracking-widest text-center">// HOW TO PLAY</span>
        {HOW_TO_PLAY.map(({ step, text }) => (
          <div key={step} className="flex items-start gap-4">
            <span className="text-zinc-600 text-sm shrink-0">{step}</span>
            <span className="text-zinc-400 text-sm">{text}</span>
          </div>
        ))}
      </div>

    </main>
  );
}

export default HomePage;
