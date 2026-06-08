const events = [
  {
    year: '2021',
    month: 'Mar',
    type: 'education',
    icon: '📗',
    title: 'SSLC — 89.8%',
    subtitle: 'N.A.Annapparaja Memorial Hr. Sec. School',
    desc: 'Completed 10th grade with 89.8%, building a strong academic foundation.',
    color: '#5ebec4',
  },
  {
    year: '2023',
    month: 'Apr',
    type: 'education',
    icon: '📘',
    title: 'HSC — 77.5%',
    subtitle: 'N.A.Annapparaja Memorial Hr. Sec. School',
    desc: 'Completed 12th grade. Developed interest in computers and programming.',
    color: '#4a5fc1',
  },
  {
    year: '2024',
    month: 'Jan',
    type: 'certification',
    icon: '📜',
    title: 'C Programming Certificate',
    subtitle: 'Great Learning',
    desc: 'Completed structured C programming course, solidifying low-level programming fundamentals.',
    color: '#394f8a',
  },
  {
    year: '2024',
    month: 'Aug',
    type: 'education',
    icon: '🎓',
    title: 'B.E. CSE (AIML) — Joined SECE',
    subtitle: 'Sri Eshwar College of Engineering, Coimbatore',
    desc: 'Began B.E. in Computer Science with AI & ML specialization. Currently at CGPA 7.54 (up to 4th sem).',
    color: '#5ebec4',
  },
  {
    year: '2024',
    month: 'Sep',
    type: 'internship',
    icon: '🚀',
    title: 'MERN Stack Developer Intern',
    subtitle: 'EduCentro Private Limited',
    desc: 'Built full-cycle MERN apps, worked on POC development, assisted in AWS deployment, and maintained SDLC documentation.',
    color: '#4a5fc1',
  },
  {
    year: '2024',
    month: 'Oct',
    type: 'project',
    icon: '🏥',
    title: 'Smart Healthcare Monitoring System',
    subtitle: 'AI/ML Project',
    desc: 'Built a machine learning–based disease prediction system using patient symptoms and health data with Flask and Scikit-learn.',
    color: '#5ebec4',
  },
  {
    year: '2024',
    month: 'Nov',
    type: 'achievement',
    icon: '🏆',
    title: 'Project Expo — Winner',
    subtitle: 'RVS Technical Campus',
    desc: 'Won the Project Expo competition, presenting an innovative tech solution to a panel of judges.',
    color: '#f89820',
  },
  {
    year: '2025',
    month: 'Jan',
    type: 'certification',
    icon: '📜',
    title: 'Mastering DSA using C and C++',
    subtitle: 'Udemy',
    desc: 'Completed in-depth DSA course — arrays, trees, graphs, dynamic programming. Applied learnings on LeetCode (116+ problems).',
    color: '#4a5fc1',
  },
  {
    year: '2025',
    month: 'Feb',
    type: 'project',
    icon: '🎭',
    title: 'Seamless Attendance using AI',
    subtitle: 'AI/ML Project',
    desc: 'Developed an automated face recognition–based attendance system using Raspberry Pi and real-time face detection.',
    color: '#5ebec4',
  },
  {
    year: '2025',
    month: 'Mar',
    type: 'achievement',
    icon: '🥇',
    title: 'SELF E-Hackathon — Top 5 Finalist',
    subtitle: 'Sri Eshwar College of Engineering',
    desc: 'Ranked in the top 5 among all participants at the SELF E-Hackathon, competing with innovative project ideas.',
    color: '#f89820',
  },
  {
    year: '2026',
    month: 'Soon',
    type: 'certification',
    icon: '📜',
    title: 'Design Thinking Certificate',
    subtitle: 'NPTEL',
    desc: 'Pursuing NPTEL Design Thinking certification to strengthen product thinking and problem-solving methodologies.',
    color: '#5ebec4',
  },
]

const typeColors = {
  education:    { bg: '#4a5fc1', label: 'Education' },
  internship:   { bg: '#5ebec4', label: 'Internship' },
  project:      { bg: '#394f8a', label: 'Project' },
  achievement:  { bg: '#f89820', label: 'Achievement' },
  certification:{ bg: '#6b7fe0', label: 'Certification' },
}

const filters = ['All', 'Education', 'Internship', 'Project', 'Achievement', 'Certification']

import { useState } from 'react'

const Timeline = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? events
    : events.filter(e => typeColors[e.type]?.label === active)

  return (
    <div className="min-h-screen bg-[#0a0e1a] py-20">
      {/* Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#4a5fc1]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#5ebec4]/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-[#a0aecd] mb-6">
            <span className="text-[#5ebec4]">🗺️</span> My Journey So Far
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Career <span className="text-gradient">Timeline</span>
          </h1>
          <p className="text-[#a0aecd] text-lg max-w-xl mx-auto">
            Every milestone, project, achievement and certification — all in one place.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-gradient-to-r from-[#4a5fc1] to-[#5ebec4] text-white shadow-lg scale-105'
                  : 'glass border border-white/10 text-[#a0aecd] hover:text-white hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#4a5fc1]/60 via-[#5ebec4]/40 to-transparent" />

          <div className="space-y-8">
            {filtered.map((event, idx) => (
              <div
                key={`${event.title}-${idx}`}
                className="relative pl-20 animate-fade-up"
                style={{animationDelay: `${idx * 0.05}s`}}
              >
                {/* Icon dot */}
                <div
                  className="absolute left-0 top-6 w-16 flex flex-col items-center"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl border-2 shadow-lg z-10"
                    style={{
                      backgroundColor: event.color + '22',
                      borderColor: event.color + '55',
                      boxShadow: `0 0 16px ${event.color}33`,
                    }}
                  >
                    {event.icon}
                  </div>
                  <span className="text-[10px] text-[#a0aecd] mt-1 font-mono">{event.month}</span>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:scale-[1.01] transition-all group">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-gradient transition-all">
                        {event.title}
                      </h3>
                      <p className="text-sm font-medium" style={{color: event.color}}>{event.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{backgroundColor: typeColors[event.type]?.bg + '22', color: typeColors[event.type]?.bg}}
                      >
                        {typeColors[event.type]?.label}
                      </span>
                      <span className="text-xs font-mono text-[#a0aecd] glass border border-white/10 px-2.5 py-1 rounded-full">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#a0aecd] text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
