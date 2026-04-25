import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Airport Transfers', href: '#airport-transfers' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 border border-gold/60 flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <span className="text-gold text-lg font-display font-bold">A</span>
                </div>
                <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-opacity"
                  style={{ background: '#C9A84C', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              </div>
              <div>
                <div className="font-display text-xl font-semibold tracking-widest text-white group-hover:text-gold-light transition-colors">
                  ABHI
                </div>
                <div className="text-[9px] tracking-[0.35em] uppercase text-gold/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Limousine Services
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-xs tracking-widest uppercase transition-colors font-medium group ${
                    activeLink === link.href ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+61400000000" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-xs">
                <Phone size={14} />
                <span className="tracking-wider">+61 400 000 000</span>
              </a>
              <motion.button
                onClick={() => handleNavClick('#contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold px-6 py-3 text-xs rounded-none font-bold tracking-widest"
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 inset-x-0 z-40 glass-dark border-t border-gold/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm tracking-[0.3em] uppercase text-white/80 hover:text-gold transition-colors font-medium border-b border-white/5 pb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick('#contact')}
                className="btn-gold w-full py-4 text-sm tracking-widest font-bold mt-2"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
