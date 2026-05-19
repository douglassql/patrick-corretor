import React from 'react'

export default function ContactCTA(){
  return (
    <section id="contact" className="mt-12 p-6 rounded-xl bg-gradient-to-r from-white to-amber-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold">Quer conversar? Agende uma conversa amigável.</h4>
          <p className="mt-1 text-slate-600">Conversas rápidas e sem pressão para explorar opções.</p>
        </div>
        <div className="flex gap-3">
          <a href="https://wa.me/" target="_blank" className="px-4 py-3 bg-green-500 text-white rounded-xl shadow-soft">WhatsApp (fale com Patrick)</a>
          <a href="#featured" className="px-4 py-3 border rounded-xl">Ver imóveis</a>
        </div>
      </div>
    </section>
  )
}
