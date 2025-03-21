import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

 export async function middleware(request: NextRequest) {
    const response= NextResponse.next();
    const themePreferences=request.cookies.get("theme");
    if(!themePreferences){
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "custom-value");
    return response;
    // return NextResponse.redirect(new URL("/", request.url))


    // if(request.nextUrl.pathname==="/profile"){
    //     return NextResponse.redirect(new URL("/hello", request.url))
    // }
 }

//  export const config={
//     matcher: '/profile',
//  }