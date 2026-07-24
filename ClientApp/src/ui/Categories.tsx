import React from 'react'

const cats = [
  {name:'Vozila', emoji:'🚗', count:1240},
  {name:'Nekretnine', emoji:'🏠', count:860},
  {name:'Elektronika', emoji:'📱', count:2300},
  {name:'Gaming', emoji:'🎮', count:540},
  {name:'Moda', emoji:'👕', count:1280},
  {name:'Poslovi', emoji:'💼', count:420}
]

function CategoryCard({c}:{c:any}){
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-smooth">
      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center text-2xl">{c.emoji}</div>
      <div>
        <div className="font-semibold">{c.name}</div>
        <div className="text-sm text-gray-500">{c.count} oglasa</div>
      </div>
    </div>
  )
}

export default function Categories(){
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Popularne kategorije</h2>
        <a href="#" className="text-primary">Prikaži sve</a>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cats.map(c=> <CategoryCard key={c.name} c={c} />)}
      </div>
    </section>
  )
}
