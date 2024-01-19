import { connectToDB } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connectToDB();

// Get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting the data!!!", 404, false);
  }
}

// create all the tasks
export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    const authToken = request.cookies.get("auth-cookie")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    //   console.log(data);
    // const user = await User.findById(data._id).select("-password");
    // console.log(data);
    const task = new Task({
      title,
      content,
      userId: data._id,
    });

    const createdTask = await task.save();
    return NextResponse.json(createdTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in creating the Data!!!", 500, false);
  }
}
