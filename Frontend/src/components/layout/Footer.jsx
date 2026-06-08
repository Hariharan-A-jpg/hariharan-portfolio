import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] border-t border-white/5 pt-14 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4a5fc1] to-[#5ebec4] flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <span className="font-display font-bold text-xl text-white">
                Hariharan<span className="text-gradient">.</span>
              </span>
            </Link>
            <p className="text-[#a0aecd] text-sm leading-relaxed">
              MERN Stack Developer & AI/ML Enthusiast.<br />
              Building smart, scalable web solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/timeline', 'Timeline'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-[#a0aecd] text-sm hover:text-[#5ebec4] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="https://github.com/Hariharan-A-jpg" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-[#a0aecd] text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">⌨</span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hari-haran-a-9a8a6b333/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-[#a0aecd] text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">💼</span>
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/Hariharan_10102006/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 text-[#a0aecd] text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">🎯</span>
                LeetCode
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#a0aecd] text-sm">&copy; {new Date().getFullYear()} Hariharan A. All rights reserved.</p>
          <p className="text-[#a0aecd] text-sm">Built with <span className="text-[#5ebec4]">React</span> & <span className="text-[#4a5fc1]">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
