'use client'
import { useState, useEffect, useRef } from 'react'


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: '/photos/fon.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'Экологичная бутылка из керамики с пробковой крышкой.',
    galleryImgSrc: ['/photos/fon.png', '/photos/zebra.jpg', '/photos/lazer1.jpg'],
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/photos/lazer1.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Изолированный стакан для путешествий с герметичной крышкой.',
    galleryImgSrc: ['/photos/lazer1.jpg', '/photos/fon.png', '/photos/zebra.jpg'],
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/photos/stor.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description: 'Запасные листы для блокнота с фокусом на продуктивность.',
    galleryImgSrc: ['/photos/stor.png', '/photos/lazer2.jpg', '/photos/fon.png'],
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/photos/tul.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description: 'Механический карандаш из стали с точным механизмом подачи грифеля.',
    galleryImgSrc: ['/photos/tul.png', '/photos/fon.png', '/photos/lazer1.jpg'],
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: '/photos/zebra.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'Экологичная бутылка из керамики с пробковой крышкой.',
    galleryImgSrc: ['/photos/zebra.jpg', '/photos/fon.png', '/photos/lazer2.jpg'],
  },
  // {
  //   id: 26,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: '/photos/lazer1.jpg',
  //   imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/photos/fon.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Изолированный стакан для путешествий с герметичной крышкой.',
    galleryImgSrc: ['/photos/fon.png', '/photos/lazer1.jpg', '/photos/zebra.jpg'],
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/photos/lazer2.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description: 'Запасные листы для блокнота с фокусом на продуктивность.',
    galleryImgSrc: ['/photos/lazer2.jpg', '/photos/stor.png', '/photos/fon.png'],
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/photos/tul.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description: 'Механический карандаш из стали с точным механизмом подачи грифеля.',
    galleryImgSrc: ['/photos/tul.png', '/photos/fon.png', '/photos/lazer1.jpg'],
  },
  {
    id: 9,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: '/photos/lazer2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    description: 'Экологичная бутылка из керамики с пробковой крышкой.',
    galleryImgSrc: ['/photos/lazer2.jpg', '/photos/zebra.jpg', '/photos/fon.png'],
  },
  {
    id: 10,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/photos/zebra.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    description: 'Изолированный стакан для путешествий с герметичной крышкой.',
    galleryImgSrc: ['/photos/zebra.jpg', '/photos/lazer1.jpg', '/photos/fon.png'],
  },
  {
    id: 11,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/photos/stor.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    description: 'Запасные листы для блокнота с фокусом на продуктивность.',
    galleryImgSrc: ['/photos/stor.png', '/photos/lazer2.jpg', '/photos/fon.png'],
  },
  {
    id: 12,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/photos/fon.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    description: 'Механический карандаш из стали с точным механизмом подачи грифеля.',
    galleryImgSrc: ['/photos/fon.png', '/photos/tul.png', '/photos/lazer1.jpg'],
  },
  // {
  //   id: 13,
  //   name: 'Earthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // },
  // {
  //   id: 14,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //   imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  // {
  //   id: 15,
  //   name: 'Focus Paper Refill',
  //   href: '#',
  //   price: '$89',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //   imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  // },
  // {
  //   id: 16,
  //   name: 'Machined Mechanical Pencil',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //   imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  // },
  // {
  //   id: 17,
  //   name: 'Earthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // },
  // {
  //   id: 18,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //   imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  // {
  //   id: 19,
  //   name: 'Focus Paper Refill',
  //   href: '#',
  //   price: '$89',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //   imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  // },
  // {
  //   id: 20,
  //   name: 'Machined Mechanical Pencil',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //   imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  // },
  // {
  //   id: 21,
  //   name: 'Earthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // },
  // {
  //   id: 22,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //   imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  // {
  //   id: 23,
  //   name: 'Focus Paper Refill',
  //   href: '#',
  //   price: '$89',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //   imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  // },
  // {
  //   id: 24,
  //   name: 'Machined Mechanical Pencil',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //   imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  // },
  // {
  //   id: 25,
  //   name: 'Earthen Bottle',
  //   href: '#',
  //   price: '$48',
  //   imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
  //   imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  // },
  
  
  // More products...
]

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    const delta = touchStartX.current - touchEndX.current
    if (delta > 50) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProduct.galleryImgSrc.length)
    } else if (delta < -50) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProduct.galleryImgSrc.length) % selectedProduct.galleryImgSrc.length)
    }
  }

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product)
                setActiveImageIndex(0)
              }}
              className="cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg bg-white/10 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-sm px-4 py-3 text-gray-900">
                <h3 className="text-sm font-semibold">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm overflow-auto flex items-center justify-center">
            <div className="flex flex-col w-full h-full lg:w-[1000px] bg-white/80 backdrop-blur-xl rounded-none shadow-2xl overflow-auto text-gray-900 relative">
              {/* Галерея */}
              <div className="w-full flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + selectedProduct.galleryImgSrc.length) % selectedProduct.galleryImgSrc.length)}
                    className="hidden lg:flex items-center justify-center w-10 h-10 text-white bg-black/0 hover:bg-black/40 rounded-full transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % selectedProduct.galleryImgSrc.length)}
                    className="hidden lg:flex items-center justify-center w-10 h-10 text-white bg-black/0 hover:bg-black/40 rounded-full transition"
                  >
                    ›
                  </button>
                </div>
                <img
                  src={selectedProduct.galleryImgSrc[activeImageIndex]}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-[calc(100vh-160px)] object-contain bg-white/10 backdrop-blur-md"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                />
                {/* Миниатюры */}
                <div className="flex justify-center flex-wrap gap-2 mt-4">
                  {selectedProduct.galleryImgSrc.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setActiveImageIndex(i)}
                    >
                      <img
                        src={src}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover"
                      />
                      {activeImageIndex === i && (
                        <div className="absolute inset-0 bg-emerald-300/10 backdrop-blur-[1px] rounded-xl ring-1 ring-emerald-400/50 pointer-events-none" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Описание */}
              <div className="w-full flex flex-col justify-center p-4 sm:px-6 md:px-12 lg:px-20 text-gray-900">
                <div className="max-w-md">
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">Артикул: #{selectedProduct.id}</p>
                  <p className="mt-4 text-md text-gray-700">
                    {selectedProduct.description}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-black">{selectedProduct.price}</p>
                </div>
              </div>

              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white bg-gradient-to-tr from-black/60 to-black/40 rounded-full p-2 hover:scale-105 hover:shadow-lg transition-transform"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
