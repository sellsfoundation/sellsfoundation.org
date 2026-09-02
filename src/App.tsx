const FOCUS_AREAS = [
  {
    title: 'The Arts',
    description:
      'Supporting organizations that create, teach, and sustain artistic and cultural life in our communities.',
  },
  {
    title: 'Children',
    description:
      'Investing in programs that protect, nurture, and expand opportunity for young people.',
  },
  {
    title: 'Education',
    description:
      'Backing efforts that widen access to learning and strengthen educational outcomes.',
  },
  {
    title: 'Animal Welfare',
    description:
      'Helping organizations that care for, shelter, and advocate for animals.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <p className="eyebrow">Edwin and Evelina Sells Foundation</p>
        <h1>Supporting the causes that strengthen our communities.</h1>
        <p className="lede">
          The Edwin and Evelina Sells Foundation benefits non-profit
          organizations focused on the arts, children, education, and animal
          welfare across Upstate New York and western New England.
        </p>
      </header>

      <main>
        <section aria-labelledby="focus-heading" className="focus">
          <h2 id="focus-heading">Where we focus</h2>
          <ul className="focus-grid">
            {FOCUS_AREAS.map((area) => (
              <li key={area.title} className="focus-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="region-heading" className="region">
          <h2 id="region-heading">Where we work</h2>
          <p>
            Our giving is directed to non-profits serving communities in Upstate
            New York and western New England.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Edwin and Evelina Sells Foundation.
        </p>
      </footer>
    </div>
  )
}

export default App
