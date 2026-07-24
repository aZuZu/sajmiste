import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type MobileDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerVariants = {
    hidden: { x: '-100%', opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.2 } }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-black/20 z-30"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40 pt-20"
          >
            <nav className="px-6 py-6 space-y-4 flex flex-col">
              <a
                href="#"
                className="text-lg font-semibold text-gray-700 hover:text-primary transition-smooth"
              >
                Oglasi
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-700 hover:text-primary transition-smooth"
              >
                Kategorije
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-700 hover:text-primary transition-smooth"
              >
                Kako radi
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-700 hover:text-primary transition-smooth"
              >
                Pomoć
              </a>
              <hr className="my-4" />
              <button className="w-full px-4 py-2 bg-primary text-white rounded-full text-center focus-ring">
                Prijava
              </button>
              <button className="w-full px-4 py-2 bg-white border border-primary text-primary rounded-full text-center focus-ring">
                Objavi oglas
              </button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
