export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'

const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()

    // Rate limiting
    const attempts = loginAttempts.get(ip)
    if (attempts && attempts.count >= 3 && now - attempts.lastAttempt < 15 * 60 * 1000) {
      return NextResponse.json({ error: 'Çok fazla deneme. 15 dakika bekleyin.' }, { status: 429 })
    }

    const { email, password } = await request.json()

    const admin = await prisma.admin.findUnique({ where: { email } })
    if (!admin) {
      loginAttempts.set(ip, { count: (attempts?.count || 0) + 1, lastAttempt: now })
      return NextResponse.json({ error: 'Geçersiz e-posta veya şifre' }, { status: 401 })
    }

    const valid = await bcrypt.compare(password, admin.password)
    if (!valid) {
      loginAttempts.set(ip, { count: (attempts?.count || 0) + 1, lastAttempt: now })
      return NextResponse.json({ error: 'Geçersiz e-posta veya şifre' }, { status: 401 })
    }

    loginAttempts.delete(ip)
    const token = signToken({ adminId: admin.id, email: admin.email })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
