import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Corporate Executive, Sydney CBD',
    stars: 5,
    review: 'Absolutely outstanding service. I use Abhi Limousine for all my airport transfers and corporate travel. The Audi Q7 was immaculate, the driver professional, and I arrived exactly on time despite a delayed flight. Cannot recommend highly enough.',
    trip: 'Sydney Airport → CBD',
  },
  {
    name: 'Sarah & Michael Chen',
    role: 'Family Travellers',
    stars: 5,
    review: 'Travelling with two young children can be stressful but Abhi made it seamless. The baby seat and booster seat were already installed when we arrived. The Mercedes V-Class was spotless and incredibly spacious. Five stars without hesitation!',
    trip: 'Family Airport Transfer',
  },
  {
    name: 'David Harrington',
    role: 'CEO, Sydney Finance Group',
    stars: 5,
    review: 'My company regularly books Abhi Limousine for executive transfers. The level of professionalism, discretion, and comfort is unmatched. The flight tracking service means the driver is always waiting when I land — no matter what time.',
    trip: 'Executive Corporate Travel',
  },
  {
    name: 'Emma Thompson',
    role: 'Travel Blogger, Melbourne',
    stars: 5,
    review: 'Visited Sydney and booked a city tour with Abhi Limousine. The experience was incredible — luxurious vehicle, knowledgeable and friendly chauffeur, and the most comfortable way to see the city. Already planning my next booking.',
    trip: 'Sydney City Tour',
  },
  {
    name: 'Robert & Amanda Kim',
    role: 'Wedding Clients',
    stars: 5,
    review: 'Our wedding transport was absolutely perfect. The Mercedes Sprinter arrived spotlessly clean, decorated beautifully, and our chauffeur was incredibly professional. Abhi Limousine made our special day even more special.',
    trip: 'Wedding Transportation',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="section-padding section-dark relative overflow-hidden">
      {/* Decorative gold orbs */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full opacity-[0.05] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
      <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full opacity-[0.05] translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Testimonials</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Valued
            <br />
            <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" style={{ width: '80px' }} />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="glass-dark rounded-2xl p-8 md:p-12"
            >
              {/* Quote mark */}
              <div className="text-gold/20 font-display text-[120px] leading-none -mt-8 mb-2 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 -mt-6">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold" fill="#C9A84C" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-8 font-serif italic">
                &ldquo;{testimonials[current].review}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="gold-divider mb-6" style={{ width: '60px' }} />

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-luxury-black font-bold text-lg"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)' }}>
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[current].name}</div>
                    <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                  </div>
                </div>
                <div className="text-xs tracking-widest uppercase text-gold border border-gold/30 px-3 py-1.5">
                  {testimonials[current].trip}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-luxury-black transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-luxury-black transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
