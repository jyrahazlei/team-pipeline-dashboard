import { useState } from 'react'
import Sidebar from './components/layout/Sidebar.jsx'
import Header from './components/layout/Header.jsx'
import './App.css'

const SECTION_PLACEHOLDERS = {
  overview: 'KPI cards and pipeline stage overview will go here.',
  pipeline: 'Pipeline stage breakdown (Leads → Contacted → Applied → Approved → Realized) will go here.',
  team: 'Individual member performance table will go here.',
}

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="app-main">
        <Header activeSection={activeSection} />
        <main className="app-content">
          <div className="placeholder-card">
            <p>{SECTION_PLACEHOLDERS[activeSection]}</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
