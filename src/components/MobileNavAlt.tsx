import React, { useState, useEffect } from 'react'

export default function MobileNavAlt(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent){
      if(e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function handleClose(){
    setOpen(false)
  }

  return (
    <>
      <div className="md:hidden fixed inset-x-4 bottom-4 z-50">
        <div className="bg-white/90 backdrop-blur-md border rounded-full px-3 py-2 shadow flex items-center justify-between">
          <a href="#featured" onClick={handleClose} className="flex-1 text-center text-sm text-slate-700">Apartamentos</a>
          <a href="#why" onClick={handleClose} className="flex-1 text-center text-sm text-slate-700">Por que</a>
          <button onClick={()=>setOpen(true)} className="mx-2 px-4 py-2 bg-primary-500 text-white rounded-full shadow">Menu</button>
          <a href="https://wa.me/5511985384538" className="flex-1 text-center text-sm text-slate-700">WhatsApp</a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-xl p-4">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Menu</div>
              <button onClick={handleClose} className="text-slate-600">Fechar</button>
            </div>

            <nav className="mt-4 grid gap-3">
              <a href="#featured" onClick={handleClose} className="px-4 py-3 rounded-lg bg-slate-50">Apartamentos</a>
              <a href="#why" onClick={handleClose} className="px-4 py-3 rounded-lg bg-slate-50">Por que escolher</a>
              <a href="#finance" onClick={handleClose} className="px-4 py-3 rounded-lg bg-slate-50">Financiamento</a>
              <a href="#contact" onClick={handleClose} className="px-4 py-3 rounded-lg bg-primary-500 text-white">Contato</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
