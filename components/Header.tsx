import { profile } from "@/lib/content";
import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink-950/78 backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-16 items-center justify-between gap-6"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group inline-flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-mist-50">
            {profile.name}
          </span>
          <span className="text-xs text-mist-500">{profile.role}</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mist-300 transition hover:text-mist-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
