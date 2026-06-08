import { useState } from 'react'
import Button from '../ui/Button'

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    technologies: project?.technologies?.join(', ') || '',
    image: project?.image || '',
    liveUrl: project?.liveUrl || '',
    githubUrl: project?.githubUrl || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Project Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full p-2 border rounded h-24"
        required
      />
      <input
        type="text"
        placeholder="Technologies (comma separated)"
        value={formData.technologies}
        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="url"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="url"
        placeholder="Live URL"
        value={formData.liveUrl}
        onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="url"
        placeholder="GitHub URL"
        value={formData.githubUrl}
        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4">
        <Button type="submit">Save</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  )
}

export default ProjectForm
