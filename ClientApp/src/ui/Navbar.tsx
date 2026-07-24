import React, { useState } from 'react'
import MobileDrawer from './MobileDrawer'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
        S
      </div>
      <div className="hidden sm:block font-semibold">Sajmište.hr</div>
    </div>
  )
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="fixed left-1/2 -translate-x-1/2 top-4 z-40 w-[min(98%,1400px)]">
        <nav className="backdrop-blur-md bg-white/75 border border-gray-100 shadow-lg rounded-full px-6 py-3 flex items-center justify-between transition-smooth">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              <a href="#" className="hover:text-primary transition-smooth">
                Oglasi
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Kategorije
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Kako radi
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Pomoć
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus-ring">
              Prijava
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full shadow hover:scale-[1.02] transition-smooth focus-ring">
              Objavi oglas
            </button>
            <button
              aria-label="user"
              className="hidden sm:flex ml-2 w-10 h-10 rounded-full bg-gray-100 items-center justify-center focus-ring"
            >
              👤
            </button>
            <button
              aria-label="menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="md:hidden ml-2 p-2 hover:bg-gray-100 rounded-full focus-ring"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
