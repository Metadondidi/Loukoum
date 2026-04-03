import { useState } from 'react'
import SectionHeader from './SectionHeader'
import VenueCard from './VenueCard'
import VenueModal from './VenueModal'
import venues from '../data/venues.json'

export default function Venues() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      className="py-12"
      style={{ borderTop: '1px solid var(--dim)' }}
    >
      <div className="px-6 sm:px-8 max-w-[1100px] mx-auto">
        <SectionHeader
          label="04 — Expérience"
          titleBreak="Scènes &amp;<br/>Dancefloors"
          title="Scènes & Dancefloors"
        />

        {/* Venues grid */}
        <div
          className="mt-8 grid gap-px"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
            border: '1px solid #2e2a2d',
            background: '#1a1619',
          }}
        >
          {venues.map(venue => (
            <VenueCard
              key={venue.id}
              venue={venue}
              onClick={() => setSelected(venue)}
            />
          ))}
        </div>

        <div
          className="mt-8 pt-6 text-[0.7rem] tracking-[0.1em] uppercase"
          style={{
            borderTop: '1px solid var(--dim)',
            opacity: 0.4,
          }}
        >
          Festivals · Clubs · Salles — Sud de la France et au-delà
        </div>
      </div>

      {selected && (
        <VenueModal venue={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
