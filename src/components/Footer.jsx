import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Airport Transfers', href: '#airport-transfers' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Family Travel', href: '#family' },
  { label: 'About Us', href: '#about' },
  { label: 'Book Now', href: '#contact' },
]

const serviceAreas = [
  'Sydney CBD', 'Parramatta', 'North Sydney', 'Eastern Suburbs',
  'Western Sydney', 'Hills District', 'Inner West', 'Northern Beaches',
  'South Sydney', 'Airport Precinct',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: '#080808' }}>
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <span className="text-gold text-lg font-display font-bold">A</span>
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-widest text-white">ABHI</div>
                <div className="text-[9px] tracking-[0.35em] uppercase text-gold/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Limousine Services
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Sydney&apos;s premier luxury chauffeur and airport transfer service.
              Professional, punctual, and always first-class.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/61400000000', label: 'WhatsApp' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(201,168,76,0.6)' }}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Service Areas</h4>
            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-white/40 text-sm">
                  <MapPin size={10} className="text-gold/40 flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Contact Us</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:+61400000000" className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm">
                <Phone size={14} className="text-gold/50 flex-shrink-0" />
                +61 400 000 000
              </a>
              <a href="mailto:info@abhilimousine.com.au" className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm">
                <Mail size={14} className="text-gold/50 flex-shrink-0" />
                info@abhilimousine.com.au
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-gold/50 flex-shrink-0 mt-0.5" />
                Sydney, NSW, Australia
              </div>
            </div>

            {/* Newsletter */}
            <h4 className="text-gold text-xs tracking-widest uppercase mb-4">Newsletter</h4>
            {subscribed ? (
              <p className="text-gold text-sm">Thank you for subscribing! ✓</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="luxury-input flex-1 px-3 py-2.5 rounded-lg text-xs"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold px-4 py-2.5 text-xs font-bold tracking-widest flex-shrink-0"
                >
                  Join
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs tracking-wider text-center">
            © {new Date().getFullYear()} Abhi Limousine Services. All rights reserved. Sydney, Australia.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <button key={link} className="text-white/20 hover:text-gold text-xs transition-colors tracking-wider">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
