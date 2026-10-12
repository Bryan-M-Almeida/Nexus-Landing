const LETTERS = ['N', 'E', 'X', 'U', 'S']

export default function NexusWordmark({ as: Tag = 'h1', show = true, className = '' }) {
  return (
    <Tag className={`wordmark ${show ? 'is-on' : ''} ${className}`} aria-label="NEXUS">
      {LETTERS.map((l, i) => (
        <span key={l} aria-hidden="true" className="wm-group" style={{ '--i': i }}>
          <span className="wm-letter">{l}</span>
          {i < LETTERS.length - 1 && <span className="wm-dot">.</span>}
        </span>
      ))}
    </Tag>
  )
}
