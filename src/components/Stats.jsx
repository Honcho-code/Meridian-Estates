import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { STATS } from '../data'

function Counter({ end, suffix, active }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!active) return
    let current = 0
    const step = end / (1800 / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        setVal(end)
        clearInterval(timer)
      } else {
        setVal(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, end])

  return (
    <span>{val.toLocaleString()}{suffix}</span>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.3)

  return (
    <section id="stats" ref={ref} className="bg-night">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`
                py-14 px-6 text-center
                ${i < 3 ? 'border-r border-white/5' : ''}
              `}
            >
              <div className="font-serif text-[clamp(36px,4.5vw,52px)] font-bold text-gold leading-none tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              <div className="text-[11px] text-white/40 mt-2.5 tracking-[.1em] uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
