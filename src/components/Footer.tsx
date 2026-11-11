import { GithubIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-right">
        <p className="font-display text-sm font-bold text-white">
          امیرعباس بختیاری<span className="text-emerald-400">.dev</span>
        </p>
        <p className="text-xs text-slate-500">
          ساخته‌شده با ❤️ و فنجان‌های بی‌شمار چای، با React و Tailwind CSS
        </p>
        <a
          href="https://github.com/amirabbasbakhtiary282-cmd"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-emerald-300"
        >
          <GithubIcon className="h-4 w-4" />
          amirabbasbakhtiary282-cmd
        </a>
      </div>
    </footer>
  );
}
