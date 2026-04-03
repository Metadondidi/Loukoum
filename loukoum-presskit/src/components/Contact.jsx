import SectionHeader from './SectionHeader'

const CONTACT_ROWS = [
  { icon: 'Mail', value: <a href="mailto:loukoumvrf@gmail.com">loukoumvrf@gmail.com</a> },
  { icon: 'Tel',  value: '+33 6 82 73 22 57' },
  { icon: 'Ville',value: 'Marseille / France' },
]

const SOCIALS = [
  { platform: 'Instagram', handle: '@Loukoumusic', href: 'https://instagram.com/Loukoumusic' },
  { platform: 'TikTok',    handle: '@Loukoumusic', href: 'https://tiktok.com/@Loukoumusic' },
  { platform: 'SoundCloud',handle: 'soundcloud.com/Loukoumusic', href: 'https://soundcloud.com/loukoumusic' },
]

export default function Contact() {
  return (
    <section className="px-6 sm:px-8 py-12 max-w-[700px] mx-auto">
      <SectionHeader label="05 — Booking" title="Contact" />

      {/* Contact rows */}
      <div className="mt-8">
        {CONTACT_ROWS.map(row => (
          <div
            key={row.icon}
            className="flex items-center gap-4 py-4"
            style={{ borderBottom: '1px solid var(--dim)' }}
          >
            <div
              className="w-8 text-[0.7rem] tracking-[0.1em] uppercase flex-shrink-0"
              style={{ color: 'var(--accent)', opacity: 0.75 }}
            >
              {row.icon}
            </div>
            <div
              className="text-[0.88rem]"
              style={{ opacity: 0.8 }}
            >
              {typeof row.value === 'string' ? row.value : (
                <span style={{ color: 'var(--fg)' }}>
                  {row.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div
        className="flex flex-col gap-1 mt-8 pt-8"
        style={{ borderTop: '1px solid var(--dim)' }}
      >
        {SOCIALS.map(s => (
          <a
            key={s.platform}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between py-1.5 text-[0.75rem] tracking-[0.08em] transition-opacity duration-200"
            style={{ opacity: 0.6, color: 'var(--fg)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '0.6' }}
          >
            <span
              className="text-[0.62rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              {s.platform}
            </span>
            <span>{s.handle}</span>
          </a>
        ))}
      </div>

      <div
        className="mt-12 text-[0.65rem] tracking-[0.15em] uppercase"
        style={{ opacity: 0.3 }}
      >
        Loukoum — Press Kit 2026
      </div>
    </section>
  )
}
