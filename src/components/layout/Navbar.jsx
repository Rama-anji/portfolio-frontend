import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-brand-600"
        >
          Anjaneyulu<span className="text-brand-400">.dev</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-700 hover:text-brand-500 transition"
            >
              {item}
            </a>
          ))}

          {/* RIGHT CTA */}
          <Button href="#contact" className="ml-4">
            Hire Me
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white border-t border-brand-100 space-y-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-brand-500 transition"
            >
              {item}
            </a>
          ))}

          <Button href="#contact" className="w-full">
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}
