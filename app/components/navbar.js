// components/Navbar.jsx
"use client";

import { useState } from "react";
import logo from "@/public/assets/icons/logo.jpeg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar sticky top-0 z-50 bg-slate-dark px-6 lg:px-12 shadow-md">
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Phira" width={40} height={48} priority />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium ${
                  pathname === link.href
                    ? "text-orange"
                    : "text-white hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger button */}
      <div className="navbar-end lg:hidden">
        <button
          className="btn btn-ghost text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel — plain Tailwind, no daisyUI dropdown classes */}
      {open && (
        <ul className="menu absolute left-0 right-0 top-full w-full bg-slate-dark p-2 shadow-lg lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href ? "text-orange" : "text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
