// app/about/page.js
import Image from "next/image";

export const metadata = {
  title: "About | Phira Construction & Engineering",
};

const values = [
  {
    title: "Safety First",
    desc: "Zero-compromise safety protocols on every site, every phase.",
  },
  {
    title: "Structural Integrity",
    desc: "Engineering that meets and exceeds international code standards.",
  },
  {
    title: "Transparency",
    desc: "Clear timelines, honest budgets, and open client communication.",
  },
  {
    title: "Local Expertise",
    desc: "Deep knowledge of Ghana's terrain, climate, and regulatory landscape.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- PAGE HEADER ---------- */}
      <div className="bg-radial-[at_50%_30%] from-slate to-slate-dark to-80% px-6 py-24 text-center">
        <div className="mb-4 text-sm font-medium tracking-widest text-orange">
          ABOUT PHIRA
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl">
          Building Ghana&apos;s Infrastructure Since 2008
        </h1>
      </div>

      {/* ---------- OUR STORY (asymmetric overlap) ---------- */}
      <section className="px-6 py-24 lg:py-36">
        <div className="relative mx-auto max-w-[1000px]">
          {/* Background image */}
          <div className="relative h-[460px] w-full max-w-[700px] overflow-hidden rounded-lg border border-white bg-linear-135 from-[#22365c] to-[#0E172A]">
            <Image
              src="/assets/about.png"
              alt="Phira project site"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping card */}
          <div className="relative z-10 mx-auto -mt-52 max-w-[460px] rounded-xl bg-white p-10 shadow-xl md:ml-auto md:mr-10 md:mt-[-200px]">
            <h2 className="mb-4 text-3xl font-bold text-slate">Our Story</h2>
            <p className="text-sm leading-relaxed text-charcoal">
              Phira Construction &amp; Engineering was founded to bring
              dependable electrical, fuel, and gas systems expertise to
              Ghana&apos;s growing industrial and commercial sector.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal">
              From gas dispenser installations to full pump maintenance
              contracts, we combine technical precision with responsive,
              reliable service — always with safety at the core.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CORE VALUES ---------- */}
      <section className="bg-off-white px-6 py-24 text-center">
        <h2 className="mb-10 text-3xl font-bold text-slate">Our Core Values</h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg bg-white p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-orange" />
              <h4 className="mb-2 text-base font-bold text-slate">{v.title}</h4>
              <p className="text-sm leading-relaxed text-charcoal">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LEADERSHIP ---------- */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[780px]">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate">
            Leadership
          </h2>

          {/* CEO */}
          <div className="mb-14 flex flex-col items-center gap-9 md:flex-row md:items-start">
            <div className="h-40 w-40 shrink-0 rounded-full bg-linear-135 from-[#22365c] to-[#0E172A]">
              <Image
                src="/assets/round1.jpg"
                alt="Brakye Theophilus Yeboah Brakye"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate">
                Brakye Theophilus Yeboah
              </h3>
              <div className="mb-3.5 text-sm font-medium text-orange">
                CEO &amp; Founder
              </div>
              <p className="text-sm leading-relaxed text-charcoal">
                Brakye Theophilus Yeboah founded Phira Construction &amp;
                Engineering on a foundation of hands-on technical expertise and
                international training. He holds a Bachelor&apos;s degree in
                Mechanical Engineering from Belgorod State Technological
                University, Russia, along with certifications in Thermodynamics
                from the University of Michigan, Construction Project Management
                from Columbia University, and Engineering Risk Management from
                The Open University, UK.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                He is currently pursuing an MSc in Engineering and Management at
                Ghana Communication Technology University — deepening the
                technical and strategic foundation that shapes Phira&apos;s
                practical, results-driven approach to every project.
              </p>
            </div>
          </div>

          {/* Team group photos */}
          <div className="mt-16">
            <h3 className="mb-7 text-center text-xl font-bold text-slate">
              Our Team
            </h3>
            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team1.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team3.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team8.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team4.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team5.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div className="relative aspect-4/3">
                <Image
                  src="/assets/team6.jpeg"
                  alt="The Phira team on site"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
