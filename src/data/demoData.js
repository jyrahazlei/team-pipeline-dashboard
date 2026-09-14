// Fully synthetic placeholder data. No real names, contact info, or
// identifying details — safe to commit and show publicly.
// This stub is not wired into the UI yet; it exists so the data model
// (planned for the next session) has a concrete shape to start from.

export const PIPELINE_STAGES = ['Leads', 'Contacted', 'Applied', 'Approved', 'Realized']

export const demoMembers = [
  { id: 'member-01', name: 'Member 01' },
  { id: 'member-02', name: 'Member 02' },
  { id: 'member-03', name: 'Member 03' },
]

export const demoEntries = [
  { id: 'ep-01', label: 'EP 01', memberId: 'member-01', stage: 'Contacted' },
  { id: 'ep-02', label: 'EP 02', memberId: 'member-01', stage: 'Applied' },
  { id: 'ep-03', label: 'EP 03', memberId: 'member-02', stage: 'Leads' },
  { id: 'ep-04', label: 'EP 04', memberId: 'member-03', stage: 'Realized' },
]
