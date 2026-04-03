export default function VenueCard({ venue, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left transition-all duration-200 p-4 cursor-pointer relative overflow-hidden"
      style={{
        background: '#1a1619',
        border: venue.featured ? '1px solid var(--pink)' : '1px solid #2e2a2d',
        color: venue.featured ? 'var(--pink)' : '#f5f2ef',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#231f22'
        e.currentTarget.style.borderColor = venue.featured ? 'var(--pink)' : 'var(--accent)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#1a1619'
        e.currentTarget.style.borderColor = venue.featured ? 'var(--pink)' : '#2e2a2d'
      }}
    >
      {/* Logo */}
      <div className="h-10 flex items-center mb-3" style={{ opacity: 0.8 }}>
        {venue.logo ? (
          <img
            src={venue.logo}
            alt={venue.name}
            className="max-h-8 max-w-[120px] object-contain"
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
        style={{ color: venue.featured ? 'var(--pink)' : '#f5f2ef', opacity: 0.9 }}
      >
        {venue.name}
      </div>

      {/* Location */}
      <div
        className="text-[0.6rem] tracking-[0.08em] mt-1"
        style={{ color: '#f5f2ef', opacity: 0.35 }}
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
