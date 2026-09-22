import { DestinationCard } from '../components/DestinationCard'
import { SAMPLE_DESTINATIONS } from '../data/sampleDestinations'

export function HomePage() {
  return (
    <div>
      <section className="bg-teal px-4 py-14 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sand">
            Sample / demo content
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Plan a careful trip to Myanmar
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-sand sm:text-lg">
            Browse sample destinations while we build a verified travel
            assistant. Nothing on this homepage is official guidance.
          </p>
          <a
            href="#destinations"
            className="mt-8 inline-flex rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-teal-dark"
          >
            Plan your trip
          </a>
        </div>
      </section>

      <section className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <div className="mx-auto max-w-6xl">
          All destination cards below use placeholder images and sample text.
          Replace them with verified sources before publishing.
        </div>
      </section>

      <section id="destinations" className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-ink">Sample destinations</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            Yangon, Bagan, Mandalay, and Inle Lake are listed so we can design
            the layout. Descriptions are not travel facts.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLE_DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
