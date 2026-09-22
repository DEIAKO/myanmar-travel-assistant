import type { RecordStatus } from '../types/travel'

type StatusBadgeProps = {
  status: RecordStatus
}

const LABELS: Record<RecordStatus, string> = {
  sample: 'Sample data',
  unverified: 'Unverified',
  verified: 'Verified',
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles =
    status === 'verified'
      ? 'bg-teal-100 text-teal-900'
      : 'bg-amber-100 text-amber-900'

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles}`}
    >
      {LABELS[status]}
    </span>
  )
}
