import { useState } from 'react'

interface CounterProps {
  initialValue?: number
  title?: string
  minValue?: number
  maxValue?: number
}

export function Counter({
  initialValue = 0,
  title = 'Counter',
  minValue = 0,
  maxValue,
}: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount((prev) => (maxValue !== undefined ? Math.min(prev + 1, maxValue) : prev + 1))
  }

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, minValue))
  }

  const reset = () => {
    setCount(initialValue)
  }

  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 w-full max-w-sm">
      <h3 className="text-lg font-bold text-white mb-4 text-center">{title}</h3>
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          onClick={decrement}
          disabled={count === minValue}
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 active:scale-95 disabled:hover:shadow-none"
        >
          −
        </button>
        
        <div className="px-8 py-2 text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text min-w-24 text-center">
          {count}
        </div>
        
        <button
          onClick={increment}
          disabled={maxValue !== undefined && count === maxValue}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/50 active:scale-95 disabled:hover:shadow-none"
        >
          +
        </button>
      </div>
      
      <button
        onClick={reset}
        className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-colors duration-200 active:scale-95"
      >
        Reset
      </button>
    </div>
  )
}

