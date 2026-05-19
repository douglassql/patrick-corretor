import React from 'react'

const sample = [
  {id:1, title:'Aconchegante 1 quarto perto do transporte', price:'R$ 180.000', area:'45m²'},
  {id:2, title:'Studio ensolarado, centro', price:'R$ 155.000', area:'32m²'},
  {id:3, title:'2 quartos acessível, rua tranquila', price:'R$ 210.000', area:'58m²'},
]

export default function Featured(){
  return (
    <section id="featured" className="mt-12">
      <h2 className="text-2xl font-bold">Apartamentos acessíveis em destaque</h2>
      <p className="mt-2 text-slate-600">Opções selecionadas que cabem no orçamento de quem compra pela primeira vez.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map(item=> (
          <article key={item.id} className="rounded-xl p-4 bg-white shadow-soft">
            <div className="h-36 bg-slate-100 rounded-md mb-3 flex items-end p-3">
              <div className="text-sm text-slate-700">{item.title}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{item.price}</div>
              <div className="text-sm text-slate-500">{item.area}</div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 bg-brand-500 text-white rounded-lg text-sm">Ver</button>
              <button className="px-3 py-2 border rounded-lg text-sm">Salvar</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
