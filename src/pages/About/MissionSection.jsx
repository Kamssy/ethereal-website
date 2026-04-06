import { useEffect, useRef } from "react";

const values = [
  {
    img: "/assets/images/about-3.jpg",
    title: "Reverence",
    desc: "We approach every wonder with humility and deep respect for the natural world and all who inhabit it.",
  },
  {
    img: "/assets/images/about2.jpg",
    title: "Discovery",
    desc: "We believe the most extraordinary places are still waiting to be found by those willing to look.",
  },
  {
    img: "/assets/images/about4.jpg",
    title: "Preservation",
    desc: "We champion the protection of wild spaces and fragile ecosystems for the generations that follow.",
  },
];

function MissionSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.2 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission section" ref={ref}>
      <div className="container">
        <p className="section__eyebrow">What We Believe</p>
        <h2 className="section__title">Our Core Values</h2>
        <div className="mission__grid">
          {values.map((v, i) => (
            <div
              key={i}
              className="mission__card reveal"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="mission__card-img">
                <img src={v.img} alt={v.title} loading="lazy" />
              </div>
              <div className="mission__card-body">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
