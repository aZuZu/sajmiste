import React from 'react'

const features = [
  {title:'Brzo pretraživanje', desc:'Odgovori odmah uz pametne filtere', icon:'⚡'},
  {title:'Sigurna komunikacija', desc:'Zaštićene poruke i verificirani prodavači', icon:'🔒'},
  {title:'Mobilna podrška', desc:'Besprijekorno iskustvo na telefonu', icon:'📱'},
  {title:'Premium doživljaj', desc:'Pažljivo dizajniran za povjerenje', icon:'💎'}
]

function Feature({f}:{f:any}){
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
      <div className="text-3xl">{f.icon}</div>
      <h4 className="mt-3 font-semibold">{f.title}</h4>
      <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
    </div>
  )
}

export default function Why(){
  return (
    <section>
      <h2 className="text-3xl font-semibold">Zašto Sajmište?</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f=> <Feature key={f.title} f={f} />)}
      </div>
    </section>
  )
}
