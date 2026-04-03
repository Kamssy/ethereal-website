import { useEffect, useRef } from "react";

const stats = [
  { number: "500+", label: "Natural Wonders" },
  { number: "120+", label: "Countries Covered" },
  { number: "2M+", label: "Wonder Seekers" },
  { number: "15", label: "Years of Curation" },
];

function StatsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.2 },
    );
    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats section" ref={ref}>
      <div className="stats__grid container">
        {stats.map((s, i) => (
          <div
            key={i}
            className="stats__item reveal"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <span className="stats__number">{s.number}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
