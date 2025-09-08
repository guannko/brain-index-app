'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  UsersIcon,
  CurrencyEuroIcon,
  ChartBarIcon,
  CreditCardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline'

export default function AdminDashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [stats, setStats] = useState({
    totalUsers: 2845,
    revenue: 45231,
    aiChecks: 12468,
    activePlans: 892,
  })

  const [recentUsers, setRecentUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Professional', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', plan: 'Starter', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@agency.com', plan: 'Enterprise', status: 'Active' },
  ])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-900 text-white">
          <div className="p-6">
            <h2 className="text-2xl font-bold">
              <span className="text-white">BRAIN</span>{' '}
              <span className="text-orange-500">INDEX</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
          </div>
          
          <nav className="mt-8">
            <a href="#" className="flex items-center px-6 py-3 bg-gray-800 text-white">
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="/admin/users" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800">
              <UsersIcon className="w-5 h-5 mr-3" />
              Users
            </a>
            <a href="/admin/analyses" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800">
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Analyses
            </a>
            <a href="/admin/subscriptions" className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800">
              <CreditCardIcon className="w-5 h-5 mr-3" />
              Subscriptions
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">{isClient ? stats.totalUsers.toLocaleString() : stats.totalUsers}</p>
                  <p className="text-sm text-green-600 flex items-center mt-2">
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                    12% from last month
                  </p>
                </div>
                <UsersIcon className="w-12 h-12 text-blue-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold">€{isClient ? stats.revenue.toLocaleString() : stats.revenue}</p>
                  <p className="text-sm text-green-600 flex items-center mt-2">
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                    23% from last month
                  </p>
                </div>
                <CurrencyEuroIcon className="w-12 h-12 text-green-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Checks</p>
                  <p className="text-2xl font-bold">{isClient ? stats.aiChecks.toLocaleString() : stats.aiChecks}</p>
                  <p className="text-sm text-green-600 flex items-center mt-2">
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                    8% from yesterday
                  </p>
                </div>
                <ChartBarIcon className="w-12 h-12 text-yellow-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Plans</p>
                  <p className="text-2xl font-bold">{stats.activePlans}</p>
                  <p className="text-sm text-red-600 flex items-center mt-2">
                    <ArrowDownIcon className="w-4 h-4 mr-1" />
                    2% from last week
                  </p>
                </div>
                <CreditCardIcon className="w-12 h-12 text-red-500" />
              </div>
            </div>
          </div>

          {/* Charts Section - Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Chart will be displayed here</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Plan Distribution</h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Chart will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Recent Users Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Recent Users</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.plan === 'Enterprise' ? 'bg-red-100 text-red-800' :
                          user.plan === 'Professional' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-red-600 hover:text-red-900">Suspend</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
