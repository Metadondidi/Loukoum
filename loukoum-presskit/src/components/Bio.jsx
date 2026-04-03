import SectionHeader from './SectionHeader'

const TAGS = [
  { label: 'House',    hi: true },
  { label: 'Techno',   hi: true },
  { label: 'Hip-Hop',  hi: false },
  { label: 'Chicago',  hi: false },
  { label: 'Detroit',  hi: false },
  { label: 'UK Sound', hi: false },
  { label: 'DJ Mehdi', hi: false },
  { label: 'J Dilla',  hi: false },
]

export default function Bio() {
  return (
    <section className="px-6 sm:px-8 py-12 max-w-[1100px] mx-auto">
      <SectionHeader label="01 — Biographie" title="About" />

      <div
        className="mt-8 grid gap-8 sm:gap-16"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
        }}
      >
        {/* Text */}
        <div
          className="text-[0.95rem] leading-[1.9]"
          style={{ color: 'var(--fg)', opacity: 0.85 }}
        >
          <p>
            Loukoum est une DJ et productrice française du sud de la France. Derrière ce nom se
            cache un hommage aux{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Loukoums</em> de DJ Mehdi,
            une mixtape rendant tribut aux{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Donuts</em> de J Dilla.
          </p>
          <p className="mt-5">
            Après près de huit ans passés à raconter l'histoire du rap français au sein d'un média
            spécialisé, elle décide de passer derrière les platines pour construire sa propre
            narration.
          </p>
          <p className="mt-5">
            Bien qu'elle ait grandi avec le hip-hop, son amour pour la house et la techno n'a
            jamais été loin — nourri par les scènes de Chicago et Detroit et l'énergie fraîche du
            son UK.
          </p>
          <p className="mt-5">
            Aujourd'hui, elle mêle ces influences dans des sets où son goût pour une{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>
              house brute, non polie et rapide
            </em>
            , avec des kicks percutants, des mélodies sèches et des lignes vocales ensoleillées,
            fait écho à l'énergie du rap — toujours avec une idée en tête : faire danser en
            racontant une histoire.
          </p>
        </div>

        {/* Sidebar */}
        <div
          className="flex flex-col gap-8 pl-0 sm:pl-8"
          style={{ borderLeft: 'none' }}
        >
          <div
            className="flex flex-col gap-8 pl-8"
            style={{ borderLeft: '1px solid var(--dim)' }}
          >
            <div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--accent)', opacity: 0.8 }}
              >
                Localisation
              </div>
              <div className="text-[0.88rem] leading-[1.7]" style={{ opacity: 0.7 }}>
                Marseille, France
              </div>
            </div>

            <div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--accent)', opacity: 0.8 }}
              >
                Activité
              </div>
              <div className="text-[0.88rem] leading-[1.7]" style={{ opacity: 0.7 }}>
                DJ · Productrice
              </div>
            </div>

            <div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--accent)', opacity: 0.8 }}
              >
                Influences
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {TAGS.map(tag => (
                  <span
                    key={tag.label}
                    className="text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-0.5 border"
                    style={{
                      borderColor: tag.hi ? 'var(--accent)' : 'var(--dim)',
                      color: tag.hi ? 'var(--accent)' : 'var(--fg)',
                      opacity: tag.hi ? 1 : 0.7,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: 'var(--accent)', opacity: 0.8 }}
              >
                Son
              </div>
              <div
                className="text-[0.8rem] leading-[1.7]"
                style={{ opacity: 0.65 }}
              >
                Raw · Unpolished · Fast · Punchy kicks · Dry melodies · Sun-drenched vocal lines
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
