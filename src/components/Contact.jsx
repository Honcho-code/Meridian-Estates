import { useState } from 'react'
import { Phone, Mail, MapPin, Shield, ArrowRight, Loader2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CONTACT_INFO = [
  { Icon: Phone,  label: 'Call Us',  value: '+234 801 234 5678' },
  { Icon: Mail,   label: 'Email',    value: 'hello@meridianestates.ng' },
  { Icon: MapPin, label: 'Visit Us', value: '14 Adeola Odeku St, Victoria Island, Lagos' },
]

const INTERESTS = ['Buy', 'Rent', 'Sell', 'Investment Advisory', 'Property Valuation']

const EMPTY_FORM = { name: '', email: '', phone: '', interest: 'Buy', message: '' }

export default function Contact({ onToast }) {
  const [form, setForm]     = useState(EMPTY_FORM)
  const [sending, setSending] = useState(false)
  const [ref, inView]       = useInView()

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      onToast('Please fill in your name and email address.', 'error')
      return
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      onToast('Please enter a valid email address.', 'error')
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm(EMPTY_FORM)
      onToast('Your enquiry has been received. We will be in touch within 24 hours.', 'success')
    }, 2000)
  }

  const inputClass =
    'w-full border border-ink-border rounded-lg px-3.5 py-2.5 text-[13.5px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all duration-200 font-sans bg-white'

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-28 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[7%] items-start">

        {/* Left — info */}
        <div className={inView ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-[11px] font-semibold tracking-[.15em] text-gold uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] font-semibold tracking-tight leading-[1.12] mb-4">
            Let's Find Your<br />Perfect Property
          </h2>
          <p className="text-[15px] text-ink-muted leading-relaxed mb-10">
            Our agents are available Monday to Saturday, 8 am – 7 pm.
            Submit your enquiry and we will respond within 24 hours.
          </p>

          {/* Contact details */}
          <div className="space-y-6 mb-9">
            {CONTACT_INFO.map(({ Icon, label, value }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-11 h-11 min-w-[44px] rounded-xl bg-gold-light flex items-center justify-center">
                  <Icon size={17} className="text-gold" />
                </div>
                <div>
                  <p className="text-[11px] text-ink-muted mb-0.5 tracking-wide">{label}</p>
                  <p className="text-[14px] font-semibold text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <div className="flex gap-3.5 items-start bg-cream-dark rounded-xl p-5 border border-ink-border">
            <Shield size={18} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-[13px] font-bold text-ink mb-1">Your Privacy is Protected</p>
              <p className="text-[12.5px] text-ink-muted leading-relaxed">
                We never share your details with third parties. Our team will reach out only about your enquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          className={`bg-white rounded-2xl p-8 border border-ink-border shadow-lg
            ${inView ? 'animate-fade-up delay-200' : 'opacity-0'}`}
        >
          <h3 className="text-[19px] font-bold text-ink mb-6">Send an Enquiry</h3>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-semibold text-ink mb-1.5 tracking-wide">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Emeka Adeyemi"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-ink mb-1.5 tracking-wide">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="emeka@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-semibold text-ink mb-1.5 tracking-wide">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-ink mb-1.5 tracking-wide">
                  Interested in
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {INTERESTS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[11px] font-semibold text-ink mb-1.5 tracking-wide">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your ideal property — location, budget, timeline, and any specific requirements…"
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark disabled:bg-ink-muted text-white font-bold text-[14.5px] py-3.5 rounded-xl transition-colors duration-200"
            >
              {sending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Submit Enquiry
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <p className="text-center text-[11.5px] text-ink-muted mt-3.5">
              We respond to all enquiries within 24 hours, Monday – Saturday.
            </p>
          </form>
        </div>

      </div>
    </section>
  )
}
