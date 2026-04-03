export default function Hero({ onNav }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 'calc(100vh - 88px)', background: 'var(--bg)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--dim) 1px, transparent 1px), linear-gradient(90deg, var(--dim) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Layout split desktop */}
      <div
        className="relative z-10 flex flex-col sm:flex-row"
        style={{ minHeight: 'calc(100vh - 88px)' }}
      >
        {/* ── LEFT : texte ── */}
        <div className="flex flex-col justify-end px-5 sm:px-12 pb-12 pt-16 sm:pt-0 sm:w-[55%]">
          <div
            className="text-[0.65rem] tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            DJ / Producer — Marseille, France — 2026
          </div>

          <h1
            className="font-display leading-[0.88] tracking-wide mb-4"
            style={{
              fontSize: 'clamp(5rem, 13vw, 10rem)',
              color: 'var(--fg)',
            }}
          >
            LOUKOUM
          </h1>

          <p
            className="text-[0.7rem] tracking-[0.18em] uppercase mb-10"
            style={{ color: 'var(--fg)', opacity: 0.38 }}
          >
            House · Techno · Chicago · Detroit · UK Sound
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => onNav('about')}
              className="font-mono text-[0.68rem] tracking-[0.14em] uppercase px-5 py-3 cursor-pointer transition-all duration-200"
              style={{ border: '1px solid var(--accent)', color: '#fff', background: 'var(--accent)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
            >
              Découvrir
            </button>
            <button
              onClick={() => onNav('contact')}
              className="font-mono text-[0.68rem] tracking-[0.14em] uppercase px-5 py-3 cursor-pointer transition-all duration-200"
              style={{ border: '1px solid var(--dim)', color: 'var(--fg)', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--fg)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dim)' }}
            >
              Booking
            </button>
          </div>

          {/* Scroll hint */}
          <div
            className="mt-16 flex items-center gap-3"
            style={{ opacity: 0.3 }}
          >
            <div className="scroll-line" style={{ height: '32px' }} />
            <span className="text-[0.58rem] tracking-[0.14em] uppercase" style={{ color: 'var(--fg)' }}>
              Bio
            </span>
          </div>
        </div>

        {/* ── RIGHT : photo ── */}
        <div className="relative sm:w-[45%] h-64 sm:h-auto overflow-hidden">
          {/* Trait vertical de séparation */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'var(--dim)' }}
          />
          <img
            src="/photos/loukoum-1.jpg"
            alt="Loukoum"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'grayscale(20%)' }}
          />
          {/* Dégradé de fondu bas sur mobile */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 sm:hidden"
            style={{ background: 'linear-gradient(transparent, var(--bg))' }}
          />
        </div>
      </div>
    </section>
  )
}
