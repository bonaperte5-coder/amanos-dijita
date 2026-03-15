export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function GET() {
  const sliders = await prisma.slider.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(sliders)
}

export async function POST(request: NextRequest) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const slider = await prisma.slider.create({ data: body })
  return NextResponse.json(slider)
}
