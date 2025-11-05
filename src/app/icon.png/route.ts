import { NextResponse } from 'next/server';

export const runtime = 'edge';

export function GET(request: Request) {
  const url = new URL('/assets/profile.png', request.url);
  return NextResponse.redirect(url, { status: 308 });
}
