'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Example Header component using Logo Option 3
export default function HeaderOption3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/logo-option-3.svg" 
              alt="MP Consulting" 
              width={200} 
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          {/* Rest of navigation code would go here */}
        </div>
      </nav>
    </header>
  )
}

