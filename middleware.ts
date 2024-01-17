import { NextRequest, NextResponse } from "next/server";

export const config = { matcher: ['/dashboard', '/configurator'] }

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', "*")
    response.headers.set('Access-Control-Allow-Credentials', "true")
    response.headers.set('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS")

    return response;
}