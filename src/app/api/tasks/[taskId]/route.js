import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { connectToDB } from "@/app/helper/db";
connectToDB();

export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const tasks = await Task.findById(taskId);
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting the data!!!", 404, false);
  }
}

export async function PUT(request, { params }) {
  const { taskId } = params;
  try {
    const { title, content, status } = await request.json();
    let task = await Task.findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    const UpdatedTask = await task.save();
    return NextResponse.json(UpdatedTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in Updateing task!!!", 500, false);
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({ _id: taskId });
    return getResponseMessage("Task Is Deleted", 201, true);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in Deleting task!!!", 500, false);
  }
}
