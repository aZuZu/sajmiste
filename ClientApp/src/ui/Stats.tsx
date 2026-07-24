import React from 'react'

function Counter({ value, title }: { value: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-primary">{value}</div>
      <div className="text-sm text-gray-500">{title}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-white rounded-xl border border-gray-100 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter value="250,000+" title="Oglasi" />
        <Counter value="40,000+" title="Korisnici" />
        <Counter value="600+" title="Gradovi" />
        <Counter value="99%" title="Pozitivne recenzije" />
      </div>
    </section>
  )
}
