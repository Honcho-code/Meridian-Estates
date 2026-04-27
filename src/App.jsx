import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Stats         from './components/Stats'
import Properties    from './components/Properties'
import Services      from './components/Services'
import About         from './components/About'
import Marquee       from './components/Marquee'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import { ToastContainer } from './components/Toast'
import { useToast }  from './hooks/useToast'
import { useEffect } from 'react'

export default function App() {
  const { toasts, addToast, removeToast } = useToast()
  const [searchQuery, setSearchQuery]     = useState('')
  const [searchType, setSearchType]       = useState('All')
  const [showBackTop, setShowBackTop]     = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (query, type) => {
    setSearchQuery(query)
    setSearchType(type)
  }

  return (
    <>
      {/* Toast notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      {/* Back to top */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-7 right-7 z-[800] w-11 h-11 rounded-full bg-ink hover:bg-gold text-white flex items-center justify-center shadow-lg transition-colors duration-200"
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <Navbar />

      <main>
        <Hero
          onSearch={handleSearch}
          onToast={addToast}
        />
        <Stats />
        <Properties
          searchQuery={searchQuery}
          searchType={searchType}
          onToast={addToast}
        />
        <Services />
        <About onToast={addToast} />
        <Marquee />
        <Testimonials />
        <Contact onToast={addToast} />
      </main>

      <Footer onToast={addToast} />
    </>
  )
}
