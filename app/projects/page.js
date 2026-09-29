import React from "react";
import ContactForm from "../components/form";
import {
  BuildingIcon,
  GasIcon,
  ShieldIcon,
  ZapIcon,
} from "../components/Icons";

export const metadata = {
  title: "Projects | Phira Construction & Engineering",
  description:
    "Explore our featured engineering and construction project showcases.",
};

const capabilities = [
  {
    title: "Industrial Electrical Systems",
    description:
      "High-voltage distribution, control panel installations, and industrial plant wiring.",
    icon: <ZapIcon />,
  },
  {
    title: "Fuel & Gas Engineering",
    description:
      "Precision fuel depot piping, gas line pressure systems, and automated dispenser setups.",
    icon: <GasIcon />,
  },
  {
    title: "Civil & Infrastructure Works",
    description:
      "Structural concrete foundations, site excavation, and heavy equipment support.",
    icon: <BuildingIcon />,
  },
  {
    title: "System Maintenance & Safety",
    description:
      "Routine industrial testing, compliance audits, and emergency system repairs.",
    icon: <ShieldIcon />,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Work & On-Site Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world execution from our industrial electrical, fuel, and gas
            engineering sites across the region.
          </p>
        </div>

        {/* SECTION 1: Featured Video Highlights (2 Columns) */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-3 w-3 rounded-full bg-amber-500 inline-block"></span>
            <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">
              Featured Site Footage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative aspect-video bg-slate-900">
                <video
                  controls
                  poster="/assets/video1-poster.jpg" // Optional thumbnail image
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 rounded-full mb-3">
                  Industrial Installation
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  On-Site Power & Control Setup
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  A look at our team executing industrial electrical wiring,
                  system integration, and safety checks on-site.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative aspect-video bg-slate-900">
                <video
                  controls
                  poster="/assets/video2-poster.jpg" // Optional thumbnail image
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 rounded-full mb-3">
                  Fuel & Gas Systems
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Fuel Station Infrastructure Works
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Engineering and piping alignment for commercial fuel dispenser
                  infrastructure and underground tank connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Key Capabilities Overview */}
        <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Engineering Capabilities
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              Every project we undertake is backed by certified engineering
              standards, technical precision, and experienced personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/60 p-5 rounded-xl hover:border-amber-500/50 transition-colors duration-200"
              >
                <div className="p-2 bg-slate-900/80 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-white text-base">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Bottom Call to Action / Form */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 text-center my-12">
          <h3 className="text-2xl font-bold">
            Ready to Start Your Engineering Project?
          </h3>
          <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">
            Get in touch with our technical team today for a tailored quote and
            site assessment.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-slate hover:text-white"
          >
            Contact Our Team
          </a>
        </section>
      </div>
    </main>
  );
}
