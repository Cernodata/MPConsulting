'use client'

import { useState } from 'react'

export default function RenovationCalculator() {
  const [projectType, setProjectType] = useState('extension')
  const [size, setSize] = useState(20) // sqm
  const [finish, setFinish] = useState('standard')
  const [email, setEmail] = useState('')
  const [showResult, setShowResult] = useState(false)

  // Base rates per sqm (Illustrative)
  const rates = {
    extension: {
      basic: 1800,
      standard: 2400,
      high: 3200
    },
    renovation: {
      basic: 800,
      standard: 1200,
      high: 1800
    },
    conversion: {
      basic: 1200,
      standard: 1600,
      high: 2200
    }
  }

  const calculateEstimate = () => {
    // @ts-ignore
    const rate = rates[projectType][finish]
    const cost = size * rate
    return {
      min: Math.round(cost * 0.9),
      max: Math.round(cost * 1.1)
    }
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowResult(true)
    }
  }

  const estimate = calculateEstimate()

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-primary-100 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-bold text-primary-900 mb-2">
          Quick Renovation Estimator
        </h3>
        <p className="text-gray-600">
          Get a rough guide price for your project in seconds.
        </p>
      </div>

      {!showResult ? (
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setProjectType('extension')}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  projectType === 'extension' ? 'bg-primary-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Extension
              </button>
              <button
                type="button"
                onClick={() => setProjectType('renovation')}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  projectType === 'renovation' ? 'bg-primary-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Full Renovation
              </button>
              <button
                type="button"
                onClick={() => setProjectType('conversion')}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  projectType === 'conversion' ? 'bg-primary-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Loft/Garage
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Size (m²): <span className="text-primary-600">{size}m²</span>
            </label>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Small (5m²)</span>
              <span>Large (100m²)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Finish Quality</label>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="basic">Basic (Economy Materials)</option>
              <option value="standard">Standard (Mid-Range)</option>
              <option value="high">High Spec (Premium/Bespoke)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter email to see estimate
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <button type="submit" className="btn-secondary w-full py-3 text-lg">
            Calculate Estimate
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            *This is a rough guide only. Material prices fluctuate.
          </p>
        </form>
      ) : (
        <div className="text-center animate-fadeIn">
          <div className="bg-primary-50 p-6 rounded-xl mb-6">
            <p className="text-gray-600 mb-2">Estimated Range</p>
            <div className="text-4xl font-bold text-primary-900 mb-2">
              £{estimate.min.toLocaleString()} - £{estimate.max.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">
              Excluding VAT & Professional Fees
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              We&apos;ve sent a detailed breakdown of this estimate to <strong>{email}</strong>.
            </p>
            <button 
              onClick={() => setShowResult(false)}
              className="text-primary-600 font-medium hover:text-primary-800 underline"
            >
              Calculate another project
            </button>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="text-sm font-semibold mb-2">Need a more accurate quote?</p>
              <a href="/contact" className="btn-primary inline-block text-sm px-6 py-2">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
