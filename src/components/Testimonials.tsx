import React from 'react'


const quotes = [
  {name:'Mariana', text:'O Patrick tornou a compra do meu primeiro apartamento algo possível e seguro.'},
  {name:'Lucas', text:'Passos claros e nada de pressão — experiência ótima.'},
]

export default function Testimonials(){
  return (
    <section className="mt-12">
      <h3 className="text-xl font-bold">O que os clientes dizem</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {quotes.map((q, i)=> (
          <div key={i} className="p-4 bg-white rounded-xl shadow-soft">
            <div className="text-slate-700">“{q.text}”</div>
            <div className="mt-3 text-sm font-semibold">— {q.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
