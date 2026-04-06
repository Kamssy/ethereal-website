function ServiceCard({ icon, title, category, desc }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon}</div>
      <span className="service-card__category">{category}</span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <button className="service-card__btn">Learn More →</button>
    </div>
  )
}

export default ServiceCard
