import { Home, TrendingUp, Shield, Clock, Award, Compass } from 'lucide-react'
import { SERVICES } from '../data'
import { useInView } from '../hooks/useInView'

const ICON_MAP = { Home, TrendingUp, Shield, Clock, Award, Compass }

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" ref={ref} className="bg-cream-dark py-24 lg:py-28 px-6 lg:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-[11px] font-semibold tracking-[.15em] text-gold uppercase mb-2.5">
            What We Offer
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-tight leading-[1.15] max-w-[460px] mx-auto">
            A Complete Real Estate Experience
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div
                key={i}
                className={`
                  bg-white rounded-2xl p-7 border border-ink-border
                  hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300
                  ${inView ? 'animate-fade-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-5">
                  {Icon && <Icon size={20} className="text-gold" />}
                </div>
                <h3 className="text-[15.5px] font-bold text-ink mb-2.5">{service.title}</h3>
                <p className="text-[13.5px] text-ink-muted leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
