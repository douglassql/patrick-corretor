import React from 'react'
import selo from '../../assets/img/selo.png'

export default function Financing(){
  return (
    <section id="finance" className="mt-12">
      <h3 className="text-xl font-bold">Financiamento e orientação para a primeira casa</h3>
      <p className="mt-2 text-slate-600">Conselhos práticos para ajudar você a se qualificar e planejar seu primeiro financiamento.</p>

      <div className="mt-4 p-4 rounded-lg bg-brand-50 border border-brand-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <img src={selo} alt="Selo Habitação de Interesse Social" className="h-16 w-auto sm:h-20 md:h-24 flex-shrink-0" loading="lazy" />
        <div className="w-full">
          <div className="font-semibold text-brand-700 text-base">Habitação de Interesse Social (HIS)</div>
          <div className="mt-1 text-xs sm:text-sm text-slate-700 max-w-xl">Pode haver enquadramento em programas de Habitação de Interesse Social conforme renda e critérios municipais. Patrick orienta sobre elegibilidade, documentação e simulações de financiamento específicas para HIS, de forma prática e direta.</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="font-semibold">Planejamento orçamentário</div>
          <div className="mt-2 text-sm text-slate-600">Criar um cronograma de poupança realista e checklist de custos.</div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="font-semibold">Opções de crédito</div>
          <div className="mt-2 text-sm text-slate-600">Entender programas subsidiados e incentivos para a primeira casa.</div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="font-semibold">Apoio na aplicação</div>
          <div className="mt-2 text-sm text-slate-600">Ajuda para preparar documentação e conversar com bancos.</div>
        </div>
      </div>
    </section>
  )
}
