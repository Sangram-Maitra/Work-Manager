import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged Out", success: true });
  response.cookies.set("auth-cookie", "", {
    expiresIn: new Date(0),
  });

  return response;
}
