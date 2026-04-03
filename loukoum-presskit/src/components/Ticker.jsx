const TEXT =
  'DJ / PRODUCER — MARSEILLE — HOUSE — TECHNO — CHICAGO — DETROIT — UK SOUND — RAW — UNPOLISHED — DANCEFLOOR — STORYTELLING \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'

export default function Ticker() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap py-2"
      style={{
        borderTop: '1px solid var(--dim)',
        borderBottom: '1px solid var(--dim)',
        background: 'var(--bg)',
      }}
    >
      <span
        className="ticker-animate text-[0.65rem] tracking-[0.2em] uppercase opacity-40"
        style={{ color: 'var(--fg)' }}
      >
        {TEXT}{TEXT}
      </span>
    </div>
  )
}
