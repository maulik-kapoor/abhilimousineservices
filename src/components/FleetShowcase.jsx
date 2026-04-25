import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Briefcase, Star } from 'lucide-react'

const audiQ7 = '/images/audi_q7.jpg'
const sprinter = '/images/mercedes_sprinter.jpg'
const vclass = '/images/mercedes_vclass.jpg'

const fleet = [
  {
    name: 'Audi Q7',
    subtitle: 'Executive Luxury SUV',
    image: audiQ7,
    passengers: 6,
    luggage: 4,
    tag: 'Executive',
    color: 'from-blue-900/20',
    features: [
      'Premium leather interiors',
      'Climate control',
      'Ideal for executive airport transfers',
      'Privacy glass',
      'Complimentary Wi-Fi',
    ],
    price: 'From $120',
    badge: 'Most Popular',
  },
  {
    name: 'Mercedes Sprinter',
    subtitle: 'Spacious Luxury Group Transport',
    image: sprinter,
    passengers: 12,
    luggage: 10,
    tag: 'Group',
    color: 'from-slate-900/20',
    features: [
      'Executive captain seats',
      'Extra luggage capacity',
      'Corporate and family travel',
      'Built-in entertainment',
      'Air conditioning throughout',
    ],
    price: 'From $200',
    badge: 'Best for Groups',
  },
  {
    name: 'Mercedes-Benz V-Class',
    subtitle: 'VIP Executive Seating',
    image: vclass,
    passengers: 7,
    luggage: 6,
    tag: 'VIP',
    color: 'from-amber-900/20',
    features: [
      'VIP executive seating configuration',
      'Premium comfort for business travel',
      'Luxury airport transfer experience',
      'Individual ambient lighting',
      'Fold-flat seats option',
    ],
    price: 'From $150',
    badge: 'VIP Choice',
  },
]

export default function FleetShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent 70%)' }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Our Luxury Fleet</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The <span className="text-gold-gradient">Perfect Vehicle</span>
            <br />for Every Journey
          </h2>
          <div className="gold-divider mx-auto mb-6" style={{ width: '80px' }} />
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            From executive sedans to spacious group transports, our meticulously maintained
            luxury fleet is curated to deliver an unparalleled travel experience.
          </p>
        </motion.div>

        {/* Fleet Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative luxury-card rounded-2xl overflow-hidden cursor-pointer"
              id={`fleet-${vehicle.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-gold text-luxury-black text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase">
                  {vehicle.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.color} to-transparent z-10`} />
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} – Abhi Limousine Services Sydney`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                {/* Tag */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs tracking-widest uppercase text-gold border border-gold/40 px-3 py-1">
                    {vehicle.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
                <p className="text-gold/70 text-xs tracking-widest uppercase mb-4">{vehicle.subtitle}</p>

                {/* Specs */}
                <div className="flex gap-4 mb-5">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Users size={14} className="text-gold/60" />
                    <span>{vehicle.passengers} passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Briefcase size={14} className="text-gold/60" />
                    <span>{vehicle.luggage} luggage</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="gold-divider mb-5" />

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/50 text-xs">
                      <Star size={10} className="text-gold flex-shrink-0" fill="currentColor" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/30 text-[10px] uppercase tracking-widest">Starting from</div>
                    <div className="text-gold font-serif text-xl font-bold">{vehicle.price}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-gold px-5 py-3 text-xs tracking-widest font-bold"
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </div>

              {/* Bottom gold glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
