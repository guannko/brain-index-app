import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, company } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Hash the password
    // 2. Save to database
    // 3. Send verification email
    // 4. Create initial subscription

    // Mock registration success
    return NextResponse.json({
      success: true,
      message: 'Registration successful. Please login.',
      user: {
        name,
        email,
        company,
      },
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
