'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [brandName, setBrandName] = useState('')
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  
  const handleAnalyze = () => {
    if (brandName) {
      alert(`Analyzing ${brandName}... This is a demo! In production, this would check AI visibility.`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-gray-900">BRAIN</span>{' '}
                <span className="text-orange-500">INDEX</span>
              </Link>
              <div className="hidden md:flex ml-10 space-x-6">
                <Link href="/" className="text-gray-700 hover:text-gray-900">Главная</Link>
                <Link href="/marketplace" className="text-orange-500 hover:text-orange-600 font-semibold">🔥 Bot Marketplace</Link>
                <Link href="/projects" className="text-gray-700 hover:text-gray-900">Наши проекты</Link>
                <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Тарифы</Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Кабинет</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-gray-900">Sign In</Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Analysis Form */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Is Your Brand Visible in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  AI Search?
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Check how ChatGPT, Claude, and other AI systems see your brand. 
                Discover your AI visibility score, track competitors, and get actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#analyze" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-block text-center">
                  Analyze Now
                </a>
                <Link href="/marketplace" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition inline-block text-center">
                  🤖 Bot Marketplace
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8" id="analyze">
              <h3 className="text-2xl font-bold text-center mb-6">Quick Analysis</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Enter your brand name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleAnalyze}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Check AI Visibility
                </button>
                <p className="text-center text-sm text-gray-600">
                  Free analysis • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Marketplace Preview Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎆 NEW: Bot Marketplace 2025</h2>
            <p className="text-xl text-gray-600">16 Production-Ready AI Bots from 8 Different AI Analysis</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-500">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Available Now</span>
                <span className="text-2xl font-bold">$299</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Commercial Bot Template</h3>
              <p className="text-gray-600 text-sm mb-4">Production-ready bot for any business</p>
              <div className="flex justify-between">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">GPT</span>
                <span className="text-xs text-gray-500">Week 1 Launch</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-yellow-500">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Beta Testing</span>
                <span className="text-2xl font-bold">$500<span className="text-sm">/mo</span></span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Module</h3>
              <p className="text-gray-600 text-sm mb-4">Enterprise security for bots</p>
              <div className="flex justify-between">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">MiniMax</span>
                <span className="text-xs text-gray-500">Month 2-3</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-400">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-semibold">Coming Soon</span>
                <span className="text-2xl font-bold">$5,000</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trading Bot Grid/DCA</h3>
              <p className="text-gray-600 text-sm mb-4">Crypto trading with advanced strategies</p>
              <div className="flex justify-between">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded">MISTRAL</span>
                <span className="text-xs text-gray-500">Month 2-3</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/marketplace" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition inline-block">
              Explore All 16 Bots →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Visibility Analytics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/img/logo-main.png" alt="Brain Index AI Analysis" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">AI Visibility Analytics</h2>
              <p className="text-lg text-gray-600 mb-4">
                Understand how artificial intelligence systems perceive and present your brand to millions of users worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Get detailed insights and actionable recommendations.
              </p>
              <hr className="my-6" />
              <p className="text-lg text-gray-700 mb-6">
                <strong>10+</strong> AI systems analyzed •
                <strong> Real-time</strong> monitoring •
                <strong> Competitor</strong> tracking •
                <strong> Actionable</strong> insights
              </p>
              <Link href="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-20 bg-gray-50" id="what-is-geo">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">What is GEO?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Generative Engine Optimization (GEO) is the new frontier of digital visibility
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">From SEO to GEO: The Evolution</h3>
              <p className="text-lg text-gray-600 mb-4">
                While SEO helped you rank in Google search results, <strong>GEO ensures AI systems recommend your brand</strong> when users ask questions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Think about it: When someone asks ChatGPT "What's the best CRM for startups?" - <strong>is YOUR business mentioned?</strong>
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">ChatGPT</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">Claude</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Gemini</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Perplexity</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Copilot</span>
              </div>
              <a href="#how-geo-works" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                Learn How It Works →
              </a>
            </div>
            <div>
              <img src="/img/geo-diagram-1.png" alt="GEO Architecture" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600" id="video-demo">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">See Brain Index in Action</h2>
              <p className="text-xl mb-8 opacity-90">
                Watch how our platform analyzes your brand visibility across multiple AI systems in real-time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Live AI Analysis Demo</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Real Results in 60 Seconds</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Actionable Recommendations</span>
                </div>
              </div>
              <a href="#analyze" className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition inline-block font-semibold">
                Try It Yourself
              </a>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">The AI Revolution is Here</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Don't get left behind. AI is reshaping how customers find businesses.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-500 mb-4">37%</div>
              <p className="text-gray-600">of product searches now start in AI assistants</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-500 mb-4">60M+</div>
              <p className="text-gray-600">daily active ChatGPT users making decisions</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-500 mb-4">200%</div>
              <p className="text-gray-600">year-over-year growth in AI-powered searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Real Results from GEO</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Companies using GEO are seeing incredible results
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-blue-600 font-semibold mb-2">E-commerce Brand</h4>
              <div className="text-4xl font-bold mb-2">+312%</div>
              <p className="text-gray-600 mb-4">Increase in AI-driven traffic</p>
              <hr className="my-4" />
              <p className="text-sm text-gray-600 italic">
                "ChatGPT now recommends our products when users ask for category recommendations"
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-green-600 font-semibold mb-2">SaaS Platform</h4>
              <div className="text-4xl font-bold mb-2">€45K/mo</div>
              <p className="text-gray-600 mb-4">New revenue from AI referrals</p>
              <hr className="my-4" />
              <p className="text-sm text-gray-600 italic">
                "We're now the #1 recommendation in our category across all major AI platforms"
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-cyan-600 font-semibold mb-2">Local Restaurant</h4>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-gray-600 mb-4">New customers per month</p>
              <hr className="my-4" />
              <p className="text-sm text-gray-600 italic">
                "AI assistants now recommend us when people ask for dining suggestions"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate AI Search?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free AI visibility report and discover how to improve your presence
          </p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block">
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Brain Index</h3>
              <p className="text-sm">
                The leading platform for AI visibility analytics. Ensure your brand is recommended by ChatGPT, Claude, and other AI systems.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/marketplace" className="hover:text-white">🤖 Bot Marketplace</Link></li>
                <li><Link href="#analyze" className="hover:text-white">AI Analysis</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/admin" className="hover:text-white">Admin Panel</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Client Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#what-is-geo" className="hover:text-white">What is GEO?</Link></li>
                <li><Link href="/projects" className="hover:text-white">Our Projects</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/api" className="hover:text-white">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm mb-2">Nicosia, Cyprus</p>
              <p className="text-sm mb-4">info@brainindex.ai</p>
              <Link href="/dashboard" className="inline-block border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition text-sm">
                Client Portal
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2025 Brain Index. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white"> Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
