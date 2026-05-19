import React from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import WhyChoose from './components/WhyChoose'
import Financing from './components/Financing'
import LGBTQ from './components/LGBTQ'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <header className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/img/avatar.png" alt="Patrick avatar" className="w-10 h-10 rounded-full ring-2 ring-brand-200 object-cover"/>
            <div className="text-lg font-semibold">Patrick Corretor</div>
          </div>
          <div className="hidden md:flex gap-6 items-center text-sm text-slate-600">
            <a href="#featured">Apartamentos</a>
            <a href="#why">Por que escolher</a>
            <a href="#finance">Financiamento</a>
            <a href="#contact" className="px-4 py-2 bg-brand-600 text-white rounded-xl shadow-soft">Contato</a>
          </div>
        </nav>
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
