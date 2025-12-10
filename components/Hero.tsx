import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cache_2412538339.jpg"
          alt="Construction and renovation background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-primary-900/85"></div>
        {/* Additional subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Expert Pre-Purchase Renovation Consulting
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Make Informed Decisions Before You Buy
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get expert advice on specifications, pricing, and design for your proposed renovations before making the big commitment. Martin&apos;s hands-on expertise ensures you know exactly what you&apos;re buying into.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Book Free Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-800">
              Learn More
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">25</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">500+</div>
              <div className="text-primary-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

