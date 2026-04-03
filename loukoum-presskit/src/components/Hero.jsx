export default function Hero({ onNav }) {
  return (
    <section
      className="relative"
      style={{ minHeight: 'calc(100vh - 88px)', background: 'var(--bg)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--dim) 1px, transparent 1px), linear-gradient(90deg, var(--dim) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.45,
        }}
      />

      {/* Hero photo — place /public/photos/loukoum-hero.jpg to activate */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/photos/loukoum-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          opacity: 0.08,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Waveform deco */}
      <svg
        className="absolute hidden sm:block"
        style={{ right: '2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.15 }}
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
      >
        <polyline
          points="0,150 20,120 40,160 60,90 80,170 100,60 120,180 140,80 160,190 180,50 200,200 220,70 240,180 260,100 280,160 300,80 320,170 340,60 360,180 380,90 400,150"
          stroke="#e8204e"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <polyline
          points="0,170 20,140 40,180 60,110 80,190 100,80 120,200 140,100 160,210 180,70 200,220 220,90 240,200 260,120 280,180 300,100 320,190 340,80 360,200 380,110 400,170"
          stroke="#f07090"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end px-5 sm:px-8 pb-12 pt-16 sm:pt-24"
        style={{ minHeight: 'calc(100vh - 88px)' }}
      >
        <div
          className="text-[0.68rem] tracking-[0.2em] uppercase mb-3"
          style={{ color: 'var(--accent)' }}
        >
          DJ / Producer — Marseille, France — 2026
        </div>

        <h1
          className="font-display leading-[0.88] tracking-wide mb-4"
          style={{
            fontSize: 'clamp(4.5rem, 16vw, 10rem)',
            color: 'var(--fg)',
          }}
        >
          LOUKOUM
        </h1>

        <p
          className="text-[0.72rem] tracking-[0.18em] uppercase mb-10"
          style={{ color: 'var(--fg)', opacity: 0.4 }}
        >
          House · Techno · Chicago · Detroit · UK Sound
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => onNav('about')}
            className="font-mono text-[0.68rem] tracking-[0.14em] uppercase px-5 py-3 cursor-pointer transition-all duration-200"
            style={{
              border: '1px solid var(--accent)',
              color: '#ffffff',
              background: 'var(--accent)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            Découvrir
          </button>
          <button
            onClick={() => onNav('contact')}
            className="font-mono text-[0.68rem] tracking-[0.14em] uppercase px-5 py-3 cursor-pointer transition-all duration-200"
            style={{
              border: '1px solid var(--dim)',
              color: 'var(--fg)',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--fg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--dim)'
            }}
          >
            Booking
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-1"
        style={{ opacity: 0.3 }}
      >
        <span className="text-[0.58rem] tracking-[0.12em] uppercase" style={{ color: 'var(--fg)' }}>
          Bio
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
