import React from 'react'

const items = [
  {title:'Especialista no mercado local', desc:'Anos ajudando compradores de primeira viagem a encontrar opções reais.'},
  {title:'Orientação passo a passo', desc:'Do planejamento à escritura, acompanho cada etapa.'},
  {title:'Atendimento amigável e paciente', desc:'Sem pressão — decisões no seu ritmo.'},
]

export default function WhyChoose(){
  return (
    <section id="why" className="mt-12">
      <h3 className="text-xl font-bold">Por que escolher o Patrick</h3>
      <p className="mt-2 text-slate-600">Um corretor focado em quem compra pela primeira vez e em soluções acessíveis.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx)=> (
          <div key={idx} className="p-5 bg-white rounded-xl shadow-soft">
            <div className="font-semibold">{it.title}</div>
            <div className="mt-2 text-sm text-slate-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
