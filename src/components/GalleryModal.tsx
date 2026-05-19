import React from 'react'

type Props = {
  open: boolean
  images: string[]
  onClose: () => void
}

export default function GalleryModal({ open, images, onClose }: Props){
  if(!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="max-w-3xl w-full mx-4" onClick={e=>e.stopPropagation()}>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-3 flex justify-between items-center border-b">
            <div className="font-semibold">Galeria</div>
            <button onClick={onClose} className="text-slate-600">Fechar</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3">
            {images.map((src,i)=> (
              <img key={i} src={src} alt={`Galeria ${i+1}`} className="w-full h-48 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
