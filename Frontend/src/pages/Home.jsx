import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const roles = ['MERN Stack Developer', 'AI/ML Enthusiast', 'Problem Solver', 'CSE (AIML) Student']

const stats = [
  { value: '116+', label: 'LeetCode Problems' },
  { value: '500+', label: 'SkillRack Problems' },
  { value: '2',    label: 'AI/ML Projects' },
  { value: '3+',   label: 'Certifications' },
]

const techPills = ['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Flask', 'C++', 'AI/ML']

const Home = () => {
  const [roleIdx, setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4a5fc1]/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#5ebec4]/8 blur-[140px] animate-pulse-slow" style={{animationDelay:'2s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#394f8a]/8 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative container mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-[#a0aecd] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5ebec4] animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Hi, I'm<br />
              <span className="text-gradient">Hariharan A</span>
            </h1>

            <div className="flex items-center gap-2 text-xl md:text-2xl text-[#a0aecd] mb-6 h-9">
              <span className="text-[#5ebec4]">&gt;</span>
              <span className="font-mono">{displayed}</span>
              <span className="w-0.5 h-6 bg-[#5ebec4] animate-pulse" />
            </div>

            <p className="text-[#a0aecd] text-lg leading-relaxed mb-10 max-w-lg">
              B.E. CSE (AIML) student at Sri Eshwar College of Engineering.
              Building full-cycle web apps and AI-powered systems that solve real problems.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {techPills.map(t => (
                <span key={t} className="glass border border-white/10 text-[#a0aecd] text-xs px-3 py-1.5 rounded-full hover:border-[#4a5fc1]/60 hover:text-white transition-all cursor-default">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link to="/projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4a5fc1] to-[#394f8a] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#4a5fc1]/25">
                View Projects
              </Link>
              <Link to="/contact"
                className="px-7 py-3.5 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all">
                Get In Touch
              </Link>
              <a href="/Hariharan_A.Resume.pdf" download
                className="px-7 py-3.5 rounded-xl border border-[#5ebec4]/30 text-[#5ebec4] font-semibold hover:bg-[#5ebec4]/10 transition-all">
                Download CV
              </a>
            </div>
          </div>

          {/* Avatar + orbit ring */}
          <div className="flex justify-center items-center relative animate-fade-in">
            <div className="relative">
              <div className="absolute inset-[-16px] rounded-full border border-[#4a5fc1]/20 animate-spin-slow" />
              <div className="absolute inset-[-32px] rounded-full border border-dashed border-[#5ebec4]/10 animate-spin-slow" style={{animationDirection:'reverse'}} />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient glow-indigo relative z-10 animate-float">
                <img
                  src="/profile.jpg"
                  alt="Hariharan A"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Hariharan+A&size=320&background=4a5fc1&color=fff&bold=true' }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute top-2 -right-6 glass border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-semibold animate-float" style={{animationDelay:'1s'}}>
                🏆 Hackathon Top 5
              </div>
              <div className="absolute bottom-4 -left-8 glass border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-semibold animate-float" style={{animationDelay:'2s'}}>
                🎯 116+ LeetCode
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 text-center hover:border-[#4a5fc1]/30 transition-all hover:scale-105 border border-white/5">
              <div className="text-3xl font-display font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-[#a0aecd] text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">What I <span className="text-gradient">Do</span></h2>
          <p className="text-[#a0aecd] text-lg">Building impactful solutions across web and AI</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🌐', title: 'MERN Stack Development', desc: 'Full-cycle web apps with MongoDB, Express, React, Node.js. From POC to AWS deployment.', color: '#4a5fc1' },
            { icon: '🤖', title: 'AI / ML Engineering', desc: 'Face recognition attendance systems, health prediction models using Python and machine learning.', color: '#5ebec4' },
            { icon: '⚡', title: 'Problem Solving', desc: '116+ LeetCode, 500+ SkillRack problems solved. Strong DSA and DBMS fundamentals.', color: '#394f8a' },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group border border-white/5 hover:border-white/10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6" style={{backgroundColor: c.color + '22'}}>
                {c.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">{c.title}</h3>
              <p className="text-[#a0aecd] leading-relaxed text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative container mx-auto px-6 py-16">
        <div className="glass-card rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4a5fc1]/5 to-[#5ebec4]/5 pointer-events-none" />
          <h2 className="font-display text-4xl font-bold text-white mb-4 relative z-10">Let's Build Something <span className="text-gradient">Amazing</span></h2>
          <p className="text-[#a0aecd] text-lg mb-8 relative z-10">Open to internships, collaborations, and full-time opportunities.</p>
          <div className="flex gap-4 justify-center flex-wrap relative z-10">
            <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#4a5fc1] to-[#5ebec4] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg">
              Get In Touch
            </Link>
            <Link to="/timeline" className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all">
              My Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
