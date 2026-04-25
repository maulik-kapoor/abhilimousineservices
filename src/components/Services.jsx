import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Plane, Briefcase, Crown, Hotel, Heart, Users, Car
} from 'lucide-react'

const services = [
  {
    icon: <Plane size={30} />,
    title: 'Sydney Airport Transfers',
    desc: 'Luxury pickups and drop-offs at Sydney Kingsford Smith Airport. Flight tracking, meet & greet included.',
    highlight: true,
  },
  {
    icon: <Briefcase size={30} />,
    title: 'Corporate Chauffeur',
    desc: 'Professional chauffeur services for business executives, corporate events, and boardroom meetings.',
    highlight: false,
  },
  {
    icon: <Crown size={30} />,
    title: 'VIP Transportation',
    desc: 'Exclusive VIP travel experiences with our most prestigious vehicles and personalised concierge service.',
    highlight: false,
  },
  {
    icon: <Hotel size={30} />,
    title: 'Hotel Transfers',
    desc: 'Seamless transfers to and from Sydney\'s finest hotels. Door-to-door luxury service.',
    highlight: false,
  },
  {
    icon: <Heart size={30} />,
    title: 'Wedding Transport',
    desc: 'Make your special day unforgettable with our elegant wedding chauffeur services.',
    highlight: false,
  },
  {
    icon: <Users size={30} />,
    title: 'Group Transfers',
    desc: 'Comfortable group transportation for events, conferences, tours, and corporate functions.',
    highlight: false,
  },
  {
    icon: <Car size={30} />,
    title: 'Executive Business Travel',
    desc: 'Premium door-to-door executive travel with privacy, comfort, and punctuality guaranteed.',
    highlight: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] translate-x-1/2 -translate-y-1/4"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Our Services</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-gold-gradient">Chauffeur Services</span>
            <br />Across Sydney
          </h2>
          <div className="gold-divider mx-auto mb-6" style={{ width: '80px' }} />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            From airport pickups to corporate travel and weddings — every journey with
            Abhi Limousine Services is an experience of unmatched luxury and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`luxury-card rounded-xl p-6 transition-all duration-400 cursor-default ${
                service.highlight
                  ? 'border-gold/40 bg-gradient-to-br from-gold/5 to-transparent'
                  : ''
              }`}
            >
              {service.highlight && (
                <div className="text-[9px] tracking-widest uppercase text-gold border border-gold/30 px-2 py-1 inline-block mb-4">
                  Most Requested
                </div>
              )}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-gold mb-4"
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>

              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gold text-xs tracking-widest uppercase hover:text-gold-light transition-colors font-medium"
                >
                  Book This Service →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
