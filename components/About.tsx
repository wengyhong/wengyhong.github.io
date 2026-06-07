import Image from "next/image";
import { profile, strengths } from "@/lib/content";
import { MotionSection } from "./MotionSection";

export function About() {
  return (
    <MotionSection id="about" className="border-y hairline bg-ink-900/62 py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1fr]">
        <div>
          <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-lg border hairline bg-ink-850">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-pine-300">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Production Unity engineering across games, tools, and teams.
          </h2>
        </div>
        <div className="space-y-7">
          <p className="text-lg leading-8 text-mist-300">{profile.summary}</p>
          <p className="text-base leading-7 text-mist-300">
            {profile.backendFocus}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-md border hairline bg-ink-850 px-4 py-3 text-sm text-mist-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
