export default function SectionHeader({ title, highlight, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-4xl font-bold">
        {title} <span className="text-brand-400">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
