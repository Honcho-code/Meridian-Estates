import { useState } from 'react'
import { MapPin, Bed, Bath, Maximize2, Heart, ArrowRight } from 'lucide-react'
import { TAG_STYLES } from '../data'

export default function PropertyCard({ property, onEnquire, onToast }) {
  const [liked, setLiked] = useState(false)

  const handleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
    onToast(
      liked ? 'Removed from saved properties' : 'Added to your saved properties',
      liked ? 'info' : 'success'
    )
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-ink-border group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Tag */}
        <span
          className={`absolute top-3 left-3 text-[10.5px] font-bold px-2.5 py-1 rounded-md tracking-wide
            ${TAG_STYLES[property.tag] || 'bg-gray-100 text-gray-700'}`}
        >
          {property.tag}
        </span>

        {/* Like */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label={liked ? 'Remove from saved' : 'Save property'}
        >
          <Heart
            size={14}
            fill={liked ? '#EF4444' : 'none'}
            className={liked ? 'text-red-500' : 'text-ink-muted'}
          />
        </button>

        {/* Area chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-ink/70 rounded-md px-2 py-1">
          <MapPin size={9} className="text-white/75" />
          <span className="text-[10.5px] text-white/85">
            {property.address.split(',').at(-1).trim()}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-[16px] font-bold text-ink leading-snug mb-1">{property.title}</h3>
        <p className="text-[12.5px] text-ink-muted mb-4">{property.address}</p>

        {/* Details */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-[12px] text-ink-muted">
            <Bed size={12} />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-ink-muted">
            <Bath size={12} />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-ink-muted">
            <Maximize2 size={12} />
            <span>{property.sqm} m²</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="font-serif text-[20px] font-bold text-ink tracking-tight">
            {property.price}
          </span>
          <button
            onClick={() => onEnquire(property)}
            className="flex items-center gap-1.5 bg-ink hover:bg-gold text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Enquire
            <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </article>
  )
}
