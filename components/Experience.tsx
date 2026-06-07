import { timeline } from "@/lib/content";
import { MotionSection } from "./MotionSection";

export function Experience() {
  return (
    <MotionSection id="experience" className="border-y hairline bg-ink-900/62 py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine-300">
            Experience Timeline
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Career progression built around reliable delivery.
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-mist-50/12">
          {timeline.map((item) => (
            <article key={`${item.role}-${item.years}`} className="relative pl-10">
              <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-brass-300/60 bg-ink-900 shadow-[0_0_0_6px_rgba(13,15,18,1)]" />
              <div className="rounded-lg border hairline bg-ink-850/72 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-mist-50">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-mist-500">{item.company}</p>
                  </div>
                  <p className="text-sm font-medium text-brass-300">{item.years}</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-mist-300">
                  {item.responsibilities}
                </p>
                <p className="mt-4 text-sm leading-6 text-mist-100">
                  {item.achievements}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
