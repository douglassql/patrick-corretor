import React from 'react'

export default function LGBTQ(){
  return (
    <section className="mt-12 p-6 rounded-xl overflow-hidden">
      <div className="max-w-4xl rounded-xl p-6" style={{background: 'linear-gradient(90deg, #E70000 0%, #FF8C00 20%, #FFEA00 40%, #008018 60%, #004DFF 80%, #750787 100%)'}}>
        <h3 className="text-xl font-bold text-white">Um espaço acolhedor para compradores LGBTQ+</h3>
        <p className="mt-2 text-white/90">Patrick está comprometido em ajudar clientes LGBTQ+ a encontrar lares seguros, afirmativos e acessíveis. Respeito, confidencialidade e apoio sem julgamentos são prioridades em cada atendimento.</p>

        <ul className="mt-4 space-y-2 text-white/90">
          <li>Atendimento inclusivo e respeitoso</li>
          <li>Consultas confidenciais e encaminhamentos comunitários</li>
          <li>Foco em segurança, adequação ao bairro e estabilidade a longo prazo</li>
        </ul>
      </div>
    </section>
  )
}
