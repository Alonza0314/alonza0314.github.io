import './SectionDivider.css'

/**
 * 區塊之間的分隔線，模擬封包沿著傳輸線移動的效果。
 */
const SectionDivider = () => {
  return (
    <div className="section-divider" aria-hidden="true">
      <div className="section-divider__line" />
      <span className="section-divider__packet" />
      <span className="section-divider__packet section-divider__packet--delayed" />
    </div>
  )
}

export default SectionDivider
