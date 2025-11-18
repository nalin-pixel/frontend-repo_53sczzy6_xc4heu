import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_circle_at_10%_-10%,rgba(126,48,139,0.15),transparent),radial-gradient(1000px_circle_at_110%_-10%,rgba(72,38,112,0.15),transparent)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
