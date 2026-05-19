import React from 'react'

export default function LGBTQ(){
  return (
    <section className="mt-12 px-4 sm:px-6 rounded-xl overflow-hidden">
      <div
        className="max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-soft"
        style={{background: 'linear-gradient(90deg, #E70000 0%, #FF8C00 20%, #FFEA00 40%, #008018 60%, #004DFF 80%, #750787 100%)'}}
      >
        <div className="rounded-2xl bg-slate-950/70 px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7 backdrop-blur-sm border border-white/10">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
            Inclusão
          </div>

          <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
            Um espaço acolhedor para compradores LGBTQ+
          </h3>

          <p className="mt-3 max-w-3xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white/95">
            Patrick está comprometido em ajudar clientes LGBTQ+ a encontrar lares seguros, afirmativos e acessíveis.
            Respeito, confidencialidade e apoio sem julgamentos são prioridades em cada atendimento.
          </p>

          <ul className="mt-5 space-y-3 text-sm sm:text-base text-white/95">
            <li className="flex gap-3 leading-6">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white shrink-0" />
              <span>Atendimento inclusivo e respeitoso</span>
            </li>
            <li className="flex gap-3 leading-6">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white shrink-0" />
              <span>Consultas confidenciais e encaminhamentos comunitários</span>
            </li>
            <li className="flex gap-3 leading-6">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white shrink-0" />
              <span>Foco em segurança, adequação ao bairro e estabilidade a longo prazo</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
