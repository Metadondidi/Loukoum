export default function Hero({ onNav }) {
  return (
    <section
      className="relative"
      style={{ minHeight: 'calc(100vh - 110px)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1a1206 0%, #090909 50%, #0d0a14 100%)',
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--dim) 1px, transparent 1px), linear-gradient(90deg, var(--dim) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.18,
          }}
        />

        {/* Hero photo — place /public/photos/loukoum-hero.jpg to activate */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/photos/loukoum-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            opacity: 0.35,
            mixBlendMode: 'luminosity',
          }}
        />

        {/* Waveform deco */}
        <svg
          className="absolute"
          style={{ right: '2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.12 }}
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
        >
          <polyline
            points="0,150 20,120 40,160 60,90 80,170 100,60 120,180 140,80 160,190 180,50 200,200 220,70 240,180 260,100 280,160 300,80 320,170 340,60 360,180 380,90 400,150"
            stroke="#d4a853"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <polyline
            points="0,170 20,140 40,180 60,110 80,190 100,80 120,200 140,100 160,210 180,70 200,220 220,90 240,200 260,120 280,180 300,100 320,190 340,80 360,200 380,110 400,170"
            stroke="#c87fa0"
            strokeWidth="1"
            fill="none"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end px-6 sm:px-8 pb-12 pt-20"
        style={{ minHeight: 'calc(100vh - 110px)' }}
      >
        <div
          className="text-[0.68rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: 'var(--accent)', opacity: 0.85 }}
        >
          DJ / Producer — Marseille, France — 2026
        </div>

        <h1
          className="font-display leading-[0.9] tracking-wide mb-4"
          style={{
            fontSize: 'clamp(4rem, 14vw, 9rem)',
            color: 'var(--fg)',
          }}
        >
          LOUKOUM
        </h1>

        <p
          className="text-[0.75rem] tracking-[0.15em] uppercase mb-8"
          style={{ color: 'var(--fg)', opacity: 0.45 }}
        >
          House · Techno · Chicago · Detroit · UK Sound
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => onNav('about')}
            className="font-mono text-[0.7rem] tracking-[0.14em] uppercase px-5 py-3 border cursor-pointer transition-all duration-200"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.color = 'var(--bg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--accent)'
            }}
          >
            Découvrir
          </button>
          <button
            onClick={() => onNav('contact')}
            className="font-mono text-[0.7rem] tracking-[0.14em] uppercase px-5 py-3 border cursor-pointer transition-all duration-200"
            style={{
              borderColor: 'var(--dim)',
              color: 'var(--fg)',
              background: 'transparent',
              opacity: 0.6,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--fg)'
              e.currentTarget.style.opacity = '1'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--dim)'
              e.currentTarget.style.opacity = '0.6'
            }}
          >
            Booking
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-1"
        style={{ opacity: 0.35 }}
      >
        <span className="text-[0.6rem] tracking-[0.12em] uppercase" style={{ color: 'var(--fg)' }}>
          Bio
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
