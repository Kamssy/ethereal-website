import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter section">
      <div className="newsletter__inner container">
        <div className="newsletter__text">
          <p className="section__eyebrow">Stay Connected</p>
          <h2>Stay Close to Nature</h2>
          <p>
            Receive curated wonder stories, travel insights, and seasonal
            discoveries — delivered gently to your inbox.
          </p>
        </div>

        {submitted ? (
          <div className="newsletter__success">
            <span>🌿</span>
            <p>Thank you! You're now part of the Ethereal family.</p>
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default NewsletterSection;
