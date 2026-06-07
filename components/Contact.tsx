import { contact, profile } from "@/lib/content";
import { MotionSection } from "./MotionSection";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${contact.email}` },
    { label: "LinkedIn", href: contact.linkedin },
    { label: "GitHub", href: contact.github },
  ];

  return (
    <MotionSection id="contact" className="py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brass-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-mist-50 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-5 text-base leading-7 text-mist-300">
            Feel free to drop me an email or message me on LinkedIn if you&apos;d
            like to connect!
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="rounded-lg border hairline bg-ink-850/72 p-6">
            <p className="text-sm text-mist-500">{contact.location}</p>
            <p className="mt-2 text-xl font-semibold text-mist-50">
              {profile.name} - {profile.role}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-flex text-sm text-brass-300 transition hover:text-brass-300/80"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target={index === 0 ? undefined : "_blank"}
                rel={index === 0 ? undefined : "noreferrer"}
                className={
                  index === 0
                    ? "inline-flex min-h-12 items-center justify-center rounded-md bg-mist-50 px-6 text-sm font-semibold text-ink-950 transition hover:bg-mist-100"
                    : "inline-flex min-h-12 items-center justify-center rounded-md border hairline px-6 text-sm font-semibold text-mist-50 transition hover:border-mist-300 hover:bg-mist-50/5"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
