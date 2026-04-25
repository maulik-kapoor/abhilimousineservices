import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AirportTransfers from './components/AirportTransfers'
import FleetShowcase from './components/FleetShowcase'
import FamilyTravel from './components/FamilyTravel'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import About from './components/About'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import StickyBookingCTA from './components/StickyBookingCTA'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="min-h-screen bg-luxury-black">
          <Navbar />
          <main>
            <section id="home"><Hero /></section>
            <section id="airport-transfers"><AirportTransfers /></section>
            <section id="fleet"><FleetShowcase /></section>
            <section id="family"><FamilyTravel /></section>
            <section id="services"><Services /></section>
            <section id="about"><About /></section>
            <section id="why-us"><WhyChooseUs /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="contact"><BookingForm /></section>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <StickyBookingCTA />
        </div>
      )}
    </>
  )
}

export default App
