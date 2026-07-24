import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="bg-blobs" aria-hidden>
        <div className="blob blob--purple" />
        <div className="blob blob--blue" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
