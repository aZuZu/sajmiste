import React from 'react'
import SearchBar from './SearchBar'

export default function Hero(){
  return (
    <section className="pt-28 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-[68px] leading-tight font-extrabold">Sve što tražiš.
            <br/>Na jednom mjestu.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">Kupuj, prodaj, mijenjaj i otkrij najbolje ponude u Hrvatskoj — automobili, nekretnine, elektronika, poslovi i usluge. Sigurno, brzo i jednostavno.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 bg-primary text-white rounded-full shadow hover:scale-[1.02] transition-smooth">Objavi oglas</button>
            <button className="px-5 py-3 border border-gray-200 rounded-full text-gray-700 bg-white">Pregledaj oglase</button>
          </div>

          <div className="mt-8">
            <SearchBar />
          </div>
        </div>

        <div className="relative">
          <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
            <img src="/assets/hero-sample.jpg" alt="Marketplace" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
