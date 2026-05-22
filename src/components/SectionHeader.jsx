export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${light ? 'text-cyan-200' : 'text-electric'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-4 text-base leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
    </div>
  );
}
