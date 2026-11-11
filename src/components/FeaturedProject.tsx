import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Server, Database, LayoutGrid, Boxes } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: LayoutGrid, text: "رابط کاربری کاملاً ریسپانسیو برای موبایل و دسکتاپ" },
  { icon: Boxes, text: "دسته‌بندی محصولات و مرور آسان کالاها" },
  { icon: ShoppingCart, text: "سبد خرید کاربردی با مدیریت کامل اقلام" },
  { icon: Server, text: "سرویس‌های بک‌اند ساخته‌شده با Node.js و Express.js" },
  { icon: Database, text: "اتصال کامل به پایگاه‌داده MySQL" },
  { icon: ExternalLink, text: "طراحی مبتنی بر REST API و استقرار آنلاین زنده" },
];

export default function FeaturedProject() {
  return (
    <section id="project" className="relative px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="🚀 پروژه برتر"
          title="ارزان‌کالا | یک فروشگاه اینترنتی واقعی"
          description="پروژه‌ای که از ایده تا استقرار آنلاین، با دست‌های خودم ساخته شد تا توسعه وب واقعی، مدیریت دیتابیس و تجربه کاربری رو عملی تمرین کنم."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 opacity-50 blur-2xl transition-opacity group-hover:opacity-80" />
              <motion.div
                initial={{ opacity: 0, rotateY: -15 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-2xl border border-emerald-400/20 shadow-2xl"
              >
                <img
                  src="/images/arzankala-mockup.png"
                  alt="نمای پروژه ارزان‌کالا"
                  className="w-full scale-105 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-[#050b14]/80 px-3 py-1.5 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/40">
                  ⬤ آنلاین و فعال
                </span>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h3 className="mb-4 font-display text-2xl font-black text-white sm:text-3xl">
                🛒 ArzanKala — فروشگاه اینترنتی
              </h3>
              <p className="mb-7 leading-8 text-slate-300">
                پروژه‌ای برای تمرین توسعه وب دنیای واقعی، اتصال فرانت‌اند به بک‌اند و مدیریت پایگاه‌داده. از
                طراحی رابط کاربری گرفته تا دیپلوی نهایی، همه مراحل رو خودم پیش بردم.
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {features.map((f, i) => (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
                  >
                    <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-sm leading-6 text-slate-300">{f.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://arzankala-9.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3.5 font-bold text-[#04150f] shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5" />
                  مشاهده نسخه زنده
                </a>
                <a
                  href="https://github.com/amirabbasbakhtiary282-cmd"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-600/50 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10"
                >
                  <GithubIcon className="h-5 w-5" />
                  مشاهده کد منبع
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
