import { MapPin, Clock, ArrowRight, Truck } from "lucide-react";

// Locations section — two differentiated venue cards with operational details
export default function Locations() {
  return (
    <section id="locations" className="bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
            Puntos de Venta
          </span>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-coffee-900 sm:text-5xl md:text-6xl">
            ¿Dónde encontrarnos?
          </h2>
        </div>

        {/* Two cards side by side */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1 — Café Librería Fórum */}
          <div className="group rounded-sm border border-coffee-100 bg-cream-100 overflow-hidden">
            {/* Image placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-coffee-600 via-coffee-500 to-leaf-700 md:h-56">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-light italic text-cream-50/40">
                  Café Librería Fórum
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-coffee-800 md:text-3xl">
                Café Librería Fórum
              </h3>
              <p className="mt-1 text-sm font-medium text-amber-600">
                Nuestro espacio fijo en la UPB
              </p>

              <p className="mt-4 text-sm leading-relaxed text-coffee-600">
                Nuestro espacio de 60 m² donde convergen el café, los libros y
                la comunidad universitaria.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <span className="text-sm text-coffee-600">
                    Bloque 11, Campus Laureles, Universidad Pontificia
                    Bolivariana, Medellín
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <div className="text-sm text-coffee-600">
                    <p>Lunes a Viernes: 7:00 am – 6:00 pm</p>
                    <p>Sábados: 9:00 am – 1:00 pm</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Universidad+Pontificia+Bolivariana+Campus+Laureles+Medellin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coffee-800 transition-colors hover:text-amber-600"
              >
                Cómo llegar
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Card 2 — La Manzana (Café Móvil) */}
          <div className="group rounded-sm border border-coffee-100 bg-cream-100 overflow-hidden">
            {/* Image placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-amber-600 via-amber-500 to-coffee-600 md:h-56">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-light italic text-cream-50/40">
                  La Manzana
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-coffee-800 md:text-3xl">
                La Manzana
              </h3>
              <p className="mt-1 text-sm font-medium text-amber-600">
                Nuestro café móvil
              </p>

              <p className="mt-4 text-sm leading-relaxed text-coffee-600">
                Donde comenzó todo. Llevamos a tu evento el mismo café con
                el que soñamos.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Truck
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <span className="text-sm text-coffee-600">
                    Eventos, ferias y campus en Medellín y el Área Metropolitana
                  </span>
                </div>
              </div>

              <a
                href="#catering"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coffee-800 transition-colors hover:text-amber-600"
              >
                Contáctanos para eventos
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
