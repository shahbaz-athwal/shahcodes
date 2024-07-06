import { NextRequest, NextResponse } from 'next/server'
// run only on homepage
export const config = {
  matcher: '/ip',
}

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req

  //@ts-ignore
  const country = geo.country || 'US'
  //@ts-ignore

  const city = geo.city || 'San Francisco'
  //@ts-ignore

  const region = geo.region || 'CA'

  url.searchParams.set('country', country)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)
 
  return NextResponse.rewrite(url)
}