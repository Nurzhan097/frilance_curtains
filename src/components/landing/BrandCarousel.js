'use client'

import Image from 'next/image'

const brands = [
  '/brands/beautiful.png',
  '/brands/brillant-perde.png',
  '/brands/tac.png',
  '/brands/vakkoo.webp',
]

export default function BrandCarousel() {
  const repeatedBrands = [...brands, ...brands] // удваиваем для бесшовной прокрутки

  return (
    <div className="overflow-hidden  w-full py-4">
      <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused] w-max">
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