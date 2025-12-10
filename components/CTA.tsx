import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Informed Property Purchase?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Don't let renovation costs catch you by surprise. Get expert advice before you buy and make your property purchase with complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Book Your Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-800">
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-primary-200 text-sm">
            Free initial consultation • No obligation • Expert advice
          </p>
        </div>
      </div>
    </section>
  )
}

