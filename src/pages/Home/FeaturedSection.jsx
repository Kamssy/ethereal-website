const wonders = [
  {
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&auto=format&fit=crop",
    tag: "Arctic",
    title: "Aurora Borealis",
    desc: "The sky becomes a living canvas of emerald and violet light, dancing across the Scandinavian night.",
  },
  {
    img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=700&auto=format&fit=crop",
    tag: "Ocean",
    title: "Great Barrier Reef",
    desc: "The world's largest coral ecosystem, teeming with extraordinary life beneath crystal turquoise waters.",
  },
  {
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop",
    tag: "Forest",
    title: "Amazon Rainforest",
    desc: "Earth's lungs — a vast, primordial wilderness of unimaginable biodiversity and ancient beauty.",
  },
];

function WonderCard({ img, tag, title, desc }) {
  return (
    <div className="wonder-card">
      <div className="wonder-card__img-wrap">
        <img src={img} alt={title} loading="lazy" />
        <span className="wonder-card__tag">{tag}</span>
      </div>
      <div className="wonder-card__body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="wonder-card__link">Discover more →</span>
      </div>
    </div>
  );
}

function FeaturedSection() {
  return (
    <section className="featured section">
      <div className="container">
        <p className="section__eyebrow">Featured Wonders</p>
        <h2 className="section__title">Nature's Finest Masterpieces</h2>
        <div className="featured__grid">
          {wonders.map((w, i) => (
            <WonderCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
