'use client'

import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do you carry out the actual construction work?",
      answer: "No, we are purely a consultancy service. Our goal is to give you impartial, expert advice without the conflict of interest of trying to win the building contract. However, we can recommend trusted contractors and help you vet quotes."
    },
    {
      question: "At what stage should I contact you?",
      answer: "The earlier, the better. Ideally, you should contact us when you have found a property you are interested in but haven't exchanged contracts yet. We can even attend viewings with you."
    },
    {
      question: "How much does a consultation cost?",
      answer: "We offer a free initial 15-minute discovery call. Our paid packages vary depending on the depth of the report required (e.g., visual inspection vs. full detailed specification). Contact us for a bespoke quote."
    },
    {
      question: "Do you offer structural surveys?",
      answer: "We offer renovation assessments which cover the general condition and renovation potential. While Martin is an expert builder, for specific mortgage or insurance purposes, you may still require a RICS HomeBuyer Report. Our reports are focused on the *costs and feasibility of future work*."
    },
    {
      question: "Can you help with planning permission?",
      answer: "Yes, we can advise on what is likely to be approved under Permitted Development or what might require Full Planning Permission. We can also sketch up proposed layouts to help you visualise the space."
    }
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 last:border-0 pb-4 last:pb-0">
          <button
            className="flex justify-between items-center w-full text-left focus:outline-none group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`text-lg font-semibold transition-colors duration-200 ${openIndex === index ? 'text-accent-600' : 'text-primary-900 group-hover:text-primary-700'}`}>
              {faq.question}
            </span>
            <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ
