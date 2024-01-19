import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { connectToDB } from "./app/helper/db";
// connectToDB();

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   console.log("Heee");
  const authToken = request.cookies.get("auth-cookie")?.value;
  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }
  if (loggedInUserNotAccessPath) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // accessing secure route
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/api/:path*",
    "/show-task",
    "/profile/:path*",
  ],
};
