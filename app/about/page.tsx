import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About MP Consulting
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Combining hands-on construction expertise with strategic consulting to help you make informed property purchase decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold text-primary-900 mb-6">
                  Meet Martin
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Martin is the founder of MP Consulting Limited and brings over 25 years of hands-on experience in the construction industry. As the owner of a medium-sized building construction company, he has successfully managed projects ranging from domestic extensions to large-scale commercial builds and renovations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  His expert knowledge, combined with a keen hands-on work ethic, positions him perfectly to offer a unique consulting service. Martin understands both the practical realities of construction and the strategic decisions that property buyers face.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This real-world experience means that when you consult with MP Consulting, you&apos;re getting advice grounded in actual construction practice, not just theory. Martin knows what works, what costs what, and what to watch out for.
                </p>
              </div>

              <div className="mb-12 bg-primary-50 p-8 rounded-xl">
                <h2 className="font-display text-3xl font-bold text-primary-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At MP Consulting Limited, our mission is to empower property buyers with the knowledge and insights they need to make confident purchase decisions. We believe that informed buyers make better decisions, avoid costly mistakes, and achieve their property goals more successfully.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We step in before you purchase to offer our expertise in specification, pricing, and design for your proposed renovations. This pre-purchase insight gives you the knowledge you need before making the big commitment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">
                    Our Expertise
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>25 years construction experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Domestic and commercial projects</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hands-on practical knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Accurate cost estimation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">
                    Why We&apos;re Different
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pre-purchase focus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-world construction experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive service offering</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Transparent and honest advice</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent-50 p-8 rounded-xl border-2 border-accent-200">
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">
                  Based in Knutsford
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  MP Consulting Limited is based on Princess Street in Knutsford, UK. We serve clients throughout the North West and beyond, bringing our expertise to property buyers who want to make informed decisions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you&apos;re looking at a property in Knutsford, Manchester, Altrincham, or anywhere in the region, we&apos;re here to help you understand exactly what your renovation project will involve before you commit to the purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you make an informed property purchase decision
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

