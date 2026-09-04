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

function Wordmark({
  className,
  full = false,
}: {
  className?: string
  full?: boolean
}) {
  return (
    <span className={['brand', className].filter(Boolean).join(' ')}>
      <img className="seal" src={sealLogo} width={56} height={56} alt="" />
      <span className="wordmark">
        The Edwin and Eveline
        <br />
        Sells Foundation{full ? ', Inc.' : ''}
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
            <a href="#mission">Mission</a>
            <a href="#programs">Programs</a>
            <a href="#">Grants</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="inner">
          <div className="hero-copy">
            <h1>Assistance for the organizations doing the work</h1>
            <p className="lede">
              The Foundation makes grants to 501(c)(3) organizations serving
              children, education, animal welfare, and the arts.
            </p>
            <div className="hero-actions">
              <Button href="#" variant="ghost" size="lg" onNavy>
                See past grants
              </Button>
            </div>
          </div>
          <img className="hero-seal" src={sealLogo} alt="" />
        </div>
      </section>

      <main>
        <section id="mission" aria-labelledby="mission-heading" className="section">
          <p className="section-eyebrow">Our Purpose</p>
          <h2 id="mission-heading">Our Mission</h2>
          <hr className="rule" />
          <p className="mission-copy">
            To honor the legacy of Edwin and Eveline Sells by providing
            financial support to 501(c)(3) organizations dedicated to
            enriching children&rsquo;s lives, advancing education, supporting
            the arts, and championing animal welfare.
          </p>
        </section>

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
          <Wordmark full />
          <p className="tagline">
            Assistance for nonprofit organizations serving children, education,
            animal welfare, and the arts.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
