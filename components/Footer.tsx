import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image 
                src="/logos/logo-option-3-white.svg" 
                alt="MP Consulting Limited" 
                width={200} 
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-accent-400 font-semibold text-lg mb-2 italic">
              Know Before You Buy
            </p>
            <p className="text-primary-200 mb-4 max-w-md">
              Expert pre-purchase renovation consulting to help you make informed decisions before buying your next property.
            </p>
            <div className="text-primary-200">
              <p className="font-semibold mb-1">Address</p>
              <p>Princess Street</p>
              <p>Knutsford, UK</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-200">
              <li>Pre-Purchase Assessment</li>
              <li>Renovation Specification</li>
              <li>Cost Estimation</li>
              <li>Design Planning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} MP Consulting Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

