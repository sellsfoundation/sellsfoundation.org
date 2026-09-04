import sealLogo from './assets/images/logo-seal-800.png'

const FOCUS_AREAS = [
  {
    title: 'The Arts',
    color: 'var(--arts-500)',
    description:
      'Supporting organizations that create, teach, and sustain artistic and cultural life in our communities.',
  },
  {
    title: 'Children',
    color: 'var(--children-500)',
    description:
      'Investing in programs that protect, nurture, and expand opportunity for young people.',
  },
  {
    title: 'Education',
    color: 'var(--education-600)',
    description:
      'Backing efforts that widen access to learning and strengthen educational outcomes.',
  },
  {
    title: 'Animal Welfare',
    color: 'var(--animals-600)',
    description:
      'Helping organizations that care for, shelter, and advocate for animals.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="inner">
          <img className="seal" src={sealLogo} width={48} height={48} alt="" />
          <span className="wordmark">
            Edwin and Evelina
            <br />
            Sells Foundation
          </span>
        </div>
      </header>

      <section className="hero">
        <div className="inner">
          <p className="eyebrow">Edwin and Evelina Sells Foundation</p>
          <h1>Supporting the causes that strengthen our communities.</h1>
          <p className="lede">
            The Edwin and Evelina Sells Foundation benefits non-profit
            organizations focused on the arts, children, education, and animal
            welfare across Upstate New York and western New England.
          </p>
        </div>
      </section>

      <main>
        <section aria-labelledby="focus-heading" className="section">
          <h2 id="focus-heading">Where we focus</h2>
          <hr className="rule" />
          <ul className="focus-grid">
            {FOCUS_AREAS.map((area) => (
              <li key={area.title} className="focus-card">
                <div className="rule" style={{ background: area.color }} />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="region-heading" className="section narrow">
          <h2 id="region-heading">Where we work</h2>
          <p className="region-copy">
            Our giving is directed to non-profits serving communities in Upstate
            New York and western New England.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="inner">
          &copy; {new Date().getFullYear()} Edwin and Evelina Sells Foundation.
        </div>
      </footer>
    </div>
  )
}

export default App
