import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GH_USER = "amirabbasbakhtiary282-cmd";

export default function Stats() {
  return (
    <section id="stats" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="📊 آمار زنده گیت‌هاب"
          title="فعالیت‌های کدنویسی من، لحظه به لحظه"
          description="این کارت‌ها مستقیم از گیت‌هاب من خونده می‌شن و هر بار که کد می‌زنم، به‌روزرسانی می‌شن."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github&bg_color=00000000`}
                alt="آمار گیت‌هاب"
                className="mx-auto w-full max-w-md"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
                alt="زبان‌های پرکاربرد"
                className="mx-auto w-full max-w-md"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <img
                src={`https://streak-stats.demolab.com?user=${GH_USER}&theme=tokyonight&hide_border=true&background=00000000`}
                alt="روزهای متوالی فعالیت"
                className="mx-auto w-full max-w-2xl"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-6 text-center text-xs text-slate-500">
          💡 در صورت عدم نمایش موقت تصاویر، سرویس آماری گیت‌هاب ممکنه با تاخیر بارگذاری بشه — کافیه صفحه رو
          رفرش کنی.
        </Reveal>
      </div>
    </section>
  );
}
