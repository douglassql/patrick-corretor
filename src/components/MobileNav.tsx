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
        <button aria-label="Abrir menu" onClick={()=>setOpen(true)} className="p-2 bg-white/90 backdrop-blur-sm rounded-md shadow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
