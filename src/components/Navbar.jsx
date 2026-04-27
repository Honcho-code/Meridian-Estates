import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data'

export default function Navbar({ onContact }) {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_#E8E2D8]'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[70px]">

        {/* Brand */}
        <button
          onClick={() => goTo('hero')}
          className="flex items-center gap-2.5"
          aria-label="Meridian Estates home"
        >
          <Logo size={36} />
          <div className="text-left">
            <div
              className={`font-serif text-[19px] font-bold leading-none tracking-tight transition-colors duration-300
                ${scrolled ? 'text-ink' : 'text-white'}`}
            >
              Meridian
            </div>
            <div className="text-[9px] font-semibold tracking-[.18em] text-gold uppercase leading-none mt-0.5">
              Estates
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              className={`
                relative text-sm font-medium transition-colors duration-200
                after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px]
                after:bg-gold after:w-0 hover:after:w-full after:transition-all after:duration-300
                ${scrolled ? 'text-ink hover:text-gold' : 'text-white/85 hover:text-white'}
              `}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => goTo('contact')}
            className="hidden md:inline-flex items-center bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`
              md:hidden p-2 rounded-lg border transition-colors duration-200
              ${scrolled ? 'border-ink-border text-ink' : 'border-white/30 text-white'}
            `}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-ink-border px-6 pb-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => goTo(link)}
              className="block w-full text-left text-sm font-medium text-ink py-3.5 border-b border-ink-border hover:text-gold transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { goTo('contact'); setMobileOpen(false) }}
            className="mt-4 w-full bg-gold hover:bg-gold-dark text-white text-sm font-semibold py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  )
}
