import React from 'react'
import { Twitter, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#0b0b0f]/80 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(126,48,139,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#7e308b] to-[#482670]" />
              <div className="text-white">
                <div className="text-sm uppercase tracking-widest text-white/60">HexaVerse</div>
                <div className="text-lg font-semibold">Hosting</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">High‑performance hosting for gamers and builders. Dark, futuristic and always online.</p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Follow</div>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10"><MessageCircle size={18} /></a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10"><Twitter size={18} /></a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10"><Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Acceptable Use</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>support@hexaverse.gg</li>
              <li>Discord: /hexaverse</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} HexaVerse Hosting. All rights reserved.</div>
      </div>
    </footer>
  )
}
