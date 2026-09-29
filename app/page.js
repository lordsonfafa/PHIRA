import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/contact";

export const metadata = {
  title:
    "Phira Construction & Engineering | Electrical, Fuel & Gas Engineering",
  description:
    "Leading industrial engineering firm in Ghana specializing in high-voltage electrical installations, fuel depot piping, and gas dispenser infrastructure.",
};

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
