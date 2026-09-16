// Fully synthetic placeholder data. No real names, contact info, or
// identifying details — safe to commit and show publicly.

// Pipeline stages, in order. A pipeline entry moves left-to-right through
// these as it progresses.
export const PIPELINE_STAGES = ['Leads', 'Contacted', 'Applied', 'Approved', 'Realized']

// Member shape: { id, name }
export const demoMembers = [
  { id: 'member-01', name: 'Member 01' },
  { id: 'member-02', name: 'Member 02' },
  { id: 'member-03', name: 'Member 03' },
]

// Pipeline entry shape: { id, label, memberId, stage, updatedAt }
// - memberId references a Member.id (the team member handling this entry)
// - stage is one of PIPELINE_STAGES
// - updatedAt is an ISO date string for the entry's last stage change
export const demoEntries = [
  { id: 'ep-01', label: 'EP 01', memberId: 'member-01', stage: 'Contacted', updatedAt: '2026-09-02' },
  { id: 'ep-02', label: 'EP 02', memberId: 'member-01', stage: 'Applied', updatedAt: '2026-09-08' },
  { id: 'ep-03', label: 'EP 03', memberId: 'member-02', stage: 'Leads', updatedAt: '2026-09-10' },
  { id: 'ep-04', label: 'EP 04', memberId: 'member-03', stage: 'Realized', updatedAt: '2026-08-29' },
  { id: 'ep-05', label: 'EP 05', memberId: 'member-02', stage: 'Applied', updatedAt: '2026-09-11' },
]

// --- Selectors -------------------------------------------------------
// Small helpers for reading the data model. Kept plain (no memoization,
// no framework ties) so they work the same in demo data and later in
// real data loaded from local storage.

export function getMemberById(members, memberId) {
  return members.find((member) => member.id === memberId)
}

export function getEntriesForMember(entries, memberId) {
  return entries.filter((entry) => entry.memberId === memberId)
}

export function getEntriesForStage(entries, stage) {
  return entries.filter((entry) => entry.stage === stage)
}

// Returns [{ stage, count }] for every stage in PIPELINE_STAGES order,
// including stages with zero entries.
export function getStageCounts(entries) {
  return PIPELINE_STAGES.map((stage) => ({
    stage,
    count: getEntriesForStage(entries, stage).length,
  }))
}

// Returns [{ member, count }] — how many pipeline entries each member
// currently owns.
export function getMemberEntryCounts(members, entries) {
  return members.map((member) => ({
    member,
    count: getEntriesForMember(entries, member.id).length,
  }))
}

// Returns [{ stage, count }] as cumulative funnel counts: how many entries
// have reached each stage or beyond. Assumes entries only move forward
// through PIPELINE_STAGES (never backward), so an entry currently at
// "Applied" also counts toward "Leads" and "Contacted".
export function getFunnelCounts(entries) {
  return PIPELINE_STAGES.map((stage, stageIndex) => ({
    stage,
    count: entries.filter((entry) => PIPELINE_STAGES.indexOf(entry.stage) >= stageIndex).length,
  }))
}

// Overall conversion rate: realized entries as a fraction of total leads
// (every entry starts as a lead, so entries.length is the lead count).
// Returns a number between 0 and 1.
export function getConversionRate(entries) {
  if (entries.length === 0) return 0
  const realizedCount = entries.filter((entry) => entry.stage === 'Realized').length
  return realizedCount / entries.length
}
