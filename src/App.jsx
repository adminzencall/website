import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

// Import pages
import HomePage from './pages/home'
import ServicesPage from './pages/services'
import DemoPage from './pages/demo'
import PricingPage from './pages/pricing'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ComingSoonPage from './pages/comingsoon'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><HomePage /></Layout>} />
        <Route path="/services" element={<Layout currentPageName="Services"><ServicesPage /></Layout>} />
        <Route path="/demo" element={<Layout currentPageName="Demo"><DemoPage /></Layout>} />
        <Route path="/pricing" element={<Layout currentPageName="Pricing"><PricingPage /></Layout>} />
        <Route path="/about" element={<Layout currentPageName="About"><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout currentPageName="Contact"><ContactPage /></Layout>} />
        <Route path="/coming-soon" element={<Layout currentPageName="ComingSoon"><ComingSoonPage /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
