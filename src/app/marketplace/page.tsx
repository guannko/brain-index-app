'use client';

import { useState } from 'react';

const products = [
  // Week 1 - Ready
  { id: 1, name: "Commercial Bot Template", ai: "GPT", status: "ready", price: 299, mrr: false, week: "Week 1", description: "Production-ready bot template for any business", github: "super-system-eyelids/commercial_bot_template.py" },
  { id: 2, name: "Monitoring Service", ai: "GPT", status: "ready", price: 29, mrr: true, week: "Week 1", description: "24/7 monitoring for your services", github: "super-system-eyelids/monitoring_service.py" },
  { id: 3, name: "Landing Page Builder", ai: "GPT", status: "ready", price: 0, mrr: false, week: "Week 1", description: "Free landing page generator", github: "super-system-eyelids/landing_page.html" },
  { id: 4, name: "CRM Bot for SMB", ai: "KWEN", status: "ready", price: 899, mrr: false, week: "Week 1", description: "Complete CRM automation with FAQ system", github: "products/product_1_crm_bot_smb/" },
  
  // Week 2-4 - Ready
  { id: 5, name: "Calendar Scheduler", ai: "KWEN", status: "ready", price: 79, mrr: true, week: "Week 2-4", description: "Google Calendar integration bot", github: "products/product_2_calendar_scheduler_bridge/" },
  { id: 6, name: "Telegram Mini Apps", ai: "KWEN", status: "ready", price: 499, mrr: false, week: "Week 2-4", description: "2-3x conversion boost with Mini Apps", github: "products/product_3_telegram_mini_apps_bot/" },
  { id: 7, name: "RAG Module", ai: "Grok", status: "ready", price: 50, mrr: true, week: "Week 2-4", description: "Intelligent search for knowledge bases", github: "products/product_2_rag_integration_module/" },
  { id: 8, name: "E-commerce Support Bot", ai: "Grok", status: "ready", price: 199, mrr: false, week: "Week 2-4", description: "24/7 customer support automation", github: "products/product_1_ecommerce_support_bot/" },
  { id: 9, name: "Hyperlocal Service Bot", ai: "GEMINI", status: "ready", price: 99, mrr: true, week: "Week 2-4", description: "Local business automation", github: "products/product_1_HyperlocalServiceBot/" },
  
  // Testing
  { id: 10, name: "Pet Wellness Bot", ai: "Grok", status: "testing", price: 15, mrr: true, week: "Week 2-4", description: "$500M+ market potential", github: "products/product_3_pet_wellness_bot/" },
  { id: 11, name: "Security Module", ai: "MiniMax", status: "testing", price: 500, mrr: true, week: "Month 2-3", description: "Enterprise security for bots", github: null },
  
  // Coming Soon
  { id: 12, name: "Voice Agent", ai: "GEMINI", status: "coming", price: 50, mrr: true, week: "Month 2-3", description: "AI voice assistant - $0.05/minute", github: "products/product_3_AIVoiceAgent/" },
  { id: 13, name: "Trading Bot Grid/DCA", ai: "MISTRAL", status: "coming", price: 5000, mrr: true, week: "Month 2-3", description: "Crypto trading with Grid + DCA strategies", github: null },
  { id: 14, name: "SDR Multi-channel Agent", ai: "JULIUS", status: "coming", price: 500, mrr: true, week: "Month 2-3", description: "Email + LinkedIn + Calendar automation", github: null },
  { id: 15, name: "WhatsApp C-Commerce", ai: "KIMI", status: "coming", price: 99, mrr: true, week: "Month 2-3", description: "43% conversion improvement", github: null },
  { id: 16, name: "AR/VR Bot Interface", ai: "GEMINI", status: "coming", price: 299, mrr: true, week: "Month 2-3", description: "Future of bot interactions", github: null },
];

const statusConfig = {
  ready: { label: "Available Now", color: "bg-green-500", textColor: "text-green-600", bgLight: "bg-green-50" },
  testing: { label: "Beta Testing", color: "bg-yellow-500", textColor: "text-yellow-600", bgLight: "bg-yellow-50" },
  coming: { label: "Coming Soon", color: "bg-gray-400", textColor: "text-gray-600", bgLight: "bg-gray-50" }
};

const aiColors: { [key: string]: string } = {
  GPT: "bg-green-600",
  KWEN: "bg-red-600",
  GEMINI: "bg-yellow-600",
  Grok: "bg-purple-600",
  MISTRAL: "bg-pink-600",
  JULIUS: "bg-gray-600",
  MiniMax: "bg-blue-600",
  KIMI: "bg-orange-600"
};

export default function MarketplacePage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === 'all' || product.status === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: products.length,
    ready: products.filter(p => p.status === 'ready').length,
    testing: products.filter(p => p.status === 'testing').length,
    coming: products.filter(p => p.status === 'coming').length,
    totalRevenue: products.reduce((sum, p) => sum + (p.status === 'ready' ? p.price : 0), 0),
    mrrPotential: products.filter(p => p.mrr).reduce((sum, p) => sum + p.price, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Bot Marketplace 2025
            </h1>
            <a href="/" className="text-gray-400 hover:text-white transition">
              ← Back to Brain Index
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-gray-400 text-sm">Total Products</div>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">{stats.ready}</div>
            <div className="text-gray-400 text-sm">Ready Now</div>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400">{stats.testing}</div>
            <div className="text-gray-400 text-sm">Beta Testing</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.coming}</div>
            <div className="text-gray-400 text-sm">Coming Soon</div>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">${stats.totalRevenue.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Available Value</div>
          </div>
          <div className="bg-pink-900/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-400">${stats.mrrPotential}/mo</div>
            <div className="text-gray-400 text-sm">MRR Potential</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'all' ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('ready')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'ready' ? 'bg-green-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Available Now
            </button>
            <button
              onClick={() => setFilter('testing')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'testing' ? 'bg-yellow-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Beta Testing
            </button>
            <button
              onClick={() => setFilter('coming')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === 'coming' ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Coming Soon
            </button>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:bg-gray-700 outline-none transition"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-800/50 rounded-lg p-6 border ${
                product.status === 'ready' 
                  ? 'border-green-500/30 hover:border-green-500/60' 
                  : product.status === 'testing'
                  ? 'border-yellow-500/30 hover:border-yellow-500/60'
                  : 'border-gray-700 hover:border-gray-600'
              } transition-all hover:transform hover:scale-105`}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[product.status].color} text-white`}>
                  {statusConfig[product.status].label}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${aiColors[product.ai]} text-white`}>
                  {product.ai}
                </span>
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>

              {/* Price */}
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-2xl font-bold">
                    ${product.price.toLocaleString()}
                    {product.mrr && <span className="text-sm text-gray-400">/mo</span>}
                  </div>
                  <div className="text-xs text-gray-500">{product.week}</div>
                </div>

                {/* Action Button */}
                {product.status === 'ready' ? (
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition">
                    Buy Now
                  </button>
                ) : product.status === 'testing' ? (
                  <button className="px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition">
                    Join Beta
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-gray-700 rounded-lg cursor-not-allowed" disabled>
                    Notify Me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
