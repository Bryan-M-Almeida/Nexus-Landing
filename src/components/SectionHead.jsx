export default function SectionHead({ code, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow mono"><span>{code}</span></p>
      <h2>{title}</h2>
      {children && <p className="section-sub">{children}</p>}
    </div>
  )
}
