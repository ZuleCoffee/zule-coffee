"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Nuestra Historia", href: "#about" },
  { label: "Dónde Estamos", href: "#locations" },
  { label: "Catering", href: "#catering" },
  { label: "Contacto", href: "#contact" },
];

// Sticky navigation bar with scroll blur effect and mobile hamburger menu
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-2xl font-semibold tracking-wide text-coffee-800 md:text-3xl"
          >
            Zule Coffee
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-coffee-600 transition-colors hover:text-coffee-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#locations"
              className="rounded-sm bg-coffee-800 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-coffee-700"
            >
              Visítanos
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center text-coffee-800 md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-coffee-100 bg-cream-50/98 backdrop-blur-md px-4 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-coffee-700 transition-colors hover:text-coffee-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#locations"
              onClick={closeMenu}
              className="mt-2 inline-block rounded-sm bg-coffee-800 px-5 py-2.5 text-center text-sm font-semibold text-cream-50 transition-colors hover:bg-coffee-700"
            >
              Visítanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
