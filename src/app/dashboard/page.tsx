'use client'

import { useState } from 'react'
import {
  ChartBarIcon,
  DocumentTextIcon,
  UsersIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const [visibilityScore, setVisibilityScore] = useState(68)
  const [analyses, setAnalyses] = useState([
    {
      id: 1,
      title: 'Brand Analysis - Main Website',
      date: 'December 15, 2024',
      scores: { chatgpt: 82, claude: 65, gemini: 43 },
    },
    {
      id: 2,
      title: 'Product Page Analysis',
      date: 'December 12, 2024',
      scores: { chatgpt: 71, claude: 68, gemini: 76 },
    },
    {
      id: 3,
      title: 'Competitor Comparison',
      date: 'December 10, 2024',
      competitors: 3,
      rank: 2,
    },
  ])

  const [recommendations] = useState([
    { priority: 'high', title: 'Add Schema.org Markup', boost: 15 },
    { priority: 'medium', title: 'Update Product Descriptions', boost: 8 },
    { priority: 'low', title: 'Add Wikipedia Citations', boost: 5 },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white">
          <div className="p-6">
            <h2 className="text-2xl font-bold">
              <span className="text-white">BRAIN</span>{' '}
              <span className="text-orange-400">INDEX</span>
            </h2>
            <p className="text-sm text-blue-200 mt-1">Client Portal</p>
          </div>

          {/* User Info */}
          <div className="px-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm text-blue-200">Welcome back!</p>
              <p className="font-semibold">John Doe</p>
              <p className="text-xs text-blue-200 mt-1">Professional Plan</p>
            </div>
          </div>

          <nav>
            <a href="#" className="flex items-center px-6 py-3 bg-white/10 text-white">
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="/dashboard/analyses" className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10">
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              My Analyses
            </a>
            <a href="/dashboard/reports" className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10">
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              Reports
            </a>
            <a href="/dashboard/competitors" className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10">
              <UsersIcon className="w-5 h-5 mr-3" />
              Competitors
            </a>
            <a href="/dashboard/subscription" className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10">
              <CreditCardIcon className="w-5 h-5 mr-3" />
              Subscription
            </a>
            <a href="/dashboard/settings" className="flex items-center px-6 py-3 text-white/80 hover:bg-white/10">
              <Cog6ToothIcon className="w-5 h-5 mr-3" />
              Settings
            </a>
            <a href="/logout" className="flex items-center px-6 py-3 mt-8 text-white/60 hover:bg-white/10">
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
              Logout
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <PlusCircleIcon className="w-5 h-5 mr-2" />
              New Analysis
            </button>
          </div>

          {/* AI Visibility Score */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Your Overall AI Visibility Score</h2>
                <p className="text-gray-600 mb-4">
                  Based on analysis across ChatGPT, Claude, Gemini, and Perplexity
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Visibility Score</span>
                    <span className="text-sm font-semibold">{visibilityScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-8 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ width: `${visibilityScore}%` }}
                    >
                      {visibilityScore}%
                    </div>
                  </div>
                </div>

                {/* Individual Scores */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    ChatGPT: 75%
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Claude: 62%
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Gemini: 58%
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    Perplexity: 45%
                  </span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-500 mb-2">{visibilityScore}%</div>
                <p className="text-gray-600 mb-4">Room for improvement</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  View Recommendations
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Analyses This Month</h3>
              <p className="text-2xl font-bold">47 / 200</p>
              <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Competitors Tracked</h3>
              <p className="text-2xl font-bold">5</p>
              <p className="text-gray-500 text-sm mt-2">Max: 10</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Reports Generated</h3>
              <p className="text-2xl font-bold">23</p>
              <p className="text-green-600 text-sm mt-2">↑ New report available</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-600 text-sm mb-2">Plan Usage</h3>
              <p className="text-2xl font-bold">23.5%</p>
              <p className="text-gray-500 text-sm mt-2">153 checks remaining</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Analyses */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Recent Analyses</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View All</a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {analyses.map((analysis) => (
                  <div key={analysis.id} className="border-l-4 border-orange-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{analysis.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">Analyzed: {analysis.date}</p>
                        {analysis.scores ? (
                          <div className="flex gap-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              analysis.scores.chatgpt > 70 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              ChatGPT: {analysis.scores.chatgpt}%
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              analysis.scores.claude > 70 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              Claude: {analysis.scores.claude}%
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              analysis.scores.gemini > 70 ? 'bg-green-100 text-green-800' : 
                              analysis.scores.gemini > 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                            }`}>
                              Gemini: {analysis.scores.gemini}%
                            </span>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                              {analysis.competitors} Competitors
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800">
                              You rank #{analysis.rank}
                            </span>
                          </div>
                        )}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Report
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">Top Recommendations</h3>
              </div>
              <div className="p-6 space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index}>
                    <div className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className={`text-xs px-2 py-1 rounded ${
                            rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                            rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {rec.priority.toUpperCase()} PRIORITY
                          </span>
                        </div>
                        <h4 className="font-semibold mb-1">{rec.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">
                          Implement structured data to improve AI understanding
                        </p>
                        <p className="text-sm text-green-600">+{rec.boost}% visibility boost</p>
                      </div>
                    </div>
                    {index < recommendations.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts - Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Visibility Trend</h3>
              <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Trend chart will be displayed here</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">AI Systems Performance</h3>
              <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Performance chart will be displayed here</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
