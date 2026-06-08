import { useState, useEffect } from 'react'
import BlogCard from '../components/blog/BlogCard'
import Loader from '../components/ui/Loader'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Thoughts, tutorials, and insights</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        {blogs.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
