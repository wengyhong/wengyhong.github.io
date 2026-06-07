import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t hairline py-8">
        <div className="section-shell text-sm text-mist-500">
          Built for focused Unity engineering conversations.
        </div>
      </footer>
    </>
  );
}
