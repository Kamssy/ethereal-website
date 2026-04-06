import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import "../../styles/About.css";

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__hero-overlay" />
        <div className="about__hero-content container">
          <p className="section__eyebrow">Our Story</p>
          <h1>
            Born from a Love
            <br />
            <em>of Wild Places</em>
          </h1>
          <p className="about__hero-sub">
            Ethereal began as a quiet obsession — chasing light through forests,
            following rivers to their source, standing at the edge of the world
            and choosing to stay a little longer.
          </p>
        </div>
      </section>

      <MissionSection />
      <TeamSection />
    </main>
  );
}

export default About;
