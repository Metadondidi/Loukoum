export default function SectionHeader({ label, title, titleBreak }) {
  return (
    <div>
      <div
        className="text-[0.6rem] tracking-[0.2em] uppercase mb-1"
        style={{ color: 'var(--accent)', opacity: 0.7 }}
      >
        {label}
      </div>
      <div
        className="font-display leading-[0.9] tracking-wide"
        style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          color: 'var(--fg)',
        }}
        dangerouslySetInnerHTML={{ __html: titleBreak || title }}
      />
      <div
        className="mt-4"
        style={{ width: '3rem', height: '1px', background: 'var(--accent)' }}
      />
    </div>
  )
}
