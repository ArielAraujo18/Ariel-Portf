export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030006]">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(88,28,135,0.35),transparent_35%),radial-gradient(circle_at_90%_60%,rgba(217,70,239,0.22),transparent_30%)]" />

      {/* aurora layer */}
      <div className="absolute -inset-[30%] animate-aurora bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.15),rgba(236,72,153,0.12),rgba(59,7,100,0.2),rgba(168,85,247,0.15))] blur-3xl" />

      {/* glowing blobs */}
      <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 animate-blob rounded-full bg-purple-600/30 blur-3xl md:h-96 md:w-96" />
      <div className="absolute right-[-10rem] top-1/4 h-80 w-80 animate-blobDelay rounded-full bg-fuchsia-500/20 blur-3xl md:h-[32rem] md:w-[32rem]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-96 w-96 animate-blobSlow rounded-full bg-violet-900/35 blur-3xl md:h-[34rem] md:w-[34rem]" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      {/* diagonal lines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_18px)] opacity-30" />

      {/* particles */}
      <div className="absolute left-[12%] top-[22%] h-1 w-1 animate-particle rounded-full bg-purple-300/80" />
      <div className="absolute left-[72%] top-[18%] h-1.5 w-1.5 animate-particleDelay rounded-full bg-fuchsia-300/70" />
      <div className="absolute left-[82%] top-[68%] h-1 w-1 animate-particle rounded-full bg-violet-200/70" />
      <div className="absolute left-[28%] top-[76%] h-1.5 w-1.5 animate-particleDelay rounded-full bg-purple-200/70" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.85)_100%)]" />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}