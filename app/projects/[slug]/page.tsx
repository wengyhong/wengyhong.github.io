import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { projects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Senior Unity Developer Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.headerImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[620px] overflow-hidden border-b hairline">
          <div className="absolute inset-0">
            <Image
              src={project.headerImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-48"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/82 to-ink-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/18 to-transparent" />
          </div>

          <div className="section-shell relative flex min-h-[620px] flex-col justify-end py-10 sm:py-14">
            <Link
              href="/#projects"
              className="absolute top-10 text-sm font-medium text-mist-300 transition hover:text-mist-50 sm:top-14"
            >
              Back to projects
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
                  Featured Project
                </p>
                <h1 className="mt-4 text-5xl font-semibold leading-tight text-mist-50 sm:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-mist-100">
                  {project.description}
                </p>
              </div>

              <div className="rounded-lg border hairline bg-ink-950/72 p-5 backdrop-blur-md">
                <div className="grid gap-4">
                  {project.details.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-mist-100">{item.value}</p>
                    </div>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t hairline pt-5">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 items-center justify-center rounded-md border hairline px-4 text-sm font-semibold text-mist-50 transition hover:border-mist-300 hover:bg-mist-50/5"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y hairline bg-ink-900/62 py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.64fr_1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine-300">
                Overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-mist-50">
                Project details and engineering focus.
              </h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-5">
                {project.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-mist-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-mist-50">
                  Contribution Summary
                </h3>
                <p className="mt-4 rounded-lg border hairline bg-ink-850/72 p-5 text-base leading-7 text-mist-100">
                  {project.contributionSummary}
                </p>
              </div>

              <details open className="group rounded-lg border hairline bg-ink-850/72">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold text-mist-50 transition hover:bg-mist-50/[0.03]">
                  Detailed Responsibilities
                  <span className="text-sm font-medium text-brass-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="border-t hairline">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-mist-50/8 px-5 py-4 text-sm leading-6 text-mist-300 last:border-b-0"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-300/80"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <div>
                <h3 className="text-lg font-semibold text-mist-50">
                  Tech Stack
                </h3>
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
              </div>
            </div>
          </div>
        </section>

        {project.youtubeVideos.length > 0 && (
          <section className="section-shell py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
                Video
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-mist-50">
                Project videos and walkthroughs.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {project.youtubeVideos.map((video) => (
                <YoutubeEmbed key={video.id} id={video.id} title={video.title} />
              ))}
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="section-shell pb-24">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine-300">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-mist-50">
                Images and implementation snapshots.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {project.gallery.map((image) => (
                <div
                  key={`${image.src}-${image.alt}`}
                  className="relative aspect-[16/10] overflow-hidden rounded-lg border hairline bg-ink-850"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-86"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
