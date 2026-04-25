import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Clock, UserCheck, Car, Users, MapPin } from 'lucide-react'

const airportImg = '/images/airport_transfer.jpg'

const features = [
  {
    icon: <Plane size={22} />,
    title: 'Sydney Airport Pickups & Drop-offs',
    desc: 'Seamless transfers to and from Sydney Kingsford Smith Airport, available 24/7.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Flight Tracking',
    desc: 'We monitor your flight in real-time so your chauffeur is always there when you land.',
  },
  {
    icon: <UserCheck size={22} />,
    title: 'Meet & Greet Service',
    desc: 'Professional chauffeur waiting in arrivals with a personalised name board.',
  },
  {
    icon: <Car size={22} />,
    title: 'Luxury Business Transfers',
    desc: 'First-class travel experience for corporate executives and business travellers.',
  },
  {
    icon: <Users size={22} />,
    title: 'Family Airport Transport',
    desc: 'Spacious vehicles with baby seats and booster seats for comfortable family journeys.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Long-Distance Transfers',
    desc: 'Comfortable premium transfers across Sydney and surrounding regions.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AirportTransfers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section-padding section-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            ref={ref}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg img-overlay">
              <img
                src={airportImg}
                alt="Sydney Airport Transfer – Abhi Limousine Services"
                className="w-full h-[540px] object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-gold/60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-gold/60 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass-gold rounded-xl px-6 py-4 text-center hidden md:block"
            >
              <div className="text-gold font-display text-3xl font-bold">24/7</div>
              <div className="text-white/70 text-xs tracking-widest uppercase mt-1">Airport Service</div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="section-tag mb-6">
              Airport Transfers
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sydney Airport <span className="text-gold-gradient">Transfer</span> Specialists
            </motion.h2>

            <motion.div variants={itemVariants} className="gold-divider mb-6" style={{ width: '80px' }} />

            <motion.p variants={itemVariants} className="text-white/60 text-base leading-relaxed mb-10">
              Whether you are arriving from an international flight or heading to a domestic terminal,
              our professional chauffeurs provide seamless, stress-free airport transfers across Sydney.
              Punctual, elegant, and always first-class.
            </motion.p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)', translateY: -3 }}
                  className="luxury-card rounded-lg p-4 flex gap-3 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold mt-10 px-10 py-4 text-xs tracking-widest font-bold inline-block"
              id="airport-book-transfer"
            >
              ✈ Book Airport Transfer
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
