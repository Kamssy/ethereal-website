function ServiceCard({ img, title, category, desc }) {
  return (
    <div className="service-card">
      <div className="service-card__img-wrap">
        <img src={img} alt={title} loading="lazy" />
        <span className="service-card__category">{category}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{desc}</p>
        <button className="service-card__btn">Learn More →</button>
      </div>
    </div>
  );
}

export default ServiceCard;
