import React from 'react'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovation Advice Blog | Tips for Cheshire Property Buyers',
  description: 'Expert advice on buying fixer-uppers, planning permission in Cheshire, and renovation costs. Read the latest insights from Build Clarity.',
}

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary-900 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Insights & Advice
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert tips on renovation, planning, and property purchasing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.id}`} 
                key={post.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
              >
                <div className="bg-primary-50 p-6 flex-1">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-white px-2 py-1 rounded text-primary-800 font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <span className="text-accent-600 font-semibold group-hover:underline">Read Article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
