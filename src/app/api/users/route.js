import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
connectToDB();

export async function POST(request) {
  const { name, email, password, about, profileUrl } = await request.json();

  const uuser = new User({
    name,
    email,
    password,
    about,
    profileUrl,
  });
  try {
    await uuser.save();
    console.log("User is Created");
    return NextResponse.json(
      {
        message: "user is created",
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in user creation", 501, false);
  }
}
