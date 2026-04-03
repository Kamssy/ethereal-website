function QuoteSection() {
  return (
    <section
      className="quote-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="quote-section__overlay" />
      <div className="quote-section__content container">
        <span className="quote-section__mark">"</span>
        <blockquote>
          <p className="quote-section__text">
            The poetry of the earth is never dead.
          </p>
          <cite className="quote-section__cite">— John Keats</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default QuoteSection;
