import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const protectedPaths = ['/dashboard', '/admin']
  const currentPath = request.nextUrl.pathname
  const isProtectedPath = protectedPaths.some(path => currentPath.startsWith(path))

  if (isProtectedPath) {
    const cookie = request.cookies.get('session')?.value
    
    if (!cookie) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const session = await decrypt(cookie)

    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Check admin routes
    if (currentPath.startsWith('/admin') && session.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|register|$).*)'],
}