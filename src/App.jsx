import { useState } from 'react'
import Sidebar from './components/layout/Sidebar.jsx'
import Header from './components/layout/Header.jsx'
import {
  demoMembers,
  demoEntries,
  getStageCounts,
  getMemberEntryCounts,
} from './data/demoData.js'
import './App.css'

function OverviewSection() {
  const stageCounts = getStageCounts(demoEntries)

  return (
    <div className="data-panel">
      <p className="data-panel-summary">
        {demoEntries.length} pipeline entries across {demoMembers.length} team
        members. KPI cards and a visual pipeline breakdown will replace this
        summary in an upcoming session.
      </p>
      <ul className="data-list">
        {stageCounts.map(({ stage, count }) => (
          <li key={stage}>
            <span>{stage}</span>
            <span>{count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PipelineSection() {
  const stageCounts = getStageCounts(demoEntries)

  return (
    <div className="data-panel">
      <p className="data-panel-summary">
        Entries by stage. A visual pipeline (funnel/stage bar) is planned for
        an upcoming session.
      </p>
      <ul className="data-list">
        {stageCounts.map(({ stage, count }) => (
          <li key={stage}>
            <span>{stage}</span>
            <span>{count} {count === 1 ? 'entry' : 'entries'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TeamSection() {
  const memberCounts = getMemberEntryCounts(demoMembers, demoEntries)

  return (
    <div className="data-panel">
      <p className="data-panel-summary">
        Entries owned per member. A full performance table with conversion
        rates is planned for an upcoming session.
      </p>
      <ul className="data-list">
        {memberCounts.map(({ member, count }) => (
          <li key={member.id}>
            <span>{member.name}</span>
            <span>{count} {count === 1 ? 'entry' : 'entries'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SECTION_COMPONENTS = {
  overview: OverviewSection,
  pipeline: PipelineSection,
  team: TeamSection,
}

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const ActiveSection = SECTION_COMPONENTS[activeSection]

  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="app-main">
        <Header activeSection={activeSection} />
        <main className="app-content">
          <ActiveSection />
        </main>
      </div>
    </div>
  )
}

export default App
