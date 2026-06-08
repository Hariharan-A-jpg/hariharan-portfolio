import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData]   = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = { ...formData, timestamp: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    localStorage.setItem('contactMessages', JSON.stringify([...existing, msg]))
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Hariharan-A-jpg',                    icon: '⌨',  detail: 'Hariharan-A-jpg',         color: '#e2e8f0' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hari-haran-a-9a8a6b333/', icon: '💼', detail: 'hari-haran-a-9a8a6b333',  color: '#0a66c2' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Hariharan_10102006/',            icon: '🎯', detail: 'Hariharan_10102006',        color: '#f89820' },
  ]

  const inputClass = "w-full bg-white/5 border border-white/10 text-white placeholder-[#a0aecd] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#4a5fc1]/70 focus:bg-white/8 transition-all"

  return (
    <div className="min-h-screen bg-[#0a0e1a] py-20">
      {/* Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#4a5fc1]/8 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#5ebec4]/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-[#a0aecd] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5ebec4] animate-pulse" />
            Open to opportunities
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-[#a0aecd] text-lg">Have a project or opportunity? Let's talk.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8 border border-white/5">
            <h2 className="font-display text-2xl font-bold text-white mb-8">Send a Message</h2>

            {submitted && (
              <div className="flex items-center gap-3 bg-[#5ebec4]/10 border border-[#5ebec4]/30 text-[#5ebec4] px-4 py-3 rounded-xl mb-6 text-sm">
                <span>✓</span> Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#a0aecd] uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a0aecd] uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a0aecd] uppercase tracking-wider mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} h-36 resize-none`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4a5fc1] to-[#394f8a] text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-[#4a5fc1]/25"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <h2 className="font-display text-2xl font-bold text-white mb-6">Contact Info</h2>
              <div className="space-y-5">
                {[
                  { icon: '📧', label: 'Email',    value: 'hariharan.a2024aiml@sece.ac.in', href: 'mailto:hariharan.a2024aiml@sece.ac.in' },
                  { icon: '📱', label: 'Phone',    value: '+91 7598665346',                   href: 'tel:+917598665346' },
                  { icon: '📍', label: 'Location', value: 'Coimbatore, Tamil Nadu, India',   href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#4a5fc1]/15 border border-[#4a5fc1]/25 flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#a0aecd] font-semibold uppercase tracking-wider">{label}</div>
                      {href
                        ? <a href={href} className="text-white text-sm hover:text-[#5ebec4] transition-colors">{value}</a>
                        : <span className="text-white text-sm">{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <h2 className="font-display text-xl font-bold text-white mb-5">Find Me Online</h2>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div className="flex-1">
                      <div className="text-white text-sm font-semibold group-hover:text-gradient transition-all">{s.label}</div>
                      <div className="text-[#a0aecd] text-xs">{s.detail}</div>
                    </div>
                    <span className="text-[#a0aecd] text-xs group-hover:text-white transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
