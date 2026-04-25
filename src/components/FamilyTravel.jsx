import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Baby, ShieldCheck, Heart, Star } from 'lucide-react'

const familyFeatures = [
  {
    icon: <Baby size={28} />,
    title: 'Baby Seats Available',
    desc: 'Certified infant and baby seats for the safest travel experience for your little ones.',
    highlight: 'Certified Safety',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Booster Seats Available',
    desc: 'Height-appropriate booster seats for toddlers and older children, ensuring full compliance.',
    highlight: 'Compliant & Safe',
  },
  {
    icon: <Heart size={28} />,
    title: 'Family-Friendly Service',
    desc: 'Patient, caring chauffeurs who understand the needs of families travelling with children.',
    highlight: 'Child-Friendly',
  },
  {
    icon: <Star size={28} />,
    title: 'Spacious Vehicles',
    desc: 'Ample space for strollers, prams, and extra luggage — no family needs are overlooked.',
    highlight: 'Extra Space',
  },
]

const steps = [
  { number: '01', label: 'Select Your Vehicle', desc: 'Choose from our luxury family-friendly fleet' },
  { number: '02', label: 'Request Child Seats', desc: 'Specify baby or booster seat requirements' },
  { number: '03', label: 'Relax & Travel', desc: 'Enjoy a safe, comfortable family journey' },
]

export default function FamilyTravel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="section-padding section-charcoal relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04] -translate-x-1/2 -translate-y-1/4"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Family Travel</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Safe & Comfortable Travel
            <br />
            <span className="text-gold-gradient">for the Whole Family</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" style={{ width: '80px' }} />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            We understand that travelling with children requires extra care and preparation.
            Abhi Limousine Services provides a premium, family-friendly transport experience
            with full child seat provisions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {familyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, borderColor: 'rgba(201,168,76,0.4)' }}
              className="luxury-card rounded-2xl p-6 text-center flex flex-col items-center gap-4 transition-all duration-400"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-gold"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                {feature.icon}
              </div>

              {/* Highlight badge */}
              <span className="text-[10px] tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">
                {feature.highlight}
              </span>

              <h3 className="font-serif text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Steps Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-10">
            How to Book Family Transport
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <span className="font-display text-2xl font-bold text-gold-gradient">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-px hidden md:block"
                      style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
                  )}
                </div>
                <h4 className="text-white font-semibold mb-2">{step.label}</h4>
                <p className="text-white/40 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
