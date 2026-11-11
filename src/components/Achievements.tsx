import { Trophy, Medal, Rocket, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    icon: GraduationCap,
    title: "شروع مسیر برنامه‌نویسی",
    desc: "آغاز یادگیری HTML، CSS و جاوااسکریپت و ساخت اولین پروژه‌های کوچک وب.",
    tag: "نقطه شروع",
  },
  {
    icon: Medal,
    title: "رتبه برتر استانی خوارزمی",
    desc: "کسب رتبه برتر در مرحله استانی جشنواره نوجوان خوارزمی با یک پروژه فنی.",
    tag: "افتخار استانی",
  },
  {
    icon: Trophy,
    title: "راه‌یابی به مرحله کشوری",
    desc: "صعود به مرحله ملی جشنواره خوارزمی؛ یکی از بزرگ‌ترین رویدادهای علمی نوجوانان ایران.",
    tag: "افتخار ملی 🏆",
  },
  {
    icon: Rocket,
    title: "ساخت و استقرار ارزان‌کالا",
    desc: "طراحی، توسعه و دیپلوی یک فروشگاه اینترنتی کامل با فرانت‌اند، بک‌اند و دیتابیس.",
    tag: "پروژه واقعی",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="🏆 افتخارات و مسیر"
          title="داستان رشدی که هنوز ادامه داره"
          description="از اولین خط کد تا راه‌یابی به مرحله کشوری جشنواره خوارزمی؛ هر قدم، یک درس و یک انگیزه تازه بود."
        />

        <div className="relative">
          <div className="absolute right-6 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent sm:right-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  } items-start sm:items-center`}
                >
                  <div className="absolute right-6 top-1 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-[#050b14] ring-4 ring-emerald-400/40 sm:right-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-glow" />
                  </div>

                  <div className="w-full pr-16 sm:w-1/2 sm:pr-0 sm:px-8">
                    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-500/10">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 transition-transform group-hover:scale-110">
                          <item.icon className="h-5 w-5 text-[#04150f]" />
                        </div>
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mb-1.5 font-bold text-white">{item.title}</h3>
                      <p className="text-sm leading-7 text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
