import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

// Mock users data
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Professional',
    status: 'Active',
    created: '2024-01-15',
    aiChecks: 245,
    lastLogin: '2024-03-10'
  },
  {
    id: '2',
    name: 'Jane Smith', 
    email: 'jane@company.com',
    plan: 'Starter',
    status: 'Active',
    created: '2024-02-20',
    aiChecks: 89,
    lastLogin: '2024-03-09'
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@agency.com', 
    plan: 'Enterprise',
    status: 'Active',
    created: '2024-01-05',
    aiChecks: 1250,
    lastLogin: '2024-03-08'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@startup.com',
    plan: 'Professional', 
    status: 'Suspended',
    created: '2024-03-01',
    aiChecks: 45,
    lastLogin: '2024-03-05'
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david@corporation.com',
    plan: 'Enterprise',
    status: 'Active', 
    created: '2023-12-10',
    aiChecks: 2100,
    lastLogin: '2024-03-10'
  }
]

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check admin role
    if (session.role !== 'admin') {
      return NextResponse.json(
        { error: 'Forbidden - Admin access required' },
        { status: 403 }
      )
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''

    // Filter users
    let filteredUsers = mockUsers

    if (search) {
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (status) {
      filteredUsers = filteredUsers.filter(user => 
        user.status.toLowerCase() === status.toLowerCase()
      )
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return NextResponse.json({
      users: paginatedUsers,
      pagination: {
        page,
        limit,
        total: filteredUsers.length,
        totalPages: Math.ceil(filteredUsers.length / limit)
      }
    })

  } catch (error) {
    console.error('Users API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}