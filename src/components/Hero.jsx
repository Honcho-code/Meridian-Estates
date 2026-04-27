import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

const AREAS = ['Lekki', 'Ikoyi', 'Victoria Island', 'Banana Island', 'Ajah']

export default function Hero({ onSearch, onToast }) {
  const [query, setQuery]   = useState('')
  const [type, setType]     = useState('All')

  const handleSearch = () => {
    onSearch(query, type)
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })
    onToast('Showing matching listings', 'info')
  }

  const handleAreaClick = (area) => {
    setQuery(area)
    onSearch(area, type)
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })
    onToast(`Showing ${area} listings`, 'info')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/60 via-ink/35 to-ink/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-28 pb-20 w-full max-w-[860px] mx-auto">

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-7 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold block" />
          <span className="text-[11px] text-white/90 font-medium tracking-[.14em] uppercase">
            Lagos's Premier Real Estate Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[clamp(42px,7vw,82px)] font-semibold text-white leading-[1.08] tracking-tight mb-5 animate-fade-up">
          Find Where Your<br />
          <em className="text-gold not-italic">Story Begins</em>
        </h1>

        {/* Subtext */}
        <p className="text-[clamp(15px,1.8vw,18px)] text-white/75 leading-relaxed max-w-[500px] mx-auto mb-12 font-light animate-fade-up delay-100">
          Curating exceptional homes across Lagos since 2009. From Banana Island
          manors to serene Lekki villas — we match you to your ideal property.
        </p>

        {/* Search bar */}
        <div className="bg-white rounded-xl p-1.5 pl-5 flex items-center gap-2 max-w-[620px] mx-auto shadow-2xl mb-6 animate-fade-up delay-200">
          <Search size={16} className="text-ink-muted shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search by location, property type, keyword…"
            className="flex-1 text-[13.5px] text-ink placeholder:text-ink-muted bg-transparent focus:outline-none font-sans"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-l border-ink-border bg-transparent text-ink-muted text-[13px] px-3 h-9 focus:outline-none cursor-pointer font-sans"
          >
            <option value="All">All Types</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-gold hover:bg-gold-dark text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shrink-0"
          >
            Search
          </button>
        </div>

        {/* Area quick links */}
        <div className="flex gap-2.5 justify-center flex-wrap animate-fade-up delay-300">
          {AREAS.map((area) => (
            <button
              key={area}
              onClick={() => handleAreaClick(area)}
              className="bg-white/12 hover:bg-gold/30 border border-white/25 hover:border-gold/60 text-white/85 text-[11.5px] rounded-full px-3.5 py-1 transition-all duration-200"
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/15 border border-white/35 flex items-center justify-center animate-bob z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={18} className="text-white" />
      </button>
    </section>
  )
}
