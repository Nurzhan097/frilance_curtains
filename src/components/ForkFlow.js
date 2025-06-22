import { MapPinIcon, CalculatorIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid'
import dynamic from 'next/dynamic'

import MapWrapper from '@/components/map/MapWrapper'

const features = [
  {
    name: 'Ücretsiz Keşif.',
    description:
      'Whatsapp üzerinden konumuzu iletin, ölçü için en kısa zamanda ziyarete gelelim.',
    icon: MapPinIcon,
  },
  {
    name: 'İsteğe Özel Ölçü Dikim.',
    description: 'İstediğiniz ölçülere özel Perde dikim ayrıcalığı.',
    icon: CalculatorIcon,
  },
  {
    name: 'Ücretsiz Montaj.',
    description: 'Perde ürünlerimizin montajlarını ücretsiz şekilde gerçekleştiriyoruz.',
    icon: WrenchScrewdriverIcon,
  },
]

export default function ForkFlow() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-emerald-600">Fast & easy</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Sultan Perde İstanbul
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Müşterilerimize değer veriyoruz. Yıllarca ilk günkü gibi kullanabileceğiniz en kaliteli ürünleri, 10 yılı aşkın tecrübemiz ve uygun fiyat garantimizle siz değerli müşterilerimizin hizmetine sunuyoruz.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-emerald-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <MapWrapper></MapWrapper>
        </div>
      </div>
    </div>
  )
}
