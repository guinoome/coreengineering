import { useState, useEffect } from 'react'

// ─── Constants ─────────────────────────────────────────────────────────────
const PHONE       = '+639151983899'
const PHONE_LABEL = '+63 915 198 3899'
const EMAIL       = 'fmguinoo@gmail.com'
const WA_NUM      = '639151983899'
const MAPS_URL    = 'https://maps.google.com/?q=Habay+San+Francisco+Southern+Leyte+Philippines'

// ─── Icons ──────────────────────────────────────────────────────────────────
const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.9z"/>
  </svg>
)
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)
const IconGear = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconWA = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)
const IconCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1, tag: 'Mechanical & Electrical', title: 'MEPF Engineering',
    desc: 'Full-scope mechanical, electrical, plumbing, and fire protection design, installation, and commissioning for commercial and industrial facilities.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
    alt: 'Electrical switchgear panel',
  },
  {
    id: 2, tag: 'Renewable Energy', title: 'Solar Energy Systems',
    desc: 'End-to-end solar project delivery — feasibility study, detailed design, procurement, and commissioning at commercial and utility scale.',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    alt: 'Utility-scale solar farm',
  },
  {
    id: 3, tag: 'Industrial Operations', title: 'Plant Operations & Maintenance',
    desc: 'Comprehensive O&M programs for gensets, boilers, chillers, cooling towers, STP, desalination units, and fire pumps — focused on uptime and safety.',
    img: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&auto=format&fit=crop&q=80',
    alt: 'Industrial plant equipment',
  },
  {
    id: 4, tag: 'Climate Systems', title: 'HVAC Design & Troubleshooting',
    desc: 'Precise HVAC design, load calculations, equipment selection, and field troubleshooting for commercial and industrial climate control requirements.',
    img: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=800&auto=format&fit=crop&q=80',
    alt: 'HVAC rooftop units',
  },
  {
    id: 5, tag: 'Project Delivery', title: 'Construction Management',
    desc: 'Hands-on site supervision and construction management ensuring schedule, quality, and safety standards are upheld throughout the project lifecycle.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
    alt: 'Construction site aerial view',
  },
  {
    id: 6, tag: 'Facilities', title: 'Building O&M Consultancy',
    desc: 'Strategic advisory for building owners and property managers seeking to optimise facilities operations, reduce costs, and extend asset service life.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80',
    alt: 'Modern commercial building',
  },
  {
    id: 7, tag: 'Technical Advisory', title: 'Energy Audits & Technical Reports',
    desc: 'Detailed energy audits, technical feasibility studies, and equipment specifications that support capital planning and procurement decisions.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    alt: 'Power transmission infrastructure',
  },
]

const TRUST = [
  {
    Icon: IconGear, title: 'Industrial Heritage',
    desc: 'Built on years of actual field execution and construction management — not theoretical design work alone.',
  },
  {
    Icon: IconZap, title: 'Utility-Scale Capability',
    desc: 'Advanced technical competence handling heavy machinery and complex infrastructure at full industrial scale.',
  },
  {
    Icon: IconPin, title: 'Regional Focus',
    desc: 'Dedicated engineering oversight across Cebu and Southern Leyte, with deep knowledge of local project conditions.',
  },
]

