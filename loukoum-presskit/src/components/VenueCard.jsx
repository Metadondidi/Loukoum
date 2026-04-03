/**
 * VenueCard
 *
 * Props:
 *   venue  – venue object from venues.json
 *   onClick – opens modal
 *
 * The card accepts either:
 *   venue.logo  (string path like "/logos/delta.svg") → renders <img>
 *   venue.svg   (JSX element)                        → renders inline SVG
 * If neither is provided, a text fallback is shown.
 */
export default function VenueCard({ venue, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left transition-all duration-200 p-4 cursor-pointer relative overflow-hidden"
      style={{
        background: '#ffffff',
        border: venue.featured ? '1px solid var(--pink)' : '1px solid var(--dim)',
        color: venue.featured ? 'var(--pink)' : 'var(--fg)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = venue.featured ? 'var(--pink)' : 'var(--accent)'
        e.currentTarget.style.background = '#faf5f2'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = venue.featured ? 'var(--pink)' : 'var(--dim)'
        e.currentTarget.style.background = '#ffffff'
      }}
    >
      {/* Logo area */}
      <div
        className="h-10 flex items-center mb-3"
        style={{ opacity: 0.7 }}
      >
        {venue.logo ? (
          <img
            src={venue.logo}
            alt={venue.name}
            className="max-h-8 max-w-[120px] object-contain"
            style={{ filter: 'brightness(0)', opacity: 0.65 }}
          />
        ) : venue.svg ? (
          venue.svg
        ) : (
          <span
            className="font-display text-xl tracking-wide"
            style={{ color: venue.featured ? 'var(--pink)' : 'var(--accent)', opacity: 0.5 }}
          >
            ◈
          </span>
        )}
      </div>

      {/* Name */}
      <div
        className="font-mono text-[0.72rem] tracking-[0.12em] uppercase leading-tight"
        style={{ color: venue.featured ? 'var(--pink)' : 'var(--fg)', opacity: 0.9 }}
      >
        {venue.name}
      </div>

      {/* Location */}
      <div
        className="text-[0.6rem] tracking-[0.08em] mt-1"
        style={{ opacity: 0.4 }}
      >
        {venue.type} — {venue.location}
      </div>

      {/* Hover caret */}
      <div
        className="absolute bottom-2.5 right-3 text-[0.6rem] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: venue.featured ? 'var(--pink)' : 'var(--accent)' }}
      >
        INFO →
      </div>
    </button>
  )
}
