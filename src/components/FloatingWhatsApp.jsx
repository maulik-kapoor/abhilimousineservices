import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/61400000000?text=Hi%2C%20I%27d%20like%20to%20book%20a%20luxury%20transfer%20with%20Abhi%20Limousine%20Services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={28} color="white" />

      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ background: '#25D366' }} />
    </motion.a>
  )
}
