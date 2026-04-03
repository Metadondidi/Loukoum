import { useEffect } from 'react'

export default function VenueModal({ venue, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handle = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(20,10,14,0.6)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="modal-content w-full max-w-md p-8 relative"
        style={{
          background: '#ffffff',
          border: venue.featured ? '1px solid var(--pink)' : '1px solid var(--dim)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-[0.65rem] tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity bg-transparent border-0 cursor-pointer"
          style={{ color: 'var(--fg)' }}
        >
          ✕ Fermer
        </button>

        {/* Logo */}
        {venue.logo && (
          <div className="mb-4">
            <img
              src={venue.logo}
              alt={venue.name}
              className="max-h-10 object-contain"
              style={{ filter: 'brightness(0)', opacity: 0.6 }}
            />
          </div>
        )}

        {/* Type badge */}
        <div
          className="text-[0.58rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: venue.featured ? 'var(--pink)' : 'var(--accent)', opacity: 0.8 }}
        >
          {venue.type}
        </div>

        {/* Name */}
        <div
          className="font-display text-4xl tracking-wide leading-none mb-1"
          style={{ color: venue.featured ? 'var(--pink)' : 'var(--fg)' }}
        >
          {venue.name}
        </div>

        {/* Location */}
        <div
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase mb-6"
          style={{ opacity: 0.4 }}
        >
          {venue.location}
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: '1px', background: venue.featured ? 'var(--pink)' : 'var(--dim)', opacity: 0.4 }}
        />

        {/* Description */}
        <p
          className="text-[0.85rem] leading-[1.8]"
          style={{ color: 'var(--fg)', opacity: 0.75 }}
        >
          {venue.description}
        </p>
      </div>
    </div>
  )
}
