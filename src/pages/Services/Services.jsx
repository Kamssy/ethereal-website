import { useState } from "react";
import ServiceCard from "./ServiceCard";
import "../../styles/Services.css";

const categories = ["All", "Adventure", "Wellness", "Cultural"];

const services = [
  {
    category: "Adventure",
    title: "Summit Expeditions",
    img: "/assets/images/adventure1.jpg",
    desc: "Guided ascents to the world's most iconic peaks, led by seasoned mountaineers who know every ridge.",
  },
  {
    category: "Cultural",
    title: "Aurora Expeditions",
    img: "/assets/images/culture-3.jpg",
    desc: "Chase the northern lights across Scandinavia with astronomers and cultural storytellers.",
  },
  {
    category: "Wellness",
    title: "Forest Bathing Retreats",
    img: "/assets/images/wellness1.jpg",
    desc: "Science-backed shinrin-yoku sessions in healing natural environments designed to restore the mind.",
  },
  {
    category: "Cultural",
    title: "Sacred Sites Tours",
    img: "/assets/images/culture1.jpg",
    desc: "Expert-led visits to the world's most spiritually significant natural landmarks and ancient ruins.",
  },
  {
    category: "Adventure",
    title: "Deep Forest Treks",
    img: "/assets/images/adventure2.jpg",
    desc: "Multi-day immersions into ancient, uncharted rainforest territories far beyond the tourist trail.",
  },
  {
    category: "Wellness",
    title: "Wild Meditation",
    img: "/assets/images/wellness2.jpg",
    desc: "Guided mindfulness in breathtaking open-air sanctuaries — where stillness meets the elements.",
  },
  {
    category: "Wellness",
    title: "Waterfall Escapes",
    img: "/assets/images/wellness3.jpg",
    desc: "Immersive retreats beside the world's most spectacular cascades — nature's purest therapy.",
  },
  {
    category: "Cultural",
    title: "Indigenous Wisdom Walks",
    img: "/assets/images/culture2.jpg",
    desc: "Walk with local guides who carry generations of ecological knowledge through living landscapes.",
  },
  {
    category: "Adventure",
    title: "Desert Expeditions",
    img: "/assets/images/adventure3.jpg",
    desc: "Cross vast golden dunes under endless skies with expert desert guides lighting the way.",
  },
];

const faqs = [
  {
    q: "Do I need prior experience for expeditions?",
    a: "Most of our adventures cater to all fitness levels. Each service listing clearly states the required experience and physical fitness needed before you book.",
  },
  {
    q: "What is included in the service price?",
    a: "All prices include expert guides, specialist equipment, safety gear, and curated itineraries. International flights and travel insurance are not included.",
  },
  {
    q: "Can I customise my experience?",
    a: "Absolutely. Reach out through our Contact page and our team will tailor a personal itinerary to your preferences, timeline, and group size.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refunds are available up to 14 days before your departure date. Cancellations within 14 days are eligible for a 50% refund or a full credit toward a future booking.",
  },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq__item ${open ? "open" : ""}`}>
      <button
        className="faq__question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq__icon">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq__answer">{a}</p>}
    </div>
  );
}

function Services() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <main className="services">
      <section className="services__hero">
        <div className="services__hero-overlay" />
        <div className="container services__hero-content">
          <p className="section__eyebrow">What We Offer</p>
          <h1>
            Curated <em>Experiences</em>
            <br />
            for the Discerning Explorer
          </h1>
          <p className="services__hero-sub">
            Every offering is handpicked, guided by experts, and designed to
            leave you changed.
          </p>
        </div>
      </section>

      <section className="services__body section">
        <div className="container">
          <div className="services__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="services__grid">
            {filtered.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container">
          <p className="section__eyebrow">FAQs</p>
          <h2 className="section__title">Common Questions</h2>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <FAQ key={i} {...f} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
