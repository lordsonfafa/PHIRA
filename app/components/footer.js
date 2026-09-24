// components/Footer.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

const specialties = [
  "Electrical Engineering",
  "Fuel Line Installation",
  "Gas Systems & Dispensers",
  "Pump Maintenance & Repair",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to Mailchimp/Brevo/your API route
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="bg-slate-dark pt-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/assets/icons/logo.jpeg"
              alt="Phira"
              width={140}
              height={48}
            />
            <p className="mt-3 text-sm text-mid-gray">
              Electrical, fuel &amp; gas systems engineering — installed to
              last, maintained to perform.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-medium tracking-wide text-orange">
              CONTACT
            </h4>
            <ul className="space-y-2 text-sm text-mid-gray">
              <li>Phiraengandcons@gmail.com</li>
              <li>+233 59 325 3373</li>
              <li>+233 59 366 1340</li>
              <li>P.O. Box 4369, Nsakina, Amasaman</li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="mb-3 text-xs font-medium tracking-wide text-orange">
              OUR SPECIALTIES
            </h4>
            <ul className="space-y-2 text-sm text-mid-gray">
              {specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Email signup */}
          <div>
            <h4 className="mb-3 text-xs font-medium tracking-wide text-orange">
              STAY UPDATED
            </h4>
            {submitted ? (
              <p className="text-sm text-white">Thanks — you're on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-mid-gray focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-orange px-4 py-2 text-sm font-medium text-slate-dark transition hover:bg-slate hover:text-orange"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-mid-gray/20" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-mid-gray md:flex-row">
          <p>
            © {new Date().getFullYear()} Phira Construction &amp; Engineering.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* swap these for real social links when you have them */}
            <a href="#" className="hover:text-orange">
              Facebook
            </a>
            <a href="#" className="hover:text-orange">
              Instagram
            </a>
            <a href="#" className="hover:text-orange">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
