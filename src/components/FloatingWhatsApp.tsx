import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp(){
  return (
    <motion.a
      href="https://wa.me/5511985384538"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="md:hidden fixed bottom-6 right-4 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transform-gpu"
      title="WhatsApp: +55 11 98538-4538"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21.722 2.278A11.945 11.945 0 0012.003.002C5.383.002-.004 5.388-.004 12.01c0 2.116.555 4.186 1.613 6.02L.06 23.94l5.998-1.566a11.94 11.94 0 005.945 1.537h.002c6.62 0 12.007-5.387 12.007-12.007 0-3.207-1.25-6.217-3.283-8.636z" fill="white"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.297-.497.099-.198.05-.372-.025-.52-.074-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.307 1.263.49 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.123-.272-.198-.57-.347z" fill="#075E54"/>
      </svg>
    </motion.a>
  )
}
