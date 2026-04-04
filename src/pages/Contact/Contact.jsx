import { useState } from "react";
import ContactForm from "./ContactForm";
import "../../styles/Contact.css";

const contactDetails = [
  { icon: "📍", label: "Location", value: "Lagos, Nigeria (Global Reach)" },
  { icon: "✉️", label: "Email", value: "hello@ethereal-wonders.com" },
  { icon: "📞", label: "Phone", value: "+234 800 000 0000" },
  { icon: "🕐", label: "Response Time", value: "Within 24 hours" },
];

function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__hero-overlay" />
        <div className="container contact__hero-content">
          <p className="section__eyebrow">Get In Touch</p>
          <h1>
            We'd Love to
            <br />
            <em>Hear From You</em>
          </h1>
          <p className="contact__hero-sub">
            Whether you have a question, a dream, or simply want to say hello —
            we are listening.
          </p>
        </div>
      </section>

      <section className="contact__body section">
        <div className="contact__grid container">
          <div className="contact__info">
            <h2>Contact Information</h2>
            <p className="contact__info-intro">
              Our team of curators is available to help you plan your next
              extraordinary encounter with nature.
            </p>
            <div className="contact__details">
              {contactDetails.map((d, i) => (
                <div key={i} className="contact__detail">
                  <span className="contact__detail-icon">{d.icon}</span>
                  <div>
                    <h4>{d.label}</h4>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="contact__newsletter section">
        <div className="container">
          <p className="section__eyebrow">Stay Updated</p>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Join thousands of wonder seekers. No spam — only beauty, delivered
            gently.
          </p>

          {subscribed ? (
            <div className="newsletter__success">
              <span>🌿</span>
              <p>You're in. Welcome to the Ethereal family.</p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleNewsletter}>
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
    </main>
  );
}

export default Contact;
