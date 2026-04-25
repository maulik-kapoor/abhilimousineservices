import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

const vehicles = ['Audi Q7', 'Mercedes Sprinter', 'Mercedes-Benz V-Class 2018']
const childSeatOptions = ['None Required', 'Baby Seat (0–12 months)', 'Booster Seat (1–4 years)', 'Booster Seat (4–8 years)', 'Multiple Seats Required']

export default function BookingForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    pickup: '', destination: '', flightNumber: '',
    date: '', time: '', vehicle: '',
    passengers: '', childSeat: '', requests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass = 'luxury-input w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none'

  return (
    <section className="section-padding section-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag mb-6">Book Your Journey</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Reserve Your
              <br />
              <span className="text-gold-gradient">Luxury Transfer</span>
            </h2>
            <div className="gold-divider mb-6" style={{ width: '80px' }} />
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Fill in your journey details and we&apos;ll get back to you promptly with
              a personalised quote. Alternatively, call us directly for immediate assistance.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {[
                { label: 'Phone', value: '+61 400 000 000', href: 'tel:+61400000000' },
                { label: 'WhatsApp', value: '+61 400 000 000', href: 'https://wa.me/61400000000' },
                { label: 'Email', value: 'info@abhilimousine.com.au', href: 'mailto:info@abhilimousine.com.au' },
              ].map((c, i) => (
                <a key={i} href={c.href}
                  className="flex items-center gap-4 group hover:text-gold transition-colors">
                  <span className="text-xs tracking-widest uppercase text-gold/50 w-20 flex-shrink-0">{c.label}</span>
                  <span className="gold-divider" style={{ width: '30px', height: '1px' }} />
                  <span className="text-white/70 group-hover:text-gold transition-colors text-sm">{c.value}</span>
                </a>
              ))}
            </div>

            {/* Service area */}
            <div className="glass-dark rounded-xl p-6">
              <div className="text-xs tracking-widest uppercase text-gold mb-3">Service Areas</div>
              <div className="grid grid-cols-2 gap-2">
                {['Sydney CBD', 'Parramatta', 'North Sydney', 'Eastern Suburbs', 'Western Sydney', 'Hills District', 'Inner West', 'Northern Beaches'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-white/50 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 md:p-10" style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Booking Request</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6 text-gold">
                    <Send size={32} />
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-3">Request Received!</h4>
                  <p className="text-white/50 text-sm">
                    Thank you for your enquiry. Our team will contact you within 15 minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Full Name *</label>
                      <input id="form-name" name="name" type="text" required placeholder="John Smith"
                        value={form.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Phone *</label>
                      <input id="form-phone" name="phone" type="tel" required placeholder="+61 4XX XXX XXX"
                        value={form.phone} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Email Address *</label>
                    <input id="form-email" name="email" type="email" required placeholder="john@example.com"
                      value={form.email} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Pickup Location *</label>
                      <input id="form-pickup" name="pickup" type="text" required placeholder="Sydney Airport T1"
                        value={form.pickup} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Destination *</label>
                      <input id="form-destination" name="destination" type="text" required placeholder="Sydney CBD"
                        value={form.destination} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  {/* Flight & Date/Time */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Flight Number</label>
                      <input id="form-flight" name="flightNumber" type="text" placeholder="QF 404"
                        value={form.flightNumber} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Date *</label>
                      <input id="form-date" name="date" type="date" required
                        value={form.date} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Time *</label>
                      <input id="form-time" name="time" type="time" required
                        value={form.time} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  {/* Vehicle & Passengers */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Select Vehicle *</label>
                      <select id="form-vehicle" name="vehicle" required value={form.vehicle}
                        onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                        <option value="">Choose vehicle...</option>
                        {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Passengers *</label>
                      <select id="form-passengers" name="passengers" required value={form.passengers}
                        onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                        <option value="">Select...</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} Passenger{i > 0 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Child Seat */}
                  <div>
                    <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Child Seat Requirement</label>
                    <select id="form-child-seat" name="childSeat" value={form.childSeat}
                      onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                      {childSeatOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Special requests */}
                  <div>
                    <label className="text-xs tracking-widest uppercase text-gold/60 mb-2 block">Special Requests</label>
                    <textarea id="form-requests" name="requests" rows={3} placeholder="Any special requirements..."
                      value={form.requests} onChange={handleChange}
                      className={`${inputClass} resize-none`} />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    id="form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full py-5 text-sm tracking-widest font-bold flex items-center justify-center gap-3 mt-2"
                  >
                    <Send size={16} />
                    Send Booking Request
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
