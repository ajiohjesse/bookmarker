import { NextResponse } from 'next/server'
import * as jose from 'jose'
import client from './apollo.config'
import { GET_CURRENT_USER } from './graphql/queries/userQueries'

export default function middleware(request) {
  return NextResponse.redirect(new URL('/about-2', request.url))

  // const token = req.cookies.get('user')
  // const url = req.url

  // let isLoggedIn

  // try {
  //   await jose
  //     .jwtVerify(token.value, new TextEncoder().encode(process.env.JWT))
  //     .then(() => {
  //       isLoggedIn = true
  //     })
  // } catch (error) {
  //   isLoggedIn = false
  // }

  // /**
  //  * Redirect user to login page
  //  * if not logged in.
  //  */
  // if (!isLoggedIn && url.includes('/dashboard')) {
  //   return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
  // }

  // /**
  //  * Dont login if user is already
  //  * logged in.
  //  */

  // if (isLoggedIn && url.includes('/login')) {
  //   return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  // }
}

export const config = {
  matcher: '/about/:path*',
}
