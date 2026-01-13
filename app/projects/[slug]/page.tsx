import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-white">
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <Link href="/projects" className="inline-flex items-center text-primary-200 hover:text-white mb-8 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Case Studies
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-primary-200 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="relative h-80 w-full bg-gray-100 rounded-xl overflow-hidden">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-8"
                  />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">The Result</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 p-8 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold text-primary-900 mb-6">Project Highlights</h3>
                <div className="space-y-6">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="border-b border-primary-200 pb-4 last:border-0 last:pb-0">
                      <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-primary-800">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary-200">
                  <p className="text-sm text-gray-600 mb-4">Have a similar project in mind?</p>
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Get Advice
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
