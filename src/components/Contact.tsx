import { motion } from "framer-motion";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent p-10 text-center sm:p-16">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-[90px] animate-glow" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px] animate-glow" />

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-block text-5xl"
            >
              🤝
            </motion.span>

            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              بیا یک پروژه جذاب با هم بسازیم!
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300">
              اگه ایده‌ای داری، دنبال یه هم‌تیمی برای پروژه بعدی‌ات می‌گردی، یا فقط می‌خوای بیشتر درباره‌ی
              کارهام بدونی؛ خوشحال می‌شم باهات در ارتباط باشم.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/amirabbasbakhtiary282-cmd"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 font-bold text-[#04150f] shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
              >
                <GithubIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                مشاهده پروفایل گیت‌هاب
              </a>
              <a
                href="https://arzankala-9.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-600/50 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10"
              >
                🛒 دیدن پروژه ارزان‌کالا
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
