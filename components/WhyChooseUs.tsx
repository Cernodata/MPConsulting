const features = [
  {
    title: 'Hands-On Expertise',
    description: 'Martin brings real-world construction experience from running a successful building company, ensuring practical and accurate advice.',
  },
  {
    title: 'Pre-Purchase Focus',
    description: 'We specialise in helping you make informed decisions BEFORE you buy, saving you from costly mistakes and unexpected surprises.',
  },
  {
    title: 'Comprehensive Analysis',
    description: 'Get detailed specifications, accurate pricing, and design insights all in one comprehensive consultation.',
  },
  {
    title: 'Industry Knowledge',
    description: 'Years of experience in both domestic extensions and commercial builds means we understand projects of all scales.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, upfront cost estimations help you budget accurately and negotiate confidently with sellers.',
  },
  {
    title: 'Peace of Mind',
    description: 'Make your property purchase with complete confidence, knowing exactly what renovations will cost and involve.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose MP Consulting?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine construction expertise with consulting excellence to deliver unmatched value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg border-2 border-primary-100 hover:border-primary-300 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent-500 text-white rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

