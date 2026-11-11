import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const links = [
  { href: "#about", label: "درباره من" },
  { href: "#skills", label: "مهارت‌ها" },
  { href: "#project", label: "پروژه برتر" },
  { href: "#achievements", label: "افتخارات" },
  { href: "#stats", label: "آمار گیت‌هاب" },
  { href: "#contact", label: "ارتباط با من" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050b14]/80 backdrop-blur-xl shadow-lg shadow-emerald-500/5 border-b border-emerald-500/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30">
            <Rocket className="h-5 w-5 text-[#04150f]" />
          </span>
          <span>
            امیرعباس<span className="gradient-text">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300 after:absolute after:-bottom-1 after:right-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://github.com/amirabbasbakhtiary282-cmd"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-400/15 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <GithubIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
            گیت‌هاب من
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-emerald-400/20 p-2 text-emerald-300 md:hidden"
          aria-label="باز کردن منو"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-emerald-500/10 bg-[#050b14]/95 px-5 pb-5 md:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/amirabbasbakhtiary282-cmd"
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-sm font-semibold text-emerald-300"
            >
              <GithubIcon className="h-4 w-4" /> گیت‌هاب من
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
