import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/contact',  label: 'Contact' },
]

const Navbar = () => {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4a5fc1] to-[#5ebec4] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              H
            </div>
            <span className="font-display font-bold text-xl text-white">
              Hariharan<span className="text-gradient">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? 'text-white'
                    : 'text-[#a0aecd] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
                {pathname === to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#4a5fc1] to-[#5ebec4] rounded-full" />
                )}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/admin" className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[#4a5fc1] to-[#394f8a] text-white hover:opacity-90 transition-opacity">
                  Dashboard
                </Link>
                <button onClick={logout} className="px-4 py-2 text-sm font-medium text-[#a0aecd] hover:text-white transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="ml-2 px-4 py-2 rounded-lg text-sm font-medium border border-[#4a5fc1]/50 text-[#a0aecd] hover:border-[#4a5fc1] hover:text-white transition-all">
                Login
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 group"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl glass border border-white/5 space-y-1 animate-fade-up">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === to
                    ? 'bg-white/10 text-white'
                    : 'text-[#a0aecd] hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-medium text-[#a0aecd] hover:text-white hover:bg-white/5 transition-all">Dashboard</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-[#a0aecd] hover:text-white hover:bg-white/5 transition-all">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-medium text-[#a0aecd] hover:text-white hover:bg-white/5 transition-all">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
