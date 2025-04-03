import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Agregar headers de seguridad
  const headers = new Headers(request.headers);
  
  // Prevenir XSS
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Prevenir clickjacking
  headers.set('X-Frame-Options', 'DENY');
  
  // Prevenir MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // Configurar CSP
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;"
  );

  return NextResponse.next({
    request: {
      headers,
    },
  });
}
