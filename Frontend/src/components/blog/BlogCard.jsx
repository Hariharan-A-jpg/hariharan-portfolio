import { formatDate } from '../../utils/formatDate'

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {blog.category || 'General'}
        </span>
        <span className="text-gray-500 text-sm">{formatDate(blog.date)}</span>
      </div>
      <h3 className="text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">{blog.title}</h3>
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{blog.excerpt}</p>
      <a href={`/blog/${blog._id}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
        <span>Read More</span>
        <span>→</span>
      </a>
    </div>
  )
}

export default BlogCard
