import { credentials } from "@/lib/content";
import { MotionSection } from "./MotionSection";

export function Credentials() {
  return (
    <MotionSection className="py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
            Education & Awards
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border hairline bg-ink-850/72 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
              Education
            </p>
            <h3 className="mt-4 text-xl font-semibold text-mist-50">
              {credentials.education.title}
            </h3>
            <p className="mt-2 text-sm text-mist-300">
              {credentials.education.school}
            </p>
            <p className="mt-4 text-sm font-medium text-brass-300">
              {credentials.education.years}
            </p>
          </article>

          <article className="rounded-lg border hairline bg-ink-850/72 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
              Honors & Awards
            </p>
            {credentials.awards.map((award) => (
              <a
                key={award.href}
                href={award.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-xl font-semibold leading-7 text-mist-50 transition hover:text-brass-300"
              >
                {award.title}
              </a>
            ))}
          </article>
        </div>
      </div>
    </MotionSection>
  );
}
