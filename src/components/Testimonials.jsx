import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { useInView } from '../hooks/useInView'

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" ref={ref} className="bg-night py-24 lg:py-28 px-6 lg:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Heading */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-[11px] font-semibold tracking-[.15em] text-gold uppercase mb-2.5">
            Client Stories
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold text-white tracking-tight leading-[1.15]">
            Trusted by People Who<br />Demand the Best
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`
                bg-white/5 border border-white/10 rounded-2xl p-7
                hover:-translate-y-1.5 hover:bg-white/8 transition-all duration-300
                ${inView ? 'animate-fade-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-[14px] text-white/72 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 border-2 border-gold ${t.avatarColor}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-white">{t.name}</div>
                  <div className="text-[11.5px] text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
