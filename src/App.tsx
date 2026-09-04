import type { ReactNode } from 'react'
import sealLogo from './assets/images/logo-seal-800.png'

const PROGRAMS = [
  {
    title: 'Children',
    color: 'var(--children-500)',
    description: 'Basic needs, safety and out-of-school programs for children.',
  },
  {
    title: 'Education',
    color: 'var(--education-600)',
    description: 'College access, literacy and scholarship partnerships.',
  },
  {
    title: 'Animal Welfare',
    color: 'var(--animals-600)',
    description: 'Shelter operations, veterinary access and humane education.',
  },
  {
    title: 'The Arts',
    color: 'var(--arts-500)',
    description: 'Performance, exhibition and arts education for every age.',
  },
]

const INQUIRY_HREF = 'mailto:grants@sellsfoundation.org'

function ArrowRight() {
  return (
    <svg
      className="btn-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'accent' | 'ghost'
  size?: 'sm' | 'lg'
  onNavy?: boolean
  iconAfter?: boolean
}

function Button({
  href,
  children,
  variant = 'accent',
  size = 'sm',
  onNavy = false,
  iconAfter = false,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    onNavy ? 'btn-on-navy' : '',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <a className={classes} href={href}>
      {children}
      {iconAfter && <ArrowRight />}
    </a>
  )
}

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={['brand', className].filter(Boolean).join(' ')}>
      <img className="seal" src={sealLogo} width={56} height={56} alt="" />
      <span className="wordmark">
        The Edwin and Eveline
        <br />
        Sells Foundation
      </span>
    </span>
  )
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="inner">
          <Wordmark />
          <nav className="site-nav" aria-label="Primary">
            <a className="is-active" href="#" aria-current="page">
              Home
            </a>
            <a href="#programs">Programs</a>
            <a href="#">Grants</a>
            <a href="#">Apply</a>
          </nav>
          <Button href={INQUIRY_HREF} variant="accent" size="sm">
            Start an inquiry
          </Button>
        </div>
      </header>

      <section className="hero">
        <div className="inner">
          <div className="hero-copy">
            <p className="eyebrow">Spring 2026 cycle now open</p>
            <h1>Assistance for the organizations doing the work</h1>
            <p className="lede">
              The Foundation makes grants to nonprofit organizations serving
              children, education, animal welfare, and the arts. Letters of
              inquiry are accepted twice a year.
            </p>
            <div className="hero-actions">
              <Button
                href={INQUIRY_HREF}
                variant="accent"
                size="lg"
                iconAfter
              >
                Start an inquiry
              </Button>
              <Button href="#" variant="ghost" size="lg" onNavy>
                See past grants
              </Button>
            </div>
          </div>
          <img className="hero-seal" src={sealLogo} alt="" />
        </div>
      </section>

      <main>
        <section id="programs" aria-labelledby="programs-heading" className="section">
          <p className="section-eyebrow">What we fund</p>
          <h2 id="programs-heading">Four program areas</h2>
          <hr className="rule" />
          <ul className="program-grid">
            {PROGRAMS.map((program) => (
              <li key={program.title} className="program-card">
                <div className="bar" style={{ background: program.color }} />
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="inner">
          <Wordmark />
          <p className="tagline">
            Assistance for nonprofit organizations serving children, education,
            animal welfare, and the arts.
          </p>
          <address className="contact">
            P.O. Box 1885
            <br />
            Albany, New York 12207
            <br />
            <a href={INQUIRY_HREF}>grants@sellsfoundation.org</a>
          </address>
        </div>
      </footer>
    </div>
  )
}

export default App
