import { useState } from "react";
import { projects } from "../data/projects";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/common/Reveal";

export default function Projects() {
  const ITEMS_PER_LOAD = 3;
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <Container>
        <SectionHeader
          title="Featured"
          highlight="Projects"
          subtitle="Real-world applications built with modern technologies"
        />

        {/* PROJECT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between h-[230px]">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white py-2 text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < projects.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
