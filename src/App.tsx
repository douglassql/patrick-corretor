import React from 'react'
import avatar from '../assets/img/avatar.png'
import Hero from './components/Hero'
import Featured from './components/Featured'
import WhyChoose from './components/WhyChoose'
import Financing from './components/Financing'
import LGBTQ from './components/LGBTQ'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <header className="max-w-6xl mx-auto px-6 pt-6">
        <MobileNav />
        <div className="sticky top-6 z-50 hidden md:block">
          <nav className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/50 rounded-xl px-5 py-3 shadow-soft">
            <div className="flex items-center gap-4">
              <img src={avatar} alt="Patrick avatar" className="w-12 h-12 rounded-full ring-4 ring-primary-100 object-cover"/>
              <div>
                <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-400">Patrick Corretor</div>
                <div className="text-xs text-slate-500">Corretor para primeira casa</div>
              </div>
            </div>

            <div className="hidden md:flex gap-6 items-center text-sm">
              <a href="#featured" className="px-4 py-2 rounded-full hover:bg-white/80 text-slate-700">Apartamentos</a>
              <a href="#why" className="px-4 py-2 rounded-full hover:bg-white/80 text-slate-700">Por que escolher</a>
              <a href="#finance" className="px-4 py-2 rounded-full hover:bg-white/80 text-slate-700">Financiamento</a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-full shadow">Contato</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Featured />
        <WhyChoose />
        <Financing />
        <LGBTQ />
        <Testimonials />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}
