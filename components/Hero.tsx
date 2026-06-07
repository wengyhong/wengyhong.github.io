"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { profile, projects } from "@/lib/content";

function shuffleImages(images: string[]) {
  return [...images].sort(() => Math.random() - 0.5);
}

export function Hero() {
  const defaultImages = useMemo(
    () => Array.from(new Set(projects.map((project) => project.headerImage))),
    [],
  );
  const [backgrounds, setBackgrounds] = useState(defaultImages);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setBackgrounds(shuffleImages(defaultImages));
  }, [defaultImages]);

  useEffect(() => {
    if (backgrounds.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgrounds.length);
    }, profile.heroBackgroundIntervalSeconds * 1000);

    return () => window.clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b hairline">
      <div className="absolute inset-0">
        {backgrounds.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-42" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/86 to-ink-950/56" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-ink-950/20" />
      </div>

      <div className="section-shell relative flex min-h-[calc(100vh-4rem)] items-center py-20 lg:py-24">
        <div className="max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
          {profile.role}
        </p>
        <p className="mt-3 text-base font-semibold text-mist-50">
          {profile.name}
        </p>
        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-mist-50 sm:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-mist-300">
          {profile.intro}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-mist-50 px-6 text-sm font-semibold text-ink-950 transition hover:bg-mist-100"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border hairline px-6 text-sm font-semibold text-mist-50 transition hover:border-mist-300 hover:bg-mist-50/5"
          >
            Contact Me
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
