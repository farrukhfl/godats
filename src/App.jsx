import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import SplashScreen from './components/SplashScreen'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErpConsulting from './pages/ErpConsulting'
import AiConsulting from './pages/AiConsulting'
import AppDevelopment from './pages/AppDevelopment'
import DomainSearch from './pages/DomainSearch'
import WebHosting from './pages/WebHosting'
import CloudHosting from './pages/CloudHosting'
import ResellerHosting from './pages/ResellerHosting'
import MakeAWebsite from './pages/MakeAWebsite'
import WebDesign from './pages/WebDesign'
import EcommerceStoreDesign from './pages/EcommerceStoreDesign'
import Email from './pages/Email'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import PartnerProgram from './pages/PartnerProgram'
import Careers from './pages/Careers'
import JobOpenings from './pages/JobOpenings'
import JobDetail from './pages/JobDetail'
import NotFound from './pages/NotFound'

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.99 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <SplashScreen />
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/domain-search" element={<PageWrapper><DomainSearch /></PageWrapper>} />
            <Route path="/web-hosting" element={<PageWrapper><WebHosting /></PageWrapper>} />
            <Route path="/cloud-hosting" element={<PageWrapper><CloudHosting /></PageWrapper>} />
            <Route path="/reseller-hosting" element={<PageWrapper><ResellerHosting /></PageWrapper>} />
            <Route path="/make-a-website" element={<PageWrapper><MakeAWebsite /></PageWrapper>} />
            <Route path="/web-design" element={<PageWrapper><WebDesign /></PageWrapper>} />
            <Route path="/app-development" element={<PageWrapper><AppDevelopment /></PageWrapper>} />
            <Route path="/ecommerce-store-design" element={<PageWrapper><EcommerceStoreDesign /></PageWrapper>} />
            <Route path="/erp-consulting" element={<PageWrapper><ErpConsulting /></PageWrapper>} />
            <Route path="/ai-consulting" element={<PageWrapper><AiConsulting /></PageWrapper>} />
            <Route path="/email" element={<PageWrapper><Email /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
            <Route path="/partner-program" element={<PageWrapper><PartnerProgram /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/job-openings" element={<PageWrapper><JobOpenings /></PageWrapper>} />
            <Route path="/jobs/:slug" element={<PageWrapper><JobDetail /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
