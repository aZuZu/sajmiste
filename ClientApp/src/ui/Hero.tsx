import React from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="pt-32 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative z-20">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] leading-tight font-extrabold">
            Sve što tražiš.
            <br />
            Na jednom mjestu.
          </h1>
          <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
            Kupuj, prodaj, mijenjaj i otkrij najbolje ponude u Hrvatskoj — automobili, nekretnine,
            elektronika, poslovi i usluge. Sigurno, brzo i jednostavno.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="px-5 py-3 bg-primary text-white rounded-full shadow hover:scale-[1.02] transition-smooth focus-ring">
              Objavi oglas
            </button>
            <button className="px-5 py-3 border border-gray-200 rounded-full text-gray-700 bg-white focus-ring">
              Pregledaj oglase
            </button>
          </div>

          <div className="mt-12">
            <SearchBar />
            <div className="mt-6 text-sm text-gray-500">
              Popularne: <span className="text-gray-700 font-medium">🚗 Vozila</span> •{' '}
              <span className="text-gray-700 font-medium">🏠 Nekretnine</span> •{' '}
              <span className="text-gray-700 font-medium">📱 Elektronika</span>
            </div>
          </div>
        </div>

        <div className="relative z-0 pointer-events-none mt-8 md:mt-0">
          <div className="w-full aspect-[3/2] md:aspect-[4/3] bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Marketplace illustration"
            >
              <rect width="100%" height="100%" fill="#F3F4F6" />
              <g transform="translate(40,40)" fill="none" stroke="#E5E7EB" strokeWidth="2">
                <rect x="0" y="0" width="720" height="520" rx="24" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
