import { useState } from 'react'
import { Building2 } from 'lucide-react'
import { PROPERTIES } from '../data'
import PropertyCard from './PropertyCard'
import { useInView } from '../hooks/useInView'

const FILTERS = ['All', 'Buy', 'Rent']

export default function Properties({ searchQuery, searchType, onToast }) {
  const [filter, setFilter] = useState(searchType || 'All')
  const [ref, inView] = useInView()

  const filtered = PROPERTIES.filter((p) => {
    const matchType   = filter === 'All' || p.type === filter
    const q           = searchQuery?.toLowerCase() || ''
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.address.toLowerCase().includes(q)
    return matchType && matchSearch
  })

  const handleEnquire = (property) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    onToast(`Enquiring about "${property.title}"`, 'success')
  }

  return (
    <section id="properties" ref={ref} className="py-24 lg:py-28 px-6 lg:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Header row */}
        <div
          className={`flex flex-wrap items-end justify-between gap-5 mb-12
            ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[.15em] text-gold uppercase mb-2.5">
              Our Listings
            </p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-tight leading-[1.1]">
              Handpicked Properties<br />Just for You
            </h2>
          </div>
          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-lg text-[13.5px] font-semibold border-[1.5px] transition-all duration-200
                  ${filter === f
                    ? 'bg-gold border-gold text-white'
                    : 'bg-transparent border-ink-border text-ink-muted hover:border-gold hover:text-gold'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-ink-muted">
            <Building2 size={44} className="mx-auto mb-4 text-ink-border" />
            <p className="text-[15px]">No listings match your search. Try a different keyword or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <div
                key={property.id}
                className={inView ? 'animate-fade-up' : 'opacity-0'}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <PropertyCard
                  property={property}
                  onEnquire={handleEnquire}
                  onToast={onToast}
                />
              </div>
            ))}
          </div>
        )}

        {/* View all */}
        <div className="text-center mt-12">
          <button
            onClick={() => onToast('Full catalogue launching soon — stay tuned!', 'info')}
            className="border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-bold px-9 py-3.5 rounded-xl transition-all duration-200"
          >
            View All Listings
          </button>
        </div>
      </div>
    </section>
  )
}
