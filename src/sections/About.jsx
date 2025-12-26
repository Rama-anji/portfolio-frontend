import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/common/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <Container>
        <SectionHeader
          title="About"
          highlight="Me"
          subtitle="A deeper look into who I am and how I work"
        />

        {/* INTRO */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
  <span className="text-slate-900">Full Stack Developer with a </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
    Product-Driven Mindset
  </span>
</h3>


              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                I’m <span className="font-semibold text-slate-900">Anjaneyulu</span>, a
                Full Stack Developer building scalable, high-performance web
                applications with a strong focus on usability and clean
                architecture.
              </p>

              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                I specialize in React, MERN Stack, FastAPI, and PHP — creating
                reliable systems, intuitive user experiences, and SEO-optimized
                digital products.
              </p>

              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                My work blends performance, maintainability, and modern UI to
                deliver long-term business value.
              </p>
            </div>
          </Reveal>

          {/* EXPERIENCE CARDS */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["3+", "Years Experience"],
                ["20+", "Projects Delivered"],
                ["100%", "SEO-Optimized Builds"],
                ["AI", "Automation & Chatbots"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="
                    rounded-xl
                    border border-indigo-200
                    bg-white
                    p-6
                    shadow-sm
                    hover:shadow-md
                    hover:border-indigo-400
                    transition
                  "
                >
                  <p className="text-4xl font-bold text-indigo-600">{value}</p>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* PROCESS */}
        <Reveal delay={0.25}>
          <div className="mt-10">
<h2 className="text-2xl text-center font-semibold">
  <span className="text-slate-900">How</span>{" "}
  <span className="text-indigo-600">I Work</span>
</h2>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Understand the Problem",
                  desc: "Analyze goals, users, and business requirements before building.",
                },
                {
                  title: "Design & Build",
                  desc: "Develop scalable architecture and intuitive interfaces.",
                },
                {
                  title: "Optimize & Deliver",
                  desc: "Ensure performance, security, and long-term maintainability.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl
                    border border-indigo-200
                    bg-white
                    p-6
                    hover:border-indigo-400
                    transition
                  "
                >
                  <h5 className="font-semibold text-slate-900">{item.title}</h5>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SKILLS */}
        <Reveal delay={0.35}>
          <div className="mt-10">
           <h4 className="text-2xl text-center font-semibold">
  <span className="text-slate-900">Core</span>{" "}
  <span className="text-indigo-600">Capabilities</span>
</h4>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "React & SPA Architecture",
                "MERN Stack",
                "FastAPI & REST APIs",
                "Node Backend",
                "PHP Backend",
                "Full Responsive",
                "AI Chatbots",
                "SEO Optimization",
                "Authentication & Security",
                "Database Design",
                "Production Deployment",
              ].map((skill) => (
                <div
                  key={skill}
                  className="
                    rounded-lg
                    border border-indigo-200
                    px-4 py-3
                    text-sm
                    text-center
                    text-slate-700
                    bg-white
                    hover:border-indigo-400
                    transition
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
