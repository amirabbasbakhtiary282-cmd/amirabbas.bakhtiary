import { Code2, Globe2, Trophy, Brain, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Code2,
    color: "from-emerald-400 to-teal-500",
    title: "توسعه وب",
    desc: "علاقه‌مند به ساخت رابط‌های کاربری مدرن و سرویس‌های بک‌اند قدرتمند، از صفر تا دیپلوی نهایی.",
  },
  {
    icon: Globe2,
    color: "from-cyan-400 to-blue-500",
    title: "پروژه واقعی ارزان‌کالا",
    desc: "طراحی و پیاده‌سازی یک فروشگاه اینترنتی کامل با دیتابیس، سبد خرید و استقرار آنلاین.",
  },
  {
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    title: "جشنواره خوارزمی",
    desc: "راه‌یابی به مرحله کشوری جشنواره نوجوان خوارزمی پس از کسب رتبه برتر استانی.",
  },
  {
    icon: Brain,
    color: "from-fuchsia-400 to-purple-500",
    title: "علاقه به هوش مصنوعی",
    desc: "کنجکاو در دنیای یادگیری ماشین و استفاده از داده برای حل مسئله‌های واقعی.",
  },
  {
    icon: BookOpen,
    color: "from-lime-400 to-green-500",
    title: "یادگیری مستمر",
    desc: "هر روز یک مفهوم جدید، هر هفته یک پروژه کوچک؛ یادگیری برای من یک سبک زندگیه.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="🙋‍♂️ درباره من"
          title="یک برنامه‌نویس کنجکاو، یک سازنده مُصر"
          description="من دانش‌آموزی هستم که به ساختن چیزهای کاربردی با کد علاقه دارم. ترکیب یادگیری، آزمایش‌کردن و تبدیل ایده‌ها به پروژه‌های واقعی، مسیر منه."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="tilt-card group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <card.icon className="h-6 w-6 text-[#04150f]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{card.desc}</p>
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20" />
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.5} className="h-full">
            <div className="flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 text-center">
              <p className="font-display text-4xl font-black gradient-text">؟؟؟</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                فصل بعدی داستانِ کدنویسی من رو داریم با هم می‌نویسیم؛ شاید پروژه بعدی، ایده‌ی تو باشه! 😉
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
