import { useState } from "react";
import { skills } from "../data/skills";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/common/Reveal";

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "AI"];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200"
    >
      <Container>
        <SectionHeader
          title="My"
          highlight="Skills"
          subtitle="Technologies I use to build scalable, modern, and high-performance applications"
        />

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.04}>
              <article
                className="
                  bg-white border border-gray-200 rounded-xl p-5
                  hover:shadow-lg transition
                  flex flex-col
                  h-[170px] md:h-[170px] lg:h-[160px]
                "
              >
                {/* HEADER */}
                <header className="flex items-center gap-3">
                  <skill.icon
                    className="text-3xl text-indigo-600 shrink-0"
                    aria-hidden="true"
                  />
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                    {skill.name}
                  </h4>
                </header>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed
                    line-clamp-2
                  "
                >
                  {skill.desc}
                </p>

                {/* PROGRESS (ALWAYS VISIBLE) */}
                <div className="mt-auto pt-3">
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                      aria-label={`${skill.level}% proficiency in ${skill.name}`}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {skill.level}% proficiency
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
