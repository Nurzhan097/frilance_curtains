'use client'

import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
}

const brands = [
  '/brands/beautiful.png',
  '/brands/brillant-perde.png',
  '/brands/tac.png',
  '/brands/vakkoo.webp',
]

export default function BrandCarousel() {
  // удваиваем массив, чтобы получился бесконечный цикл
  const repeatedBrands = [...brands, ...brands]

  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-scroll gap-12">
        {repeatedBrands.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Brand ${index}`}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}