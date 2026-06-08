const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden group">
        <img 
          src={project.image || 'https://via.placeholder.com/400x250/4F46E5/ffffff?text=Project'} 
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {(project.technologies || project.techStack)?.map((tech, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              <span>🔗</span>
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
              <span>💻</span>
              <span>GitHub</span>
            </a>
          )}
   




</div>
</div>
</div>
)
}

export default ProjectCard
