import React, { useState, useEffect } from 'react'
import avatar from '../../assets/img/avatar.png'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav(){
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    function onKey(e: KeyboardEvent){
      if(e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[])

  function close(){ setOpen(false) }

  return (
    <div className="md:hidden">
      <div className="fixed top-4 left-4 z-50">
        <button aria-label="Abrir menu" onClick={()=>setOpen(true)} className="p-2 bg-white/90 backdrop-blur-sm rounded-md shadow flex items-center justify-center">
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 top-0 w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`absolute left-0 top-2 w-6 h-0.5 bg-slate-900 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 top-4 w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed inset-0 z-40 bg-white/95">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar} alt="Patrick" className="w-10 h-10 rounded-full object-cover"/>
                  <div className="font-bold">Patrick Corretor</div>
                </div>
                <button onClick={close} aria-label="Fechar menu" className="px-3 py-2">Fechar</button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                <a href="#featured" onClick={close} className="text-lg">Apartamentos</a>
                <a href="#why" onClick={close} className="text-lg">Por que escolher</a>
                <a href="#finance" onClick={close} className="text-lg">Financiamento</a>
                <a href="#contact" onClick={close} className="text-lg font-semibold">Contato</a>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
