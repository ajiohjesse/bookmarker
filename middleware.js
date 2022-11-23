import { NextResponse } from 'next/server'
import * as jose from 'jose'

export async function middleware(request) {
  const token = request.cookies.get('user')
  const url = request.url

  let isLoggedIn

  try {
    await jose
      .jwtVerify(token.value, new TextEncoder().encode(process.env.JWT))
      .then(() => {
        isLoggedIn = true
      })
  } catch (error) {
    isLoggedIn = false
  }

  /**
   * Redirect user to login page
   * if not logged in.
   */
  if (!isLoggedIn && url.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
  }

  /**
   * Dont login if user is already
   * logged in.
   */

  if (isLoggedIn && url.includes('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }
}
