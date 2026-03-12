import { Coffee, BookOpen } from "lucide-react";

const timelineEvents = [
  { year: "2016", label: "Legado" },
  { year: "2021", label: "Nace Zule Coffee" },
  { year: "2022", label: "Café Librería Fórum en UPB" },
  { year: "2025", label: "Premio Famiempresario Interactuar" },
];

// About section — brand story with maximum emotional weight and editorial typography
export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-18">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
            Nuestra Historia
          </span>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-coffee-900 sm:text-5xl md:text-6xl">
            Una taza con historia
          </h2>
        </div>

        {/* Two-column story layout */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left column — Story blocks */}
          <div className="space-y-8">
            {/* Block 1: The father's legacy */}
            <div className="relative pl-6 border-l-2 border-amber-500/30">
              <p className="text-base leading-relaxed text-coffee-600 md:text-lg">
               Zule Coffee nació de un sueño compartido: un café donde converjan el café colombiano de especialidad, los libros y la comunidad. Lo que comenzó como un café móvil en las calles de Medellín hoy es el Café Librería Fórum, un espacio para permitirse soñar.
              </p>
            </div>

            {/* Block 2: From mobile to literary café */}
            <div className="relative pl-6 border-l-2 border-leaf-600/30">
              <p className="text-base leading-relaxed text-coffee-600 md:text-lg">
                Lo que empezó en 2021 como un café móvil llamado &quot;La
                Manzana&quot;, recorriendo ferias y campus con una bicicleta y
                un sueño. Hoy es el{" "}
                <strong className="font-semibold text-coffee-800">
                  Café Librería Fórum
                </strong>
                , un espacio de 60 m² en el Bloque 11 de la Universidad
                Pontificia Bolivariana donde convergen el café, los libros y la
                comunidad.
              </p>
            </div>
          </div>

          {/* Right column — Visual placeholder + quote */}
          <div className="flex flex-col gap-8">
            {/* Image placeholder with gradient and icon overlay */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-coffee-700 via-coffee-600 to-coffee-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 opacity-30">
                  <Coffee size={48} className="text-cream-100" />
                  <BookOpen size={48} className="text-cream-100" />
                </div>
              </div>
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Featured quote — editorial typography */}
        <div className="mt-16 md:mt-24 py-12 md:py-16 border-y border-coffee-200">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl leading-snug font-light italic text-coffee-800 sm:text-3xl md:text-4xl lg:text-5xl">
              &ldquo;Somos parte del café colombiano que conecta personas con sus
              sueños.&rdquo;
            </p>
            <cite className="mt-6 block text-sm font-medium tracking-wide text-coffee-400 not-italic uppercase">
              Denys Zuleta — Fundadora
            </cite>
          </blockquote>
        </div>

        {/* Timeline */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className="group relative text-center"
              >
                {/* Connector line (hidden on first item on mobile) */}
                {index > 0 && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full hidden w-full h-px bg-coffee-200 sm:block" />
                )}
                <div className="font-display text-3xl font-semibold text-amber-500 md:text-4xl">
                  {event.year}
                </div>
                <p className="mt-3 text-sm text-coffee-500">
                  {event.label}
                </p>
                <div className="mt-3 h-px w-8 mx-auto bg-coffee-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
