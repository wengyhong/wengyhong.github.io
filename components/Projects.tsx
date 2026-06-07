import { projects } from "@/lib/content";
import { MotionSection } from "./MotionSection";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <MotionSection id="projects" className="py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Selected work with practical engineering impact.
          </h2>
          <p className="mt-5 text-base leading-7 text-mist-300">
            A focused set of projects showing Unity architecture, editor tooling,
            production gameplay systems, online features, backend-connected
            workflows, web integrations, and leadership across real game projects.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
