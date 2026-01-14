'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ComingSoon() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.refresh()
        router.push('/')
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary-900 text-white">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cache_2412538339.jpg"
          alt="Luxury Renovation Background"
          fill
          className="object-cover opacity-40"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-primary-800/60"></div>
      </div>

      <div className="relative z-10 container-custom px-4 text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in-down">
          <Image
            src="/logos/build-clarity-logo.svg"
            alt="Build Clarity"
            width={280}
            height={100}
            className="h-24 w-auto mx-auto brightness-0 invert drop-shadow-lg"
            priority
          />
        </div>

        {/* Headlines */}
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up delay-100">
          Clarity is Coming to the<br />
          <span className="text-accent-400">Cheshire Property Market</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
          We are currently building a new digital experience for Build Clarity. 
          Expert pre-purchase renovation consulting for Wilmslow, Hale, and Knutsford.
        </p>

        {/* Password Access */}
        <div className="animate-fade-in-up delay-300">
          {!showPassword ? (
            <button
              onClick={() => setShowPassword(true)}
              className="text-sm text-primary-300 hover:text-white transition-colors uppercase tracking-widest font-semibold border-b border-transparent hover:border-white pb-1"
            >
              Client Access
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-sm mx-auto">
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Enter Access Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-center text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white/20 transition-all backdrop-blur-sm"
                  autoFocus
                />
                {error && (
                  <div className="absolute -bottom-8 left-0 right-0 text-red-300 text-sm font-medium animate-shake">
                    Incorrect password
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-accent-600 transition-all shadow-lg hover:shadow-accent-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Unlock Site'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10 text-primary-300 text-sm">
        <p>&copy; {new Date().getFullYear()} Build Clarity. All rights reserved.</p>
        <p className="mt-2">Knutsford • Wilmslow • Hale</p>
      </div>
    </div>
  )
}
