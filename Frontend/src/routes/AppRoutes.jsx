import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Timeline from '../pages/Timeline'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import AdminDashboard from '../pages/AdminDashboard'
import Messages from '../pages/Messages'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

const AppRoutes = () => (
  <Routes>
    <Route path="/login"          element={<Login />} />
    <Route path="/"               element={<Layout><Home /></Layout>} />
    <Route path="/about"          element={<Layout><About /></Layout>} />
    <Route path="/projects"       element={<Layout><Projects /></Layout>} />
    <Route path="/timeline"       element={<Layout><Timeline /></Layout>} />
    <Route path="/contact"        element={<Layout><Contact /></Layout>} />
    <Route path="/admin"          element={<PrivateRoute><Layout><AdminDashboard /></Layout></PrivateRoute>} />
    <Route path="/admin/messages" element={<PrivateRoute><Layout><Messages /></Layout></PrivateRoute>} />
  </Routes>
)

export default AppRoutes
