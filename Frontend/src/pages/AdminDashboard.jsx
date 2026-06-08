import { useState, useEffect } from 'react'
import { getProjects, createProject, deleteProject } from '../services/projectService'
import ProjectForm from '../components/project/ProjectForm'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'

const AdminDashboard = () => {
  const [projects, setProjects] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = () => {
    getProjects().then(setProjects).catch(console.error)
  }

  const handleCreate = async (projectData) => {
    await createProject(projectData)
    loadProjects()
    setShowModal(false)
  }

  const handleDelete = async (id) => {
    if (confirm('Delete this project?')) {
      await deleteProject(id)
      loadProjects()
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your portfolio projects</p>
          </div>
          <div className="flex gap-4">
            <a href="/admin/messages" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
              📧 View Messages
            </a>
            <Button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              + Add Project
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {projects.map(project => (
            <div key={project._id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => handleDelete(project._id)} 
                  className="ml-4 text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-xl text-gray-600">No projects yet. Add your first project!</p>
          </div>
        )}

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New Project">
          <ProjectForm onSubmit={handleCreate} onCancel={() => setShowModal(false)} />
        </Modal>
      </div>
    </div>
  )
}

export default AdminDashboard
