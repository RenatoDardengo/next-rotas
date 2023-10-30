import { NextRequest, NextResponse } from "next/server";
export default function middleware(request: NextRequest){

    const token = request.cookies.get('auth_token')?.value;
    const signInUrl = new URL('/admin', request.url)
    const homeAdmin = new URL ('/admin/home',request.url);

    if (!token) {
        if (request.nextUrl.pathname === "/admin") {
            return NextResponse.next();
        }

        return NextResponse.redirect(signInUrl);
    }

    if(request.nextUrl.pathname ==="/admin"){
        return NextResponse.redirect(homeAdmin);
    }


}

//aqui será definido as rotas que chamarão o midleware antes de renderizarem
export const config = {
    matcher: ['/admin', '/admin/:path*']
}