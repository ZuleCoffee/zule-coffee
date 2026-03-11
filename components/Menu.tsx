"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    label: "Café de Especialidad",
    icon: "☕",
    items: [
      {
        name: "Espresso Clásico",
        description: "Shot doble de café de origen colombiano, tostado artesanal",
        price: "Desde $4.500 COP",
      },
      {
        name: "Americano",
        description: "Espresso con agua caliente, cuerpo suave y aromático",
        price: "Desde $5.000 COP",
      },
      {
        name: "Cappuccino",
        description: "Espresso, leche vaporizada y espuma cremosa",
        price: "Desde $6.500 COP",
      },
      {
        name: "Latte de la Casa",
        description: "Nuestra receta especial con leche texturizada y un toque de canela",
        price: "Desde $7.000 COP",
      },
      {
        name: "V60 Filtrado",
        description: "Preparación manual pour-over que resalta las notas del origen",
        price: "Desde $7.500 COP",
      },
      {
        name: "Cold Brew",
        description: "Café extraído en frío por 12 horas, suave y refrescante",
        price: "Desde $8.000 COP",
      },
      {
        name: "Café de Origen del Mes",
        description: "Rotación mensual de microlotes colombianos seleccionados",
        price: "Desde $8.500 COP",
      },
    ],
  },
  {
    id: "bakery",
    label: "Repostería Artesanal",
    icon: "🥐",
    items: [
      {
        name: "Pan de Yuca",
        description: "Receta familiar, crujiente por fuera y suave por dentro",
        price: "Desde $3.000 COP",
      },
      {
        name: "Torta de Zanahoria",
        description: "Receta de la abuela de Denys, con frosting de queso crema",
        price: "Desde $7.500 COP",
      },
      {
        name: "Brownies Artesanales",
        description: "Chocolate intenso, textura húmeda y nueces tostadas",
        price: "Desde $5.500 COP",
      },
      {
        name: "Galletas de Avena y Canela",
        description: "Horneadas cada mañana, perfectas con tu café filtrado",
        price: "Desde $3.500 COP",
      },
      {
        name: "Croissant de Mantequilla",
        description: "Hojaldre artesanal, dorado y lleno de capas",
        price: "Desde $5.000 COP",
      },
      {
        name: "Postre del Día",
        description: "Creación diaria de nuestra cocina — pregunta por la sorpresa",
        price: "Precio variable",
      },
    ],
  },
  {
    id: "catering",
    label: "Catering & Eventos",
    icon: "🎉",
    items: [
      {
        name: "Estación de Café para Eventos",
        description: "Barra completa con barista, café de especialidad y bebidas para tu evento",
      },
      {
        name: "Mesa de Repostería",
        description: "Selección de productos artesanales servidos para tu reunión o celebración",
      },
      {
        name: "Paquete Corporativo",
        description: "Coffee break para empresas con café, repostería y opciones personalizadas",
      },
      {
        name: "Evento Universitario",
        description: "Servicio especial para actividades académicas, ferias y eventos en campus",
      },
    ],
  },
];

// Menu section — tabbed categories with artisanal coffee, bakery, and catering items
export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("coffee");

  const activeCategory = menuCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="menu" className="bg-cream-100 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
            Nuestro Menú
          </span>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-coffee-900 sm:text-5xl md:text-6xl">
            Lo que preparamos con amor
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 md:mb-14">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-all ${
                activeTab === category.id
                  ? "bg-coffee-800 text-cream-50 shadow-sm"
                  : "bg-cream-50 text-coffee-600 hover:bg-cream-200"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        {activeCategory && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="group rounded-sm border border-coffee-100 bg-cream-50 p-6 transition-all hover:border-amber-500/30 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-coffee-800">
                    {item.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-coffee-500">
                  {item.description}
                </p>
                {item.price && (
                  <p className="mt-4 text-sm font-semibold text-amber-600">
                    {item.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <p className="mt-10 text-center text-sm italic text-coffee-400">
          Menú sujeto a disponibilidad. Pregunta por las preparaciones del día.
        </p>
      </div>
    </section>
  );
}
