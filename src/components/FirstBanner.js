'use client'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function FirstBanner() {

  return (
    <div className="bg-grey">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #34d399 0%, transparent 60%),  /* верх слева */
                radial-gradient(circle at 80% 20%, #10b981 0%, transparent 55%),  /* верх справа */
                radial-gradient(circle at 65% 75%, #4ade80 0%, transparent 65%),  /* середина снизу */
                radial-gradient(circle at 15% 80%, #22c55e 0%, transparent 70%)   /* внизу слева */
              `,
              backgroundBlendMode: 'multiply',
              backgroundSize: 'cover',
              opacity: 0.9,
            }}
            className="hidden sm:block relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 rotate-[30deg]"
          >



            {/* Анимированное правое пятно с размытием */}
            <div
              style={{
                background: 'radial-gradient(circle at 85% 30%, #22c55e 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              className="absolute inset-0 animate-glow blur-animate opacity-50"
            />
            <div className="block sm:hidden absolute inset-0 -z-10 overflow-hidden">
              {/* Правое нижнее пятно */}
              <div
                style={{
                  background: 'radial-gradient(circle at 85% 100%, #22c55e 0%, transparent 70%)',
                  filter: 'blur(80px)',
                }}
                className="absolute inset-0 animate-glow-mobile blur-animate-mobile opacity-60"
              />

              {/* Левое верхнее пятно */}
              <div
                style={{
                  background: 'radial-gradient(circle at 10% 10%, #34d399 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
                className="absolute inset-0 opacity-40"
              />
            </div>
            
          </div>
          

        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Sultan Perde İstanbul
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Müşterilerimize değer veriyoruz. Yıllarca ilk günkü gibi kullanabileceğiniz en kaliteli ürünleri, 10
              yılı aşkın tecrübemiz ve uygun fiyat garantimizle siz değerli müşterilerimizin hizmetine sunuyoruz.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                About us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >


          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              backgroundImage: `
                radial-gradient(circle at 30% 30%, #34d399 0%, transparent 60%),
                radial-gradient(circle at 90% 50%, #22c55e 0%, transparent 75%),
                radial-gradient(circle at 20% 85%, #10b981 0%, transparent 60%),
                radial-gradient(circle at 60% 60%, #4ade80 0%, transparent 70%) /* мягкий балансир в центре */
              `,
              backgroundBlendMode: 'multiply',
              backgroundSize: 'cover',
              opacity: 0.9,
            }}
            className="relative blur-animate-strong left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />

          <div className="block sm:hidden absolute inset-0 -z-10 overflow-hidden">
            {/* Правое нижнее пятно */}
            <div
              style={{
                background: 'radial-gradient(circle at 85% 100%, #22c55e 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
              className="absolute inset-0 animate-glow-mobile blur-animate-mobile opacity-60"
            />

            {/* Левое пятно */}
            <div
              style={{
                background: 'radial-gradient(circle at 20% 90%, #34d399 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              className="absolute inset-0 opacity-40"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
