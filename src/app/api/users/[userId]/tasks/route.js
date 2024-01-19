import { connectToDB } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/task";
import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
connectToDB();

export async function GET(request, { params }) {
  const { userId } = params;
  console.log("halfaslk");
  try {
    const tasks = await Task.find({ userId: userId });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in Finding task", 500, false);
  }
}
