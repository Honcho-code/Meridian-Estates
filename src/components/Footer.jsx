import Logo from './Logo'

const FOOTER_LINKS = {
  Properties: ['Lekki Listings', 'Ikoyi Estates', 'V.I Properties', 'Banana Island', 'New Developments'],
  Services:   ['Property Sales', 'Rentals', 'Management', 'Investment', 'Valuations'],
  Company:    ['About Us', 'Our Agents', 'News', 'Careers', 'Contact Us'],
}

const SOCIAL_ICONS = [
  // Instagram
  <svg key="ig" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  // Twitter/X
  <svg key="tw" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.4 9 4.5-.1-.8-.1-1.6.1-2.4.4-2 2.3-3.6 4.3-3.6 1 0 2 .4 2.8 1L22 4z"/></svg>,
  // Facebook
  <svg key="fb" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  // LinkedIn
  <svg key="li" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
]

export default function Footer({ onToast }) {
  const goTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#0D0C0B] pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-[1300px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => goTo('hero')}
              className="flex items-center gap-2.5 mb-4"
              aria-label="Back to top"
            >
              <Logo size={34} />
              <div>
                <div className="font-serif text-[19px] font-bold text-white leading-none tracking-tight">Meridian</div>
                <div className="text-[9px] font-semibold tracking-[.2em] text-gold uppercase leading-none mt-0.5">Estates</div>
              </div>
            </button>
            <p className="text-[13px] text-white/45 leading-relaxed max-w-[260px] mb-5">
              Lagos's leading real estate agency. Connecting people to exceptional properties since 2009.
            </p>
            {/* Social links */}
            <div className="flex gap-2.5">
              {SOCIAL_ICONS.map((icon, i) => (
                <button
                  key={i}
                  onClick={() => onToast('Social profiles coming soon!', 'info')}
                  className="w-9 h-9 rounded-full border border-white/12 text-white/60 hover:bg-gold hover:border-gold hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Social link"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-[10.5px] font-bold tracking-[.14em] text-gold uppercase mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() =>
                        link === 'About Us'     ? goTo('about') :
                        link === 'Contact Us'   ? goTo('contact') :
                        onToast('Coming soon', 'info')
                      }
                      className="text-[13px] text-white/42 hover:text-white transition-colors duration-200 font-sans"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12px] text-white/28">
            © 2025 Meridian Estates Nigeria Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <button
                key={item}
                onClick={() => onToast('Coming soon', 'info')}
                className="text-[11.5px] text-white/28 hover:text-white transition-colors duration-200 font-sans"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
