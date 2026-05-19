import React, { useState } from 'react'
import projects from '../data/projects'
import GalleryModal from './GalleryModal'

export default function Featured(){
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState<string[]>([])

  function openGallery(imgs: string[]){
    setImages(imgs)
    setOpen(true)
  }

  return (
    <section id="featured" className="mt-12">
      <h2 className="text-2xl font-bold">Apartamentos em destaque</h2>
      <p className="mt-2 text-slate-600">Empreendimentos reais selecionados — informações e imagens vindas dos sites oficiais.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p=> (
          <article key={p.id} className="rounded-xl overflow-hidden bg-white shadow-soft">
            <div className="relative">
              <img src={p.gallery[0]} alt={p.name} className="w-full h-48 object-cover" />
              <div className="absolute left-3 top-3 flex gap-2">
                {p.badges.slice(0,2).map((b, i)=> (
                  <span key={i} className="bg-white/90 text-sm text-slate-700 px-2 py-1 rounded-md shadow">{b}</span>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="text-sm text-slate-500 mt-1">{p.location}</div>
              <p className="mt-3 text-sm text-slate-700">{p.short}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.amenities.slice(0,3).map((a,i)=> (
                  <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded">{a}</span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <a href={p.detailsUrl} target="_blank" rel="noreferrer" className="px-3 py-2 bg-brand-500 text-white rounded-lg text-sm">Saiba mais</a>
                <a href={`https://wa.me/${p.contactWhatsApp}?text=${encodeURIComponent('Olá%20Patrick,%20gostaria%20de%20saber%20mais%20sobre%20'+p.name)}`} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-lg text-sm">WhatsApp</a>
                <button onClick={()=>openGallery(p.gallery)} className="ml-auto text-sm text-slate-600">Galeria</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <GalleryModal open={open} images={images} onClose={()=>setOpen(false)} />
    </section>
  )
}
