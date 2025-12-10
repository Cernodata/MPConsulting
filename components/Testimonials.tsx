const testimonials = [
  {
    name: 'Sarah & James Thompson',
    location: 'Knutsford',
    text: 'Martin\'s pre-purchase consultation saved us from a costly mistake. His detailed cost breakdown showed us the true renovation costs, and we were able to negotiate a better price. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Manchester',
    text: 'The specification and design advice was invaluable. We knew exactly what we were getting into before we bought, and Martin\'s expertise gave us complete confidence in our decision.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    location: 'Altrincham',
    text: 'As first-time buyers, we were overwhelmed by the renovation possibilities. Martin broke everything down clearly and gave us realistic timelines and costs. Couldn\'t have done it without him!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied clients who made better decisions with our help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-primary-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-primary-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

