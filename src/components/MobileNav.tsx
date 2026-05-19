import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav(){
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl px-3 py-2 shadow">
        <div className="flex items-center gap-3">
          <img src="/assets/img/avatar.png" alt="Patrick" className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"/>
          <div>
            <div className="text-sm font-bold text-slate-800">Patrick Corretor</div>
            <div className="text-xs text-slate-500">Primeira casa</div>
          </div>
        </div>

        <button aria-label="Abrir menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md bg-white/60 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.18 }} className="fixed top-20 left-4 right-4 z-40 bg-white rounded-xl shadow-lg border p-4">
            <nav className="flex flex-col gap-3">
              <a href="#featured" className="px-3 py-2 rounded-md hover:bg-slate-50">Apartamentos</a>
              <a href="#why" className="px-3 py-2 rounded-md hover:bg-slate-50">Por que escolher</a>
              <a href="#finance" className="px-3 py-2 rounded-md hover:bg-slate-50">Financiamento</a>
              <a href="#contact" className="px-3 py-2 rounded-md bg-gradient-to-r from-brand-500 to-accent-500 text-white text-center">Contato</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
