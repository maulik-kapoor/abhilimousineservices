import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  { year: '2015', label: 'Founded in Sydney', desc: 'Abhi Limousine Services began with a simple vision — to offer Sydney its most premium chauffeur experience.' },
  { year: '2017', label: 'Airport Transfer Specialists', desc: 'Became Sydney\'s trusted airport transfer specialists with a growing fleet of luxury vehicles.' },
  { year: '2019', label: 'Fleet Expansion', desc: 'Added the Mercedes Sprinter and V-Class to cater to group and family travel demands.' },
  { year: '2024', label: '500+ VIP Clients', desc: 'Now serving over 500 regular VIP and corporate clients across the greater Sydney region.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle at top right, #C9A84C, transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag mb-6">About Us</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sydney&apos;s Most Trusted
              <br />
              <span className="text-gold-gradient">Luxury Chauffeur</span>
            </h2>
            <div className="gold-divider mb-8" style={{ width: '80px' }} />

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                Abhi Limousine Services was founded with a singular purpose: to redefine what luxury
                ground transportation means in Sydney. We believe that every journey — whether to the
                airport, a corporate meeting, or a special occasion — deserves to be experienced in
                absolute comfort and style.
              </p>
              <p>
                Our team of professional, fully-licensed chauffeurs are selected for their expertise,
                discretion, and dedication to exceptional service. Every vehicle in our fleet is
                meticulously maintained and presented to the highest standards.
              </p>
              <p>
                From solo executives to families with young children, we tailor every ride to your
                exact requirements. Child seats, extra luggage space, flight tracking, meet-and-greet
                — consider it done.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: '10+', label: 'Years Experience' },
                { num: '500+', label: 'Happy Clients' },
                { num: '24/7', label: 'Always Available' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center py-4 border border-gold/15 rounded-lg"
                >
                  <div className="font-display text-3xl font-bold text-gold-gradient">{stat.num}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex gap-8 pl-12 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-12 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-2 border-gold bg-luxury-black" />
                  </div>

                  <div className="flex-1 luxury-card rounded-xl p-5">
                    <div className="text-gold font-display text-xl font-bold mb-1">{m.year}</div>
                    <div className="text-white font-semibold mb-2">{m.label}</div>
                    <div className="text-white/40 text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
