import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check for the site-access cookie
  const hasAccess = request.cookies.has('site-access')
  
  // Paths to exclude from protection (static files, images, api, etc.)
  const isPublicPath = 
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.startsWith('/images') ||
    request.nextUrl.pathname.startsWith('/logos') ||
    request.nextUrl.pathname.startsWith('/api/auth') || // Allow auth endpoint
    request.nextUrl.pathname.includes('.') || // Files with extensions (favicon, etc.)
    request.nextUrl.pathname === '/coming-soon'

  if (isPublicPath) {
    // If user has access and tries to go to coming-soon, redirect to home
    if (hasAccess && request.nextUrl.pathname === '/coming-soon') {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  // If no access cookie, redirect to coming-soon
  if (!hasAccess) {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  // Allow access if cookie exists
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
