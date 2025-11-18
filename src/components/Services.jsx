import React from 'react'
import { Gamepad2, Server, Cpu, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Gamepad2,
    title: 'Game Servers',
    desc: 'One‑click deploy for Minecraft, Rust, Valheim and more with mod support and automatic backups.',
  },
  {
    icon: Cpu,
    title: 'VPS Hosting',
    desc: 'KVM virtualization, Ryzen 9 nodes, DDR5 RAM and NVMe storage with full root access.',
  },
  {
    icon: Server,
    title: 'Dedicated Servers',
    desc: 'Bare‑metal performance with premium bandwidth and advanced DDoS protection layers.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Real humans. Real help. Discord‑friendly and ticketing with sub‑1h median response time.',
  },
]

function GlassCard({ Icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_80px_rgba(126,48,139,0.25)] transition"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7e308b] to-[#482670] text-white shadow-[0_10px_30px_rgba(126,48,139,0.35)]">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(126,48,139,0.15),transparent),radial-gradient(600px_circle_at_90%_30%,rgba(72,38,112,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for gamers, developers and creators</h2>
          <p className="mt-3 text-white/70">Choose the performance profile that fits your world.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <GlassCard key={s.title} Icon={s.icon} title={s.title} desc={s.desc} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
