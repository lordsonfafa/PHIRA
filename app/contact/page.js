// import React from "react";
// import ContactForm from "../components/form";

// const Contact = () => {
//   return (
//     <div>
//       <section className="bg-slate text-center space-y-4 text-white p-6 py-10 bg-radial-[at_50%_30%] from-[#1A2A4A] to-[#0E172A] to-80%">
//         <h3 className="text-orange text-xl pt-10">GET IN TOUCH</h3>
//         <h1 className="text-4xl font-extrabold">Let's Discuss Your Project</h1>
//       </section>
//       <div className="w-1/2 mx-auto">
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import ContactForm from "../components/form";

export const metadata = {
  title: "Contact Us | Phira Construction & Engineering",
  description:
    "Get in touch with Phira Construction & Engineering for inquiries, site assessments, and project consultations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="bg-slate text-center space-y-4 text-white p-6 py-10 bg-radial-[at_50%_30%] from-[#1A2A4A] to-[#0E172A] to-80%">
        <span className="text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
          Let's Discuss Your Project
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Have an electrical, fuel, or gas engineering inquiry? Reach out to our
          technical team today.
        </p>
      </section>

      {/* Main Content: Split Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>
              <p className="text-slate-600 text-sm">
                Feel free to contact us via phone, email, or visit our office.
              </p>

              <div className="space-y-4 pt-2">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-50 rounded-lg text-amber-600 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Physical Address
                    </h3>
                    <p className="text-slate-600 text-sm mt-0.5">
                      P.O. Box 4369, Kwashieman Bus Stop,
                      <br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-50 rounded-lg text-amber-600 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Phone Numbers
                    </h3>
                    <p className="text-slate-600 text-sm mt-0.5">
                      <a
                        href="tel:+233593253373"
                        className="hover:text-amber-600 transition-colors"
                      >
                        +233 59 325 3373
                      </a>
                      <br />
                      <a
                        href="tel:+233593661340"
                        className="hover:text-amber-600 transition-colors"
                      >
                        +233 59 366 1340
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-50 rounded-lg text-amber-600 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Email Address
                    </h3>
                    <p className="text-slate-600 text-sm mt-0.5">
                      <a
                        href="mailto:phiraengandcons@gmail.com"
                        className="hover:text-amber-600 transition-colors"
                      >
                        phiraengandcons@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-64 sm:h-72">
              <iframe
                title="Phira Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8252271816786!2d-0.26428782501463137!3d5.592813994388031!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208922c0691ab1%3A0x6b63c9b980e2270!2sKwashieman!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <ContactForm title="Send Us a Message" />
          </div>
        </div>
      </section>
    </main>
  );
}
