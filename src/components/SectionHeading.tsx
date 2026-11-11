import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-bold tracking-wide text-emerald-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-slate-400 leading-7">{description}</p>}
    </Reveal>
  );
}
