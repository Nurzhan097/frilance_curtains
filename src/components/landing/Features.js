import { CheckCircleIcon, SparklesIcon, SwatchIcon, TruckIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Быстрая установка',
    description: 'Забудьте о хлопотах: наши шторы устанавливаются за считанные минуты без лишних инструментов и затрат!',
    icon: CheckCircleIcon,
  },
  {
    name: 'Индивидуальный пошив',
    description: 'Каждая штора — как костюм по мерке. Мы создаём идеальное оформление окна под ваш интерьер и вкус.',
    icon: SparklesIcon,
  },
  {
    name: 'Широкий выбор тканей',
    description: 'Откройте для себя более 500 премиальных тканей: от лёгкого тюля до плотного блэкаута — для уюта в любое время суток.',
    icon: SwatchIcon,
  },
  {
    name: 'Доставка и монтаж',
    description: 'Бережная доставка и профессиональный монтаж в удобное для вас время — по всему Стамбулу и за его пределами.',
    icon: TruckIcon,
  },
]

export default function Features() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600 tracking-wider uppercase">Наши преимущества</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Почему выбирают нас?
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Мы предлагаем не просто шторы — мы создаём комфорт, уют и стиль в вашем доме. Каждое изделие — результат опыта, вдохновения и заботы о деталях.
          </p>
        </div>
        <div className="mt-20 grid max-w-4xl mx-auto grid-cols-1 gap-16 sm:grid-cols-2 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
