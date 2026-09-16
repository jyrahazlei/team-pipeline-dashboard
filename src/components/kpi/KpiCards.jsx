import { getFunnelCounts, getConversionRate } from '../../data/demoData.js'
import './KpiCards.css'

function KpiCards({ members, entries }) {
  const funnelCounts = getFunnelCounts(entries)
  const countFor = (stage) => funnelCounts.find((entry) => entry.stage === stage)?.count ?? 0
  const conversionRate = getConversionRate(entries)

  const kpis = [
    { label: 'Team Members', value: members.length },
    { label: 'Leads', value: countFor('Leads') },
    { label: 'Contacted', value: countFor('Contacted') },
    { label: 'Applications', value: countFor('Applied') },
    { label: 'Approvals', value: countFor('Approved') },
    { label: 'Realizations', value: countFor('Realized') },
    { label: 'Conversion Rate', value: `${Math.round(conversionRate * 100)}%` },
  ]

  return (
    <div className="kpi-grid">
      {kpis.map(({ label, value }) => (
        <div className="kpi-card" key={label}>
          <span className="kpi-card-label">{label}</span>
          <span className="kpi-card-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default KpiCards
