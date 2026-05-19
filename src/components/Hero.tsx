import React from 'react'
import avatar from '../../assets/img/avatar.png'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="mt-10 grid gap-8 md:grid-cols-2 items-center">
      <div className="order-2 md:order-1">
        <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold leading-tight">
          O Patrick ajuda jovens a encontrar apartamentos acessíveis
        </motion.h1>
        <motion.p initial={{ y:12, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{delay:0.1}} className="mt-4 text-slate-700 max-w-xl">
          Orientação amigável, conhecimento do mercado local e suporte de financiamento para você comprar seu primeiro apartamento com confiança.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#featured" className="inline-flex items-center px-5 py-3 bg-brand-600 text-white rounded-xl shadow-soft hover:scale-105 transition-transform">Ver apartamentos acessíveis</a>
          <a href="#contact" className="inline-flex items-center px-5 py-3 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50">Agendar conversa</a>
        </div>

        <div className="mt-6 text-sm text-slate-500">Atendimento para compradores de primeira viagem com paciência, empatia e passos claros.</div>
      </div>

      <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{duration:0.6}} className="order-1 md:order-2 flex justify-center md:justify-end -mx-6 sm:mx-0">
        <div className="relative w-full h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-none sm:rounded-xl shadow-soft overflow-hidden bg-gradient-to-tr from-brand-400 to-accent-500 p-0 sm:p-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-accent-500 opacity-80"></div>
          <img src={avatar} alt="Patrick" className="relative z-10 w-full h-full object-contain object-bottom rounded-none sm:rounded-xl"/>
        </div>
      </motion.div>
    </section>
  )
}
