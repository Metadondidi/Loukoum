import SectionHeader from './SectionHeader'

const MIXES = [
  {
    id: 'mix-01',
    title: 'Mix principal',
    url: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/loukoumusic&color=%23f0507a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'mix-02',
    title: 'Derniers tracks',
    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/loukoumusic&color=%23f0507a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false',
  },
]

export default function Mixes() {
  return (
    <section
      className="py-12"
      style={{ borderTop: '1px solid var(--dim)' }}
    >
      <div className="px-6 sm:px-8 max-w-[1100px] mx-auto">
        <SectionHeader label="03 — Écouter" title="Mixes" />

        <div className="mt-8 flex flex-col gap-6">
          {MIXES.map(mix => (
            <div key={mix.id}>
              <div
                className="text-[0.62rem] tracking-[0.15em] uppercase mb-3"
                style={{ color: 'var(--fg)', opacity: 0.4 }}
              >
                {mix.title}
              </div>
              <iframe
                title={mix.title}
                width="100%"
                height={mix.id === 'mix-01' ? '300' : '166'}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={mix.url}
                style={{
                  border: '1px solid var(--dim)',
                  display: 'block',
                  background: '#0e0e0e',
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="mt-8 pt-6 text-[0.65rem] tracking-[0.15em] uppercase"
          style={{
            borderTop: '1px solid var(--dim)',
            opacity: 0.35,
          }}
        >
          soundcloud.com/loukoumusic
        </div>
      </div>
    </section>
  )
}
