import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

// Mock statistics data
const mockStats = {
  admin: {
    totalUsers: 2845,
    revenue: 45231,
    aiChecks: 12468,
    activePlans: 892,
    trends: {
      users: { current: 2845, previous: 2540, growth: 12 },
      revenue: { current: 45231, previous: 36789, growth: 23 },
      aiChecks: { current: 12468, previous: 11534, growth: 8 },
      activePlans: { current: 892, previous: 910, growth: -2 }
    }
  },
  user: {
    visibilityScore: 68,
    analysesThisMonth: 47,
    maxAnalyses: 200,
    competitorsTracked: 5,
    maxCompetitors: 10,
    reportsGenerated: 23,
    planUsage: 23.5,
    checksRemaining: 153,
    aiScores: {
      chatgpt: 75,
      claude: 62,
      gemini: 58,
      perplexity: 45
    }
  }
}

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

    // Return stats based on user role
    if (session.role === 'admin') {
      return NextResponse.json({
        success: true,
        stats: mockStats.admin
      })
    } else {
      // For regular users, return personalized stats
      const userStats = {
        ...mockStats.user,
        // Customize based on user's plan
        maxAnalyses: session.plan === 'enterprise' ? 1000 : 
                    session.plan === 'professional' ? 500 : 
                    session.plan === 'starter' ? 100 : 50,
        maxCompetitors: session.plan === 'enterprise' ? 50 : 
                       session.plan === 'professional' ? 20 : 
                       session.plan === 'starter' ? 10 : 5
      }

      return NextResponse.json({
        success: true,
        stats: userStats
      })
    }

  } catch (error) {
    console.error('Stats API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}