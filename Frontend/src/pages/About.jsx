const skillGroups = [
  { category: 'Programming',     items: ['C', 'C++', 'Python', 'Java'],             color: '#4a5fc1' },
  { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript'],              color: '#5ebec4' },
  { category: 'Frameworks',      items: ['React', 'Flask'],                          color: '#394f8a' },
  { category: 'Core Concepts',   items: ['DSA', 'DBMS', 'AI/ML'],                  color: '#4a5fc1' },
  { category: 'Tools',           items: ['GitHub', 'Canva', 'Google Colab'],        color: '#5ebec4' },
  { category: 'IDEs',            items: ['VSCode', 'Eclipse', 'Python IDE', 'Multisim'], color: '#394f8a' },
]

const education = [
  { institution: 'Sri Eshwar College of Engineering', degree: 'B.E. CSE (AIML)', score: 'CGPA: 7.54', year: '2024 – Present', icon: '🎓' },
  { institution: 'N.A.Annapparaja Memorial Hr. Sec. School', degree: 'HSC (Higher Secondary)', score: '77.5%', year: '2023 – 2024', icon: '📘' },
  { institution: 'N.A.Annapparaja Memorial Hr. Sec. School', degree: 'SSLC (10th Grade)', score: '89.8%', year: '2021 – 2022', icon: '📗' },
]

const certifications = [
  { name: 'Design Thinking Certificate', issuer: 'NPTEL', year: '2026', color: '#4a5fc1' },
  { name: 'Mastering DSA using C and C++', issuer: 'Udemy', year: '2025', color: '#5ebec4' },
  { name: 'C Programming Certificate', issuer: 'Great Learning', year: '2024', color: '#394f8a' },
]

const achievements = [
  { title: 'SELF E-Hackathon', desc: 'TOP 5 Finalist — SECE', icon: '🥇' },
  { title: 'Project Expo Winner', desc: 'RVS Technical Campus', icon: '🏆' },
]

const platforms = [
  { name: 'LeetCode',   detail: '116+ DSA problems',              link: 'https://leetcode.com/u/Hariharan_10102006/', icon: '🎯', color: '#f89820' },
  { name: 'SkillRack',  detail: '500+ programming problems',      link: '#',                                           icon: '🧠', color: '#4a5fc1' },
  { name: 'HackerRank', detail: 'DBMS programming challenges',    link: '#',                                           icon: '💡', color: '#2ec866' },
]

const SectionTitle = ({ children }) => (
  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-3">
    {children}
  </h2>
)

const About = () => (
  <div className="min-h-screen bg-[#0a0e1a] py-20">
    {/* Blobs */}
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#4a5fc1]/8 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#5ebec4]/6 blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10 space-y-20">

      {/* Hero profile */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl glow-indigo">
            <img
              src="/src/assets/profile.jpg"
              alt="Hariharan A"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Hariharan+A&size=320&background=4a5fc1&color=fff&bold=true' }}
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass border border-white/10 rounded-2xl px-5 py-3 text-center whitespace-nowrap">
            <div className="text-white font-semibold text-sm">Coimbatore, India 📍</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-1.5 text-xs text-[#a0aecd] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5ebec4] animate-pulse" />
            B.E. CSE (AIML) · Sri Eshwar College
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-[#a0aecd] text-lg leading-relaxed mb-4">
            I'm a MERN Stack Developer Intern with hands-on experience at EduCentro Private Limited,
            where I built full-cycle web applications, assisted with AWS deployments, and maintained SDLC documentation.
          </p>
          <p className="text-[#a0aecd] text-lg leading-relaxed mb-8">
            I'm passionate about AI/ML, competitive programming, and building clean, scalable software.
          </p>
          <a
            href="/Hariharan_A.Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4a5fc1] to-[#394f8a] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#4a5fc1]/20"
          >
            <span>📄</span> Download Resume
          </a>
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionTitle><span className="text-gradient">Education</span></SectionTitle>
        <div className="relative pl-6 border-l border-white/10 space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="relative">
              <div className="absolute -left-[2.15rem] w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-lg">
                {edu.icon}
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-[#4a5fc1]/30 transition-all hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <div className="text-white font-semibold text-lg">{edu.institution}</div>
                    <div className="text-[#a0aecd] text-sm">{edu.degree}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gradient">{edu.score}</div>
                    <div className="text-[#a0aecd] text-xs">{edu.year}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internship */}
      <div>
        <SectionTitle><span className="text-gradient">Experience</span></SectionTitle>
        <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-[#4a5fc1]/30 transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#4a5fc1]/20 flex items-center justify-center text-2xl shrink-0">🚀</div>
            <div>
              <h3 className="text-white font-bold text-xl">MERN Stack Developer Intern</h3>
              <p className="text-[#5ebec4] font-medium">EduCentro Private Limited</p>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              'Developed full-cycle MERN stack applications — MongoDB, Express.js, React.js, Node.js.',
              'Worked on Proof of Concept (POC) development for web-based solutions.',
              'Assisted in AWS deployment for frontend and backend applications.',
              'Created and maintained client documentation aligned with the SDLC.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#a0aecd] text-sm">
                <span className="text-[#5ebec4] mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <SectionTitle><span className="text-gradient">Skills</span></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{color: group.color}}>{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full font-medium text-white transition-all hover:scale-105 cursor-default"
                    style={{backgroundColor: group.color + '22', border: `1px solid ${group.color}44`}}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coding platforms */}
      <div>
        <SectionTitle><span className="text-gradient">Coding Platforms</span></SectionTitle>
        <div className="grid md:grid-cols-3 gap-5">
          {platforms.map((p) => (
            <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
               className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:scale-105 transition-all flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                   style={{backgroundColor: p.color + '22'}}>
                {p.icon}
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-gradient transition-all">{p.name}</div>
                <div className="text-[#a0aecd] text-xs">{p.detail}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <SectionTitle><span className="text-gradient">Certifications</span></SectionTitle>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-10 rounded-full" style={{backgroundColor: cert.color}} />
                <div>
                  <div className="text-white font-semibold">{cert.name}</div>
                  <div className="text-[#a0aecd] text-xs">{cert.issuer}</div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full shrink-0"
                    style={{backgroundColor: cert.color + '22', color: cert.color}}>
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <SectionTitle><span className="text-gradient">Achievements</span></SectionTitle>
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <div key={a.title} className="glass-card rounded-2xl p-8 border border-white/5 hover:border-[#4a5fc1]/30 hover:scale-105 transition-all text-center">
              <div className="text-5xl mb-4">{a.icon}</div>
              <div className="text-white font-bold text-xl mb-1">{a.title}</div>
              <div className="text-[#a0aecd] text-sm">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
)

export default About
