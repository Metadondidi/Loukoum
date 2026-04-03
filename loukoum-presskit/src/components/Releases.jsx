import SectionHeader from './SectionHeader'
import releases from '../data/releases.json'

function PlatformLink({ href, label }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[0.6rem] tracking-[0.12em] uppercase px-2 py-0.5 border transition-all duration-200"
      style={{
        borderColor: 'var(--dim)',
        color: 'var(--fg)',
        opacity: 0.55,
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.color = 'var(--accent)'
        e.currentTarget.style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--dim)'
        e.currentTarget.style.color = 'var(--fg)'
        e.currentTarget.style.opacity = '0.55'
      }}
    >
      {label}
    </a>
  )
}

export default function Releases() {
  return (
    <section className="py-12">
      <div className="px-6 sm:px-8 max-w-[1100px] mx-auto mb-8">
        <SectionHeader label="02 — Discographie" title="Releases" />
      </div>

      <div
        className="max-w-[1100px] mx-auto px-6 sm:px-8"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1px',
            border: '1px solid var(--dim)',
          }}
        >
          {releases.map(r => (
            <div
              key={r.id}
              className="release-card relative p-6 transition-colors duration-200 overflow-hidden"
              style={{
                background: '#ffffff',
                borderRight: '1px solid var(--dim)',
                borderBottom: '1px solid var(--dim)',
                ...(r.latest
                  ? { borderColor: 'var(--accent)' }
                  : {}),
              }}
              onMouseEnter={e => {
                if (!r.latest) e.currentTarget.style.background = '#faf5f2'
              }}
              onMouseLeave={e => {
                if (!r.latest) e.currentTarget.style.background = '#ffffff'
              }}
            >
              <div
                className="text-[0.6rem] tracking-[0.15em] mb-3"
                style={{
                  color: 'var(--accent)',
                  opacity: r.latest ? 1 : 0.7,
                }}
              >
                {r.num} · {r.year}{r.latest ? ' — LATEST' : ''}
              </div>

              <div
                className="font-display text-[1.8rem] tracking-wide leading-none mb-3"
                style={{ color: r.latest ? 'var(--accent)' : 'var(--fg)' }}
              >
                {r.title}
              </div>

              <div
                className="text-[0.68rem] tracking-[0.1em] mb-1.5"
                style={{ opacity: 0.45 }}
              >
                {r.date}
              </div>

              <div
                className="text-[0.7rem] leading-[1.6] mb-4"
                style={{ opacity: 0.5 }}
              >
                {r.credit.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < r.credit.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>

              {/* Streaming links */}
              <div className="flex flex-wrap gap-1.5">
                <PlatformLink href={r.links.bandcamp} label="Bandcamp" />
                <PlatformLink href={r.links.soundcloud} label="SoundCloud" />
                <PlatformLink href={r.links.spotify} label="Spotify" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
