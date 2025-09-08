import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.JWT_SECRET || 'brain-index-secret-key-change-in-production'
const key = new TextEncoder().encode(secretKey)

export interface UserPayload {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  plan: 'free' | 'starter' | 'professional' | 'enterprise'
}

export async function encrypt(payload: UserPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function decrypt(input: string): Promise<UserPayload | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    })
    return payload as UserPayload
  } catch (error) {
    return null
  }
}

export async function login(email: string, password: string) {
  // TODO: Verify credentials against database
  // This is a mock implementation
  const user: UserPayload = {
    id: '1',
    email,
    name: email.split('@')[0],
    role: email === 'admin@brainindex.ai' ? 'admin' : 'user',
    plan: 'professional',
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await encrypt(user)

  cookies().set('session', session, { expires, httpOnly: true })
  return user
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (!session) return

  const parsed = await decrypt(session)
  if (!parsed) return

  parsed.exp = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.exp,
  })
  return res
}
