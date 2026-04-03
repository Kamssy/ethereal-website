import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        src="https://videos.pexels.com/video-files/854100/854100-hd_1920_1080_25fps.mp4"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to Ethereal</p>
        <h1 className="hero__title">
          Where Nature Becomes
          <br />
          <em>A Work of Art</em>
        </h1>
        <p className="hero__subtitle">
          Discover the world's most breathtaking wonders — untouched, luminous,
          eternal.
        </p>
        <div className="hero__ctas">
          <Link to="/services" className="btn btn--primary">
            Explore Wonders
          </Link>
          <Link to="/about" className="btn btn--outline">
            Our Story
          </Link>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default HeroSection;
