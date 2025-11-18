import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/60 via-[#0b0b0f]/70 to-[#0b0b0f] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-white/80 backdrop-blur">
              Futuristic Performance
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_30px_rgba(126,48,139,0.35)]">
              Premium Game Servers
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Spin up ultra‑low‑latency servers powered by Ryzen CPUs and DDR5 RAM. DDoS‑hardened. Gamer approved.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#plans" className="rounded-2xl bg-gradient-to-r from-[#7e308b] to-[#482670] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(126,48,139,0.45)] hover:opacity-95 transition">
                Get Started
              </a>
              <a href="#services" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition">
                Explore Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                <span>99.9% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
                <span>DDoS protection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
                <span>Instant deploy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0b0b0f]" />
    </section>
  )
}
