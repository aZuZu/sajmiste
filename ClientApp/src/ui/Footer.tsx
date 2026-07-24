import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="font-bold text-lg">Sajmište.hr</div>
          <p className="mt-3 text-sm text-gray-500">
            Moderna hrvatska platforma za kupovinu i prodaju.
          </p>
        </div>
        <div>
          <div className="font-semibold">Marketplace</div>
          <ul className="mt-3 text-sm text-gray-500 space-y-2">
            <li>Oglasi</li>
            <li>Kategorije</li>
            <li>Objavi oglas</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Podrška</div>
          <ul className="mt-3 text-sm text-gray-500 space-y-2">
            <li>Kontakt</li>
            <li>FAQ</li>
            <li>Sigurnost</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Pravna</div>
          <ul className="mt-3 text-sm text-gray-500 space-y-2">
            <li>Uvjeti korištenja</li>
            <li>Privatnost</li>
            <li>Cookie</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Sajmište.hr — Sva prava pridržana.
      </div>
    </footer>
  )
}
