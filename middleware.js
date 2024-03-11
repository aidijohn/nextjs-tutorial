import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*'],
};



///////////////////////////////////
//localhost:3000/about

// export function middleware() {
//   //console.log('hello world');   //console log

//   //json response
//   return Response.json({
//     msg:'hello there'
//   });
// }

// export const config1 = {
//   matcher: ['/about'],
// };