import { useState, useEffect } from 'react'

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    setMessages(savedMessages)
  }, [])

  const handleDelete = (index) => {
    if (confirm('Delete this message?')) {
      const updatedMessages = messages.filter((_, i) => i !== index)
      localStorage.setItem('contactMessages', JSON.stringify(updatedMessages))
      setMessages(updatedMessages)
    }
  }

  return (
    <div className="min-h-screen py-12" style={{backgroundColor: '#a0aecd'}}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Messages</h1>
        
        {messages.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-gray-600">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{msg.name}</h3>
                    <p className="text-gray-600">{msg.email}</p>
                    <p className="text-sm text-gray-500">{new Date(msg.timestamp).toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50"
                  >
                    🗑️ Delete
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
