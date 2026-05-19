import React from 'react'

const items = [
  {title:'Especialista no mercado local', desc:'Anos ajudando compradores de primeira viagem a encontrar opções reais.'},
  {title:'Orientação passo a passo', desc:'Do planejamento à escritura, acompanho cada etapa.'},
  {title:'Atendimento amigável e paciente', desc:'Sem pressão. Decisões no seu ritmo.'},
]

const cardStyles = [
  'bg-white border-brand-200 shadow-soft',
  'bg-white border-accent-200 shadow-soft',
  'bg-white border-petrol-200 shadow-soft'
]

export default function WhyChoose(){
  return (
    <section id="why" className="mt-12">
      <h3 className="text-xl font-bold">Por que escolher o Patrick</h3>
      <p className="mt-2 text-slate-600">Um corretor focado em quem compra pela primeira vez e em soluções acessíveis.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, idx)=> (
          <div
            key={idx}
            className={`group relative overflow-hidden p-6 rounded-2xl border transform transition-all duration-300 hover:-translate-y-1 hover:shadow-pop ${cardStyles[idx]}`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_42%)] opacity-100" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 font-semibold">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="mt-4 font-semibold text-lg leading-tight text-slate-900">{it.title}</div>
              <div className="mt-3 text-sm text-slate-600 leading-relaxed">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
