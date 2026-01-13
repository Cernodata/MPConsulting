import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovation Services Cheshire | Surveys, Costs & Planning',
  description: 'Comprehensive renovation consulting services in Cheshire. From pre-purchase surveys in Knutsford to cost estimations in Wilmslow.',
}

const services = [
  {
    title: 'Pre-Purchase Property Assessment',
    description: 'Before you commit to purchasing a property, we conduct a comprehensive assessment to identify all renovation needs, potential structural issues, and opportunities for improvement. This detailed evaluation helps you understand exactly what you\'re buying into.',
    features: [
      'Structural condition assessment',
      'Renovation opportunity identification',
      'Potential issue detection',
      'Property condition report',
      'Renovation feasibility analysis',
    ],
    image: '/images/service-assessment.svg',
    imageAlt: 'Property assessment and inspection',
  },
  {
    title: 'Specification & Design Planning',
    description: 'We provide detailed specifications and design planning for your proposed renovations. Our expertise ensures that every aspect of your renovation is clearly defined, from materials to finishes, helping you visualize the end result before you buy.',
    features: [
      'Detailed renovation specifications',
      'Design concept development',
      'Material recommendations',
      'Layout optimisation',
      'Planning permission guidance',
    ],
    image: '/images/service-design.svg',
    imageAlt: 'Design planning and blueprints',
  },
  {
    title: 'Accurate Cost Estimation',
    description: 'Get precise pricing for all renovation work before you purchase. Our cost estimations are based on real-world construction experience, helping you understand the true investment required and avoid unexpected expenses.',
    features: [
      'Comprehensive cost breakdown',
      'Labour and material pricing',
      'Timeline estimation',
      'Budget planning assistance',
      'Cost-saving recommendations',
    ],
    image: '/images/service-cost.svg',
    imageAlt: 'Cost estimation and budgeting',
  },
  {
    title: 'Renovation Strategy Consultation',
    description: 'We help you develop a strategic approach to your renovations, prioritizing work based on your budget, timeline, and goals. This ensures you make the most of your investment and achieve your vision efficiently.',
    features: [
      'Phased renovation planning',
      'Priority assessment',
      'Timeline development',
      'Budget optimisation',
      'Risk mitigation strategies',
    ],
    image: '/images/service-strategy.svg',
    imageAlt: 'Renovation strategy and planning',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Expert Renovation Services in Cheshire
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Serving Knutsford, Wilmslow, Hale, and beyond. We combine construction expertise with strategic planning to deliver comprehensive insights for property buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Service {index + 1}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-primary-50 to-primary-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our consulting process.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your consultation today and make your property purchase with complete confidence
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
