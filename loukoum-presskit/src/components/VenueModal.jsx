import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function VenueModal({ venue, onClose }) {
  useEffect(() => {
    const handle = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const modal = (
    <div
      className="modal-backdrop fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ background: 'rgba(10,5,8,0.72)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="modal-content w-full max-w-md p-8 relative"
        style={{
          background: '#161214',
          border: venue.featured ? '1px solid var(--pink)' : '1px solid #3a3a3a',
          color: '#f5f2ef',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-[0.65rem] tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity bg-transparent border-0 cursor-pointer"
          style={{ color: '#f5f2ef' }}
        >
          ✕ Fermer
        </button>

        {/* Logo */}
        {venue.logo && (
          <div className="mb-5">
            <img
              src={venue.logo}
              alt={venue.name}
              className="max-h-10 object-contain"
            />
          </div>
        )}

        {/* Type badge */}
        <div
          className="text-[0.58rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: venue.featured ? 'var(--pink)' : 'var(--accent)', opacity: 0.85 }}
        >
          {venue.type}
        </div>

        {/* Name */}
        <div
          className="font-display text-4xl tracking-wide leading-none mb-1"
          style={{ color: venue.featured ? 'var(--pink)' : '#ffffff' }}
        >
          {venue.name}
        </div>

        {/* Location */}
        <div
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase mb-6"
          style={{ color: '#f5f2ef', opacity: 0.4 }}
        >
          {venue.location}
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: '1px', background: venue.featured ? 'var(--pink)' : '#3a3a3a' }}
        />

        {/* Description */}
        <p
          className="text-[0.85rem] leading-[1.8]"
          style={{ color: '#f5f2ef', opacity: 0.75 }}
        >
          {venue.description}
        </p>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
