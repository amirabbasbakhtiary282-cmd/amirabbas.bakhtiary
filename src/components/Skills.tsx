import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "فرانت‌اند 🎨",
    color: "from-emerald-400 to-teal-400",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "بک‌اند و دیتابیس 🗄️",
    color: "from-cyan-400 to-blue-400",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "REST API", level: 82 },
    ],
  },
  {
    title: "ابزارها و مهارت‌ها ⚙️",
    color: "from-lime-400 to-emerald-400",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "دیپلوی و استقرار", level: 77 },
      { name: "حل مسئله", level: 90 },
      { name: "یادگیری سریع", level: 95 },
    ],
  },
];

const marqueeBadges = [
  "⚛️ JavaScript",
  "🟩 Node.js",
  "🚂 Express.js",
  "🐬 MySQL",
  "🎨 HTML5 / CSS3",
  "🅱️ Bootstrap",
  "🐙 Git & GitHub",
  "🔌 REST API",
  "☁️ Render Deploy",
  "🤖 Exploring AI",
];

function Bar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-200">{name}</span>
        <span className="font-mono text-xs text-emerald-300">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} animate-shimmer`}
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="⚡ مهارت‌های فنی"
          title="ابزارهایی که باهاشون ایده‌ها رو می‌سازم"
          description="از رابط کاربری تا سرویس‌های بک‌اند و دیتابیس، این‌ها فناوری‌هایی هستن که هر روز باهاشون تمرین و پروژه می‌سازم."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.15}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
                <h3 className={`mb-6 inline-block bg-gradient-to-r ${group.color} bg-clip-text font-display text-lg font-bold text-transparent`}>
                  {group.title}
                </h3>
                <div className="space-y-5">
                  {group.items.map((item, i) => (
                    <Bar key={item.name} name={item.name} level={item.level} color={group.color} delay={i * 0.1} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* marquee badges */}
        <Reveal delay={0.2} className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-6">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050b14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050b14] to-transparent" />
          <div className="flex w-max gap-4 animate-marquee">
            {[...marqueeBadges, ...marqueeBadges].map((badge, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2 text-sm font-semibold text-emerald-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
