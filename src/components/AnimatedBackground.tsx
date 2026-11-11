export default function AnimatedBackground() {
  const stars = Array.from({ length: 50 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050b14]">
      {/* grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

      {/* glowing blobs */}
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-[110px] animate-float-slow" />
      <div className="absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[110px] animate-float-slower" />
      <div className="absolute bottom-0 right-1/4 h-[24rem] w-[24rem] rounded-full bg-lime-400/10 blur-[110px] animate-float-slow" />

      {/* twinkling stars */}
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-emerald-200 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2.5 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050b14]" />
    </div>
  );
}
