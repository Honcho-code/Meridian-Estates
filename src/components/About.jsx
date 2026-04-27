import { ArrowRight, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const METRICS = [
  { value: '₦200B+', label: 'Total Transactions' },
  { value: '45',     label: 'Expert Agents' },
  { value: '6',      label: 'Offices in Lagos' },
]

export default function About({ onToast }) {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="py-24 lg:py-28 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[7%] items-center">

        {/* Image */}
        <div className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85"
              alt="Luxury Lagos property"
              className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Float badge */}
          <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-xl px-5 py-4 shadow-xl border border-ink-border">
            <div className="flex items-center gap-2 mb-1.5">
              <Award size={14} className="text-gold" />
              <span className="text-[10.5px] font-bold text-ink tracking-wide uppercase">Certified Agency</span>
            </div>
            <p className="text-[12px] text-ink-muted leading-snug">
              Lagos State Real Estate<br />Regulatory Authority
            </p>
          </div>
        </div>

        {/* Text */}
        <div className={inView ? 'animate-fade-up delay-200' : 'opacity-0'}>
          <p className="text-[11px] font-semibold tracking-[.15em] text-gold uppercase mb-3.5">
            About Meridian
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] font-semibold tracking-tight leading-[1.12] mb-5">
            Fifteen Years of Turning<br />Keys into Milestones
          </h2>
          <p className="text-[15px] text-ink-muted leading-relaxed mb-4">
            Founded in 2009, Meridian Estates has grown from a boutique consultancy into
            Lagos's most trusted luxury property firm. We have facilitated over ₦200 billion
            in transactions across the city's most coveted addresses.
          </p>
          <p className="text-[15px] text-ink-muted leading-relaxed mb-10">
            Our team of 45 seasoned professionals brings unrivalled market knowledge,
            discretion, and genuine care to every client — whether you are securing your
            first home or expanding a portfolio.
          </p>

          {/* Metrics */}
          <div className="flex gap-8 mb-10 flex-wrap">
            {METRICS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-[26px] font-bold text-ink tracking-tight">{value}</div>
                <div className="text-[12.5px] text-ink-muted mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              onToast('Let\'s connect — fill in the form below', 'info')
            }}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors duration-200"
          >
            Work With Us <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}
