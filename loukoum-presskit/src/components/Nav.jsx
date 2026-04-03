const EQ_BARS = [
  { d: '0.7s', h: '24px' },
  { d: '1.1s', h: '18px' },
  { d: '0.5s', h: '28px' },
  { d: '0.9s', h: '14px' },
  { d: '1.3s', h: '22px' },
  { d: '0.6s', h: '26px' },
  { d: '1.0s', h: '12px' },
]

const TABS = [
  { id: 'home',    label: 'Accueil' },
  { id: 'about',   label: 'Bio' },
  { id: 'releases',label: 'Releases' },
  { id: 'mixes',   label: 'Mixes' },
  { id: 'stages',  label: 'Scènes' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ active, onNav }) {
  return (
    <nav
      style={{
        background: 'rgba(9,9,9,0.95)',
        borderBottom: '1px solid var(--dim)',
        backdropFilter: 'blur(4px)',
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 sm:px-8"
    >
      {/* Logo */}
      <button
        onClick={() => onNav('home')}
        className="font-display text-3xl tracking-wide text-fg leading-none hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer p-0"
      >
        LOUKOUM<span style={{ color: 'var(--accent)' }}>.</span>
      </button>

      {/* Nav links */}
      <div className="flex gap-4 sm:gap-6">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onNav(tab.id)}
            className="bg-transparent border-0 cursor-pointer font-mono text-xs tracking-widest uppercase transition-all duration-200 pb-px"
            style={{
              color: active === tab.id ? 'var(--accent)' : 'var(--fg)',
              opacity: active === tab.id ? 1 : 0.5,
              borderBottom: active === tab.id
                ? '1px solid var(--accent)'
                : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Equalizer bars */}
      <div className="flex items-end gap-[3px] h-[30px] pl-4 hidden sm:flex">
        {EQ_BARS.map((bar, i) => (
          <div
            key={i}
            className="eq-bar"
            style={{ '--d': bar.d, '--h': bar.h }}
          />
        ))}
      </div>
    </nav>
  )
}
