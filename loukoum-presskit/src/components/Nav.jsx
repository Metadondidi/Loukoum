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
  { id: 'home',     label: 'Accueil' },
  { id: 'about',    label: 'Bio' },
  { id: 'releases', label: 'Releases' },
  { id: 'mixes',    label: 'Mixes' },
  { id: 'stages',   label: 'Scènes' },
  { id: 'contact',  label: 'Contact' },
]

export default function Nav({ active, onNav }) {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(243,239,233,0.97)',
        borderBottom: '1px solid var(--dim)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Row 1 — always visible */}
      <div className="flex items-center justify-between px-5 sm:px-8 pt-3 pb-2 sm:py-0 sm:h-14">
        <button
          onClick={() => onNav('home')}
          className="font-display text-3xl tracking-wide leading-none bg-transparent border-0 cursor-pointer p-0 transition-opacity hover:opacity-70"
          style={{ color: 'var(--fg)' }}
        >
          LOUKOUM<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* EQ bars — desktop only in row 1, mobile shown here */}
        <div className="flex items-end gap-[3px] h-[28px]">
          {EQ_BARS.map((bar, i) => (
            <div
              key={i}
              className="eq-bar"
              style={{ '--d': bar.d, '--h': bar.h }}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — nav links, scrollable on mobile */}
      <div
        className="flex overflow-x-auto px-5 sm:px-8 pb-2 sm:pb-0 sm:absolute sm:top-0 sm:right-20 sm:h-14 sm:items-center gap-5 sm:gap-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onNav(tab.id)}
            className="flex-shrink-0 bg-transparent border-0 cursor-pointer font-mono text-[0.68rem] tracking-widest uppercase transition-all duration-200 pb-px whitespace-nowrap"
            style={{
              color: active === tab.id ? 'var(--accent)' : 'var(--fg)',
              opacity: active === tab.id ? 1 : 0.45,
              borderBottom: active === tab.id
                ? '1px solid var(--accent)'
                : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
