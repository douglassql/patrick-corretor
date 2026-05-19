import React from 'react'
import avatar from '../../assets/img/avatar.png'

export default function Footer(){
  return (
    <footer className="mt-16 border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={avatar} className="w-10 h-10 rounded-full" alt="Patrick" />
          <div>
            <div className="font-semibold">Patrick Corretor</div>
            <div className="text-sm text-slate-600">Apoio a compradores de primeira viagem</div>
          </div>
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Patrick — Todos os direitos reservados</div>
      </div>
    </footer>
  )
}
