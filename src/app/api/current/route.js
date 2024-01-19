import { connectToDB } from "@/app/helper/db";
import { User } from "@/app/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
connectToDB();

export async function GET(request) {
  const authToken = request.cookies.get("auth-cookie")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  //   console.log(data);
  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user);
}
