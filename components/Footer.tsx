import { Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
	{ label: 'Nuestra Historia', href: '#about' },
	{ label: 'Menú', href: '#menu' },
	{ label: 'Dónde Estamos', href: '#locations' },
	{ label: 'Nuestro propósito', href: '#purpose' },
	{ label: 'Servicios', href: '#catering' },
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
            <p className="mt-3 font-display text-base italic text-coffee-200">
              Café · Deporte · Libros · Aventura
            </p>
            <p className="mt-4 text-sm leading-relaxed text-coffee-300">
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.25.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z" fill="currentColor"/>
                  </svg>
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
            <p className="text-xs text-coffee-400">
              &copy; 2025 Zule Coffee
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs text-coffee-400 transition-colors hover:text-cream-50"
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
