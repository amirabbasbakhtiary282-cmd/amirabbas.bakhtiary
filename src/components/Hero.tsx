import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Rocket, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const roles = [
  "توسعه‌دهنده وب 🌐",
  "سازنده پروژه ارزان‌کالا 🛒",
  "علاقه‌مند به هوش مصنوعی 🤖",
  "برگزیده جشنواره خوارزمی 🏆",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 75;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setSub((s) => s + 1);
        setText(current.slice(0, sub + 1));
        if (sub + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setSub((s) => s - 1);
        setText(current.slice(0, sub - 1));
        if (sub - 1 <= 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words]);

  return text;
}

const floatIcons = ["⚛️", "🟨", "🟢", "🗄️", "🐙", "💠"];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20">
      {/* floating tech emoji */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatIcons.map((icon, i) => (
          <span
            key={icon}
            className="absolute animate-float-icon text-3xl opacity-40"
            style={{
              top: `${15 + i * 13}%`,
              left: i % 2 === 0 ? `${6 + i * 2}%` : undefined,
              right: i % 2 !== 0 ? `${6 + i * 2}%` : undefined,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-right"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300"
          >
            <Sparkles className="h-4 w-4" />
            به پروفایل برنامه‌نویسی من خوش اومدی ✨
          </motion.span>

          <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            سلام، من <span className="gradient-text">امیرعباس بختیاری</span> هستم
          </h1>

          <div className="mt-5 h-10 text-xl font-bold text-emerald-300 sm:text-2xl">
            <span>{typed}</span>
            <span className="animate-blink text-cyan-300">|</span>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            دانش‌آموز و توسعه‌دهنده‌ای که عاشق ساختن چیزهای واقعی با کده!
            من دنیای وب رو با <span className="font-bold text-emerald-300">جاوااسکریپت</span>،{" "}
            <span className="font-bold text-cyan-300">Node.js</span> و{" "}
            <span className="font-bold text-lime-300">پایگاه‌داده MySQL</span> کاوش می‌کنم، پروژه واقعی
            می‌سازم، در جشنواره‌های ملی شرکت می‌کنم و هر روز یک قدم به نسخه حرفه‌ای‌تر خودم نزدیک‌تر می‌شم 🚀
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://arzankala-9.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3.5 font-bold text-[#04150f] shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              مشاهده پروژه ارزان‌کالا
            </a>
            <a
              href="https://github.com/amirabbasbakhtiary282-cmd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-600/50 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10"
            >
              <GithubIcon className="h-5 w-5" />
              گیت‌هاب من
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
            {[
              ["+1", "پروژه واقعی دیپلوی‌شده"],
              ["استانی", "راه‌یابی به مرحله کشوری خوارزمی"],
              ["۲۴/۷", "یادگیری و تمرین مستمر"],
            ].map(([num, label]) => (
              <div key={label} className="text-center lg:text-right">
                <div className="font-display text-2xl font-bold text-emerald-300">{num}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar / badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, type: "spring" }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/30 animate-spin-slow" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin-slower" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-2xl animate-glow" />

          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1f1a] to-[#071019] shadow-2xl ring-4 ring-emerald-400/40 sm:h-64 sm:w-64">
            <span className="font-display text-7xl font-black gradient-text">AB</span>
          </div>

          <span className="absolute -bottom-2 right-2 flex items-center gap-1 rounded-full bg-[#071019] px-3 py-1.5 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/40">
            💻 در حال کدنویسی...
          </span>
          <span className="absolute -top-3 left-2 flex items-center gap-1 rounded-full bg-[#071019] px-3 py-1.5 text-xs font-bold text-cyan-300 ring-1 ring-cyan-400/40">
            🏆 خوارزمی ۱۴۰۳
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs">پیمایش کن</span>
        <ArrowDown className="h-5 w-5 animate-bounce text-emerald-400" />
      </motion.a>
    </section>
  );
}
