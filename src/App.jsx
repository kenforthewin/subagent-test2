import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 hover:drop-shadow-lg transition-all" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-24 hover:drop-shadow-lg transition-all animate-spin-slow" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Vite + React + Tailwind
        </h1>
        <div className="text-center">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-gray-600">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
