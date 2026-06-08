import { useState, useEffect } from 'react'
import Loader from '../components/ui/Loader'
import { getProjects } from '../services/projectService'

const staticProjects = [
  {
    _id: 'static-1',
    title: 'Seamless Attendance using AI',
    description: 'Automated face recognition–based attendance system using Raspberry Pi. Detects and identifies student faces in real time, eliminates proxy attendance, and stores data securely.',
    techStack: ['Python', 'AI/ML', 'Raspberry Pi', 'Face Recognition', 'OpenCV'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Hariharan-A-jpg',
    icon: '🎭',
  },
  {
    _id: 'static-2',
    title: 'Smart Healthcare Monitoring System',
    description: 'ML-based application that predicts diseases using patient symptoms and health data. Supports early detection and assists healthcare professionals in informed decision-making.',
    techStack: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Hariharan-A-jpg',
    icon: '🏥',
  },
]

const categories = ['All', 'AI/ML', 'Web App', 'Other']

const Projects = () => {
  const [apiProjects, setApiProjects] = useState([])
  const [loading, setLoading]         = useState(true)
  const [filter, setFilter]           = useState('All')
  const [hovered, setHovered]         = useState(null)

  useEffect(() => {
    getProjects()
      .then(setApiProjects)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const all = [...staticProjects, ...apiProjects]
  const filtered = filter === 'All' ? all : all.filter(p => p.category === filter)

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-[#0a0e1a] py-20">
      {/* Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#4a5fc1]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#5ebec4]/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-[#a0aecd] mb-6">
            <span className="text-[#5ebec4]">⚡</span> {all.length} Projects Built
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-[#a0aecd] text-lg">Things I've built and shipped</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#4a5fc1] to-[#5ebec4] text-white shadow-lg shadow-[#4a5fc1]/25 scale-105'
                  : 'glass border border-white/10 text-[#a0aecd] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project._id}
              onMouseEnter={() => setHovered(project._id)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#4a5fc1]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4a5fc1]/10 flex flex-col"
            >
              {/* Card header */}
              <div className="relative h-44 bg-gradient-to-br from-[#0f1629] to-[#1a2340] flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${hovered === project._id ? 'opacity-100' : 'opacity-0'}`}
                     style={{background: 'linear-gradient(135deg, rgba(74,95,193,0.15), rgba(94,190,196,0.10))'}} />
                {project.image
                  ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  : <span className="text-7xl">{project.icon || '📁'}</span>
                }
                <div className="absolute top-3 right-3">
                  <span className="glass border border-white/10 text-xs text-[#a0aecd] px-2.5 py-1 rounded-full">
                    {project.category || 'Project'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#a0aecd] text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {(project.technologies || project.techStack || []).map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-[#4a5fc1]/15 border border-[#4a5fc1]/25 text-[#a0aecd]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[#5ebec4] text-sm font-medium hover:opacity-80 transition-opacity">
                      <span>🔗</span> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 text-[#a0aecd] text-sm font-medium hover:text-white transition-colors">
                      <span>⌨</span> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">📂</div>
            <p className="text-[#a0aecd] text-xl">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
