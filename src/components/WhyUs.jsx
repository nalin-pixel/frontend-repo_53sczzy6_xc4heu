import React from 'react'
import { ShieldCheck, Zap, GaugeCircle, HardDrive } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: Zap, title: 'Ryzen Performance', desc: 'Latest-gen Ryzen CPUs tuned for high single-core speeds.' },
  { icon: HardDrive, title: 'DDR5 + NVMe', desc: 'Blazing memory and storage for instant world loads.' },
  { icon: GaugeCircle, title: 'Low Latency', desc: 'Global POPs and smart routing keep your ping low.' },
  { icon: ShieldCheck, title: 'DDoS Protection', desc: 'Always-on mitigation with advanced filtering.' },
]

function Feature({ Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7e308b] to-[#482670] text-white">
        <Icon size={20} />
      </div>
      <div className="font-semibold text-white">{title}</div>
      <div className="text-sm text-white/70">{desc}</div>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_10%,rgba(72,38,112,0.25),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Why choose HexaVerse?</h2>
            <p className="mt-3 text-white/70">We obsess over performance and reliability so your worlds never stop.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Feature key={f.title} Icon={f.icon} title={f.title} desc={f.desc} delay={i * 0.08} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#482670] to-[#7e308b]">
                <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_30%_30%,rgba(255,255,255,0.25),transparent)]" />
                <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(600px_circle_at_50%_50%,rgba(126,48,139,0.35),transparent)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
