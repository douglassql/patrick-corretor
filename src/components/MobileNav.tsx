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
        <button aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={()=>setOpen(v => !v)} className="p-2 bg-white/90 backdrop-blur-sm rounded-md shadow flex items-center justify-center">
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 top-0 w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`absolute left-0 top-2 w-6 h-0.5 bg-slate-900 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 top-4 w-6 h-0.5 bg-slate-900 transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/10"
              onClick={close}
            />

            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -8, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed top-16 left-4 right-4 z-50 max-w-sm rounded-2xl border border-white/70 bg-white/95 backdrop-blur-md shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img src={avatar} alt="Patrick" className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="font-bold text-slate-900">Patrick Corretor</div>
                    <div className="text-xs text-slate-500">Corretor para primeira casa</div>
                  </div>
                </div>
              </div>

              <nav className="p-3 flex flex-col gap-2">
                <a href="#featured" onClick={close} className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium">Apartamentos</a>
                <a href="#why" onClick={close} className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium">Por que escolher</a>
                <a href="#finance" onClick={close} className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium">Financiamento</a>
                <a href="#contact" onClick={close} className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold shadow">Contato</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
