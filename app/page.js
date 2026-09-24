import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
