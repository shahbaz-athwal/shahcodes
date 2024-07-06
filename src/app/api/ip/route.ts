// route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')
  console.log(ip)
  return NextResponse.json({ ip })
}