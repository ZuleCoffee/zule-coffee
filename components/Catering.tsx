"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

const eventTypes = [
  { value: "", label: "Selecciona el tipo de evento" },
  { value: "corporate", label: "Corporativo" },
  { value: "university", label: "Universitario" },
  { value: "social", label: "Social" },
  { value: "other", label: "Otro" },
];

// Catering section — contact form with visual success confirmation
export default function Catering() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="catering" className="bg-cream-100 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left column — Copy */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Servicios
            </span>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-coffee-900 sm:text-5xl">
              Llevamos Zule Coffee a tu evento
            </h2>
            <p className="mt-6 text-base leading-relaxed text-coffee-600 md:text-lg">
              Ya sea un coffee break corporativo, una feria universitaria o una
              celebración especial, llevamos nuestro café de especialidad y
              repostería artesanal directamente a tu evento.
            </p>
            <p className="mt-4 text-base leading-relaxed text-coffee-600 md:text-lg">
              Nuestro equipo se encarga de todo: desde la estación de café con
              barista hasta la mesa de repostería. Cuéntanos tu idea y te
              armamos una propuesta a la medida.
            </p>

            {/* Decorative placeholder */}
            <div className="mt-8 hidden aspect-[3/2] overflow-hidden rounded-sm bg-gradient-to-br from-amber-500 via-coffee-600 to-coffee-800 md:block">
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-xl font-light italic text-cream-50/30">
                  Servicio & Eventos
                </span>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <div>
            {isSubmitted ? (
              /* Success message */
              <div className="flex h-full flex-col items-center justify-center rounded-sm border border-leaf-600/20 bg-cream-50 p-8 text-center md:p-12">
                <CheckCircle size={48} className="text-leaf-600" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-coffee-800">
                  ¡Mensaje recibido!
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-coffee-500">
                  Gracias por tu interés en Zule Coffee. Te contactaremos pronto
                  para armar la propuesta perfecta para tu evento.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-medium text-amber-600 underline underline-offset-4 transition-colors hover:text-amber-500"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              /* Contact form */
              <form
                onSubmit={handleSubmit}
                className="rounded-sm border border-coffee-100 bg-cream-50 p-6 md:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-coffee-800">
                  Solicitar cotización
                </h3>
                <p className="mt-1 text-sm text-coffee-400">
                  Completa el formulario y te contactamos.
                </p>

                <div className="mt-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-coffee-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-sm border border-coffee-200 bg-cream-50 px-4 py-2.5 text-sm text-coffee-800 placeholder:text-coffee-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-coffee-700"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-sm border border-coffee-200 bg-cream-50 px-4 py-2.5 text-sm text-coffee-800 placeholder:text-coffee-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="tu@correo.com"
                    />
                  </div>

                  {/* Event type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-coffee-700"
                    >
                      Tipo de evento
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      className="mt-1.5 w-full rounded-sm border border-coffee-200 bg-cream-50 px-4 py-2.5 text-sm text-coffee-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {eventTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Number of people */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-coffee-700"
                    >
                      Número de personas
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      required
                      className="mt-1.5 w-full rounded-sm border border-coffee-200 bg-cream-50 px-4 py-2.5 text-sm text-coffee-800 placeholder:text-coffee-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="Número estimado de asistentes"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-coffee-700"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1.5 w-full resize-none rounded-sm border border-coffee-200 bg-cream-50 px-4 py-2.5 text-sm text-coffee-800 placeholder:text-coffee-300 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      placeholder="Cuéntanos sobre tu evento, fecha, lugar y cualquier detalle que nos ayude a preparar tu propuesta..."
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-coffee-800 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors duration-300 hover:bg-coffee-600 cursor-pointer"
                >
                  Solicitar cotización
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