const NAV_LINKS = [['Services', '#services'], ['About', '#about'], ['Contact', '#contact']]

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ scrolled, mobileOpen, setMobileOpen }) {
  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main navigation">
        <a href="#top" className="wordmark">CORE <span>Integrated</span> Engineering</a>
        <ul className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} className="btn btn--primary nav-cta">Call Now</a>
        <button
          className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {NAV_LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
        ))}
        <a href={`tel:${PHONE}`} className="btn btn--primary" onClick={() => setMobileOpen(false)}>Call Now</a>
      </div>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">Cebu &amp; Southern Leyte &nbsp;&middot;&nbsp; Engineering Services</p>
        <h1>Industrial Engineering,<br />Delivered From Experience.</h1>
        <p className="hero__sub">
          Our company may be new in the market, but the engineering experience behind it was built
          from years of industrial operations, construction management, and utility-scale systems.
        </p>
        <div className="hero__actions">
          <a href={`tel:${PHONE}`} className="btn btn--primary btn--lg">Call Now</a>
          <a href="#services" className="btn btn--outline btn--lg">View Services</a>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">What We Do</p>
          <h2>Engineering Services</h2>
          <p>From initial design through ongoing operations, we cover the full spectrum of industrial and commercial engineering needs.</p>
        </header>
        <div className="services-grid">
          {SERVICES.map(s => (
            <article key={s.id} className="card">
              <div className="card__img">
                <img src={s.img} alt={s.alt} loading="lazy" width="800" height="500" />
              </div>
              <div className="card__body">
                <p className="eyebrow">{s.tag}</p>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80"
              alt="Engineer conducting field inspection"
              loading="lazy"
              width="900"
              height="1100"
            />
          </div>
          <div className="about-body">
            <p className="eyebrow">Who We Are</p>
            <h2>Operational Experience.<br />Applied to Every Project.</h2>
            <p>
              CORE Integrated Engineering was built on years of actual field execution &mdash; not just
              office design work. Our principals have managed heavy industrial operations,
              led construction projects from ground-up, and commissioned complex utility-scale
              systems firsthand. That background shapes how we approach every engagement.
            </p>
            <ul className="trust-list">
              {TRUST.map(({ Icon, title, desc }) => (
                <li key={title} className="trust-item">
                  <div className="trust-icon"><Icon /></div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const sub = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const bod = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${EMAIL}?subject=${sub}&body=${bod}`
    setSent(true)
  }

  return (
    <section id="contact" className="section section--dark">
      <div className="container">
        <header className="section-header section-header--dark">
          <p className="eyebrow">Get In Touch</p>
          <h2>Start the Conversation</h2>
          <p>Ready to discuss your project? Reach out directly or use the form below.</p>
        </header>
        <div className="contact-grid">

          {/* Left: details */}
          <div className="contact-details">
            <h3>Our Details</h3>
            <div className="detail-item">
              <div className="detail-icon"><IconMapPin /></div>
              <div>
                <p className="detail-label">Address</p>
                <p>Habay, San Francisco<br />Southern Leyte, Philippines</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><IconClock /></div>
              <div>
                <p className="detail-label">Operating Hours</p>
                <p>Monday to Friday<br />8:00 AM &ndash; 6:00 PM</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><IconPhone /></div>
              <div>
                <p className="detail-label">Phone</p>
                <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><IconMail /></div>
              <div>
                <p className="detail-label">Email</p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark">
              Get Directions <IconArrow />
            </a>
            <div className="quick-links">
              <p className="detail-label">Quick Contact</p>
              <div className="quick-links__row">
                <a href={`tel:${PHONE}`} className="quick-link"><IconPhone /> Call</a>
                <a href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noopener noreferrer" className="quick-link">
                  <IconWA /> WhatsApp
                </a>
                <a href={`mailto:${EMAIL}`} className="quick-link"><IconMail /> Email</a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="form-success">
                <IconCheck />
                <h3>Message Drafted</h3>
                <p>Your email client has been opened with the message ready to send. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">Full Name</label>
                    <input id="f-name" type="text" placeholder="Juan dela Cruz" required
                      value={form.name} onChange={set('name')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-email">Email Address</label>
                    <input id="f-email" type="email" placeholder="you@company.com" required
                      value={form.email} onChange={set('email')} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="f-phone">Phone Number</label>
                  <input id="f-phone" type="tel" placeholder="+63 9XX XXX XXXX"
                    value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-group">
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" placeholder="Briefly describe your project or inquiry..." required
                    value={form.message} onChange={set('message')} />
                </div>
                <button type="submit" className="btn btn--primary btn--full">Send Message</button>
                <p className="form-note">Submitting will open your email client with this message drafted.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="wordmark">CORE <span>Integrated</span> Engineering</a>
            <p className="footer-tagline">
              Engineering consultancy serving industrial and commercial clients across
              Cebu and Southern Leyte, Philippines.
            </p>
          </div>
          <div>
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-list">
              {['MEPF Engineering', 'Solar Energy Systems', 'Plant O&M', 'HVAC', 'Construction Management', 'Energy Audits'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-list">
              <li><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Habay, San Francisco, Southern Leyte</a></li>
              <li className="footer-hours">Mon&ndash;Fri &nbsp;&middot;&nbsp; 8:00 AM &ndash; 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CORE Integrated Engineering. All rights reserved.</p>
          <p>Cebu &amp; Southern Leyte, Philippines</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <Nav scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
