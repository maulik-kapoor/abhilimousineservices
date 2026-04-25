import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, Star, PhoneCall, Baby, CheckCircle, Radar } from 'lucide-react'

const features = [
  {
    icon: <Shield size={32} />,
    title: 'Professional Chauffeurs',
    desc: 'All our drivers are licensed, police-checked, and trained to deliver VIP-level service.',
  },
  {
    icon: <Clock size={32} />,
    title: 'On-Time Guarantee',
    desc: 'We pride ourselves on punctuality. Your time is valuable — we are always on schedule.',
  },
  {
    icon: <Star size={32} />,
    title: 'Luxury Fleet',
    desc: 'A meticulously maintained fleet of premium vehicles for every occasion and group size.',
  },
  {
    icon: <PhoneCall size={32} />,
    title: '24/7 Availability',
    desc: 'Round-the-clock service, including early morning flights and late-night arrivals.',
  },
  {
    icon: <Baby size={32} />,
    title: 'Family-Friendly Services',
    desc: 'Baby seats, booster seats, and extra space for a stress-free family travel experience.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Safe & Comfortable',
    desc: 'Your safety and comfort are our top priorities on every single journey.',
  },
  {
    icon: <Radar size={32} />,
    title: 'Flight Tracking',
    desc: 'We monitor your flight in real-time to adjust pickup times automatically.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="section-padding section-charcoal relative overflow-hidden">
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Why Choose Us</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            The Abhi Limousine
            <br />
            <span className="text-gold-gradient">Promise of Excellence</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" style={{ width: '80px' }} />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just drive you from A to B — we craft a premium travel experience
            built on trust, luxury, and unwavering professionalism.
          </p>
        </motion.div>

        {/* Feature grid with centre highlight */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10, borderColor: 'rgba(201,168,76,0.4)' }}
              className="luxury-card rounded-2xl p-6 text-center flex flex-col items-center gap-4 transition-all duration-400 group"
            >
              {/* Animated icon bg */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-gold"
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                {feat.icon}
              </motion.div>

              <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                {feat.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>

              {/* Bottom accent */}
              <div className="w-8 h-0.5 bg-gradient-to-r from-gold/50 to-gold-light/50 mt-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}

          {/* Stats banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="luxury-card rounded-2xl p-6 text-center border-gold/30 bg-gradient-to-br from-gold/8 to-transparent"
          >
            <div className="text-gold font-display text-5xl font-bold mb-2">500+</div>
            <div className="text-white/50 text-sm tracking-widest uppercase mb-4">Happy Clients</div>
            <div className="gold-divider mx-auto mb-4" style={{ width: '40px' }} />
            <div className="text-gold font-display text-4xl font-bold mb-2">99%</div>
            <div className="text-white/50 text-sm tracking-widest uppercase">On-Time Rate</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
