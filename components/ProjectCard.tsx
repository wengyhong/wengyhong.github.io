import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-lg border hairline bg-ink-850/72 transition duration-300 hover:border-mist-300/30 hover:bg-ink-800/80"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-800">
        <Image
          src={project.thumbnail}
          alt={`${project.name} thumbnail`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-78 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/62 to-transparent" />
      </div>
      <article className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-mist-50">{project.name}</h3>
          <span className="mt-1 text-sm text-brass-300 transition group-hover:text-brass-300">
            View
          </span>
        </div>
        <p className="mt-4 min-h-24 text-sm leading-6 text-mist-300">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-mist-50/10 bg-mist-50/[0.03] px-3 py-1 text-xs text-mist-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 space-y-4 border-t hairline pt-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
              Key Challenge
            </p>
            <p className="mt-2 text-sm leading-6 text-mist-300">
              {project.challenge}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
              Outcome
            </p>
            <p className="mt-2 text-sm leading-6 text-mist-300">
              {project.outcome}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
