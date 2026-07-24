import React from 'react'

export default function Download() {
  return (
    <section className="rounded-xl border border-gray-100 p-8 bg-white flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">Preuzmi aplikaciju</h3>
        <p className="mt-3 text-gray-600">
          Prati obavijesti, objavljuj i razgovaraj sa kupcima iz aplikacije.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="#" className="px-4 py-2 bg-gray-900 text-white rounded-lg">
            App Store
          </a>
          <a href="#" className="px-4 py-2 border border-gray-200 rounded-lg">
            Google Play
          </a>
        </div>
      </div>
      <div className="w-44 h-96 bg-gray-50 rounded-3xl shadow-lg flex items-center justify-center">
        <div className="text-gray-400">Phone Mockup</div>
      </div>
    </section>
  )
}
