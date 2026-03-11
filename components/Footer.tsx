import { Instagram, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Nuestra Historia", href: "#about" },
  { label: "Dónde Estamos", href: "#locations" },
  { label: "Catering", href: "#catering" },
];

// Footer — brand close with contact info, quick links, and social
export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee-800 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <a
              href="#home"
              className="font-display text-3xl font-semibold tracking-wide text-cream-50"
            >
              Zule Coffee
            </a>
            <p className="mt-3 font-display text-base italic text-coffee-300">
              Café · Deporte · Libros · Aventura
            </p>
            <p className="mt-4 text-sm leading-relaxed text-coffee-400">
              Café de especialidad colombiano, repostería artesanal y un espacio
              para soñar en el corazón de la UPB, Medellín.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
              Enlaces
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-coffee-300 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://instagram.com/zulecoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-coffee-300 transition-colors hover:text-cream-50"
                >
                  <Instagram size={14} />
                  @zulecoffee
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@zulecoffee.com"
                  className="inline-flex items-center gap-2 text-sm text-coffee-300 transition-colors hover:text-cream-50"
                >
                  <Mail size={14} />
                  contacto@zulecoffee.com
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-2 text-sm text-coffee-300">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    Bloque 11, Campus Laureles,
                    <br />
                    UPB, Medellín
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-coffee-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-coffee-500">
              &copy; 2025 Zule Coffee — Hecho con ❤️ en Medellín
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs text-coffee-500 transition-colors hover:text-cream-50"
            >
              Volver arriba
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
