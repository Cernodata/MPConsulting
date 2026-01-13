import React from 'react'
import RenovationCalculator from '@/components/RenovationCalculator'

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary-900 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Free Renovation Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Tools and guides to help you plan your project before you spend a penny.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Renovation Cost Estimator
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wondering if you can afford that extension? Use our quick calculator to get a rough idea of the costs involved. 
                This tool uses current 2024 market rates for the North West UK area.
              </p>
              <div className="bg-accent-50 p-6 rounded-lg border border-accent-100 mb-8">
                <h3 className="font-bold text-lg mb-2 text-accent-900">Why Use This?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Get a realistic budget range in seconds</li>
                  <li>Compare different finish qualities</li>
                  <li>Avoid the shock of under-budgeting</li>
                </ul>
              </div>
            </div>
            
            <div>
              <RenovationCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-8">
            Downloadable Guides
          </h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">Renovation Readiness Checklist</h3>
            <p className="text-gray-600 mb-6">
              A 20-point checklist to take with you on property viewings. Spot the red flags like a pro.
            </p>
            <button className="btn-outline w-full">Download PDF (Coming Soon)</button>
          </div>
        </div>
      </section>
    </div>
  )
}
