import type { Destination } from '../types/travel'
import { StatusBadge } from './StatusBadge'

type DestinationCardProps = {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <img
        src={destination.image_url}
        alt={`${destination.name} sample placeholder`}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-ink">{destination.name}</h3>
            <p className="text-sm text-muted">
              {destination.city} · {destination.category}
            </p>
          </div>
          <StatusBadge status={destination.status} />
        </div>
        <p className="text-sm leading-6 text-muted">
          {destination.short_description}
        </p>
        <p className="mt-auto text-xs text-stone-500">
          Last verified: {destination.last_verified ?? 'not verified yet'}
        </p>
      </div>
    </article>
  )
}
