import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovation Case Studies Cheshire | Wilmslow & Hale Projects',
  description: 'See how we have helped clients in Altrincham, Knutsford, and Manchester save money and avoid renovation disasters. Real examples from Build Clarity.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary-900 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Real examples of how we&apos;ve helped clients save money and avoid disasters.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id}
                className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary-900">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {project.summary}
                  </p>
                  <span className="text-accent-600 font-semibold text-sm flex items-center">
                    Read Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
