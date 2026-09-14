import './Sidebar.css'

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'team', label: 'Team Performance' },
]

function Sidebar({ activeSection, onSelectSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-mark">TP</span>
        <span className="sidebar-brand-name">Team Pipeline</span>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar-nav-item${item.id === activeSection ? ' active' : ''}`}
            onClick={() => onSelectSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
