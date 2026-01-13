import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      <article>
        {/* Header */}
        <header className="bg-primary-900 text-white py-20">
          <div className="container-custom max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-primary-200 hover:text-white mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Articles
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-primary-200 mb-6">
              <span className="bg-primary-800 px-3 py-1 rounded-full text-white">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed border-l-4 border-accent-500 pl-6">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="section-padding container-custom max-w-3xl">
          <div 
            className="prose prose-lg max-w-none text-gray-800 prose-headings:font-display prose-headings:text-primary-900 prose-a:text-accent-600 hover:prose-a:text-accent-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Bio (Simple) */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
             <div className="bg-primary-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
             </div>
             <div>
               <p className="text-sm text-gray-500 uppercase tracking-wide">Written by</p>
               <p className="font-bold text-primary-900">{post.author} at Build Clarity</p>
             </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Need Personalised Advice?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every property is different. Book a consultation to discuss your specific project.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
