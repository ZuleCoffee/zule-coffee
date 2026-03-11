import { Sprout, Heart, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "Origen local",
    description:
      "Café colombiano de productores seleccionados, tostado en alianza con microtostadora antioqueña. Cada taza cuenta la historia de nuestro campo.",
  },
  {
    icon: Heart,
    title: "Inclusión",
    description:
      "7 empleos directos para jóvenes, adultos mayores de 45 años y comunidad LGTBIQM+. Creemos que el café sabe mejor cuando se comparte con equidad.",
  },
  {
    icon: BookOpen,
    title: "Cultura",
    description:
      "Un espacio para soñar, leer, conectar y hacer comunidad en la UPB. El café y los libros siempre han sido compañeros inseparables.",
  },
];

// Purpose section — social impact with dark background for visual contrast
export default function Purpose() {
  return (
    <section id="purpose" className="bg-coffee-900 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
            Nuestro Propósito
          </span>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-cream-50 sm:text-5xl md:text-6xl">
            Más que café —<br className="hidden sm:block" /> un proyecto con
            alma
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center md:text-left">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-amber-500/10 md:mx-0">
                  <Icon size={24} className="text-amber-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-cream-50">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-coffee-300">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
