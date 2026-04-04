import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.includes('@')) e.email = 'A valid email is required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.length < 10)
      e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSuccess(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  if (success) {
    return (
      <div className="contact__success">
        <span>🌿</span>
        <h3>Message Received</h3>
        <p>
          Thank you for reaching out. We'll be in touch within 24 hours.
        </p>
        <button
          className="btn btn--outline"
          onClick={() => setSuccess(false)}
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Doe"
        />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="I'd like to explore..."
        />
        {errors.subject && (
          <span className="form-error">{errors.subject}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your dream experience..."
        />
        {errors.message && (
          <span className="form-error">{errors.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn--primary">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
