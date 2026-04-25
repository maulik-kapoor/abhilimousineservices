import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function StickyBookingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-28 right-6 z-40 flex flex-col gap-3"
        >
          {/* Call CTA */}
          <motion.a
            href="tel:+61400000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold tracking-wider text-luxury-black shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', boxShadow: '0 8px 30px rgba(201,168,76,0.4)' }}
          >
            <Phone size={15} />
            Call Now
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
