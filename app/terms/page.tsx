import React from 'react'

export default function TermsPage() {
  return (
    <div className="section-padding container-custom max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>These terms and conditions govern your use of this website and our consulting services; by using this website, you accept these terms and conditions in full.</p>

        <h2>2. Services</h2>
        <p>Build Clarity provides pre-purchase renovation consulting services. Our reports and advice are based on visual inspections and our professional experience. They are not structural surveys (unless explicitly stated and conducted by a chartered surveyor) and should not be relied upon as such.</p>

        <h2>3. Limitation of Liability</h2>
        <p>While we endeavour to ensure that the information on this website and in our reports is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>
        <p>Our cost estimates are for guidance purposes only. Actual construction costs can vary significantly due to unforeseen circumstances, market fluctuations, and contractor pricing.</p>

        <h2>4. Intellectual Property</h2>
        <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the licence below, all these intellectual property rights are reserved.</p>

        <h2>5. Law and Jurisdiction</h2>
        <p>These terms and conditions will be governed by and construed in accordance with English law, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </div>
    </div>
  )
}
