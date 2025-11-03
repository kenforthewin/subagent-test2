import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'
    }`}>
      <div className="px-6 py-12 max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          React + Vite + Tailwind
        </h1>
        
        {/* Subheading */}
        <p className="text-center text-lg mb-12 opacity-75">
          Modern web development with lightning-fast performance
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
            darkMode 
              ? 'border-gray-700 bg-gray-800 hover:border-blue-500' 
              : 'border-gray-200 bg-white hover:border-blue-500'
          }`}>
            <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
            <p className="opacity-75">Lightning-fast development experience with Vite</p>
          </div>
          
          <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
            darkMode 
              ? 'border-gray-700 bg-gray-800 hover:border-purple-500' 
              : 'border-gray-200 bg-white hover:border-purple-500'
          }`}>
            <h3 className="text-xl font-semibold mb-2">⚛️ React</h3>
            <p className="opacity-75">Modern React with hooks and functional components</p>
          </div>
          
          <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
            darkMode 
              ? 'border-gray-700 bg-gray-800 hover:border-pink-500' 
              : 'border-gray-200 bg-white hover:border-pink-500'
          }`}>
            <h3 className="text-xl font-semibold mb-2">🎨 Tailwind</h3>
            <p className="opacity-75">Utility-first CSS for rapid UI development</p>
          </div>
        </div>

        {/* Interactive Section */}
        <div className={`p-8 rounded-xl border-2 transition-all duration-300 ${
          darkMode 
            ? 'border-gray-700 bg-gray-800' 
            : 'border-gray-200 bg-white'
        } shadow-lg`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Interactive Counter</h2>
          
          <div className="flex flex-col items-center gap-6">
            <div className="text-6xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {count}
            </div>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Increment +
              </button>
              
              <button
                onClick={() => setCount(count - 1)}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Decrement -
              </button>
              
              <button
                onClick={() => setCount(0)}
                className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Footer */}
        <p className="text-center mt-12 text-sm opacity-50">
          Built with React, Vite, and Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default App

