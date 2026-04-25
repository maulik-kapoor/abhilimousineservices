import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Image will be loaded from public directory or use gradient fallback
const heroBg = '/images/hero_bg.jpg'

const stats = [
  { icon: '🕐', label: '24/7 Service', sub: 'Always available' },
  { icon: '⭐', label: 'Professional', sub: 'Expert chauffeurs' },
  { icon: '🚗', label: 'Luxury Fleet', sub: 'Premium vehicles' },
  { icon: '👶', label: 'Child Seats', sub: 'Baby & booster' },
]

export default function Hero() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroBg}), linear-gradient(135deg, #0a0a0a 0%, #1a1206 40%, #0d0a00 70%, #0a0a0a 100%)`,
            filter: 'brightness(0.5)',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.85) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 60%)'
        }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Gold corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-tag mb-8"
          >
            Sydney&apos;s Premier Luxury Chauffeur Service
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-white">Luxury Chauffeur</span>
            <br />
            <span className="text-gold-gradient">&amp; Airport Transfer</span>
            <br />
            <span className="text-white">Services in</span>{' '}
            <span className="text-gold-gradient">Sydney</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="gold-divider mb-6 origin-left"
            style={{ width: '120px' }}
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Experience first-class airport transfers, executive travel, and premium
            chauffeur services with comfort, elegance, and reliability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-gold px-10 py-5 text-sm font-bold tracking-widest"
              id="hero-book-transfer"
            >
              ✈ Book Airport Transfer
            </motion.button>
            <motion.button
              onClick={scrollToFleet}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-outline-gold px-10 py-5 text-sm font-bold tracking-widest"
              id="hero-explore-fleet"
            >
              Explore Luxury Fleet
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.5)' }}
                className="glass-dark rounded-lg px-4 py-4 flex items-center gap-3 transition-all duration-300"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/40 text-xs">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('airport-transfers')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-gold/60" size={20} />
        </motion.div>
      </motion.div>
    </div>
  )
}
