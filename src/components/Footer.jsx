import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">

        <div className="footer__brand">
          <h2 className="footer__logo">🌿 Ethereal</h2>
          <p>
            A sanctuary for those who seek the extraordinary in nature's
            finest wonders. Every page, a journey.
          </p>
          <div className="footer__tagline">
            <span>— Curated with reverence since 2025</span>
          </div>
        </div>

        <div className="footer__nav">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer__nav">
          <h4>Wonders</h4>
          <a href="#">Aurora Borealis</a>
          <a href="#">Amazon Rainforest</a>
          <a href="#">Great Barrier Reef</a>
          <a href="#">Sahara Desert</a>
          <a href="#">Patagonia</a>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Twitter / X</a>
          <a href="#">Pinterest</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2025 Ethereal. Crafted with reverence for nature.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
