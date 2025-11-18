import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#7e308b] to-[#482670] shadow-[0_0_20px_rgba(126,48,139,0.6)]" />
              <div className="text-white">
                <div className="text-sm uppercase tracking-widest text-white/60">HexaVerse</div>
                <div className="text-lg font-semibold tracking-tight">Hosting</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#plans" className="rounded-xl bg-gradient-to-r from-[#7e308b] to-[#482670] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(126,48,139,0.35)] hover:opacity-95 transition">
                View Plans
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#plans" className="rounded-lg bg-gradient-to-r from-[#7e308b] to-[#482670] px-3 py-2 text-center font-medium text-white" onClick={() => setOpen(false)}>
                  View Plans
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
