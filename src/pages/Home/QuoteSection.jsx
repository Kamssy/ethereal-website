function QuoteSection() {
  return (
    <section
      className="quote-section"
      style={{
        backgroundImage: "url('/assets/images/quote-2.jpg')",
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
