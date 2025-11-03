import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              React + Vite + Tailwind
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Vite
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              React
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Tailwind
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-12 mb-12">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <img src={reactLogo} className="h-24 w-24" alt="React logo" />
            </a>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build Fast
            </span>
            <br />
            <span className="text-white">
              Style Beautiful
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            A modern React development stack with Vite's lightning-fast HMR and Tailwind CSS for utility-first styling.
            Built with TypeScript for type safety and best practices.
          </p>

          {/* Card Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Vite provides instant server start and sub-millisecond HMR for rapid development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">Beautiful Design</h3>
              <p className="text-gray-400">
                Tailwind CSS v4 with utility classes for rapid UI development and design consistency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-pink-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-pink-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Type Safe</h3>
              <p className="text-gray-400">
                TypeScript integration ensures type safety and improved developer experience.
              </p>
            </div>
          </div>

          {/* Interactive Button */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Interactive Counter</h2>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCount((count) => Math.max(0, count - 1))}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
              >
                −
              </button>
              <div className="px-8 py-3 text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
                {count}
              </div>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/50 active:scale-95"
              >
                +
              </button>
            </div>
            <button
              onClick={() => setCount(0)}
              className="mt-4 w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Responsive Features Section */}
        <section className="mt-20 pt-20 border-t border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-8">Responsive Design</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Mobile', 'Tablet', 'Laptop', 'Desktop'].map((device, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg text-center font-semibold text-white transition-all duration-300 hover:scale-105 ${
                  ['bg-blue-600', 'bg-purple-600', 'bg-pink-600', 'bg-cyan-600'][idx]
                }`}
              >
                {device}
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-20 pt-20 border-t border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-gray-300 mb-6">
              This project demonstrates a modern React development setup with Vite and Tailwind CSS. You can edit <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">src/App.tsx</code> and see your changes instantly thanks to Vite's Hot Module Replacement (HMR).
            </p>
            <div className="space-y-2 text-gray-400">
              <p>📝 <strong>Edit:</strong> <code className="text-cyan-400">src/App.tsx</code> to customize the app</p>
              <p>🎨 <strong>Style:</strong> Use Tailwind utility classes for rapid styling</p>
              <p>⚡ <strong>Develop:</strong> Run <code className="text-cyan-400">npm run dev</code> for instant feedback</p>
              <p>📦 <strong>Build:</strong> Run <code className="text-cyan-400">npm run build</code> for production</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-400">
          <p>Built with React, Vite, and Tailwind CSS v4 • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

