import { Award } from "lucide-react";

// Hero section — first impression, brand statement, and primary CTAs
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-cream-50"
    >
      {/* Background gradient placeholder simulating hero photography */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-800 via-coffee-700 to-coffee-900" />
        {/* Decorative warm overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-transparent to-coffee-800/40" />
        {/* Subtle texture pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #C8872B 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] md:min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-8 pb-8 md:pt-0">
          {/* Award badge */}
          <div className="mb-6 md:mb-4 inline-flex items-center gap-2 rounded-sm border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur-sm">
            <Award size={16} className="text-amber-400" />
            <span className="text-xs font-medium tracking-wide text-amber-400 uppercase">
              Premio Famiempresario Interactuar 2025
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl leading-tight font-light tracking-tight text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl">
            Un café para
            <br />
            permitirte{" "}
            <span className="italic text-amber-400">soñar.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 md:mt-4 max-w-xl text-base leading-relaxed text-coffee-200 sm:text-xl">
            Café de especialidad, repostería artesanal y cultura en el
            corazón de la UPB, Medellín.
          </p>

          {/* CTAs */}
          <div className="mt-8 md:mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-sm bg-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-coffee-900 uppercase transition-colors hover:bg-amber-400"
            >
              Ver Menú
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-sm border border-cream-50/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream-50 uppercase transition-colors hover:bg-cream-50/10"
            >
              Nuestra historia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-coffee-300 uppercase">
            Descubre
          </span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-coffee-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
