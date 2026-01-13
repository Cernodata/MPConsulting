import Link from 'next/link'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovation Consultants Cheshire | Knutsford, Wilmslow & Hale',
  description: 'Specialist pre-purchase renovation advice for properties in Cheshire\'s Golden Triangle. We help buyers in Knutsford, Wilmslow, and Hale avoid costly mistakes.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
