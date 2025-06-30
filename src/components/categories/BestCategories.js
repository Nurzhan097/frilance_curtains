

import React from 'react'

const bestCategories = [
  {
    name: 'Fon Perde',
    description: 'Классические и элегантные шторы для любого интерьера.',
    image: '/photos/lazer2.jpg',
    href: '/categories/fon-perde',
  },
  {
    name: 'Tül Perde',
    description: 'Лёгкие и воздушные тюлевые шторы.',
    image: '/photos/tul.png',
    href: '/categories/tul-perde',
  },
  {
    name: 'Stor Perde',
    description: 'Современные рулонные шторы для практичного дизайна.',
    image: '/photos/zebra.jpg',
    href: '/categories/stor-perde',
  },
]

export default function BestCategories() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Наши лучшие категории</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {bestCategories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="group block overflow-hidden shadow-lg hover:shadow-xl transition rounded-[28px] ring-1 ring-white/30 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <div className="relative h-72 w-full">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full rounded-[28px] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-white/30 backdrop-blur-md p-4 text-gray-800">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm">{category.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}