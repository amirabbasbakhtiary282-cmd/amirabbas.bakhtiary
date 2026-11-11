import { Target, Cpu, Shield, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const goals = [
  { icon: Target, title: "معماری نرم‌افزار بهتر", desc: "یادگیری اصول طراحی تمیز و مقیاس‌پذیر برای پروژه‌های بزرگ‌تر." },
  { icon: Shield, title: "وب‌اپلیکیشن‌های قابل‌اعتماد", desc: "تمرکز روی امنیت، تست و پایداری در پروژه‌های آینده." },
  { icon: Cpu, title: "هوش مصنوعی کاربردی", desc: "ورود عملی به دنیای یادگیری ماشین و تحلیل داده." },
  { icon: Sparkles, title: "راه‌حل‌های فناورانه واقعی", desc: "ساخت محصولاتی که مشکلات واقعی آدم‌ها رو حل می‌کنن." },
];

export default function Roadmap() {
  return (
    <section className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="🎯 مسیر پیش‌رو" title="الان روی چه چیزهایی کار می‌کنم" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, i) => (
            <Reveal key={goal.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center transition-all hover:border-emerald-400/30 hover:-translate-y-2">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 ring-1 ring-emerald-400/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <goal.icon className="h-7 w-7 text-emerald-300" />
                </div>
                <h3 className="mb-2 font-bold text-white">{goal.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{goal.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-16 text-center">
          <p className="font-display text-xl font-black gradient-text sm:text-2xl">
            یاد بگیر، بساز، بهتر شو، تکرار کن 💡
          </p>
        </Reveal>
      </div>
    </section>
  );
}
