import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid gap-10 md:grid-cols-3 items-start">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Anjaneyulu <span className="text-indigo-500">Ravi</span>
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Full Stack Developer specializing in modern web applications,
              scalable architectures, and clean user experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:anjaneyuluravi@gmail.com" className="hover:text-indigo-400">anjaneyuluravi@gmail.com</a></li>
              <li>Phone: <a href="tel:+916301932501" className="hover:text-indigo-400">+91 63019 32501</a></li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Anjaneyulu Ravi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
