const categories = [
  {
    id: 'mekanizmali-perdeler',
    name: 'Mekanizmalı Perdeler',
    featured: [
      {
        name: 'Zebra Perde',
        href: '#',
        imageSrc: '/photos/zebra.jpg',
        imageAlt: 'Zebra perde modeli',
      },
      {
        name: 'Stor Perde',
        href: '#',
        imageSrc: '/photos/stor.png',
        imageAlt: 'Stor perde modeli',
      },
    ],
    sections: [
      {
        id: 'zebra',
        name: 'Zebra Perdeler',
        items: [
          { name: 'Baskılı Zebra Perde', href: '#' },
          { name: 'Plise Zebra Perde', href: '#' },
          { name: 'Karartma Zebra Perde', href: '#' },
        ],
      },
      {
        id: 'stor',
        name: 'Stor Perdeler',
        items: [
          { name: 'Baskılı Stor Perde', href: '#' },
          { name: 'Karartma Stor Perde', href: '#' },
          { name: 'Screen Stor Perde', href: '#' },
        ],
      },
      {
        id: 'diger',
        name: 'Diğer Mekanizmalı',
        items: [
          { name: 'Jaluzi Perde (Ahşap)', href: '#' },
          { name: 'Jaluzi Perde (Alüminyum)', href: '#' },
          { name: 'Dikey Perde', href: '#' },
          { name: 'Plise Perde', href: '#' },
        ],
      },
   
      {
        id: 'fon',
        name: 'Fon Perdeler',
        items: [
          { name: 'Kadife Fon Perde', href: '#' },
          { name: 'Goblen Fon Perde', href: '#' },
          { name: 'Rustik Fon Perde', href: '#' },
        ],
      },
      {
        id: 'tul',
        name: 'Tül Perdeler',
        items: [
          { name: 'Klasik Tül Perde', href: '#' },
          { name: 'Dantel Tül Perde', href: '#' },
          { name: 'Fonlu Tül Perde', href: '#' },
        ],
      },
    ],
  },

  {
    id: 'aksesuar-ve-ozel',
    name: 'Aksesuarlar & Özel Dikim',
    featured: [
      {
        name: 'Perde Aksesuarları',
        href: '#',
        imageSrc: '/photos/lazer1.jpg',
        imageAlt: 'Perde aksesuarları',
      },
      {
        name: 'Özel Dikim',
        href: '#',
        imageSrc: '/photos/tul.png',
        imageAlt: 'Özel dikim perde',
      },
    ],
    sections: [
      {
        id: 'aksesuar',
        name: 'Aksesuarlar',
        items: [
          { name: 'Perde Tokası', href: '#' },
          { name: 'Korniş ve Raylar', href: '#' },
          { name: 'Perde Bağcıları', href: '#' },
        ],
      },
      {
        id: 'ozel',
        name: 'Özel Üretim',
        items: [
          { name: 'Özel Dikim Perde', href: '#' },
          { name: 'Tasarım Danışmanlığı', href: '#' },
        ],
      },
    ],
  },
]

export default categories

