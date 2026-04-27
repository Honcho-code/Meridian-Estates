const AREAS = [
  'Lekki Phase 1', 'Victoria Island', 'Ikoyi', 'Banana Island',
  'Ajah', 'Oniru', 'Ikate', 'Osapa London', 'Chevron', 'Lekki Phase 2',
]

export default function Marquee() {
  const repeated = [...AREAS, ...AREAS]

  return (
    <div className="bg-gold overflow-hidden py-3.5">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((area, i) => (
          <span
            key={i}
            className="text-[11.5px] font-semibold text-white/80 tracking-[.1em] uppercase mx-5"
          >
            {area}
            <span className="mx-4 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
