export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            AI Automation Templates
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ready-to-use n8n workflows powered by DeepSeek AI. Deploy in minutes, not hours.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Template 1: Brand Visibility Audit */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Brand Visibility Audit</h3>
              <p className="text-blue-100 text-sm mt-1">Lead Generation • GEO Analytics</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-4">
                Automated AI visibility scoring across ChatGPT, Claude, Perplexity. Perfect for brain-index.com "Analyze Now" button.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Multi-AI query system
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Visibility scoring (1-100)
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> PDF report generation
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Lead capture & CRM sync
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Complexity:</span>
                  <span className="text-yellow-600 font-medium">⭐⭐⭐ Medium</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-500">ROI:</span>
                  <span className="text-green-600 font-medium">+40% conversions</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Template
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Demo
                </button>
              </div>
            </div>
          </div>

          {/* Template 2: Apollo Lead Generation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Apollo Lead Gen</h3>
              <p className="text-purple-100 text-sm mt-1">B2B Sales • Lead Enrichment</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-4">
                Automated lead scraping from Apollo with DeepSeek AI enrichment. Export to CSV or sync with CRM.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Apollo API integration
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> AI profile summarization
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Auto-enrichment (Clearbit)
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Google Sheets export
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Complexity:</span>
                  <span className="text-green-600 font-medium">⭐⭐ Easy</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-500">ROI:</span>
                  <span className="text-green-600 font-medium">+30% qualified leads</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Template
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Demo
                </button>
              </div>
            </div>
          </div>

          {/* Template 3: AI Content Generator */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">AI Content Generator</h3>
              <p className="text-green-100 text-sm mt-1">Marketing • Social Media</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-4">
                Generate blog posts and social media content with DeepSeek AI. Auto-post to LinkedIn, Twitter, and more.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> DeepSeek AI generation
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Multi-platform posting
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Image generation (DALL-E)
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span> Team notifications
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Complexity:</span>
                  <span className="text-green-600 font-medium">⭐⭐ Easy</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-500">ROI:</span>
                  <span className="text-green-600 font-medium">10x faster content</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Get Template
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Demo
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Need a Custom Workflow?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We build tailored automation solutions for your business. From simple integrations to complex AI-powered workflows.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Custom Workflow
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Demo Call
            </button>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600">€500</div>
            <div className="text-sm text-gray-600 mt-2">Starter Package</div>
            <div className="text-xs text-gray-500 mt-1">1 workflow + setup</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600">€1,500</div>
            <div className="text-sm text-gray-600 mt-2">Professional</div>
            <div className="text-xs text-gray-500 mt-1">3-5 workflows + support</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600">€99/mo</div>
            <div className="text-sm text-gray-600 mt-2">SaaS Model</div>
            <div className="text-xs text-gray-500 mt-1">Managed automation</div>
          </div>
        </div>

      </div>
    </div>
  );
}
