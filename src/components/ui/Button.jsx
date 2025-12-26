export default function Button({
  children,
  href = "#",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl
      bg-brand-500 px-6 py-3 text-sm font-semibold text-white
      shadow-lg shadow-brand-500/30
      hover:bg-brand-600 transition ${className}`}
    >
      {children}
    </a>
  );
}
