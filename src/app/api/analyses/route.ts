import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

// Mock analyses data
const mockAnalyses = [
  {
    id: '1',
    title: 'Brand Analysis - Main Website',
    date: '2024-03-15',
    status: 'completed',
    scores: { 
      chatgpt: 82, 
      claude: 65, 
      gemini: 43, 
      perplexity: 78 
    },
    overall: 67,
    userId: '1',
    url: 'https://example.com',
    type: 'brand'
  },
  {
    id: '2', 
    title: 'Product Page Analysis',
    date: '2024-03-12',
    status: 'completed',
    scores: { 
      chatgpt: 71, 
      claude: 68, 
      gemini: 76, 
      perplexity: 65 
    },
    overall: 70,
    userId: '1',
    url: 'https://example.com/product',
    type: 'product'
  },
  {
    id: '3',
    title: 'Competitor Comparison',
    date: '2024-03-10',
    status: 'completed',
    competitors: 3,
    rank: 2,
    userId: '1',
    type: 'competitor'
  },
  {
    id: '4',
    title: 'SEO Content Analysis',
    date: '2024-03-08',
    status: 'processing',
    scores: { 
      chatgpt: 55, 
      claude: 48, 
      gemini: 62, 
      perplexity: 51 
    },
    overall: 54,
    userId: '2',
    url: 'https://company.com/blog',
    type: 'content'
  },
  {
    id: '5',
    title: 'Enterprise Brand Audit',
    date: '2024-03-05',
    status: 'completed',
    scores: { 
      chatgpt: 89, 
      claude: 92, 
      gemini: 87, 
      perplexity: 91 
    },
    overall: 90,
    userId: '3',
    url: 'https://enterprise.com',
    type: 'brand'
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

    // Parse query parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')
    const type = searchParams.get('type')

    // Filter analyses
    let filteredAnalyses = mockAnalyses

    // For non-admin users, only show their own analyses
    if (session.role !== 'admin') {
      filteredAnalyses = filteredAnalyses.filter(analysis => 
        analysis.userId === session.id
      )
    } else if (userId) {
      // Admin can filter by specific user
      filteredAnalyses = filteredAnalyses.filter(analysis => 
        analysis.userId === userId
      )
    }

    if (status) {
      filteredAnalyses = filteredAnalyses.filter(analysis => 
        analysis.status === status
      )
    }

    if (type) {
      filteredAnalyses = filteredAnalyses.filter(analysis => 
        analysis.type === type
      )
    }

    // Sort by date (newest first)
    filteredAnalyses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedAnalyses = filteredAnalyses.slice(startIndex, endIndex)

    return NextResponse.json({
      analyses: paginatedAnalyses,
      pagination: {
        page,
        limit,
        total: filteredAnalyses.length,
        totalPages: Math.ceil(filteredAnalyses.length / limit)
      }
    })

  } catch (error) {
    console.error('Analyses API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { url, type = 'brand', title } = await request.json()

    // Validate input
    if (!url || !title) {
      return NextResponse.json(
        { error: 'URL and title are required' },
        { status: 400 }
      )
    }

    // Create new analysis
    const newAnalysis = {
      id: Date.now().toString(),
      title,
      date: new Date().toISOString().split('T')[0],
      status: 'processing',
      userId: session.id,
      url,
      type,
      scores: {
        chatgpt: 0,
        claude: 0, 
        gemini: 0,
        perplexity: 0
      },
      overall: 0
    }

    // In a real app, this would start the analysis process
    // For now, we'll just return the created analysis
    return NextResponse.json({
      success: true,
      analysis: newAnalysis
    })

  } catch (error) {
    console.error('Create analysis error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}