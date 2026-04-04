const wonders = [
  {
    img: "/assets/images/aurora-borealis.jpg",
    tag: "Arctic",
    title: "Aurora Borealis",
    desc: "The sky becomes a living canvas of emerald and violet light, dancing across the Scandinavian night.",
  },
  {
    img: "/assets/images/great-barrier-reef.jpg",
    tag: "Ocean",
    title: "Great Barrier Reef",
    desc: "The world's largest coral ecosystem, teeming with extraordinary life beneath crystal turquoise waters.",
  },
  {
    img: "/assets/images/amazon-rainforest.jpg",
    tag: "Forest",
    title: "Amazon Rainforest",
    desc: "Earth's lungs — a vast, primordial wilderness of unimaginable biodiversity and ancient beauty.",
  },
  {
    img: "/assets/images/sahara.jpg",
    tag: "Desert",
    title: "Sahara Desert",
    desc: "An ocean of golden dunes stretching endlessly beneath a blazing sun — the world's largest hot desert, ancient and untamed.",
  },
  {
    img: "/assets/images/patagonia.jpg",
    tag: "Mountain",
    title: "Patagonia",
    desc: "At the edge of the world, jagged granite towers pierce the sky above glacial lakes of impossible blue.",
  },
  {
    img: "/assets/images/waterfall-.jpg",
    tag: "Waterfall",
    title: "Angel Falls",
    desc: "The world's highest uninterrupted waterfall, plunging 979 metres from the Venezuelan highlands into the jungle below.",
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
