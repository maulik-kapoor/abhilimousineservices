import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-luxury-black flex flex-col items-center justify-center"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        </div>

        <div className="relative flex flex-col items-center gap-10">
          {/* Crown / Diamond icon */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="relative"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 8L52 28L72 22L62 44L72 66H8L18 44L8 22L28 28L40 8Z"
                stroke="url(#goldGrad)" strokeWidth="2" fill="rgba(201,168,76,0.08)" />
              <defs>
                <linearGradient id="goldGrad" x1="8" y1="8" x2="72" y2="66">
                  <stop offset="0%" stopColor="#C9A84C" />
                  <stop offset="50%" stopColor="#E8C97A" />
                  <stop offset="100%" stopColor="#C9A84C" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-xl"
              style={{ background: 'rgba(201,168,76,0.3)' }}
            />
          </motion.div>

          {/* Brand name */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="section-tag justify-center mb-4"
            >
              SYDNEY, AUSTRALIA
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl font-light tracking-widest text-white"
            >
              ABHI
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="gold-divider my-3"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-sm tracking-[0.4em] uppercase text-gold"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Limousine Services
            </motion.p>
          </div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="w-48"
          >
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.3, duration: 1.2, ease: 'easeInOut' }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)' }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center text-xs text-white/30 mt-3 tracking-widest uppercase"
            >
              Preparing your luxury experience...
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
