import './Header.css'

const SECTION_TITLES = {
  overview: 'Overview',
  pipeline: 'Pipeline',
  team: 'Team Performance',
}

function Header({ activeSection }) {
  return (
    <header className="header">
      <h1 className="header-title">{SECTION_TITLES[activeSection] ?? 'Overview'}</h1>
      <span className="header-subtitle">Synthetic demo data</span>
    </header>
  )
}

export default Header
